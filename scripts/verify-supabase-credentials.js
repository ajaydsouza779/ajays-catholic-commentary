#!/usr/bin/env node

// Simple script to verify Supabase credentials
console.log('🔍 Supabase Credential Verification');
console.log('=====================================\n');

console.log('Please verify these details in your Supabase dashboard:');
console.log('1. Go to: https://supabase.com/dashboard');
console.log('2. Select your project');
console.log('3. Go to Settings → Database');
console.log('4. Check the connection details\n');

console.log('Current connection strings being used:');
console.log('=====================================');

const devUrl = "postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require";
const devTxUrl = "postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require";

console.log('Dev Database (Session Pooler):');
console.log(devUrl);
console.log('\nDev Database (Transactional Pooler):');
console.log(devTxUrl);

console.log('\n🔧 Troubleshooting Steps:');
console.log('========================');
console.log('1. Check if password is correct in Supabase dashboard');
console.log('2. Verify database is accessible (not paused)');
console.log('3. Check if IP restrictions are blocking GitHub Actions');
console.log('4. Try regenerating database password in Supabase');
console.log('5. Update GitHub secrets with correct credentials');

console.log('\n📋 GitHub Secrets to Update:');
console.log('============================');
console.log('DEV_DATABASE_URL: [Session Pooler URL]');
console.log('DEV_DATABASE_URL_TX: [Transactional Pooler URL]');
console.log('PROD_DATABASE_URL_RO: [Production Read-Only URL]');
console.log('PROD_DATABASE_URL: [Production Write URL]');
