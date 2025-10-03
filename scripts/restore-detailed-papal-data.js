const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Detailed biographical data for key popes
const detailedPopeData = {
  // Saint Peter
  1: {
    biography: "Saint Peter, originally named Simon, was one of the twelve apostles of Jesus Christ. He was a fisherman from Bethsaida and became the first Pope and Bishop of Rome. Jesus gave him the name 'Peter' (meaning 'rock') and said 'Upon this rock I will build my church.' Peter was crucified upside down in Rome during the persecution under Emperor Nero.",
    historicalContext: "Peter's papacy is foundational to the Catholic Church. He was personally chosen by Jesus Christ and is considered the first Pope. His martyrdom in Rome established the tradition of papal succession. Historical evidence comes from the New Testament, early Church fathers, and archaeological evidence of his burial site under St. Peter's Basilica.",
    references: JSON.stringify([
      {
        title: "Matthew 16:18-19 - Jesus' Promise to Peter",
        url: "https://www.biblegateway.com/passage/?search=Matthew+16%3A18-19&version=NIV",
        type: "Scripture"
      },
      {
        title: "Vatican Official Biography of St. Peter",
        url: "https://www.vatican.va/content/vatican/en/holy-father/pietro.html",
        type: "Official"
      },
      {
        title: "Catholic Encyclopedia - St. Peter",
        url: "https://www.newadvent.org/cathen/11744a.htm",
        type: "Historical"
      }
    ])
  },

  // Pope Innocent III
  176: {
    biography: "Pope Innocent III was one of the most powerful and influential popes in Church history. Born Lotario de' Conti di Segni in Anagni, he was elected pope at age 37. He reasserted papal authority over secular rulers, called the Fourth Lateran Council (1215), and launched the Fourth Crusade. He was known for his political acumen and theological scholarship.",
    historicalContext: "Innocent III's papacy marked the height of medieval papal power. He successfully asserted papal supremacy over European monarchs, including King John of England and Emperor Otto IV. The Fourth Lateran Council he convened defined key Catholic doctrines including transubstantiation and established important reforms. His political influence extended across all of Christian Europe.",
    references: JSON.stringify([
      {
        title: "Vatican Official Biography - Innocent III",
        url: "https://www.vatican.va/content/vatican/en/holy-father/innocenzo-iii.html",
        type: "Official"
      },
      {
        title: "Fourth Lateran Council Documents",
        url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html",
        type: "Official"
      },
      {
        title: "Britannica - Pope Innocent III",
        url: "https://www.britannica.com/biography/Innocent-III-pope",
        type: "Reference"
      }
    ])
  },

  // Pope Francis
  266: {
    biography: "Pope Francis, born Jorge Mario Bergoglio in Buenos Aires, Argentina, is the first pope from the Americas and the first Jesuit pope. He was Archbishop of Buenos Aires before his election in 2013. Known for his humility, concern for the poor, and environmental advocacy, he has emphasized mercy, dialogue, and Church reform throughout his papacy.",
    historicalContext: "Pope Francis represents a significant shift in papal direction, emphasizing humility, social justice, and environmental stewardship. His election as the first pope from the Americas marked a historic moment for the global Church. He has been particularly vocal about climate change, economic inequality, and the need for Church reform and transparency.",
    references: JSON.stringify([
      {
        title: "Vatican Official Biography",
        url: "https://www.vatican.va/content/francesco/en/biography/documents/papa-francesco-biografia-bergoglio.html",
        type: "Official"
      },
      {
        title: "Encyclical Laudato Si'",
        url: "https://www.vatican.va/content/francesco/en/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html",
        type: "Document"
      },
      {
        title: "Britannica Biography",
        url: "https://www.britannica.com/biography/Francis-I-pope",
        type: "Reference"
      }
    ])
  },

  // Pope Leo XIV (Current)
  267: {
    biography: "Pope Leo XIV, born Robert Francis Prevost in Chicago, is the first American pope in the history of the Catholic Church. Formerly the Prefect of the Dicastery for Bishops, he was elected in 2025 following the death of Pope Francis. Known for his pastoral approach and commitment to Church renewal, he represents a new chapter in papal history.",
    historicalContext: "Pope Leo XIV's election as the first American pope marks a historic milestone for the Catholic Church. His background as a missionary in Peru and his role in the Vatican's bishop selection process prepared him for the papacy. His election reflects the Church's continued globalization and the growing influence of the American Catholic community.",
    references: JSON.stringify([
      {
        title: "Vatican Official Biography",
        url: "https://www.vatican.va/content/vatican/en/holy-father/leone-xiv.html",
        type: "Official"
      },
      {
        title: "Vatican List of Popes",
        url: "https://www.vatican.va/content/vatican/en/holy-father.html",
        type: "Official"
      }
    ])
  },

  // Pope Leo I (the Great)
  45: {
    biography: "Pope Leo I, known as 'the Great,' was one of the most important early popes. He successfully defended Rome against Attila the Hun in 452 and strengthened papal authority. He wrote extensively on theology and is known for his Tome, which helped resolve the Christological controversies at the Council of Chalcedon (451).",
    historicalContext: "Leo I's papacy was crucial in establishing papal primacy and theological orthodoxy. His meeting with Attila the Hun, where he convinced the barbarian leader to spare Rome, became legendary. His theological writings, particularly his Tome on the two natures of Christ, were instrumental in resolving the Monophysite controversy.",
    references: JSON.stringify([
      {
        title: "Vatican Official Biography - Leo I",
        url: "https://www.vatican.va/content/vatican/en/holy-father/leone-i.html",
        type: "Official"
      },
      {
        title: "Leo's Tome - Council of Chalcedon",
        url: "https://www.newadvent.org/fathers/3604.htm",
        type: "Historical"
      }
    ])
  },

  // Pope Gregory I (the Great)
  64: {
    biography: "Pope Gregory I, known as 'the Great,' was one of the most influential popes in Church history. A former Roman prefect, he became a monk and later pope. He reformed the liturgy, established the Gregorian chant, and sent missionaries to England. He is considered one of the four great Latin Doctors of the Church.",
    historicalContext: "Gregory I's papacy marked the transition from ancient to medieval Christianity. His reforms in liturgy and music (Gregorian chant) had lasting influence. His missionary work, particularly sending Augustine to England, expanded Christianity's reach. His writings on pastoral care and theology became foundational texts for the medieval Church.",
    references: JSON.stringify([
      {
        title: "Vatican Official Biography - Gregory I",
        url: "https://www.vatican.va/content/vatican/en/holy-father/gregorio-i.html",
        type: "Official"
      },
      {
        title: "Gregory's Pastoral Care",
        url: "https://www.newadvent.org/fathers/3601.htm",
        type: "Historical"
      }
    ])
  }
}

async function restoreDetailedData() {
  console.log('🔄 Restoring detailed biographical data for key popes...')

  try {
    for (const [papacyNumber, data] of Object.entries(detailedPopeData)) {
      const pope = await prisma.pope.findFirst({
        where: { papacyNumber: parseInt(papacyNumber) }
      })

      if (pope) {
        await prisma.pope.update({
          where: { id: pope.id },
          data: {
            biography: data.biography,
            historicalContext: data.historicalContext,
            references: data.references
          }
        })
        console.log(`✅ Updated Pope ${pope.regnalName} (${papacyNumber}) with detailed information`)
      } else {
        console.log(`⚠️  Pope ${papacyNumber} not found in database`)
      }
    }

    console.log('🎉 Successfully restored detailed biographical data!')
    console.log('📊 Summary:')
    console.log('   - Saint Peter: Foundation of papacy, martyrdom')
    console.log('   - Pope Leo I: Meeting with Attila, theological contributions')
    console.log('   - Pope Gregory I: Liturgical reforms, missionary work')
    console.log('   - Pope Innocent III: Height of papal power, Fourth Lateran Council')
    console.log('   - Pope Francis: First American pope, social justice focus')
    console.log('   - Pope Leo XIV: First American pope, current pontiff')

  } catch (error) {
    console.error('❌ Error restoring detailed data:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

restoreDetailedData()
  .catch((error) => {
    console.error('❌ Restoration failed:', error)
    process.exit(1)
  })
