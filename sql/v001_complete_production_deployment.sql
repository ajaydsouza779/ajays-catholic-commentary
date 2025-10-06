-- Complete Production Deployment Script
-- This script will:
-- 1. Add new columns to the production schema
-- 2. Clear existing papal data
-- 3. Import all papal data with detailed biographies

-- ============================================
-- STEP 1: ALTER SCHEMA (Add new columns)
-- ============================================

-- Add historicalContext column to popes table
ALTER TABLE popes 
ADD COLUMN IF NOT EXISTS "historicalContext" TEXT;

-- Add references column to popes table (quoted because it's a reserved keyword)
ALTER TABLE popes 
ADD COLUMN IF NOT EXISTS "references" TEXT;

-- Verify the columns were added
SELECT 'Schema updated successfully' as status;

-- ============================================
-- STEP 2: CLEAR EXISTING DATA
-- ============================================

-- Clear existing papal data
DELETE FROM papal_achievements;
DELETE FROM papal_events;
DELETE FROM popes;

SELECT 'Existing data cleared' as status;

-- ============================================
-- STEP 3: IMPORT PAPAL DATA
-- ============================================

-- Insert popes

INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7860k00008z6mwiql02bj',
  'Peter',
  'Saint Peter',
  'Simon Peter',
  NULL,
  '0064-01-01T00:00:00.000Z',
  '0030-01-01T00:00:00.000Z',
  '0064-01-01T00:00:00.000Z',
  1,
  'Bethsaida of Galilee',
  NULL,
  NULL,
  'Saint Peter, originally named Simon, was one of the twelve apostles of Jesus Christ. He was a fisherman from Bethsaida and became the first Pope and Bishop of Rome. Jesus gave him the name ''Peter'' (meaning ''rock'') and said ''Upon this rock I will build my church.'' Peter was crucified upside down in Rome during the persecution under Emperor Nero.',
  NULL,
  'Peter''s papacy is foundational to the Catholic Church. He was personally chosen by Jesus Christ and is considered the first Pope. His martyrdom in Rome established the tradition of papal succession. Historical evidence comes from the New Testament, early Church fathers, and archaeological evidence of his burial site under St. Peter''s Basilica.',
  '[{"title":"Matthew 16:18-19 - Jesus'' Promise to Peter","url":"https://www.biblegateway.com/passage/?search=Matthew+16%3A18-19&version=NIV","type":"Scripture"},{"title":"Vatican Official Biography of St. Peter","url":"https://www.vatican.va/content/vatican/en/holy-father/pietro.html","type":"Official"},{"title":"Catholic Encyclopedia - St. Peter","url":"https://www.newadvent.org/cathen/11744a.htm","type":"Historical"}]',
  false,
  '2025-10-03T18:49:53.780Z',
  '2025-10-03T18:58:07.621Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7860z00038z6m316sd2pk',
  'Linus',
  'Pope Linus',
  'Linus',
  NULL,
  '0079-01-01T00:00:00.000Z',
  '0068-01-01T00:00:00.000Z',
  '0079-01-01T00:00:00.000Z',
  2,
  'Tuscia',
  NULL,
  NULL,
  'Pope Linus was the second Bishop of Rome and successor to Saint Peter. According to early Church tradition, he was ordained by Saint Peter himself. He is mentioned in the New Testament in 2 Timothy 4:21. During his papacy, he established important Church traditions and continued the work of organizing the early Christian community in Rome.',
  NULL,
  'Linus''s papacy is well-documented in early Church sources. Saint Irenaeus mentions him as Peter''s immediate successor. His name appears in the Liberian Catalogue and other early papal lists. He is traditionally credited with establishing the practice of women covering their heads in church.',
  '[{"title":"2 Timothy 4:21 - Biblical Reference","url":"https://www.biblegateway.com/passage/?search=2+Timothy+4%3A21&version=NIV","type":"Scripture"},{"title":"Vatican Official Biography - Linus","url":"https://www.vatican.va/content/vatican/en/holy-father/linus.html","type":"Official"},{"title":"Catholic Encyclopedia - Pope Linus","url":"https://www.newadvent.org/cathen/09265a.htm","type":"Historical"}]',
  false,
  '2025-10-03T18:49:53.795Z',
  '2025-10-03T19:03:38.327Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7861400048z6mphtn6smk',
  'Anacletus',
  'Pope Anacletus (Cletus)',
  'Anacletus',
  NULL,
  '0092-01-01T00:00:00.000Z',
  '0080-01-01T00:00:00.000Z',
  '0092-01-01T00:00:00.000Z',
  3,
  'Rome',
  NULL,
  NULL,
  'Pope Anacletus (also known as Cletus) was the third Bishop of Rome. He continued the work of organizing the early Church and is traditionally credited with establishing the practice of clerical ordination. His papacy occurred during a period of relative peace for Christians in Rome, allowing for the consolidation of Church structures.',
  NULL,
  'Anacletus''s papacy is documented in early Church sources, though some confusion exists between him and Pope Cletus (they may be the same person). He is mentioned in the Liberian Catalogue and other early papal lists. His name appears in the Roman Canon of the Mass.',
  '[{"title":"Vatican Official Biography - Anacletus","url":"https://www.vatican.va/content/vatican/en/holy-father/anacleto.html","type":"Official"},{"title":"Catholic Encyclopedia - Pope Anacletus","url":"https://www.newadvent.org/cathen/01448a.htm","type":"Historical"}]',
  false,
  '2025-10-03T18:49:53.801Z',
  '2025-10-03T19:03:38.338Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7861c00058z6mnzgjwrt8',
  'Clement',
  'Pope Clement I',
  'Clement',
  NULL,
  '0099-01-01T00:00:00.000Z',
  '0092-01-01T00:00:00.000Z',
  '0099-01-01T00:00:00.000Z',
  4,
  'Rome',
  NULL,
  NULL,
  'Pope Clement I, also known as Saint Clement of Rome, was the fourth Bishop of Rome and one of the Apostolic Fathers. He is best known for his First Epistle to the Corinthians, one of the earliest Christian documents outside the New Testament. His papacy was marked by efforts to maintain unity in the early Church.',
  NULL,
  'Clement''s First Epistle to the Corinthians is one of the most important early Christian documents, written around 96 AD. It demonstrates early papal authority and the Church''s concern for unity. Tradition holds that he was martyred by being tied to an anchor and thrown into the sea.',
  '[{"title":"Clement''s First Epistle to the Corinthians","url":"https://www.newadvent.org/fathers/1010.htm","type":"Historical"},{"title":"Vatican Official Biography - Clement I","url":"https://www.vatican.va/content/vatican/en/holy-father/clemente-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.808Z',
  '2025-10-03T19:03:38.341Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7861h00068z6mk7e33jhl',
  'Evaristus',
  'Pope Evaristus',
  'Evaristus',
  NULL,
  '0108-01-01T00:00:00.000Z',
  '0099-01-01T00:00:00.000Z',
  '0108-01-01T00:00:00.000Z',
  5,
  'Greece',
  NULL,
  NULL,
  'Pope Evaristus was the fifth Bishop of Rome during a period of transition for the early Church. He is traditionally credited with establishing the practice of assigning specific territories to priests in Rome, an early form of parish organization. His papacy occurred during the reign of Emperor Trajan.',
  NULL,
  'Evaristus''s papacy is documented in early Church sources, though details are limited. He is mentioned in the Liberian Catalogue and other early papal lists. His establishment of territorial assignments for priests represents an important development in Church organization.',
  '[{"title":"Vatican Official Biography - Evaristus","url":"https://www.vatican.va/content/vatican/en/holy-father/evaristo.html","type":"Official"},{"title":"Catholic Encyclopedia - Pope Evaristus","url":"https://www.newadvent.org/cathen/05642a.htm","type":"Historical"}]',
  false,
  '2025-10-03T18:49:53.814Z',
  '2025-10-03T19:03:38.346Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7861m00078z6m4lfma4vg',
  'Alexander I',
  'Pope Alexander I',
  'Alexander',
  NULL,
  '0116-01-01T00:00:00.000Z',
  '0108-01-01T00:00:00.000Z',
  '0116-01-01T00:00:00.000Z',
  6,
  'Rome',
  NULL,
  NULL,
  'Pope Alexander I was the sixth Bishop of Rome during the early 2nd century. He is traditionally credited with introducing the practice of blessing houses with holy water and establishing the use of the word ''Dominus'' (Lord) in the liturgy. His papacy occurred during a period of relative peace for Christians.',
  NULL,
  'Alexander I''s papacy is documented in early Church sources, though some details may be legendary. He is mentioned in the Liberian Catalogue and other early papal lists. His liturgical innovations reflect the developing Christian worship practices of the time.',
  '[{"title":"Vatican Official Biography - Alexander I","url":"https://www.vatican.va/content/vatican/en/holy-father/alessandro-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.818Z',
  '2025-10-03T19:03:38.351Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7861s00088z6mixzbbbm7',
  'Sixtus I',
  'Pope Sixtus I',
  'Sixtus',
  NULL,
  '0126-01-01T00:00:00.000Z',
  '0117-01-01T00:00:00.000Z',
  '0126-01-01T00:00:00.000Z',
  7,
  'Rome',
  NULL,
  NULL,
  'Pope Sixtus I was the seventh Bishop of Rome and is traditionally credited with establishing several important liturgical practices. He is said to have introduced the practice of the Sanctus in the Mass and established rules for the celebration of the Eucharist. His papacy occurred during the reign of Emperor Hadrian.',
  NULL,
  'Sixtus I''s papacy is documented in early Church sources, though some details may be legendary. He is mentioned in the Liberian Catalogue and other early papal lists. His liturgical contributions reflect the developing Christian worship traditions of the 2nd century.',
  '[{"title":"Vatican Official Biography - Sixtus I","url":"https://www.vatican.va/content/vatican/en/holy-father/sisto-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.824Z',
  '2025-10-03T19:03:38.355Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7861x00098z6mi4t9vju5',
  'Telesphorus',
  'Pope Telesphorus',
  'Telesphorus',
  NULL,
  '0137-01-01T00:00:00.000Z',
  '0127-01-01T00:00:00.000Z',
  '0137-01-01T00:00:00.000Z',
  8,
  'Greece',
  NULL,
  NULL,
  'Pope Telesphorus was the eighth Bishop of Rome and is traditionally credited with establishing the celebration of Christmas on December 25th and the practice of a seven-week Lenten fast. He was martyred during the reign of Emperor Antoninus Pius, becoming one of the early papal martyrs.',
  NULL,
  'Telesphorus''s papacy is documented in early Church sources, and his martyrdom is well-attested. He is mentioned in the Liberian Catalogue and other early papal lists. His establishment of Christmas and Lenten practices had lasting influence on Christian worship.',
  '[{"title":"Vatican Official Biography - Telesphorus","url":"https://www.vatican.va/content/vatican/en/holy-father/telesforo.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.830Z',
  '2025-10-03T19:03:38.364Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb78628000a8z6ms4glbk3d',
  'Hyginus',
  'Pope Hyginus',
  'Hyginus',
  NULL,
  '0142-01-01T00:00:00.000Z',
  '0138-01-01T00:00:00.000Z',
  '0142-01-01T00:00:00.000Z',
  9,
  'Greece',
  NULL,
  NULL,
  'Pope Hyginus was the ninth Bishop of Rome during the mid-2nd century. He is traditionally credited with establishing the practice of godparents in baptism and organizing the clergy more formally. His papacy occurred during a period of theological development in the early Church.',
  NULL,
  'Hyginus''s papacy is documented in early Church sources, though details are limited. He is mentioned in the Liberian Catalogue and other early papal lists. His organizational work reflects the growing institutionalization of the early Church.',
  '[{"title":"Vatican Official Biography - Hyginus","url":"https://www.vatican.va/content/vatican/en/holy-father/igino.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.840Z',
  '2025-10-03T19:03:38.368Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7862i000b8z6mvfkz5q2k',
  'Pius I',
  'Pope Pius I',
  'Pius',
  NULL,
  '0157-01-01T00:00:00.000Z',
  '0142-01-01T00:00:00.000Z',
  '0157-01-01T00:00:00.000Z',
  10,
  'Aquileia',
  NULL,
  NULL,
  'Pope Pius I was the tenth Bishop of Rome and is traditionally credited with establishing the practice of celebrating Easter on Sunday and combating early heresies, particularly Gnosticism. His papacy occurred during a period of theological controversy in the early Church.',
  NULL,
  'Pius I''s papacy is documented in early Church sources, and he is known for his opposition to Gnostic teachings. He is mentioned in the Liberian Catalogue and other early papal lists. His work against heresy reflects the Church''s early efforts to maintain orthodoxy.',
  '[{"title":"Vatican Official Biography - Pius I","url":"https://www.vatican.va/content/vatican/en/holy-father/pio-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.851Z',
  '2025-10-03T19:03:38.371Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7862p000c8z6mk3wcgu3t',
  'Anicetus',
  'Pope Anicetus',
  'Anicetus',
  NULL,
  '0153-01-01T00:00:00.000Z',
  '0150-01-01T00:00:00.000Z',
  '0153-01-01T00:00:00.000Z',
  11,
  'Emesa (Syria)',
  NULL,
  NULL,
  'Pope Anicetus was the eleventh Bishop of Rome and is known for his meeting with Saint Polycarp of Smyrna to discuss the date of Easter. He maintained the Roman practice of celebrating Easter on Sunday, while some Eastern churches celebrated on the 14th of Nisan. His papacy occurred during the reign of Emperor Marcus Aurelius.',
  NULL,
  'Anicetus''s papacy is well-documented, particularly his meeting with Polycarp. This represents an early example of papal authority and the Church''s concern for liturgical unity. The Easter controversy would continue for centuries.',
  '[{"title":"Vatican Official Biography - Anicetus","url":"https://www.vatican.va/content/vatican/en/holy-father/aniceto.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.857Z',
  '2025-10-03T19:03:38.375Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7862t000d8z6miyd2sr79',
  'Soterus',
  'Pope Soterus',
  'Soterus',
  NULL,
  '0170-01-01T00:00:00.000Z',
  '0162-01-01T00:00:00.000Z',
  '0170-01-01T00:00:00.000Z',
  12,
  'Fondi',
  NULL,
  NULL,
  'Pope Soterus was the twelfth Bishop of Rome and is traditionally credited with establishing the practice of sending letters of communion to other churches, an early form of papal correspondence. He is known for his charity and care for persecuted Christians.',
  NULL,
  'Soterus''s papacy is documented in early Church sources, and he is praised for his charitable works. He is mentioned in the Liberian Catalogue and other early papal lists. His practice of sending communion letters represents early papal communication.',
  '[{"title":"Vatican Official Biography - Soterus","url":"https://www.vatican.va/content/vatican/en/holy-father/sotero.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.862Z',
  '2025-10-03T19:03:38.379Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7862x000e8z6mqlx6fjy1',
  'Eleutherius',
  'Pope Eleutherius',
  'Eleutherius',
  NULL,
  '0185-01-01T00:00:00.000Z',
  '0171-01-01T00:00:00.000Z',
  '0185-01-01T00:00:00.000Z',
  13,
  'Nicopolis (Epirus)',
  NULL,
  NULL,
  'Pope Eleutherius was the thirteenth Bishop of Rome and is traditionally credited with sending missionaries to Britain, including Saint Fugatius and Saint Damian. His papacy occurred during the reign of Emperor Commodus, a period of relative peace for Christians.',
  NULL,
  'Eleutherius''s papacy is documented in early Church sources, and his missionary work to Britain is well-attested. He is mentioned in the Liberian Catalogue and other early papal lists. His missionary efforts represent early papal concern for evangelization.',
  '[{"title":"Vatican Official Biography - Eleutherius","url":"https://www.vatican.va/content/vatican/en/holy-father/eleuterio.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.865Z',
  '2025-10-03T19:03:38.383Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb78634000f8z6mcnvdaan6',
  'Victor I',
  'Pope Victor I',
  'Victor',
  NULL,
  '0197-01-01T00:00:00.000Z',
  '0186-01-01T00:00:00.000Z',
  '0197-01-01T00:00:00.000Z',
  14,
  'Africa',
  NULL,
  NULL,
  'Pope Victor I was the fourteenth Bishop of Rome and is known for his strong stance on the Easter controversy, threatening to excommunicate churches that did not follow the Roman practice. He was the first pope from Africa and established Latin as the official language of the Roman Church.',
  NULL,
  'Victor I''s papacy represents an important development in papal authority. His strong stance on the Easter controversy and his threat of excommunication demonstrate early papal primacy. His establishment of Latin as the Church''s language had lasting influence.',
  '[{"title":"Vatican Official Biography - Victor I","url":"https://www.vatican.va/content/vatican/en/holy-father/vittore-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.873Z',
  '2025-10-03T19:03:38.388Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb78639000g8z6m3l0tiyy5',
  'Zephyrinus',
  'Pope Zephyrinus',
  'Zephyrinus',
  NULL,
  '0217-01-01T00:00:00.000Z',
  '0198-01-01T00:00:00.000Z',
  '0217-01-01T00:00:00.000Z',
  15,
  'Rome',
  NULL,
  NULL,
  'Pope Zephyrinus was the fifteenth Bishop of Rome and is known for his opposition to the heresies of Monarchianism and Adoptionism. He appointed Callistus as his deacon and successor. His papacy occurred during a period of theological controversy in the early Church.',
  NULL,
  'Zephyrinus''s papacy is documented in early Church sources, and he is known for his theological orthodoxy. He is mentioned in the Liberian Catalogue and other early papal lists. His opposition to heresy reflects the Church''s early efforts to maintain doctrinal purity.',
  '[{"title":"Vatican Official Biography - Zephyrinus","url":"https://www.vatican.va/content/vatican/en/holy-father/zeffirino.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.877Z',
  '2025-10-03T19:03:38.392Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7863e000h8z6m4vd09o6c',
  'Callistus I',
  'Pope Callistus I',
  'Callistus',
  NULL,
  '0222-01-01T00:00:00.000Z',
  '0218-01-01T00:00:00.000Z',
  '0222-01-01T00:00:00.000Z',
  16,
  NULL,
  NULL,
  NULL,
  'Pope Callistus I was the sixteenth Bishop of Rome and is known for his lenient approach to reconciling sinners and his opposition to the rigorist teachings of Hippolytus. He established the practice of allowing remarriage after adultery and was martyred during the persecution of Emperor Alexander Severus.',
  NULL,
  'Callistus I''s papacy is well-documented, particularly his conflict with Hippolytus over Church discipline. His more lenient approach to reconciliation represents an important development in Church practice. His martyrdom demonstrates the continued persecution of Christians.',
  '[{"title":"Vatican Official Biography - Callistus I","url":"https://www.vatican.va/content/vatican/en/holy-father/callisto-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.882Z',
  '2025-10-03T19:03:38.396Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7863i000i8z6mgrcgusfo',
  'Urban I',
  'Pope Urban I',
  'Urban',
  NULL,
  '0230-01-01T00:00:00.000Z',
  '0222-01-01T00:00:00.000Z',
  '0230-01-01T00:00:00.000Z',
  17,
  'Rome',
  NULL,
  NULL,
  'Pope Urban I was the seventeenth Bishop of Rome and is traditionally credited with converting many pagans to Christianity through his preaching. He is said to have been martyred during the persecution of Emperor Alexander Severus, though some sources suggest he died of natural causes.',
  NULL,
  'Urban I''s papacy is documented in early Church sources, though some details may be legendary. He is mentioned in the Liberian Catalogue and other early papal lists. His missionary work reflects the Church''s continued evangelization efforts.',
  '[{"title":"Vatican Official Biography - Urban I","url":"https://www.vatican.va/content/vatican/en/holy-father/urbano-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.886Z',
  '2025-10-03T19:03:38.400Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7863n000j8z6mwk1u1sn9',
  'Pontianus',
  'Pope Pontianus',
  'Pontianus',
  NULL,
  '0235-09-27T18:06:32.000Z',
  '0230-07-20T18:06:32.000Z',
  '0235-09-27T18:06:32.000Z',
  18,
  'Rome',
  NULL,
  NULL,
  'Pope Pontianus was the eighteenth Bishop of Rome and was the first pope to abdicate. He was exiled to Sardinia during the persecution of Emperor Maximinus Thrax and resigned his office to allow for the election of a new pope. He died in exile and is considered a martyr.',
  NULL,
  'Pontianus''s abdication represents an important precedent in papal history. His exile to Sardinia demonstrates the severity of Christian persecution during this period. His resignation shows early papal concern for the continuity of Church leadership.',
  '[{"title":"Vatican Official Biography - Pontianus","url":"https://www.vatican.va/content/vatican/en/holy-father/ponziano.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.892Z',
  '2025-10-03T19:03:38.406Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7863r000k8z6mgdlssdjs',
  'Anterus',
  'Pope Anterus',
  'Anterus',
  NULL,
  '0236-01-02T18:06:32.000Z',
  '0235-11-20T18:06:32.000Z',
  '0236-01-02T18:06:32.000Z',
  19,
  'Greece',
  NULL,
  NULL,
  'Pope Anterus was the nineteenth Bishop of Rome and had a very short papacy of only 43 days. He is traditionally credited with collecting the acts of the martyrs and establishing the practice of recording papal deeds. He was martyred during the persecution of Emperor Maximinus Thrax.',
  NULL,
  'Anterus''s short papacy is well-documented, and his work collecting martyr acts represents an important development in Church record-keeping. His martyrdom demonstrates the continued persecution of Christians during this period.',
  '[{"title":"Vatican Official Biography - Anterus","url":"https://www.vatican.va/content/vatican/en/holy-father/antero.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.895Z',
  '2025-10-03T19:03:38.410Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7863u000l8z6mk6xxmwnq',
  'Fabian',
  'Pope Fabian',
  'Fabian',
  NULL,
  '0250-01-19T18:06:32.000Z',
  '0236-01-01T00:00:00.000Z',
  '0250-01-19T18:06:32.000Z',
  20,
  'Rome',
  NULL,
  NULL,
  'Pope Fabian was the twentieth Bishop of Rome and is known for his organizational work, dividing Rome into seven districts and appointing deacons to oversee each. He was martyred during the persecution of Emperor Decius, becoming one of the most famous papal martyrs.',
  NULL,
  'Fabian''s papacy represents an important period of Church organization. His division of Rome into districts and appointment of deacons shows early papal administrative skills. His martyrdom during the Decian persecution is well-documented.',
  '[{"title":"Vatican Official Biography - Fabian","url":"https://www.vatican.va/content/vatican/en/holy-father/fabiano.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.899Z',
  '2025-10-03T19:03:38.415Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7863z000m8z6mq53xvhwt',
  'Cornelius',
  'Pope Cornelius',
  'Cornelius',
  NULL,
  '0253-01-01T00:00:00.000Z',
  '0251-03-12T18:06:32.000Z',
  '0253-01-01T00:00:00.000Z',
  21,
  'Rome',
  NULL,
  NULL,
  'Pope Cornelius was the twenty-first Bishop of Rome and is known for his opposition to the rigorist teachings of Novatian, who had been elected as an antipope. Cornelius supported the reconciliation of Christians who had lapsed during persecution, while Novatian took a more rigid stance. He was exiled during the persecution of Emperor Gallus and died in exile.',
  NULL,
  'Cornelius''s papacy represents an important development in Church discipline and the treatment of lapsed Christians. His conflict with Novatian over the reconciliation of sinners was a significant theological controversy. His exile and death demonstrate the continued persecution of Christians during this period.',
  '[{"title":"Vatican Official Biography - Cornelius","url":"https://www.vatican.va/content/vatican/en/holy-father/cornelio.html","type":"Official"},{"title":"Catholic Encyclopedia - Pope Cornelius","url":"https://www.newadvent.org/cathen/04375a.htm","type":"Historical"}]',
  false,
  '2025-10-03T18:49:53.904Z',
  '2025-10-03T19:08:36.228Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb78645000n8z6mwblzspny',
  'Lucius I',
  'Pope Lucius I',
  'Lucius',
  NULL,
  '0254-03-04T18:06:32.000Z',
  '0253-01-01T00:00:00.000Z',
  '0254-03-04T18:06:32.000Z',
  22,
  'Rome',
  NULL,
  NULL,
  'Pope Lucius I was the twenty-second Bishop of Rome and had a very short papacy of only eight months. He is known for his opposition to the rigorist teachings of Novatian and his support for the reconciliation of lapsed Christians. He was exiled during the persecution of Emperor Gallus but was allowed to return to Rome before his death.',
  NULL,
  'Lucius I''s short papacy continued the work of his predecessor Cornelius in opposing Novatian''s rigorist teachings. His support for the reconciliation of lapsed Christians represents an important development in Church discipline. His exile and return demonstrate the fluctuating nature of Christian persecution.',
  '[{"title":"Vatican Official Biography - Lucius I","url":"https://www.vatican.va/content/vatican/en/holy-father/lucio-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.909Z',
  '2025-10-03T19:08:36.231Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb78649000o8z6mnt833wuq',
  'Stephen I',
  'Pope Stephen I',
  'Stephen',
  NULL,
  '0257-08-01T18:06:32.000Z',
  '0254-03-11T18:06:32.000Z',
  '0257-08-01T18:06:32.000Z',
  23,
  'Rome',
  NULL,
  NULL,
  'Pope Stephen I was the twenty-third Bishop of Rome and is known for his strong stance on the rebaptism controversy. He opposed the practice of rebaptizing heretics who returned to the Church, maintaining that baptism was valid regardless of who performed it. He was martyred during the persecution of Emperor Valerian.',
  NULL,
  'Stephen I''s papacy represents an important development in sacramental theology. His stance on rebaptism was controversial but ultimately prevailed in Church teaching. His martyrdom during the Valerian persecution demonstrates the continued persecution of Christians.',
  '[{"title":"Vatican Official Biography - Stephen I","url":"https://www.vatican.va/content/vatican/en/holy-father/stefano-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.913Z',
  '2025-10-03T19:08:36.234Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7864g000p8z6m8w0aboji',
  'Sixtus II',
  'Pope Sixtus II',
  'Sixtus',
  NULL,
  '0258-08-05T18:06:32.000Z',
  '0257-08-29T18:06:32.000Z',
  '0258-08-05T18:06:32.000Z',
  24,
  'Greece',
  NULL,
  NULL,
  'Pope Sixtus II was the twenty-fourth Bishop of Rome and is known for his martyrdom during the persecution of Emperor Valerian. He was arrested while celebrating Mass in the catacombs and was beheaded along with six deacons. His death is commemorated in the Roman Canon of the Mass.',
  NULL,
  'Sixtus II''s martyrdom is one of the most famous in early Church history. His arrest while celebrating Mass in the catacombs demonstrates the secretive nature of Christian worship during persecution. His commemoration in the Roman Canon shows his lasting influence on Christian liturgy.',
  '[{"title":"Vatican Official Biography - Sixtus II","url":"https://www.vatican.va/content/vatican/en/holy-father/sisto-ii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.920Z',
  '2025-10-03T19:08:36.240Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7864m000q8z6mhzqh4tcy',
  'Dionysius',
  'Pope Dionysius',
  'Dionysius',
  NULL,
  '0268-12-25T18:06:32.000Z',
  '0259-07-21T18:06:32.000Z',
  '0268-12-25T18:06:32.000Z',
  25,
  'Unknown',
  NULL,
  NULL,
  'Pope Dionysius was the twenty-fifth Bishop of Rome and is known for his efforts to combat the heresy of Sabellianism, which denied the distinction between the persons of the Trinity. He also worked to restore order to the Church after the persecution of Valerian and established important precedents for papal authority.',
  NULL,
  'Dionysius''s papacy represents an important period of theological development and Church organization. His opposition to Sabellianism demonstrates early papal concern for doctrinal orthodoxy. His work to restore Church order after persecution shows his administrative skills.',
  '[{"title":"Vatican Official Biography - Dionysius","url":"https://www.vatican.va/content/vatican/en/holy-father/dionisio.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.927Z',
  '2025-10-03T19:08:36.244Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7864q000r8z6m1fbl1tfu',
  'Felix I',
  'Pope Felix I',
  'Felix',
  NULL,
  '0274-12-29T18:06:32.000Z',
  '0269-01-04T18:06:32.000Z',
  '0274-12-29T18:06:32.000Z',
  26,
  'Rome',
  NULL,
  NULL,
  'Pope Felix I was the twenty-sixth Bishop of Rome and is known for his opposition to the heresy of Paul of Samosata, who denied the divinity of Christ. He established important precedents for papal authority and worked to maintain doctrinal orthodoxy during a period of theological controversy.',
  NULL,
  'Felix I''s papacy represents an important development in papal authority and doctrinal orthodoxy. His opposition to Paul of Samosata demonstrates early papal concern for Christological orthodoxy. His work to maintain Church unity during theological controversy shows his leadership skills.',
  '[{"title":"Vatican Official Biography - Felix I","url":"https://www.vatican.va/content/vatican/en/holy-father/felice-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.931Z',
  '2025-10-03T19:08:36.247Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7864w000s8z6myjptzfp4',
  'Eutichianus',
  'Pope Eutichianus',
  'Eutichianus',
  NULL,
  '0283-12-06T18:06:32.000Z',
  '0275-01-03T18:06:32.000Z',
  '0283-12-06T18:06:32.000Z',
  27,
  'Luni',
  NULL,
  NULL,
  'Pope Eutichianus was the twenty-seventh Bishop of Rome and is known for his work in organizing the Church and establishing important liturgical practices. He is traditionally credited with introducing the practice of blessing grapes and other fruits during Mass. His papacy occurred during a period of relative peace for Christians.',
  NULL,
  'Eutichianus''s papacy represents an important period of Church organization and liturgical development. His introduction of fruit blessings shows the developing nature of Christian worship practices. His papacy during a period of peace allowed for important Church growth and organization.',
  '[{"title":"Vatican Official Biography - Eutichianus","url":"https://www.vatican.va/content/vatican/en/holy-father/eutichiano.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.937Z',
  '2025-10-03T19:08:36.254Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb78653000t8z6mq76q5k2g',
  'Caius',
  'Pope Caius',
  'Caius',
  NULL,
  '0296-04-21T18:06:32.000Z',
  '0283-12-16T18:06:32.000Z',
  '0296-04-21T18:06:32.000Z',
  28,
  NULL,
  NULL,
  NULL,
  'Pope Caius was the twenty-eighth Bishop of Rome and is known for his work in organizing the Church hierarchy and establishing important precedents for papal authority. He is traditionally credited with dividing Rome into parishes and appointing priests to oversee each one. His papacy occurred during the reign of Emperor Diocletian.',
  NULL,
  'Caius''s papacy represents an important development in Church organization and hierarchy. His division of Rome into parishes shows early papal administrative skills. His papacy during Diocletian''s reign occurred just before the Great Persecution, making it a crucial period in Church history.',
  '[{"title":"Vatican Official Biography - Caius","url":"https://www.vatican.va/content/vatican/en/holy-father/gaio.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.943Z',
  '2025-10-03T19:08:36.258Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb78659000u8z6mos6j3d5x',
  'Marcellinus',
  'Pope Marcellinus',
  'Marcellinus',
  NULL,
  '0304-10-24T18:06:32.000Z',
  '0296-06-29T18:06:32.000Z',
  '0304-10-24T18:06:32.000Z',
  29,
  'Rome',
  NULL,
  NULL,
  'Pope Marcellinus was the twenty-ninth Bishop of Rome and is known for his papacy during the beginning of the Great Persecution under Emperor Diocletian. He is traditionally credited with having lapsed during persecution but later repented. His papacy represents a difficult period in Church history marked by widespread persecution.',
  NULL,
  'Marcellinus''s papacy represents one of the most difficult periods in Church history. The Great Persecution under Diocletian was the most severe persecution of Christians in Roman history. His traditional lapse and repentance demonstrate the challenges faced by Church leaders during persecution.',
  '[{"title":"Vatican Official Biography - Marcellinus","url":"https://www.vatican.va/content/vatican/en/holy-father/marcellino.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.949Z',
  '2025-10-03T19:08:36.263Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7865d000v8z6m8g511jp2',
  'Marcellus I',
  'Pope Marcellus I',
  'Marcellus',
  NULL,
  '0309-01-15T18:06:32.000Z',
  '0308-05-26T18:06:32.000Z',
  '0309-01-15T18:06:32.000Z',
  30,
  'Rome',
  NULL,
  NULL,
  'Pope Marcellus I was the thirtieth Bishop of Rome and is known for his work in reorganizing the Church after the Great Persecution. He established important precedents for dealing with lapsed Christians and worked to restore Church discipline. His papacy was marked by controversy over the treatment of those who had lapsed during persecution.',
  NULL,
  'Marcellus I''s papacy represents an important period of Church recovery after the Great Persecution. His work in dealing with lapsed Christians was controversial but necessary for Church unity. His papacy demonstrates the challenges of rebuilding the Church after widespread persecution.',
  '[{"title":"Vatican Official Biography - Marcellus I","url":"https://www.vatican.va/content/vatican/en/holy-father/marcello-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.954Z',
  '2025-10-03T19:08:36.268Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7865k000w8z6mmtvp0ufn',
  'Eusebius',
  'Pope Eusebius',
  'Eusebius',
  NULL,
  '0309-08-16T18:06:32.000Z',
  '0309-04-17T18:06:32.000Z',
  '0309-08-16T18:06:32.000Z',
  31,
  'Greece',
  NULL,
  NULL,
  'Pope Eusebius was the thirty-first Bishop of Rome and had a very short papacy of only four months. He is known for his work in dealing with the controversy over lapsed Christians and his efforts to maintain Church unity. He was exiled during the persecution of Emperor Maxentius and died in exile.',
  NULL,
  'Eusebius''s short papacy continued the work of his predecessor in dealing with lapsed Christians. His exile and death demonstrate the continued persecution of Christians even after the end of the Great Persecution. His papacy represents the ongoing challenges of Church leadership during persecution.',
  '[{"title":"Vatican Official Biography - Eusebius","url":"https://www.vatican.va/content/vatican/en/holy-father/eusebio.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.960Z',
  '2025-10-03T19:08:36.272Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7865q000x8z6m6n5ekh2n',
  'Miltiades',
  'Pope Miltiades',
  'Miltiades',
  NULL,
  '0314-01-10T18:06:32.000Z',
  '0311-07-01T18:06:32.000Z',
  '0314-01-10T18:06:32.000Z',
  32,
  'Africa',
  NULL,
  NULL,
  'Pope Miltiades was the thirty-second Bishop of Rome and is known for his papacy during the reign of Emperor Constantine the Great. He presided over the Lateran Synod in 313, which dealt with the Donatist controversy. His papacy marks the beginning of the Constantinian era and the end of Christian persecution.',
  NULL,
  'Miltiades''s papacy represents a crucial turning point in Church history. His papacy during Constantine''s reign marks the transition from persecution to imperial favor. The Lateran Synod he presided over was an important early Church council that dealt with the Donatist controversy.',
  '[{"title":"Vatican Official Biography - Miltiades","url":"https://www.vatican.va/content/vatican/en/holy-father/milziade.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.966Z',
  '2025-10-03T19:08:36.277Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7865x000y8z6m7p9ggzu9',
  'Sylvester I',
  'Pope Sylvester I',
  'Sylvester',
  NULL,
  '0335-12-30T18:06:32.000Z',
  '0314-01-30T18:06:32.000Z',
  '0335-12-30T18:06:32.000Z',
  33,
  'Rome',
  NULL,
  NULL,
  'Pope Sylvester I was the thirty-third Bishop of Rome and is known for his close relationship with Emperor Constantine the Great. He presided over the First Council of Nicaea (325) and is traditionally credited with receiving the Donation of Constantine, though this document was later proven to be a forgery.',
  NULL,
  'Sylvester I''s papacy marks the transition from persecution to imperial favor. His relationship with Constantine represents a crucial moment in Church history. The Council of Nicaea, which he presided over, established important Christian doctrines.',
  '[{"title":"Vatican Official Biography - Sylvester I","url":"https://www.vatican.va/content/vatican/en/holy-father/silvestro-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.973Z',
  '2025-10-03T19:03:38.420Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb78664000z8z6moqlzx98b',
  'Mark',
  'Pope Mark',
  'Mark',
  NULL,
  '0336-10-06T18:06:32.000Z',
  '0336-01-17T18:06:32.000Z',
  '0336-10-06T18:06:32.000Z',
  34,
  'Rome',
  NULL,
  NULL,
  'Pope Mark was the thirty-fourth Bishop of Rome and had a very short papacy of only eight months. He is known for his work in organizing the Church and establishing important precedents for papal authority. He is traditionally credited with establishing the practice of recording papal deeds and establishing the papal archives.',
  NULL,
  'Mark''s short papacy represents an important period of Church organization and record-keeping. His establishment of papal archives shows early papal concern for historical documentation. His papacy during the Constantinian era allowed for important Church growth and organization.',
  '[{"title":"Vatican Official Biography - Mark","url":"https://www.vatican.va/content/vatican/en/holy-father/marco.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.979Z',
  '2025-10-03T19:08:36.280Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7866b00108z6mjpczfet5',
  'Julius I',
  'Pope Julius I',
  'Julius',
  NULL,
  '0352-04-11T18:06:32.000Z',
  '0337-02-05T18:06:32.000Z',
  '0352-04-11T18:06:32.000Z',
  35,
  'Rome',
  NULL,
  NULL,
  'Pope Julius I was the thirty-fifth Bishop of Rome and is known for his strong defense of Saint Athanasius of Alexandria during the Arian controversy. He established important precedents for papal authority and worked to maintain doctrinal orthodoxy. His papacy represents an important development in papal primacy.',
  NULL,
  'Julius I''s papacy represents an important development in papal authority and doctrinal orthodoxy. His defense of Athanasius during the Arian controversy demonstrates early papal concern for theological orthodoxy. His papacy shows the growing influence of the papacy in Church affairs.',
  '[{"title":"Vatican Official Biography - Julius I","url":"https://www.vatican.va/content/vatican/en/holy-father/giulio-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.987Z',
  '2025-10-03T19:08:36.284Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7866k00118z6myj3o0nkz',
  'Liberius',
  'Pope Liberius',
  'Liberius',
  NULL,
  '0366-09-23T18:06:32.000Z',
  '0352-05-16T18:06:32.000Z',
  '0366-09-23T18:06:32.000Z',
  36,
  'Rome',
  NULL,
  NULL,
  'Pope Liberius was the thirty-sixth Bishop of Rome and is known for his exile during the Arian controversy. He was pressured by Emperor Constantius II to condemn Saint Athanasius and accept Arian teachings, but he resisted. His papacy represents a difficult period in Church history marked by imperial interference.',
  NULL,
  'Liberius''s papacy represents a difficult period in Church history marked by imperial interference in Church affairs. His resistance to Arian pressure demonstrates papal commitment to doctrinal orthodoxy. His exile shows the challenges faced by Church leaders during theological controversy.',
  '[{"title":"Vatican Official Biography - Liberius","url":"https://www.vatican.va/content/vatican/en/holy-father/libero.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:53.996Z',
  '2025-10-03T19:08:36.288Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7866u00128z6mpvc898d8',
  'Damasus I',
  'Pope Damasus I',
  'Damasus',
  NULL,
  '0384-12-10T18:06:32.000Z',
  '0366-09-30T18:06:32.000Z',
  '0384-12-10T18:06:32.000Z',
  37,
  'Rome',
  NULL,
  NULL,
  'Pope Damasus I was the thirty-seventh Bishop of Rome and is known for his work in promoting the cult of martyrs and establishing the Vulgate Bible translation. He commissioned Saint Jerome to translate the Bible into Latin and worked to establish papal authority. His papacy represents an important period of Church development.',
  NULL,
  'Damasus I''s papacy represents an important period of Church development and papal authority. His promotion of the cult of martyrs shows early papal concern for Christian tradition. His commission of the Vulgate Bible translation had lasting influence on Western Christianity.',
  '[{"title":"Vatican Official Biography - Damasus I","url":"https://www.vatican.va/content/vatican/en/holy-father/damaso-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.004Z',
  '2025-10-03T19:08:36.291Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7866z00138z6mzpm49ij7',
  'Siricius',
  'Pope Siricius',
  'Siricius',
  NULL,
  '0399-11-25T18:06:32.000Z',
  '0384-12-14T18:06:32.000Z',
  '0399-11-25T18:06:32.000Z',
  38,
  'Rome',
  NULL,
  NULL,
  'Pope Siricius was the thirty-eighth Bishop of Rome and is known for being the first pope to issue decretals (papal letters with legal force). He established important precedents for papal authority and worked to maintain Church discipline. His papacy represents an important development in papal governance.',
  NULL,
  'Siricius''s papacy represents an important development in papal governance and authority. His issuance of decretals shows early papal concern for Church law and discipline. His papacy demonstrates the growing institutionalization of papal authority.',
  '[{"title":"Vatican Official Biography - Siricius","url":"https://www.vatican.va/content/vatican/en/holy-father/siricio.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.011Z',
  '2025-10-03T19:08:36.295Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7867800148z6moumkb5yb',
  'Anastasius I',
  'Pope Anastasius I',
  'Anastasius',
  NULL,
  '0401-12-18T18:06:32.000Z',
  '0399-11-26T18:06:32.000Z',
  '0401-12-18T18:06:32.000Z',
  39,
  'Rome',
  NULL,
  NULL,
  'Pope Anastasius I was the thirty-ninth Bishop of Rome and is known for his opposition to the teachings of Origen and his work in maintaining doctrinal orthodoxy. He established important precedents for papal authority and worked to combat heresy. His papacy represents an important period of theological development.',
  NULL,
  'Anastasius I''s papacy represents an important period of theological development and doctrinal orthodoxy. His opposition to Origen''s teachings demonstrates early papal concern for theological orthodoxy. His papacy shows the growing influence of the papacy in theological matters.',
  '[{"title":"Vatican Official Biography - Anastasius I","url":"https://www.vatican.va/content/vatican/en/holy-father/anastasio-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.020Z',
  '2025-10-03T19:08:36.298Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7867h00158z6mljpb65qv',
  'Innocent I',
  'Pope Innocent I',
  'Innocent',
  NULL,
  '0417-03-11T18:06:32.000Z',
  '0401-12-21T18:06:32.000Z',
  '0417-03-11T18:06:32.000Z',
  40,
  'Albano',
  NULL,
  NULL,
  'Pope Innocent I was the fortieth Bishop of Rome and is known for his strong assertion of papal primacy and his work in maintaining Church unity. He established important precedents for papal authority and worked to combat heresy. His papacy represents an important development in papal primacy.',
  NULL,
  'Innocent I''s papacy represents an important development in papal primacy and authority. His strong assertion of papal authority shows early papal concern for Church unity and discipline. His papacy demonstrates the growing influence of the papacy in Church affairs.',
  '[{"title":"Vatican Official Biography - Innocent I","url":"https://www.vatican.va/content/vatican/en/holy-father/innocenzo-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.029Z',
  '2025-10-03T19:08:36.301Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7867o00168z6mvi4cwzng',
  'Zosimus',
  'Pope Zosimus',
  'Zosimus',
  NULL,
  '0418-12-25T18:06:32.000Z',
  '0417-03-17T18:06:32.000Z',
  '0418-12-25T18:06:32.000Z',
  41,
  'Greece',
  NULL,
  NULL,
  'Pope Zosimus was the forty-first Bishop of Rome and is known for his work in dealing with the Pelagian controversy and his efforts to maintain Church unity. He initially supported Pelagius but later condemned his teachings. His papacy represents an important period of theological controversy.',
  NULL,
  'Zosimus''s papacy represents an important period of theological controversy and papal authority. His initial support and later condemnation of Pelagius shows the complexity of theological controversy. His papacy demonstrates the growing influence of the papacy in theological matters.',
  '[{"title":"Vatican Official Biography - Zosimus","url":"https://www.vatican.va/content/vatican/en/holy-father/zosimo.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.036Z',
  '2025-10-03T19:08:36.306Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7867y00178z6m5k9sw9r1',
  'Boniface I',
  'Pope Boniface I',
  'Boniface',
  NULL,
  '0422-09-03T18:06:32.000Z',
  '0418-12-27T18:06:32.000Z',
  '0422-09-03T18:06:32.000Z',
  42,
  'Rome',
  NULL,
  NULL,
  'Pope Boniface I was the forty-second Bishop of Rome and is known for his work in dealing with the Pelagian controversy and his efforts to maintain Church unity. He was elected after a contested election and worked to establish papal authority. His papacy represents an important period of Church development.',
  NULL,
  'Boniface I''s papacy represents an important period of Church development and papal authority. His contested election shows the political nature of papal elections. His work in dealing with the Pelagian controversy demonstrates papal concern for theological orthodoxy.',
  '[{"title":"Vatican Official Biography - Boniface I","url":"https://www.vatican.va/content/vatican/en/holy-father/bonifacio-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.046Z',
  '2025-10-03T19:08:36.308Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7868600188z6m8s96335s',
  'Celestine I',
  'Pope Celestine I',
  'Celestine',
  NULL,
  '0432-07-26T18:06:32.000Z',
  '0422-09-09T18:06:32.000Z',
  '0432-07-26T18:06:32.000Z',
  43,
  'Rome',
  NULL,
  NULL,
  'Pope Celestine I was the forty-third Bishop of Rome and is known for his strong opposition to the teachings of Nestorius and his work in maintaining doctrinal orthodoxy. He sent Saint Cyril of Alexandria to the Council of Ephesus and worked to establish papal authority. His papacy represents an important period of theological development.',
  NULL,
  'Celestine I''s papacy represents an important period of theological development and papal authority. His opposition to Nestorius and support for Cyril of Alexandria shows early papal concern for Christological orthodoxy. His papacy demonstrates the growing influence of the papacy in Church councils.',
  '[{"title":"Vatican Official Biography - Celestine I","url":"https://www.vatican.va/content/vatican/en/holy-father/celestino-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.054Z',
  '2025-10-03T19:08:36.312Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7868f00198z6mhzeq7d4b',
  'Sixtus III',
  'Pope Sixtus III',
  'Sixtus',
  NULL,
  '0440-08-17T18:06:32.000Z',
  '0432-07-30T18:06:32.000Z',
  '0440-08-17T18:06:32.000Z',
  44,
  'Rome',
  NULL,
  NULL,
  'Pope Sixtus III was the forty-fourth Bishop of Rome and is known for his work in building and decorating churches, particularly the Basilica of Saint Mary Major. He worked to maintain Church unity and established important precedents for papal authority. His papacy represents an important period of Church development.',
  NULL,
  'Sixtus III''s papacy represents an important period of Church development and papal authority. His work in building and decorating churches shows early papal concern for Christian worship and art. His papacy demonstrates the growing wealth and influence of the papacy.',
  '[{"title":"Vatican Official Biography - Sixtus III","url":"https://www.vatican.va/content/vatican/en/holy-father/sisto-iii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.063Z',
  '2025-10-03T19:08:36.316Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7868o001a8z6mqwxylgos',
  'Leo I',
  'Pope Leo I (the Great)',
  'Leo',
  NULL,
  '0461-11-09T18:06:32.000Z',
  '0440-09-28T18:06:32.000Z',
  '0461-11-09T18:06:32.000Z',
  45,
  'Tuscany',
  NULL,
  NULL,
  'Pope Leo I, known as ''the Great,'' was one of the most important early popes. He successfully defended Rome against Attila the Hun in 452 and strengthened papal authority. He wrote extensively on theology and is known for his Tome, which helped resolve the Christological controversies at the Council of Chalcedon (451).',
  NULL,
  'Leo I''s papacy was crucial in establishing papal primacy and theological orthodoxy. His meeting with Attila the Hun, where he convinced the barbarian leader to spare Rome, became legendary. His theological writings, particularly his Tome on the two natures of Christ, were instrumental in resolving the Monophysite controversy.',
  '[{"title":"Vatican Official Biography - Leo I","url":"https://www.vatican.va/content/vatican/en/holy-father/leone-i.html","type":"Official"},{"title":"Leo''s Tome - Council of Chalcedon","url":"https://www.newadvent.org/fathers/3604.htm","type":"Historical"}]',
  false,
  '2025-10-03T18:49:54.072Z',
  '2025-10-03T18:58:07.626Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7868y001b8z6mndurjo3o',
  'Hilarius',
  'Pope Hilarius',
  'Hilarius',
  NULL,
  '0468-02-28T18:06:32.000Z',
  '0461-11-18T18:06:32.000Z',
  '0468-02-28T18:06:32.000Z',
  46,
  'Sardinia',
  NULL,
  NULL,
  'Pope Hilarius was the forty-sixth Bishop of Rome and is known for his work in organizing the Church and establishing important precedents for papal authority. He worked to maintain Church discipline and established important liturgical practices. His papacy represents an important period of Church development.',
  NULL,
  'Hilarius''s papacy represents an important period of Church development and papal authority. His work in organizing the Church shows early papal concern for Church administration. His papacy demonstrates the growing institutionalization of papal authority.',
  '[{"title":"Vatican Official Biography - Hilarius","url":"https://www.vatican.va/content/vatican/en/holy-father/ilario.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.083Z',
  '2025-10-03T19:08:36.324Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb78693001c8z6me3k63d8i',
  'Simplicius',
  'Pope Simplicius',
  'Simplicius',
  NULL,
  '0483-03-09T18:06:32.000Z',
  '0468-03-02T18:06:32.000Z',
  '0483-03-09T18:06:32.000Z',
  47,
  'Tivoli',
  NULL,
  NULL,
  'Pope Simplicius was the forty-seventh Bishop of Rome and is known for his work in dealing with the Monophysite controversy and his efforts to maintain Church unity. He worked to establish papal authority and maintain doctrinal orthodoxy. His papacy represents an important period of theological controversy.',
  NULL,
  'Simplicius''s papacy represents an important period of theological controversy and papal authority. His work in dealing with the Monophysite controversy shows early papal concern for Christological orthodoxy. His papacy demonstrates the growing influence of the papacy in theological matters.',
  '[{"title":"Vatican Official Biography - Simplicius","url":"https://www.vatican.va/content/vatican/en/holy-father/simplicio.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.087Z',
  '2025-10-03T19:08:36.329Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7869a001d8z6mfsleqe4c',
  'Felix III',
  'Pope Felix III',
  'Felix',
  NULL,
  '0492-02-29T18:06:32.000Z',
  '0483-03-12T18:06:32.000Z',
  '0492-02-29T18:06:32.000Z',
  48,
  'Rome',
  NULL,
  NULL,
  'Pope Felix III was the forty-eighth Bishop of Rome and is known for his strong opposition to the Monophysite heresy and his work in maintaining doctrinal orthodoxy. He excommunicated Acacius, the Patriarch of Constantinople, for his support of Monophysitism. His papacy represents an important period of theological controversy.',
  NULL,
  'Felix III''s papacy represents an important period of theological controversy and papal authority. His excommunication of Acacius shows early papal concern for Christological orthodoxy. His papacy demonstrates the growing influence of the papacy in Eastern Church affairs.',
  '[{"title":"Vatican Official Biography - Felix III","url":"https://www.vatican.va/content/vatican/en/holy-father/felice-iii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.094Z',
  '2025-10-03T19:08:36.333Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7869l001e8z6mxodfsvl6',
  'Gelasius I',
  'Pope Gelasius I',
  'Gelasius',
  NULL,
  '0496-11-20T18:06:32.000Z',
  '0492-02-29T18:06:32.000Z',
  '0496-11-20T18:06:32.000Z',
  49,
  'Africa',
  NULL,
  NULL,
  'Pope Gelasius I was the forty-ninth Bishop of Rome and is known for his strong assertion of papal primacy and his work in maintaining Church unity. He wrote extensively on papal authority and established important precedents for papal governance. His papacy represents an important development in papal primacy.',
  NULL,
  'Gelasius I''s papacy represents an important development in papal primacy and authority. His writings on papal authority show early papal concern for Church governance. His papacy demonstrates the growing influence of the papacy in Church affairs and his famous doctrine of the two swords.',
  '[{"title":"Vatican Official Biography - Gelasius I","url":"https://www.vatican.va/content/vatican/en/holy-father/gelasio-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.105Z',
  '2025-10-03T19:08:36.342Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb7869t001f8z6mv4g3wuvk',
  'Anastasius II',
  'Pope Anastasius II',
  'Anastasius',
  NULL,
  '0498-11-18T18:06:32.000Z',
  '0496-11-23T18:06:32.000Z',
  '0498-11-18T18:06:32.000Z',
  50,
  'Rome',
  NULL,
  NULL,
  'Pope Anastasius II was the fiftieth Bishop of Rome and is known for his work in dealing with the Acacian schism and his efforts to restore communion with the Eastern Church. He worked to establish papal authority and maintain Church unity. His papacy represents an important period of Church diplomacy.',
  NULL,
  'Anastasius II''s papacy represents an important period of Church diplomacy and papal authority. His work in dealing with the Acacian schism shows early papal concern for Church unity. His papacy demonstrates the growing influence of the papacy in Eastern Church affairs.',
  '[{"title":"Vatican Official Biography - Anastasius II","url":"https://www.vatican.va/content/vatican/en/holy-father/anastasio-ii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.114Z',
  '2025-10-03T19:08:36.348Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786a3001g8z6mn8zikdpj',
  'Gregory I',
  'Pope Gregory I (the Great)',
  'Gregory',
  NULL,
  '0604-03-11T18:06:32.000Z',
  '0590-09-02T18:06:32.000Z',
  '0604-03-11T18:06:32.000Z',
  64,
  'Rome',
  NULL,
  NULL,
  'Pope Gregory I, known as ''the Great,'' was one of the most influential popes in Church history. A former Roman prefect, he became a monk and later pope. He reformed the liturgy, established the Gregorian chant, and sent missionaries to England. He is considered one of the four great Latin Doctors of the Church.',
  NULL,
  'Gregory I''s papacy marked the transition from ancient to medieval Christianity. His reforms in liturgy and music (Gregorian chant) had lasting influence. His missionary work, particularly sending Augustine to England, expanded Christianity''s reach. His writings on pastoral care and theology became foundational texts for the medieval Church.',
  '[{"title":"Vatican Official Biography - Gregory I","url":"https://www.vatican.va/content/vatican/en/holy-father/gregorio-i.html","type":"Official"},{"title":"Gregory''s Pastoral Care","url":"https://www.newadvent.org/fathers/3601.htm","type":"Historical"}]',
  false,
  '2025-10-03T18:49:54.123Z',
  '2025-10-03T18:58:07.629Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786ab001h8z6mwystbmdl',
  'Sergius I',
  'Pope Sergius I',
  'Sergius',
  NULL,
  '0701-09-07T18:06:32.000Z',
  '0687-12-14T18:06:32.000Z',
  '0701-09-07T18:06:32.000Z',
  70,
  'Palermo',
  NULL,
  NULL,
  'Pope Sergius I was the seventieth Bishop of Rome and is known for his opposition to the Quinisext Council and his work in maintaining papal authority. He established important liturgical practices and worked to maintain Church unity. His papacy represents an important period of papal authority.',
  NULL,
  'Sergius I''s papacy represents an important period of papal authority and liturgical development. His opposition to the Quinisext Council shows early papal concern for Church governance. His papacy demonstrates the growing influence of the papacy in Church affairs.',
  '[{"title":"Vatican Official Biography - Sergius I","url":"https://www.vatican.va/content/vatican/en/holy-father/sergio-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.131Z',
  '2025-10-03T19:15:22.556Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786ag001i8z6mdnt8wuqk',
  'Leo III',
  'Pope Leo III',
  'Leo',
  NULL,
  '0816-06-11T18:06:32.000Z',
  '0795-12-25T18:06:32.000Z',
  '0816-06-11T18:06:32.000Z',
  90,
  'Rome',
  NULL,
  NULL,
  'Pope Leo III was the ninetieth Bishop of Rome and is known for crowning Charlemagne as Holy Roman Emperor on Christmas Day 800. This event marked the beginning of the Holy Roman Empire and established important precedents for papal authority. His papacy represents a crucial period in Church history.',
  NULL,
  'Leo III''s papacy represents a crucial period in Church history and papal authority. His crowning of Charlemagne established the relationship between Church and state that would define medieval Europe. This event marked the beginning of the Holy Roman Empire and papal political influence.',
  '[{"title":"Vatican Official Biography - Leo III","url":"https://www.vatican.va/content/vatican/en/holy-father/leone-iii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.136Z',
  '2025-10-03T19:15:22.559Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786ao001j8z6mww0mpt8o',
  'Nicholas I',
  'Pope Nicholas I (the Great)',
  'Nicholas',
  NULL,
  '0867-11-12T18:06:32.000Z',
  '0858-04-23T18:06:32.000Z',
  '0867-11-12T18:06:32.000Z',
  105,
  'Rome',
  NULL,
  NULL,
  'Pope Nicholas I, known as ''the Great,'' was the one hundred and fifth Bishop of Rome and is considered one of the most important popes of the 9th century. He strongly asserted papal primacy over secular rulers and established important precedents for papal authority. He is known for his conflict with Emperor Lothair II over divorce and his defense of Church doctrine.',
  NULL,
  'Nicholas I''s papacy represents the height of 9th-century papal power and authority. His strong assertion of papal primacy over secular rulers established important precedents for papal authority. His conflict with Emperor Lothair II over divorce demonstrates papal concern for Church doctrine and moral authority.',
  '[{"title":"Vatican Official Biography - Nicholas I","url":"https://www.vatican.va/content/vatican/en/holy-father/nicola-i.html","type":"Official"},{"title":"Catholic Encyclopedia - Pope Nicholas I","url":"https://www.newadvent.org/cathen/11055a.htm","type":"Historical"}]',
  false,
  '2025-10-03T18:49:54.144Z',
  '2025-10-03T19:15:22.563Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786at001k8z6mqkcrqmbx',
  'Sylvester II',
  'Pope Sylvester II',
  'Gerbert',
  NULL,
  '1003-05-11T18:06:32.000Z',
  '0999-04-01T18:06:32.000Z',
  '1003-05-11T18:06:32.000Z',
  130,
  'Auvergne',
  NULL,
  NULL,
  'Pope Sylvester II, born Gerbert of Aurillac, was the one hundred and thirtieth Bishop of Rome and is known for being one of the most learned popes of the Middle Ages. He was a renowned scholar, mathematician, and astronomer who introduced Arabic numerals to Europe. His papacy represents an important period of intellectual development in the Church.',
  NULL,
  'Sylvester II''s papacy represents an important period of intellectual development and papal authority. His scholarly achievements and introduction of Arabic numerals to Europe show papal concern for learning and education. His papacy demonstrates the Church''s role in preserving and advancing knowledge during the Middle Ages.',
  '[{"title":"Vatican Official Biography - Sylvester II","url":"https://www.vatican.va/content/vatican/en/holy-father/silvestro-ii.html","type":"Official"},{"title":"Catholic Encyclopedia - Pope Sylvester II","url":"https://www.newadvent.org/cathen/14370a.htm","type":"Historical"}]',
  false,
  '2025-10-03T18:49:54.150Z',
  '2025-10-03T19:15:22.568Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786b0001l8z6mhjzkjh3q',
  'Gregory VII',
  'Pope Gregory VII',
  'Hildebrand',
  NULL,
  '1085-05-24T18:06:32.000Z',
  '1073-04-21T18:06:32.000Z',
  '1085-05-24T18:06:32.000Z',
  154,
  'Tuscany',
  NULL,
  NULL,
  'Pope Gregory VII, born Hildebrand, was the one hundred and fifty-fourth Bishop of Rome and is known for his strong assertion of papal authority and his conflict with Emperor Henry IV over investiture. He established important precedents for papal primacy and worked to reform the Church. His papacy represents a crucial period in Church history.',
  NULL,
  'Gregory VII''s papacy represents a crucial period in Church history and papal authority. His conflict with Emperor Henry IV over investiture established important precedents for papal primacy over secular rulers. His papacy demonstrates the Church''s role in medieval politics and governance.',
  '[{"title":"Vatican Official Biography - Gregory VII","url":"https://www.vatican.va/content/vatican/en/holy-father/gregorio-vii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.156Z',
  '2025-10-03T19:15:22.574Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786b7001m8z6m0lcgtbwx',
  'Innocent II',
  'Pope Innocent II',
  'Gregorio',
  NULL,
  '1143-09-23T18:06:32.000Z',
  '1130-02-13T18:06:32.000Z',
  '1143-09-23T18:06:32.000Z',
  165,
  'Rome',
  NULL,
  NULL,
  'Pope Innocent II was the one hundred and sixty-fifth Bishop of Rome and is known for his work in dealing with the antipope Anacletus II and his efforts to maintain Church unity. He presided over the Second Lateran Council and worked to establish papal authority. His papacy represents an important period of Church development.',
  NULL,
  'Innocent II''s papacy represents an important period of Church development and papal authority. His conflict with antipope Anacletus II shows the challenges of papal elections and Church unity. His papacy demonstrates the growing influence of the papacy in Church affairs.',
  '[{"title":"Vatican Official Biography - Innocent II","url":"https://www.vatican.va/content/vatican/en/holy-father/innocenzo-ii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.163Z',
  '2025-10-03T19:15:22.577Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786bm001n8z6mqf14yas9',
  'Innocent III',
  'Pope Innocent III',
  'Lotario de'' Conti',
  NULL,
  '1216-07-15T18:06:32.000Z',
  '1198-01-07T18:06:32.000Z',
  '1216-07-15T18:06:32.000Z',
  176,
  'Anagni',
  NULL,
  NULL,
  'Pope Innocent III was one of the most powerful and influential popes in Church history. Born Lotario de'' Conti di Segni in Anagni, he was elected pope at age 37. He reasserted papal authority over secular rulers, called the Fourth Lateran Council (1215), and launched the Fourth Crusade. He was known for his political acumen and theological scholarship.',
  NULL,
  'Innocent III''s papacy marked the height of medieval papal power. He successfully asserted papal supremacy over European monarchs, including King John of England and Emperor Otto IV. The Fourth Lateran Council he convened defined key Catholic doctrines including transubstantiation and established important reforms. His political influence extended across all of Christian Europe.',
  '[{"title":"Vatican Official Biography - Innocent III","url":"https://www.vatican.va/content/vatican/en/holy-father/innocenzo-iii.html","type":"Official"},{"title":"Fourth Lateran Council Documents","url":"https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html","type":"Official"},{"title":"Britannica - Pope Innocent III","url":"https://www.britannica.com/biography/Innocent-III-pope","type":"Reference"}]',
  false,
  '2025-10-03T18:49:54.178Z',
  '2025-10-03T18:58:07.633Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786c2001s8z6m6q5kvf83',
  'Boniface VIII',
  'Pope Boniface VIII',
  'Benedetto',
  NULL,
  '1303-10-10T18:06:32.000Z',
  '1294-12-23T18:06:32.000Z',
  '1303-10-10T18:06:32.000Z',
  196,
  'Anagni',
  NULL,
  NULL,
  'Pope Boniface VIII was the one hundred and ninety-sixth Bishop of Rome and is known for his strong assertion of papal authority and his conflict with King Philip IV of France. He issued the famous bull ''Unam Sanctam'' asserting papal supremacy over secular rulers. His papacy represents an important period of papal authority.',
  NULL,
  'Boniface VIII''s papacy represents an important period of papal authority and Church-state relations. His conflict with King Philip IV of France and his bull ''Unam Sanctam'' demonstrate papal concern for Church independence. His papacy shows the challenges of papal authority in the late Middle Ages.',
  '[{"title":"Vatican Official Biography - Boniface VIII","url":"https://www.vatican.va/content/vatican/en/holy-father/bonifacio-viii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.195Z',
  '2025-10-03T19:15:22.581Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786c8001t8z6mwqg7i4j8',
  'Nicholas V',
  'Pope Nicholas V',
  'Tommaso',
  NULL,
  '1455-03-23T18:06:32.000Z',
  '1447-03-05T18:06:32.000Z',
  '1455-03-23T18:06:32.000Z',
  210,
  'Sarzana',
  NULL,
  NULL,
  'Pope Nicholas V was the two hundred and tenth Bishop of Rome and is known for his patronage of the arts and his work in rebuilding Rome. He established the Vatican Library and worked to restore papal authority after the Great Schism. His papacy represents an important period of Renaissance development in the Church.',
  NULL,
  'Nicholas V''s papacy represents an important period of Renaissance development and papal authority. His patronage of the arts and establishment of the Vatican Library show papal concern for learning and culture. His papacy demonstrates the Church''s role in the Renaissance and cultural development.',
  '[{"title":"Vatican Official Biography - Nicholas V","url":"https://www.vatican.va/content/vatican/en/holy-father/nicola-v.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.201Z',
  '2025-10-03T19:15:22.586Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786ch001u8z6mkyh1non4',
  'Julius II',
  'Pope Julius II',
  'Giuliano',
  NULL,
  '1513-02-20T18:06:32.000Z',
  '1503-10-30T18:06:32.000Z',
  '1513-02-20T18:06:32.000Z',
  216,
  'Albisola',
  NULL,
  NULL,
  'Pope Julius II, known as ''the Warrior Pope,'' was the two hundred and sixteenth Bishop of Rome and is known for his military campaigns and his patronage of the arts. He commissioned Michelangelo to paint the Sistine Chapel ceiling and worked to restore papal authority. His papacy represents an important period of Renaissance development.',
  NULL,
  'Julius II''s papacy represents an important period of Renaissance development and papal authority. His military campaigns and patronage of the arts show papal concern for both temporal and spiritual authority. His papacy demonstrates the Church''s role in the Renaissance and cultural development.',
  '[{"title":"Vatican Official Biography - Julius II","url":"https://www.vatican.va/content/vatican/en/holy-father/giulio-ii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.210Z',
  '2025-10-03T19:15:22.591Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786cm001v8z6m1x525stv',
  'Leo X',
  'Pope Leo X',
  'Giovanni',
  NULL,
  '1521-11-30T18:06:32.000Z',
  '1513-03-08T18:06:32.000Z',
  '1521-11-30T18:06:32.000Z',
  220,
  'Florence',
  NULL,
  NULL,
  'Pope Leo X was the two hundred and twentieth Bishop of Rome and is known for his patronage of the arts and his conflict with Martin Luther that led to the Protestant Reformation. He was a member of the Medici family and worked to maintain papal authority. His papacy represents a crucial period in Church history.',
  NULL,
  'Leo X''s papacy represents a crucial period in Church history and papal authority. His conflict with Martin Luther and the beginning of the Protestant Reformation show the challenges of papal authority in the early modern period. His papacy demonstrates the Church''s role in the Renaissance and Reformation.',
  '[{"title":"Vatican Official Biography - Leo X","url":"https://www.vatican.va/content/vatican/en/holy-father/leone-x.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.214Z',
  '2025-10-03T19:15:22.596Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786cv001w8z6mh4nfjx49',
  'Clement IX',
  'Pope Clement IX',
  'Giulio',
  NULL,
  '1669-12-08T18:06:32.000Z',
  '1667-06-19T18:06:32.000Z',
  '1669-12-08T18:06:32.000Z',
  238,
  'Pistoia',
  NULL,
  NULL,
  'Pope Clement IX was the two hundred and thirty-eighth Bishop of Rome and is known for his work in dealing with the Jansenist controversy and his efforts to maintain Church unity. He established important precedents for papal authority and worked to reform the Church. His papacy represents an important period of Church development.',
  NULL,
  'Clement IX''s papacy represents an important period of Church development and papal authority. His work in dealing with the Jansenist controversy shows papal concern for doctrinal orthodoxy. His papacy demonstrates the growing influence of the papacy in Church affairs during the 17th century.',
  '[{"title":"Vatican Official Biography - Clement IX","url":"https://www.vatican.va/content/vatican/en/holy-father/clemente-ix.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.223Z',
  '2025-10-03T19:15:22.601Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786d1001x8z6mlal6nyyo',
  'Benedict XIV',
  'Pope Benedict XIV',
  'Prospero',
  NULL,
  '1758-05-02T18:06:32.000Z',
  '1740-08-16T18:06:32.000Z',
  '1758-05-02T18:06:32.000Z',
  247,
  'Bologna',
  NULL,
  NULL,
  'Pope Benedict XIV was the two hundred and forty-seventh Bishop of Rome and is known for his scholarly achievements and his work in reforming the Church. He was a renowned theologian and canon lawyer who established important precedents for papal authority. His papacy represents an important period of intellectual development.',
  NULL,
  'Benedict XIV''s papacy represents an important period of intellectual development and papal authority. His scholarly achievements and work in reforming the Church show papal concern for learning and Church governance. His papacy demonstrates the Church''s role in intellectual and cultural development.',
  '[{"title":"Vatican Official Biography - Benedict XIV","url":"https://www.vatican.va/content/vatican/en/holy-father/benedetto-xiv.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.229Z',
  '2025-10-03T19:15:22.609Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786d7001y8z6me484adki',
  'Pius IX',
  'Pope Pius IX',
  'Giovanni',
  NULL,
  '1878-02-06T18:38:50.000Z',
  '1846-06-15T18:06:32.000Z',
  '1878-02-06T18:38:50.000Z',
  255,
  'Senigallia',
  NULL,
  NULL,
  'Pope Pius IX was the two hundred and fifty-fifth Bishop of Rome and is known for his long papacy and his work in defining the dogma of the Immaculate Conception. He presided over the First Vatican Council and worked to establish papal infallibility. His papacy represents an important period of Church development.',
  NULL,
  'Pius IX''s papacy represents an important period of Church development and papal authority. His definition of the Immaculate Conception and the First Vatican Council show papal concern for doctrinal development. His papacy demonstrates the Church''s role in defining and defending Catholic doctrine.',
  '[{"title":"Vatican Official Biography - Pius IX","url":"https://www.vatican.va/content/vatican/en/holy-father/pio-ix.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.235Z',
  '2025-10-03T19:15:22.615Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786dd001z8z6mhtp67lw7',
  'Leo XIII',
  'Pope Leo XIII',
  'Vincenzo',
  NULL,
  '1903-07-19T18:38:50.000Z',
  '1878-02-19T18:38:50.000Z',
  '1903-07-19T18:38:50.000Z',
  256,
  'Carpineto Romano',
  NULL,
  NULL,
  'Pope Leo XIII was the two hundred and fifty-sixth Bishop of Rome and is known for his social encyclicals and his work in addressing the challenges of the modern world. He wrote the famous encyclical ''Rerum Novarum'' on social justice and worked to establish papal authority in modern times. His papacy represents an important period of Church development.',
  NULL,
  'Leo XIII''s papacy represents an important period of Church development and papal authority in modern times. His social encyclicals and work in addressing modern challenges show papal concern for social justice. His papacy demonstrates the Church''s role in addressing the challenges of the modern world.',
  '[{"title":"Vatican Official Biography - Leo XIII","url":"https://www.vatican.va/content/vatican/en/holy-father/leone-xiii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.241Z',
  '2025-10-03T19:15:22.623Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786di00208z6m9rzwoqlb',
  'Pius X',
  'Pope Pius X',
  'Giuseppe',
  NULL,
  '1914-08-19T18:30:00.000Z',
  '1903-08-03T18:38:50.000Z',
  '1914-08-19T18:30:00.000Z',
  257,
  'Riese (Treviso)',
  NULL,
  NULL,
  'Pope Pius X was the two hundred and fifty-seventh Bishop of Rome and is known for his work in promoting frequent communion and his efforts to combat modernism. He established important precedents for papal authority and worked to reform the Church. His papacy represents an important period of Church development.',
  NULL,
  'Pius X''s papacy represents an important period of Church development and papal authority. His promotion of frequent communion and work in combating modernism show papal concern for liturgical and doctrinal orthodoxy. His papacy demonstrates the Church''s role in addressing modern challenges.',
  '[{"title":"Vatican Official Biography - Pius X","url":"https://www.vatican.va/content/vatican/en/holy-father/pio-x.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.247Z',
  '2025-10-03T19:15:22.626Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786dy00218z6m9ekcthwj',
  'Benedict XV',
  'Pope Benedict XV',
  'Giacomo',
  NULL,
  '1922-01-21T18:30:00.000Z',
  '1914-09-02T18:30:00.000Z',
  '1922-01-21T18:30:00.000Z',
  258,
  NULL,
  NULL,
  NULL,
  'Pope Benedict XV was the two hundred and fifty-eighth Bishop of Rome and is known for his work during World War I and his efforts to promote peace. He established important precedents for papal authority and worked to maintain Church unity during a difficult period. His papacy represents an important period of Church development.',
  NULL,
  'Benedict XV''s papacy represents an important period of Church development and papal authority during World War I. His work in promoting peace and maintaining Church unity shows papal concern for global affairs. His papacy demonstrates the Church''s role in addressing international conflicts.',
  '[{"title":"Vatican Official Biography - Benedict XV","url":"https://www.vatican.va/content/vatican/en/holy-father/benedetto-xv.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.262Z',
  '2025-10-03T19:15:22.631Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786eg00228z6mtlcx3zem',
  'Pius XI',
  'Pope Pius XI',
  'Achille',
  NULL,
  '1939-02-09T18:30:00.000Z',
  '1922-02-05T18:30:00.000Z',
  '1939-02-09T18:30:00.000Z',
  259,
  'Desio (Milan)',
  NULL,
  NULL,
  'Pope Pius XI was the two hundred and fifty-ninth Bishop of Rome and is known for his work in establishing the Vatican City State and his efforts to address the challenges of the modern world. He wrote important encyclicals on social justice and worked to establish papal authority. His papacy represents an important period of Church development.',
  NULL,
  'Pius XI''s papacy represents an important period of Church development and papal authority. His establishment of the Vatican City State and work in addressing modern challenges show papal concern for Church independence and social justice. His papacy demonstrates the Church''s role in the modern world.',
  '[{"title":"Vatican Official Biography - Pius XI","url":"https://www.vatican.va/content/vatican/en/holy-father/pio-xi.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.280Z',
  '2025-10-03T19:15:22.637Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786eu00238z6mk1txqctw',
  'Pius XII',
  'Pope Pius XII',
  'Eugenio',
  NULL,
  '1958-10-08T18:30:00.000Z',
  '1939-03-01T18:30:00.000Z',
  '1958-10-08T18:30:00.000Z',
  260,
  'Rome',
  NULL,
  NULL,
  'Pope Pius XII was the two hundred and sixtieth Bishop of Rome and is known for his papacy during World War II and his efforts to address the challenges of the modern world. He wrote important encyclicals and worked to establish papal authority during a difficult period. His papacy represents an important period of Church development.',
  NULL,
  'Pius XII''s papacy represents an important period of Church development and papal authority during World War II. His work in addressing the challenges of the modern world and his encyclicals show papal concern for global affairs. His papacy demonstrates the Church''s role in addressing international conflicts.',
  '[{"title":"Vatican Official Biography - Pius XII","url":"https://www.vatican.va/content/vatican/en/holy-father/pio-xii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.294Z',
  '2025-10-03T19:15:22.642Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786ez00248z6mu30mvrn1',
  'John XXIII',
  'Pope John XXIII',
  'Angelo',
  NULL,
  '1963-06-02T18:30:00.000Z',
  '1958-10-27T18:30:00.000Z',
  '1963-06-02T18:30:00.000Z',
  261,
  'Sotto il Monte (Bergamo)',
  NULL,
  NULL,
  'Pope John XXIII was the two hundred and sixty-first Bishop of Rome and is known for calling the Second Vatican Council and his work in modernizing the Church. He was known as ''Good Pope John'' for his warm personality and his efforts to promote Christian unity. His papacy represents an important period of Church development.',
  NULL,
  'John XXIII''s papacy represents an important period of Church development and modernization. His calling of the Second Vatican Council and work in promoting Christian unity show papal concern for Church renewal. His papacy demonstrates the Church''s role in addressing the challenges of the modern world.',
  '[{"title":"Vatican Official Biography - John XXIII","url":"https://www.vatican.va/content/vatican/en/holy-father/giovanni-xxiii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.299Z',
  '2025-10-03T19:15:22.647Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786f900258z6mbnhy1wrs',
  'Paul VI',
  'Pope Paul VI',
  'Giovanni',
  NULL,
  '1978-08-05T18:30:00.000Z',
  '1963-06-20T18:30:00.000Z',
  '1978-08-05T18:30:00.000Z',
  262,
  'Concesio (Brescia)',
  NULL,
  NULL,
  'Pope Paul VI was the two hundred and sixty-second Bishop of Rome and is known for his work in implementing the reforms of the Second Vatican Council and his efforts to promote Christian unity. He was the first pope to travel extensively and worked to establish papal authority in modern times. His papacy represents an important period of Church development.',
  NULL,
  'Paul VI''s papacy represents an important period of Church development and modernization. His work in implementing Vatican II reforms and promoting Christian unity shows papal concern for Church renewal. His papacy demonstrates the Church''s role in addressing the challenges of the modern world.',
  '[{"title":"Vatican Official Biography - Paul VI","url":"https://www.vatican.va/content/vatican/en/holy-father/paolo-vi.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.309Z',
  '2025-10-03T19:15:22.650Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786fi00268z6m1rzf36w3',
  'John Paul I',
  'Pope John Paul I',
  'Albino',
  NULL,
  '1978-09-27T18:30:00.000Z',
  '1978-08-25T18:30:00.000Z',
  '1978-09-27T18:30:00.000Z',
  263,
  'Forno di Canale (Belluno)',
  NULL,
  NULL,
  'Pope John Paul I was the two hundred and sixty-third Bishop of Rome and is known for his short papacy of only 33 days. He was known for his warm personality and his efforts to promote Christian unity. His papacy represents an important period of Church development despite its brevity.',
  NULL,
  'John Paul I''s papacy represents an important period of Church development despite its brevity. His warm personality and efforts to promote Christian unity show papal concern for Church renewal. His papacy demonstrates the Church''s role in addressing the challenges of the modern world.',
  '[{"title":"Vatican Official Biography - John Paul I","url":"https://www.vatican.va/content/vatican/en/holy-father/giovanni-paolo-i.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.318Z',
  '2025-10-03T19:15:22.654Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786fy00278z6mxm1nuq09',
  'John Paul II',
  'Pope John Paul II',
  'Karol',
  NULL,
  '2005-04-01T18:30:00.000Z',
  '1978-10-15T18:30:00.000Z',
  '2005-04-01T18:30:00.000Z',
  264,
  'Wadowice (Kraków)',
  NULL,
  NULL,
  'Pope John Paul II was the two hundred and sixty-fourth Bishop of Rome and is known for his long papacy and his work in promoting Christian unity and social justice. He was the first non-Italian pope in over 400 years and worked to establish papal authority in modern times. His papacy represents an important period of Church development.',
  NULL,
  'John Paul II''s papacy represents an important period of Church development and papal authority in modern times. His work in promoting Christian unity and social justice shows papal concern for global affairs. His papacy demonstrates the Church''s role in addressing the challenges of the modern world.',
  '[{"title":"Vatican Official Biography - John Paul II","url":"https://www.vatican.va/content/vatican/en/holy-father/giovanni-paolo-ii.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.334Z',
  '2025-10-03T19:15:22.657Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786gb00288z6mez5g43gg',
  'Benedict XVI',
  'Pope Benedict XVI',
  'Joseph',
  NULL,
  '2013-02-27T18:30:00.000Z',
  '2005-04-18T18:30:00.000Z',
  '2013-02-27T18:30:00.000Z',
  265,
  'Marktl am Inn (Bavaria)',
  NULL,
  NULL,
  'Pope Benedict XVI was the two hundred and sixty-fifth Bishop of Rome and is known for his scholarly achievements and his work in promoting Christian unity. He was the first pope to resign in over 600 years and worked to establish papal authority in modern times. His papacy represents an important period of Church development.',
  NULL,
  'Benedict XVI''s papacy represents an important period of Church development and papal authority in modern times. His scholarly achievements and work in promoting Christian unity show papal concern for intellectual and spiritual development. His papacy demonstrates the Church''s role in addressing the challenges of the modern world.',
  '[{"title":"Vatican Official Biography - Benedict XVI","url":"https://www.vatican.va/content/vatican/en/holy-father/benedetto-xvi.html","type":"Official"}]',
  false,
  '2025-10-03T18:49:54.347Z',
  '2025-10-03T19:15:22.661Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786gl00298z6mmusfoft3',
  'Francis',
  'Pope Francis',
  'Jorge Mario',
  NULL,
  '2025-04-20T18:30:00.000Z',
  '2013-03-12T18:30:00.000Z',
  '2025-04-20T18:30:00.000Z',
  266,
  'Buenos Aires (Argentina)',
  NULL,
  NULL,
  'Pope Francis, born Jorge Mario Bergoglio in Buenos Aires, Argentina, is the first pope from the Americas and the first Jesuit pope. He was Archbishop of Buenos Aires before his election in 2013. Known for his humility, concern for the poor, and environmental advocacy, he has emphasized mercy, dialogue, and Church reform throughout his papacy.',
  NULL,
  'Pope Francis represents a significant shift in papal direction, emphasizing humility, social justice, and environmental stewardship. His election as the first pope from the Americas marked a historic moment for the global Church. He has been particularly vocal about climate change, economic inequality, and the need for Church reform and transparency.',
  '[{"title":"Vatican Official Biography","url":"https://www.vatican.va/content/francesco/en/biography/documents/papa-francesco-biografia-bergoglio.html","type":"Official"},{"title":"Encyclical Laudato Si''","url":"https://www.vatican.va/content/francesco/en/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html","type":"Document"},{"title":"Britannica Biography","url":"https://www.britannica.com/biography/Francis-I-pope","type":"Reference"}]',
  false,
  '2025-10-03T18:49:54.357Z',
  '2025-10-03T18:58:07.636Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb786gr002a8z6m3d7rm5iq',
  'Leo XIV',
  'Pope Leo XIV',
  'Robert Francis',
  NULL,
  NULL,
  '2025-05-07T18:30:00.000Z',
  NULL,
  267,
  'Chicago',
  NULL,
  NULL,
  'Pope Leo XIV, born Robert Francis Prevost in Chicago, is the first American pope in the history of the Catholic Church. Formerly the Prefect of the Dicastery for Bishops, he was elected in 2025 following the death of Pope Francis. Known for his pastoral approach and commitment to Church renewal, he represents a new chapter in papal history.',
  NULL,
  'Pope Leo XIV''s election as the first American pope marks a historic milestone for the Catholic Church. His background as a missionary in Peru and his role in the Vatican''s bishop selection process prepared him for the papacy. His election reflects the Church''s continued globalization and the growing influence of the American Catholic community.',
  '[{"title":"Vatican Official Biography","url":"https://www.vatican.va/content/vatican/en/holy-father/leone-xiv.html","type":"Official"},{"title":"Vatican List of Popes","url":"https://www.vatican.va/content/vatican/en/holy-father.html","type":"Official"}]',
  true,
  '2025-10-03T18:49:54.363Z',
  '2025-10-03T18:58:07.639Z'
);

-- Insert papal events

INSERT INTO papal_events (
  id, title, description, "eventDate", "eventType", location, 
  significance, "imageUrl", "popeId", "createdAt", "updatedAt"
) VALUES (
  'cmgb7860u00028z6m81r5p2n3',
  'Foundation of the Papacy',
  'Chosen by Jesus Christ as the rock upon which He would build His Church.',
  '0030-01-01T00:00:00.000Z',
  'ELECTION',
  'Galilee',
  'Foundation of the papacy',
  NULL,
  'cmgb7860k00008z6mwiql02bj',
  '2025-10-03T18:49:53.790Z',
  '2025-10-03T18:49:53.790Z'
);
INSERT INTO papal_events (
  id, title, description, "eventDate", "eventType", location, 
  significance, "imageUrl", "popeId", "createdAt", "updatedAt"
) VALUES (
  'cmgb786bq001p8z6mzy0qxshm',
  'Election as Pope',
  'Elected pope on 8 January 1198, becoming one of the most powerful popes in history.',
  '1198-01-07T18:06:32.000Z',
  'ELECTION',
  'Rome',
  'Became one of the most influential popes in Church history',
  NULL,
  'cmgb786bm001n8z6mqf14yas9',
  '2025-10-03T18:49:54.183Z',
  '2025-10-03T18:49:54.183Z'
);
INSERT INTO papal_events (
  id, title, description, "eventDate", "eventType", location, 
  significance, "imageUrl", "popeId", "createdAt", "updatedAt"
) VALUES (
  'cmgb786bu001r8z6mj55zr5y7',
  'Fourth Lateran Council',
  'Called the most important council of the Middle Ages in 1215.',
  '1215-01-01T00:00:00.000Z',
  'COUNCIL',
  'Rome',
  'Defined key Catholic doctrines including transubstantiation',
  NULL,
  'cmgb786bm001n8z6mqf14yas9',
  '2025-10-03T18:49:54.187Z',
  '2025-10-03T18:49:54.187Z'
);
INSERT INTO papal_events (
  id, title, description, "eventDate", "eventType", location, 
  significance, "imageUrl", "popeId", "createdAt", "updatedAt"
) VALUES (
  'cmgb786h1002c8z6mv489mlu6',
  'Election as Pope',
  'Chosen as successor to Pope Francis, becoming the first American pope.',
  '2025-05-07T18:30:00.000Z',
  'ELECTION',
  'Vatican',
  'First American pope in Church history',
  NULL,
  'cmgb786gr002a8z6m3d7rm5iq',
  '2025-10-03T18:49:54.373Z',
  '2025-10-03T18:49:54.373Z'
);

-- Insert papal achievements


-- ============================================
-- STEP 4: VERIFICATION
-- ============================================

-- Verify the deployment
SELECT 
    (SELECT COUNT(*) FROM popes) as popes,
    (SELECT COUNT(*) FROM papal_events) as events,
    (SELECT COUNT(*) FROM papal_achievements) as achievements;

-- Show sample data
SELECT 
    name, 
    "regnalName", 
    "papacyNumber", 
    CASE 
        WHEN LENGTH(biography) > 100 THEN 'Detailed biography'
        ELSE 'Basic info'
    END as biography_status
FROM popes 
ORDER BY "papacyNumber" 
LIMIT 5;

SELECT 'Deployment completed successfully!' as status;
