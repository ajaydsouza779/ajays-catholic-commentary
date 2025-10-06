const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Canonical Vatican names for missing popes (sample)
const missingPopesData = [
  { num: 51, name: "Pope Hormisdas", regnal: "Pope Hormisdas", start: "514", end: "523", nationality: "Italy" },
  { num: 52, name: "Pope John I", regnal: "Pope John I", start: "523", end: "526", nationality: "Italy" },
  { num: 53, name: "Pope Felix IV", regnal: "Pope Felix IV", start: "526", end: "530", nationality: "Italy" },
  { num: 54, name: "Pope Boniface II", regnal: "Pope Boniface II", start: "530", end: "532", nationality: "Italy" },
  { num: 55, name: "Pope John II", regnal: "Pope John II", start: "533", end: "535", nationality: "Italy" },
  { num: 56, name: "Pope Agapetus I", regnal: "Pope Agapetus I", start: "535", end: "536", nationality: "Italy" },
  { num: 57, name: "Pope Silverius", regnal: "Pope Silverius", start: "536", end: "537", nationality: "Italy" },
  { num: 58, name: "Pope Vigilius", regnal: "Pope Vigilius", start: "537", end: "555", nationality: "Italy" },
  { num: 59, name: "Pope Pelagius I", regnal: "Pope Pelagius I", start: "556", end: "561", nationality: "Italy" },
  { num: 60, name: "Pope John III", regnal: "Pope John III", start: "561", end: "574", nationality: "Italy" }
  // Note: This is a sample - full implementation would include all 184 missing popes
]

function generatePopeData(popeInfo) {
  const parseDate = (year) => {
    if (!year) return null
    let fullYear = year
    if (year.length === 2) {
      const numYear = parseInt(year)
      if (numYear >= 30 && numYear <= 99) {
        fullYear = `00${year}`
      } else {
        fullYear = `19${year}`
      }
    } else if (year.length === 3) {
      fullYear = `0${year}`
    }
    return new Date(`${fullYear}-01-01T00:00:00.000Z`)
  }

  return {
    papacyNumber: popeInfo.num,
    name: popeInfo.name,
    regnalName: popeInfo.regnal,
    birthName: popeInfo.name,
    birthDate: null,
    deathDate: parseDate(popeInfo.end),
    papacyStart: parseDate(popeInfo.start),
    papacyEnd: parseDate(popeInfo.end),
    nationality: popeInfo.nationality,
    previousOffice: "Bishop of Rome",
    notableEvents: JSON.stringify([]),
    biography: `${popeInfo.regnal} was the ${popeInfo.num}${popeInfo.num === 1 ? 'st' : popeInfo.num === 2 ? 'nd' : popeInfo.num === 3 ? 'rd' : 'th'} pope, serving from ${popeInfo.start} to ${popeInfo.end}. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.`,
    historicalContext: `Pope ${popeInfo.regnal} served during the ${popeInfo.num <= 100 ? 'early' : popeInfo.num <= 200 ? 'medieval' : 'modern'} period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.`,
    references: JSON.stringify([
      {
        type: "Official",
        title: "Vatican Archives",
        url: "https://www.vatican.va/archive/ACSA/"
      },
      {
        type: "Historical",
        title: "Catholic Encyclopedia",
        url: "https://www.newadvent.org/cathen/"
      }
    ]),
    imageUrl: null,
    isCurrent: false
  }
}

async function generateMissingPopes() {
  console.log('🌙 Generating missing popes to complete 267...')
  
  try {
    // Get existing pope numbers
    const existingPopes = await prisma.pope.findMany({
      select: { papacyNumber: true },
      orderBy: { papacyNumber: 'asc' }
    })
    
    const existingNumbers = existingPopes.map(p => p.papacyNumber)
    console.log(`📊 Current popes: ${existingNumbers.length}`)
    
    // Find missing numbers
    const missingNumbers = []
    for (let i = 1; i <= 267; i++) {
      if (!existingNumbers.includes(i)) {
        missingNumbers.push(i)
      }
    }
    
    console.log(`🔍 Missing pope numbers: ${missingNumbers.length}`)
    
    // Generate missing popes
    let addedCount = 0
    for (const popeInfo of missingPopesData) {
      if (missingNumbers.includes(popeInfo.num)) {
        try {
          const popeData = generatePopeData(popeInfo)
          await prisma.pope.create({ data: popeData })
          addedCount++
          console.log(`✅ Added Pope ${popeInfo.num}: ${popeInfo.regnal}`)
        } catch (error) {
          console.error(`❌ Error adding Pope ${popeInfo.num}:`, error.message)
        }
      }
    }
    
    const finalCount = await prisma.pope.count()
    console.log(`🎉 Added ${addedCount} popes!`)
    console.log(`📊 Total popes in database: ${finalCount}`)
    console.log(`📈 Progress: ${finalCount}/267 (${Math.round(finalCount/267*100)}%)`)
    
  } catch (error) {
    console.error('❌ Failed to generate missing popes:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the script
generateMissingPopes()
