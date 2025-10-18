const { PrismaClient } = require('@prisma/client')

// Use DATABASE_URL if set, else fallback to known dev DB URL
const devUrl = process.env.DATABASE_URL || 'postgresql://postgres.kdmmosvpfvtfewkndlcu:koj8WbgGk57ixDJd@aws-1-us-east-1.pooler.supabase.com:6543/postgres'

const prisma = new PrismaClient({
  datasources: { db: { url: devUrl } }
})

async function main() {
  try {
    console.log('🔍 Checking locks and long-running queries on development DB...')

    // Active locks summary
    const locks = await prisma.$queryRawUnsafe(`
      SELECT
        l.locktype,
        l.mode,
        l.granted,
        l.pid AS lock_pid,
        (now() - a.query_start)::text AS duration,
        left(a.query, 200) AS query
      FROM pg_locks AS l
      JOIN pg_stat_activity AS a ON l.pid = a.pid
      WHERE a.datname = current_database()
      ORDER BY l.granted DESC, duration DESC
      LIMIT 50;
    `)

    console.log('\n🔒 Locks/Activities (top 50):')
    if (!locks || locks.length === 0) {
      console.log('No locks or active statements found.')
    } else {
      for (const row of locks) {
        console.log(`- lock_pid=${row.lock_pid} granted=${row.granted} mode=${row.mode} duration=${row.duration} | ${row.query}`)
      }
    }

    // Long running queries (> 30s)
    const longRunning = await prisma.$queryRawUnsafe(`
      SELECT a.pid AS activity_pid, (now() - a.query_start)::text AS duration, a.state, left(a.query, 200) AS query
      FROM pg_stat_activity AS a
      WHERE a.state <> 'idle' AND a.query_start < now() - interval '30 seconds'
      ORDER BY duration DESC
      LIMIT 50;
    `)

    console.log('\n⏱️ Long-running queries (>30s):')
    if (!longRunning || longRunning.length === 0) {
      console.log('None found.')
    } else {
      for (const row of longRunning) {
        console.log(`- activity_pid=${row.activity_pid} duration=${row.duration} state=${row.state} | ${row.query}`)
      }
    }

    // Table bloat indicator (approx row counts)
    const counts = await prisma.$queryRawUnsafe(`
      SELECT relname AS table, reltuples::bigint AS approx_rows
      FROM pg_class c
      JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE relkind = 'r' AND n.nspname = 'public'
      ORDER BY approx_rows DESC
      LIMIT 20;
    `)
    console.log('\n📈 Top tables by approximate rows:')
    for (const row of counts) {
      console.log(`- ${row.table}: ~${row.approx_rows} rows`)
    }

    console.log('\n✅ DB diagnostics completed.')
  } catch (e) {
    console.error('❌ Error checking DB locks:', e)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

main()


