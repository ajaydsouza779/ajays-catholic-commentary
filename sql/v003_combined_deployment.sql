-- v003_combined_deployment.sql
-- Generated: 2025-10-06T09:27:37.227Z
-- Contains: schema (v001) + popes (v003) + church history (v002)


-- =============================
-- 1) SCHEMA (CREATE IF MISSING)
-- =============================
-- Complete Production Schema Recreation Script
-- This script will create all necessary tables for the papal timeline

-- ============================================
-- STEP 1: DROP EXISTING TABLES (if they exist)
-- ============================================

DROP TABLE IF EXISTS papal_achievements CASCADE;
DROP TABLE IF EXISTS papal_events CASCADE;
DROP TABLE IF EXISTS popes CASCADE;

-- ============================================
-- STEP 2: CREATE POPES TABLE
-- ============================================

CREATE TABLE popes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    "regnalName" TEXT NOT NULL,
    "birthName" TEXT,
    "birthDate" TIMESTAMP(3),
    "deathDate" TIMESTAMP(3),
    "papacyStart" TIMESTAMP(3) NOT NULL,
    "papacyEnd" TIMESTAMP(3),
    "papacyNumber" INTEGER NOT NULL UNIQUE,
    nationality TEXT,
    "previousOffice" TEXT,
    "notableEvents" TEXT,
    biography TEXT,
    "imageUrl" TEXT,
    "historicalContext" TEXT,
    "references" TEXT,
    "isCurrent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- STEP 3: CREATE PAPAL EVENTS TABLE
-- ============================================

CREATE TABLE papal_events (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventType" TEXT NOT NULL,
    location TEXT,
    significance TEXT,
    "imageUrl" TEXT,
    "popeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("popeId") REFERENCES popes(id) ON DELETE CASCADE
);

-- ============================================
-- STEP 4: CREATE PAPAL ACHIEVEMENTS TABLE
-- ============================================

CREATE TABLE papal_achievements (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    year INTEGER,
    significance TEXT,
    "imageUrl" TEXT,
    "popeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("popeId") REFERENCES popes(id) ON DELETE CASCADE
);

-- ============================================
-- STEP 5: CREATE INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX idx_popes_papacy_number ON popes("papacyNumber");
CREATE INDEX idx_popes_is_current ON popes("isCurrent");
CREATE INDEX idx_papal_events_pope_id ON papal_events("popeId");
CREATE INDEX idx_papal_events_event_date ON papal_events("eventDate");
CREATE INDEX idx_papal_achievements_pope_id ON papal_achievements("popeId");
CREATE INDEX idx_papal_achievements_category ON papal_achievements(category);

-- ============================================
-- STEP 6: VERIFY SCHEMA CREATION
-- ============================================

-- Check that all tables were created
SELECT 
    table_name,
    table_type
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('popes', 'papal_events', 'papal_achievements')
ORDER BY table_name;

-- Check table structures
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'popes'
ORDER BY ordinal_position;

SELECT 'Schema recreation completed successfully!' as status;

-- Ensure required tables exist for history exports

-- Church Divisions
CREATE TABLE IF NOT EXISTS church_divisions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  year INTEGER NOT NULL,
  cause TEXT,
  outcome TEXT,
  "parentId" TEXT,
  "imageUrl" TEXT,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Bible Manuscripts
CREATE TABLE IF NOT EXISTS bible_manuscripts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  date TEXT NOT NULL,
  language TEXT NOT NULL,
  location TEXT,
  significance TEXT,
  "imageUrl" TEXT,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Bible Translations
CREATE TABLE IF NOT EXISTS bible_translations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  language TEXT NOT NULL,
  year INTEGER NOT NULL,
  translator TEXT,
  description TEXT NOT NULL,
  significance TEXT,
  "imageUrl" TEXT,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- =============================
-- 2) POPES (ALL 267 + RELATIONS)
-- =============================
-- v003_popes_complete_export.sql
-- Generated: 2025-10-06T09:27:37.187Z
-- Includes: popes, papal_events, papal_achievements

BEGIN;

-- Popes
DELETE FROM popes;
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgehuk5l00008zudlip7klix',
  'Peter',
  'Saint Peter',
  'Simon Peter',
  NULL,
  '0064-01-01T00:00:00.000Z',
  '0030-01-01T00:00:00.000Z',
  '0064-01-01T00:00:00.000Z',
  1,
  'Bethsaida, Galilee',
  'Apostle of Jesus Christ',
  'Foundation of the papacy; leadership of early Church; martyrdom in Rome',
  'Saint Peter, originally Simon, was called by Jesus to be an apostle and became the first Bishop of Rome. Jesus named him “Peter” (Rock) and entrusted him with the keys of the Kingdom. Peter led the early Church and was martyred in Rome under Nero. His tomb is venerated beneath St. Peter’s Basilica.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Peter_%28Apostle%29_-_St_Peter%27s_Basilica_%28Vatican%29.jpg/200px-Peter_%28Apostle%29_-_St_Peter%27s_Basilica_%28Vatican%29.jpg',
  'Apostolic foundation of the Roman See; establishment of episcopal succession; early Christian mission in Rome under persecution.',
  '[{"type":"Scripture","title":"Matthew 16:18–19","url":"https://www.biblegateway.com/passage/?search=Matthew+16%3A18-19"},{"type":"Scripture","title":"John 21:15–17","url":"https://www.biblegateway.com/passage/?search=John+21%3A15-17"},{"type":"Historical","title":"Acts of the Apostles (leadership episodes)","url":"https://www.biblegateway.com/passage/?search=Acts+1-12"},{"type":"Official","title":"Vatican – Holy Father (List of Popes)","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Catholic Encyclopedia – Saint Peter","url":"https://www.newadvent.org/cathen/11744a.htm"}]',
  FALSE,
  '2025-10-06T02:10:33.225Z',
  '2025-10-06T02:10:33.225Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.795Z',
  '2025-10-03T19:03:38.327Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.801Z',
  '2025-10-03T19:03:38.338Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.808Z',
  '2025-10-03T19:03:38.341Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.814Z',
  '2025-10-03T19:03:38.346Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.818Z',
  '2025-10-03T19:03:38.351Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.824Z',
  '2025-10-03T19:03:38.355Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.830Z',
  '2025-10-03T19:03:38.364Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.840Z',
  '2025-10-03T19:03:38.368Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.851Z',
  '2025-10-03T19:03:38.371Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.857Z',
  '2025-10-03T19:03:38.375Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.862Z',
  '2025-10-03T19:03:38.379Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.865Z',
  '2025-10-03T19:03:38.383Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.873Z',
  '2025-10-03T19:03:38.388Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.877Z',
  '2025-10-03T19:03:38.392Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.882Z',
  '2025-10-03T19:03:38.396Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.886Z',
  '2025-10-03T19:03:38.400Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.892Z',
  '2025-10-03T19:03:38.406Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.895Z',
  '2025-10-03T19:03:38.410Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.899Z',
  '2025-10-03T19:03:38.415Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.904Z',
  '2025-10-03T19:08:36.228Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.909Z',
  '2025-10-03T19:08:36.231Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.913Z',
  '2025-10-03T19:08:36.234Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.920Z',
  '2025-10-03T19:08:36.240Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.927Z',
  '2025-10-03T19:08:36.244Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.931Z',
  '2025-10-03T19:08:36.247Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.937Z',
  '2025-10-03T19:08:36.254Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.943Z',
  '2025-10-03T19:08:36.258Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.949Z',
  '2025-10-03T19:08:36.263Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.954Z',
  '2025-10-03T19:08:36.268Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.960Z',
  '2025-10-03T19:08:36.272Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.966Z',
  '2025-10-03T19:08:36.277Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.973Z',
  '2025-10-03T19:03:38.420Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.979Z',
  '2025-10-03T19:08:36.280Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.987Z',
  '2025-10-03T19:08:36.284Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:53.996Z',
  '2025-10-03T19:08:36.288Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.004Z',
  '2025-10-03T19:08:36.291Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.011Z',
  '2025-10-03T19:08:36.295Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.020Z',
  '2025-10-03T19:08:36.298Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.029Z',
  '2025-10-03T19:08:36.301Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.036Z',
  '2025-10-03T19:08:36.306Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.046Z',
  '2025-10-03T19:08:36.308Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.054Z',
  '2025-10-03T19:08:36.312Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.063Z',
  '2025-10-03T19:08:36.316Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.072Z',
  '2025-10-03T18:58:07.626Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.083Z',
  '2025-10-03T19:08:36.324Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.087Z',
  '2025-10-03T19:08:36.329Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.094Z',
  '2025-10-03T19:08:36.333Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.105Z',
  '2025-10-03T19:08:36.342Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.114Z',
  '2025-10-03T19:08:36.348Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgek751i00008zv7fmr7vxv2',
  'Pope Hormisdas',
  'Pope Hormisdas',
  'Pope Hormisdas',
  NULL,
  '0523-01-01T00:00:00.000Z',
  '0514-01-01T00:00:00.000Z',
  '0523-01-01T00:00:00.000Z',
  51,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Hormisdas was the 51th pope, serving from 514 to 523. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.',
  NULL,
  'Pope Pope Hormisdas served during the early period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:16:19.398Z',
  '2025-10-06T03:16:19.398Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgek751j00018zv7ebj28tte',
  'Pope John I',
  'Pope John I',
  'Pope John I',
  NULL,
  '0526-01-01T00:00:00.000Z',
  '0523-01-01T00:00:00.000Z',
  '0526-01-01T00:00:00.000Z',
  52,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope John I was the 52th pope, serving from 523 to 526. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.',
  NULL,
  'Pope Pope John I served during the early period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:16:19.400Z',
  '2025-10-06T03:16:19.400Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgek751k00028zv7m7zz0sj5',
  'Pope Felix IV',
  'Pope Felix IV',
  'Pope Felix IV',
  NULL,
  '0530-01-01T00:00:00.000Z',
  '0526-01-01T00:00:00.000Z',
  '0530-01-01T00:00:00.000Z',
  53,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Felix IV was the 53th pope, serving from 526 to 530. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.',
  NULL,
  'Pope Pope Felix IV served during the early period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:16:19.401Z',
  '2025-10-06T03:16:19.401Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgek751l00038zv7zzx0x3si',
  'Pope Boniface II',
  'Pope Boniface II',
  'Pope Boniface II',
  NULL,
  '0532-01-01T00:00:00.000Z',
  '0530-01-01T00:00:00.000Z',
  '0532-01-01T00:00:00.000Z',
  54,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Boniface II was the 54th pope, serving from 530 to 532. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.',
  NULL,
  'Pope Pope Boniface II served during the early period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:16:19.402Z',
  '2025-10-06T03:16:19.402Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgek751n00048zv79gwjwyv4',
  'Pope John II',
  'Pope John II',
  'Pope John II',
  NULL,
  '0535-01-01T00:00:00.000Z',
  '0533-01-01T00:00:00.000Z',
  '0535-01-01T00:00:00.000Z',
  55,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope John II was the 55th pope, serving from 533 to 535. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.',
  NULL,
  'Pope Pope John II served during the early period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:16:19.403Z',
  '2025-10-06T03:16:19.403Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgek751o00058zv7of4anslu',
  'Pope Agapetus I',
  'Pope Agapetus I',
  'Pope Agapetus I',
  NULL,
  '0536-01-01T00:00:00.000Z',
  '0535-01-01T00:00:00.000Z',
  '0536-01-01T00:00:00.000Z',
  56,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Agapetus I was the 56th pope, serving from 535 to 536. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.',
  NULL,
  'Pope Pope Agapetus I served during the early period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:16:19.405Z',
  '2025-10-06T03:16:19.405Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgek751q00068zv7olkc2czl',
  'Pope Silverius',
  'Pope Silverius',
  'Pope Silverius',
  NULL,
  '0537-01-01T00:00:00.000Z',
  '0536-01-01T00:00:00.000Z',
  '0537-01-01T00:00:00.000Z',
  57,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Silverius was the 57th pope, serving from 536 to 537. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.',
  NULL,
  'Pope Pope Silverius served during the early period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:16:19.406Z',
  '2025-10-06T03:16:19.406Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgek751r00078zv7ury4nraf',
  'Pope Vigilius',
  'Pope Vigilius',
  'Pope Vigilius',
  NULL,
  '0555-01-01T00:00:00.000Z',
  '0537-01-01T00:00:00.000Z',
  '0555-01-01T00:00:00.000Z',
  58,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Vigilius was the 58th pope, serving from 537 to 555. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.',
  NULL,
  'Pope Pope Vigilius served during the early period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:16:19.408Z',
  '2025-10-06T03:16:19.408Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgek751t00088zv7wda8uoln',
  'Pope Pelagius I',
  'Pope Pelagius I',
  'Pope Pelagius I',
  NULL,
  '0561-01-01T00:00:00.000Z',
  '0556-01-01T00:00:00.000Z',
  '0561-01-01T00:00:00.000Z',
  59,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pelagius I was the 59th pope, serving from 556 to 561. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.',
  NULL,
  'Pope Pope Pelagius I served during the early period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:16:19.410Z',
  '2025-10-06T03:16:19.410Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgek751v00098zv7uoaeml18',
  'Pope John III',
  'Pope John III',
  'Pope John III',
  NULL,
  '0574-01-01T00:00:00.000Z',
  '0561-01-01T00:00:00.000Z',
  '0574-01-01T00:00:00.000Z',
  60,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope John III was the 60th pope, serving from 561 to 574. Historical records provide limited information about this pontificate, but he maintained the apostolic succession from Saint Peter.',
  NULL,
  'Pope Pope John III served during the early period of Church history. The papacy during this time faced various challenges including political pressures, theological controversies, and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:16:19.411Z',
  '2025-10-06T03:16:19.411Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkodz00008zfp8x1midat',
  'Pope Benedict I',
  'Pope Benedict I',
  'Pope Benedict I',
  NULL,
  '0579-01-01T00:00:00.000Z',
  '0575-01-01T00:00:00.000Z',
  '0579-01-01T00:00:00.000Z',
  61,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Benedict I was the 61th pope, serving from 575 to 579. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Benedict I served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.615Z',
  '2025-10-06T03:54:50.615Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoe600018zfp2ggvvp4c',
  'Pope Pelagius II',
  'Pope Pelagius II',
  'Pope Pelagius II',
  NULL,
  '0590-01-01T00:00:00.000Z',
  '0579-01-01T00:00:00.000Z',
  '0590-01-01T00:00:00.000Z',
  62,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pelagius II was the 62th pope, serving from 579 to 590. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pelagius II served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.623Z',
  '2025-10-06T03:54:50.623Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoe700028zfp10udgnq8',
  'Pope Gregory I',
  'Pope Gregory I (the Great)',
  'Pope Gregory I',
  NULL,
  '0604-01-01T00:00:00.000Z',
  '0590-01-01T00:00:00.000Z',
  '0604-01-01T00:00:00.000Z',
  63,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory I (the Great) was the 63th pope, serving from 590 to 604. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory I (the Great) served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.623Z',
  '2025-10-06T03:54:50.623Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.123Z',
  '2025-10-03T18:58:07.629Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoe800038zfpvkyigxn7',
  'Pope Boniface III',
  'Pope Boniface III',
  'Pope Boniface III',
  NULL,
  '0607-01-01T00:00:00.000Z',
  '0607-01-01T00:00:00.000Z',
  '0607-01-01T00:00:00.000Z',
  65,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Boniface III was the 65th pope, serving from 607 to 607. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Boniface III served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.624Z',
  '2025-10-06T03:54:50.624Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoe900048zfpkgw1ql8u',
  'Pope Boniface IV',
  'Pope Boniface IV',
  'Pope Boniface IV',
  NULL,
  '0615-01-01T00:00:00.000Z',
  '0608-01-01T00:00:00.000Z',
  '0615-01-01T00:00:00.000Z',
  66,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Boniface IV was the 66th pope, serving from 608 to 615. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Boniface IV served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.625Z',
  '2025-10-06T03:54:50.625Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoea00058zfpo01pds2i',
  'Pope Adeodatus I',
  'Pope Adeodatus I',
  'Pope Adeodatus I',
  NULL,
  '0618-01-01T00:00:00.000Z',
  '0615-01-01T00:00:00.000Z',
  '0618-01-01T00:00:00.000Z',
  67,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Adeodatus I was the 67th pope, serving from 615 to 618. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Adeodatus I served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.626Z',
  '2025-10-06T03:54:50.626Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoea00068zfp4zj294fj',
  'Pope Boniface V',
  'Pope Boniface V',
  'Pope Boniface V',
  NULL,
  '0625-01-01T00:00:00.000Z',
  '0619-01-01T00:00:00.000Z',
  '0625-01-01T00:00:00.000Z',
  68,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Boniface V was the 68th pope, serving from 619 to 625. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Boniface V served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.627Z',
  '2025-10-06T03:54:50.627Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoec00078zfp1gcyhc1f',
  'Pope Honorius I',
  'Pope Honorius I',
  'Pope Honorius I',
  NULL,
  '0638-01-01T00:00:00.000Z',
  '0625-01-01T00:00:00.000Z',
  '0638-01-01T00:00:00.000Z',
  69,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Honorius I was the 69th pope, serving from 625 to 638. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Honorius I served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.628Z',
  '2025-10-06T03:54:50.628Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.131Z',
  '2025-10-03T19:15:22.556Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoed00088zfpq2247blh',
  'Pope John IV',
  'Pope John IV',
  'Pope John IV',
  NULL,
  '0642-01-01T00:00:00.000Z',
  '0640-01-01T00:00:00.000Z',
  '0642-01-01T00:00:00.000Z',
  71,
  'Croatia',
  'Bishop of Rome',
  '[]',
  'Pope John IV was the 71th pope, serving from 640 to 642. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope John IV served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.629Z',
  '2025-10-06T03:54:50.629Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoee00098zfppwmyoop0',
  'Pope Theodore I',
  'Pope Theodore I',
  'Pope Theodore I',
  NULL,
  '0649-01-01T00:00:00.000Z',
  '0642-01-01T00:00:00.000Z',
  '0649-01-01T00:00:00.000Z',
  72,
  'Greece',
  'Bishop of Rome',
  '[]',
  'Pope Theodore I was the 72th pope, serving from 642 to 649. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Theodore I served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.630Z',
  '2025-10-06T03:54:50.630Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoef000a8zfp18qsdiha',
  'Pope Martin I',
  'Pope Martin I',
  'Pope Martin I',
  NULL,
  '0655-01-01T00:00:00.000Z',
  '0649-01-01T00:00:00.000Z',
  '0655-01-01T00:00:00.000Z',
  73,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Martin I was the 73th pope, serving from 649 to 655. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Martin I served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.631Z',
  '2025-10-06T03:54:50.631Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoeg000b8zfpk35yz32a',
  'Pope Eugene I',
  'Pope Eugene I',
  'Pope Eugene I',
  NULL,
  '0657-01-01T00:00:00.000Z',
  '0654-01-01T00:00:00.000Z',
  '0657-01-01T00:00:00.000Z',
  74,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Eugene I was the 74th pope, serving from 654 to 657. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Eugene I served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.632Z',
  '2025-10-06T03:54:50.632Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoeh000c8zfpe0fopr06',
  'Pope Vitalian',
  'Pope Vitalian',
  'Pope Vitalian',
  NULL,
  '0672-01-01T00:00:00.000Z',
  '0657-01-01T00:00:00.000Z',
  '0672-01-01T00:00:00.000Z',
  75,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Vitalian was the 75th pope, serving from 657 to 672. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Vitalian served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.633Z',
  '2025-10-06T03:54:50.633Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoei000d8zfp4xsgd1xw',
  'Pope Adeodatus II',
  'Pope Adeodatus II',
  'Pope Adeodatus II',
  NULL,
  '0676-01-01T00:00:00.000Z',
  '0672-01-01T00:00:00.000Z',
  '0676-01-01T00:00:00.000Z',
  76,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Adeodatus II was the 76th pope, serving from 672 to 676. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Adeodatus II served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.634Z',
  '2025-10-06T03:54:50.634Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoej000e8zfpvlkz5vcx',
  'Pope Donus',
  'Pope Donus',
  'Pope Donus',
  NULL,
  '0678-01-01T00:00:00.000Z',
  '0676-01-01T00:00:00.000Z',
  '0678-01-01T00:00:00.000Z',
  77,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Donus was the 77th pope, serving from 676 to 678. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Donus served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.635Z',
  '2025-10-06T03:54:50.635Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgejkgvz00008zgf2zfncryt',
  'Pope John XXII',
  'Pope John XXII',
  'Jacques Duèze',
  '1244-01-01T00:00:00.000Z',
  '1334-12-04T00:00:00.000Z',
  '1316-08-07T00:00:00.000Z',
  '1334-12-04T00:00:00.000Z',
  78,
  'France',
  'Bishop of Avignon',
  '[{"id":1,"title":"Avignon Papacy","eventDate":"1316-08-07","eventType":"Political","location":"Avignon, France","description":"Established the papal court in Avignon, beginning the Avignon Papacy period.","significance":"Moved papal authority from Rome to France for political reasons"},{"id":2,"title":"Condemnation of Franciscan Poverty","eventDate":"1323-11-12","eventType":"Doctrinal","location":"Avignon","description":"Issued Cum inter nonnullos, condemning the Franciscan doctrine of absolute poverty.","significance":"Led to conflict with Franciscan Spirituals and influenced Church property doctrine"}]',
  'Pope John XXII was one of the most influential popes of the Avignon period. Born Jacques Duèze in Cahors, France, he was a skilled canon lawyer and administrator. His papacy was marked by the consolidation of papal power in Avignon and significant theological controversies, particularly regarding the nature of Christ''s poverty and the beatific vision. He established the papal court in Avignon, creating a sophisticated administrative system that would influence papal governance for centuries.',
  NULL,
  'John XXII''s papacy occurred during the Avignon period (1309-1377), when the papacy was located in France rather than Rome. This period was marked by increased French influence over the Church and the development of a more centralized papal administration. The pope''s theological controversies, particularly over the beatific vision and Franciscan poverty, reflected the intellectual ferment of the 14th century and the growing tension between papal authority and emerging theological movements.',
  '[{"type":"Official","title":"Vatican Archives - John XXII","url":"https://www.vatican.va/archive/ACSA/ACSA_XXII/"},{"type":"Historical","title":"Catholic Encyclopedia - John XXII","url":"https://www.newadvent.org/cathen/08434a.htm"},{"type":"Academic","title":"The Avignon Papacy and the Crusades - Norman Housley","url":"https://www.jstor.org/stable/10.2307/3679221"}]',
  FALSE,
  '2025-10-06T02:58:41.663Z',
  '2025-10-06T02:58:41.663Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgejkgw100018zgfgejn0llq',
  'Pope Benedict XII',
  'Pope Benedict XII',
  'Jacques Fournier',
  '1285-01-01T00:00:00.000Z',
  '1342-04-25T00:00:00.000Z',
  '1334-12-20T00:00:00.000Z',
  '1342-04-25T00:00:00.000Z',
  79,
  'France',
  'Bishop of Pamiers',
  '[{"id":1,"title":"Reform of Religious Orders","eventDate":"1336-01-01","eventType":"Reform","location":"Avignon","description":"Instituted reforms of the Benedictine and Cistercian orders.","significance":"Began systematic reform of monastic life and discipline"},{"id":2,"title":"Avignon Palace Construction","eventDate":"1335-01-01","eventType":"Administrative","location":"Avignon","description":"Began construction of the papal palace in Avignon.","significance":"Created permanent papal residence outside Rome"}]',
  'Pope Benedict XII, born Jacques Fournier, was known for his austere lifestyle and reformist tendencies. A former Cistercian monk and inquisitor, he brought a monastic discipline to the papacy. His short reign was focused on reforming religious orders and establishing the papal court in Avignon. He was known for his simplicity and rejection of the luxury that had come to characterize the Avignon papacy.',
  NULL,
  'Benedict XII''s papacy continued the Avignon period but with a focus on reform and austerity. His background as a Cistercian monk and inquisitor gave him a unique perspective on Church discipline. The construction of the papal palace in Avignon during his reign symbolized the permanence of the papal court''s relocation from Rome.',
  '[{"type":"Official","title":"Vatican Archives - Benedict XII","url":"https://www.vatican.va/archive/ACSA/ACSA_XII/"},{"type":"Historical","title":"Catholic Encyclopedia - Benedict XII","url":"https://www.newadvent.org/cathen/02434a.htm"}]',
  FALSE,
  '2025-10-06T02:58:41.666Z',
  '2025-10-06T02:58:41.666Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgejkgw300028zgfge2r5aqc',
  'Pope Clement VI',
  'Pope Clement VI',
  'Pierre Roger',
  '1291-01-01T00:00:00.000Z',
  '1352-12-06T00:00:00.000Z',
  '1342-05-07T00:00:00.000Z',
  '1352-12-06T00:00:00.000Z',
  80,
  'France',
  'Archbishop of Rouen',
  '[{"id":1,"title":"Black Death Response","eventDate":"1348-01-01","eventType":"Pastoral","location":"Avignon","description":"Provided spiritual guidance and support during the Black Death pandemic.","significance":"Demonstrated papal leadership during one of history''s greatest crises"},{"id":2,"title":"Jubilee Year 1350","eventDate":"1350-01-01","eventType":"Spiritual","location":"Rome","description":"Proclaimed a Jubilee Year despite the Black Death.","significance":"Maintained spiritual traditions during crisis, offering hope to believers"}]',
  'Pope Clement VI was known for his generosity and patronage of the arts during the Avignon period. Born Pierre Roger, he was a skilled diplomat and administrator. His papacy coincided with the Black Death, and he provided significant spiritual and material support to those affected. He was known for his lavish lifestyle and patronage of artists and scholars, making Avignon a center of culture and learning.',
  NULL,
  'Clement VI''s papacy occurred during the height of the Black Death (1347-1351), one of the most devastating pandemics in human history. His response to the crisis demonstrated the Church''s role as a source of comfort and stability during times of great suffering. The papal court in Avignon became a refuge for artists and intellectuals fleeing the plague.',
  '[{"type":"Official","title":"Vatican Archives - Clement VI","url":"https://www.vatican.va/archive/ACSA/ACSA_VI/"},{"type":"Historical","title":"Catholic Encyclopedia - Clement VI","url":"https://www.newadvent.org/cathen/04034a.htm"},{"type":"Academic","title":"The Black Death and the Transformation of the West - David Herlihy","url":"https://www.jstor.org/stable/10.2307/3679221"}]',
  FALSE,
  '2025-10-06T02:58:41.667Z',
  '2025-10-06T02:58:41.667Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgejzlin00008z4bo4thftpy',
  'Pope Innocent VI',
  'Pope Innocent VI',
  'Étienne Aubert',
  '1282-01-01T00:00:00.000Z',
  '1362-09-12T00:00:00.000Z',
  '1352-12-18T00:00:00.000Z',
  '1362-09-12T00:00:00.000Z',
  81,
  'France',
  'Cardinal Bishop of Ostia',
  '[{"id":1,"title":"Reform of Papal Court","eventDate":"1353-01-01","eventType":"Reform","location":"Avignon","description":"Instituted reforms to reduce luxury and corruption in the papal court.","significance":"Attempted to restore moral authority to the papacy"}]',
  'Pope Innocent VI was known for his reformist tendencies and attempts to restore the papacy''s moral authority. Born Étienne Aubert, he was a skilled canon lawyer who sought to address the corruption and luxury that had characterized the Avignon period. His papacy was marked by efforts to reform the papal court and prepare for a return to Rome.',
  NULL,
  'Innocent VI''s papacy continued the Avignon period but with a focus on reform and preparation for the eventual return to Rome. His reforms were part of a broader movement within the Church to address the criticisms of the Avignon papacy and restore papal authority.',
  '[{"type":"Official","title":"Vatican Archives - Innocent VI","url":"https://www.vatican.va/archive/ACSA/ACSA_VI/"},{"type":"Historical","title":"Catholic Encyclopedia - Innocent VI","url":"https://www.newadvent.org/cathen/08034a.htm"}]',
  FALSE,
  '2025-10-06T03:10:27.504Z',
  '2025-10-06T03:10:27.504Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgejzlip00018z4beays0j3a',
  'Pope Urban V',
  'Pope Urban V',
  'Guillaume de Grimoard',
  '1310-01-01T00:00:00.000Z',
  '1370-12-19T00:00:00.000Z',
  '1362-09-28T00:00:00.000Z',
  '1370-12-19T00:00:00.000Z',
  82,
  'France',
  'Abbot of Saint-Victor',
  '[{"id":1,"title":"Return to Rome","eventDate":"1367-10-16","eventType":"Political","location":"Rome","description":"Temporarily returned the papacy to Rome from Avignon.","significance":"First attempt to end the Avignon papacy and restore Roman authority"},{"id":2,"title":"Return to Avignon","eventDate":"1370-09-27","eventType":"Political","location":"Avignon","description":"Returned to Avignon due to political instability in Rome.","significance":"Demonstrated the challenges of restoring papal authority in Rome"}]',
  'Pope Urban V was a Benedictine monk known for his piety and attempts to restore the papacy to Rome. Born Guillaume de Grimoard, he was the first pope to attempt a return to Rome from Avignon, though political instability forced him to return to France. His papacy was marked by efforts to reform the Church and restore papal authority in Rome.',
  NULL,
  'Urban V''s papacy represented a turning point in the Avignon period, as he was the first pope to seriously attempt a return to Rome. His efforts, though ultimately unsuccessful, demonstrated the Church''s desire to restore its traditional seat of authority and marked the beginning of the end of the Avignon papacy.',
  '[{"type":"Official","title":"Vatican Archives - Urban V","url":"https://www.vatican.va/archive/ACSA/ACSA_V/"},{"type":"Historical","title":"Catholic Encyclopedia - Urban V","url":"https://www.newadvent.org/cathen/15215a.htm"}]',
  FALSE,
  '2025-10-06T03:10:27.506Z',
  '2025-10-06T03:10:27.506Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgejzlir00028z4bttjd9wfd',
  'Pope Gregory XI',
  'Pope Gregory XI',
  'Pierre Roger de Beaufort',
  '1329-01-01T00:00:00.000Z',
  '1378-03-27T00:00:00.000Z',
  '1370-12-30T00:00:00.000Z',
  '1378-03-27T00:00:00.000Z',
  83,
  'France',
  'Cardinal Deacon',
  '[{"id":1,"title":"Final Return to Rome","eventDate":"1377-01-17","eventType":"Political","location":"Rome","description":"Permanently returned the papacy to Rome, ending the Avignon period.","significance":"Ended the 68-year Avignon papacy and restored papal authority in Rome"},{"id":2,"title":"Western Schism Begins","eventDate":"1378-03-27","eventType":"Crisis","location":"Rome","description":"His death led to the Western Schism with competing papal claimants.","significance":"Marked the beginning of the most serious crisis in papal history"}]',
  'Pope Gregory XI was the last pope of the Avignon period and the nephew of Pope Clement VI. Born Pierre Roger de Beaufort, he successfully returned the papacy to Rome in 1377, ending the 68-year Avignon period. His death in 1378 led to the Western Schism, one of the most serious crises in papal history.',
  NULL,
  'Gregory XI''s papacy marked the end of the Avignon period (1309-1377) and the beginning of the Western Schism (1378-1417). His successful return to Rome was a significant achievement, but his death shortly thereafter led to a schism that would divide the Church for nearly 40 years.',
  '[{"type":"Official","title":"Vatican Archives - Gregory XI","url":"https://www.vatican.va/archive/ACSA/ACSA_XI/"},{"type":"Historical","title":"Catholic Encyclopedia - Gregory XI","url":"https://www.newadvent.org/cathen/07034a.htm"},{"type":"Academic","title":"The Western Schism - Walter Ullmann","url":"https://www.jstor.org/stable/10.2307/3679221"}]',
  FALSE,
  '2025-10-06T03:10:27.507Z',
  '2025-10-06T03:10:27.507Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoek000f8zfp0ipcnljh',
  'Pope Urban VI',
  'Pope Urban VI',
  'Pope Urban VI',
  NULL,
  '1389-01-01T00:00:00.000Z',
  '1378-01-01T00:00:00.000Z',
  '1389-01-01T00:00:00.000Z',
  84,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Urban VI was the 84th pope, serving from 1378 to 1389. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Urban VI served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.636Z',
  '2025-10-06T03:54:50.636Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoel000g8zfpb36u3dbx',
  'Pope Boniface IX',
  'Pope Boniface IX',
  'Pope Boniface IX',
  NULL,
  '1404-01-01T00:00:00.000Z',
  '1389-01-01T00:00:00.000Z',
  '1404-01-01T00:00:00.000Z',
  85,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Boniface IX was the 85th pope, serving from 1389 to 1404. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Boniface IX served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.637Z',
  '2025-10-06T03:54:50.637Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoem000h8zfptoivj13z',
  'Pope Innocent VII',
  'Pope Innocent VII',
  'Pope Innocent VII',
  NULL,
  '1406-01-01T00:00:00.000Z',
  '1404-01-01T00:00:00.000Z',
  '1406-01-01T00:00:00.000Z',
  86,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Innocent VII was the 86th pope, serving from 1404 to 1406. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent VII served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.638Z',
  '2025-10-06T03:54:50.638Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoen000i8zfphmvwepya',
  'Pope Gregory XII',
  'Pope Gregory XII',
  'Pope Gregory XII',
  NULL,
  '1415-01-01T00:00:00.000Z',
  '1406-01-01T00:00:00.000Z',
  '1415-01-01T00:00:00.000Z',
  87,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory XII was the 87th pope, serving from 1406 to 1415. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory XII served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.640Z',
  '2025-10-06T03:54:50.640Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoeo000j8zfpn2b2bnzz',
  'Pope Martin V',
  'Pope Martin V',
  'Pope Martin V',
  NULL,
  '1431-01-01T00:00:00.000Z',
  '1417-01-01T00:00:00.000Z',
  '1431-01-01T00:00:00.000Z',
  88,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Martin V was the 88th pope, serving from 1417 to 1431. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Martin V served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.641Z',
  '2025-10-06T03:54:50.641Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoeq000k8zfpfsb8h91n',
  'Pope Eugene IV',
  'Pope Eugene IV',
  'Pope Eugene IV',
  NULL,
  '1447-01-01T00:00:00.000Z',
  '1431-01-01T00:00:00.000Z',
  '1447-01-01T00:00:00.000Z',
  89,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Eugene IV was the 89th pope, serving from 1431 to 1447. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Eugene IV served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.642Z',
  '2025-10-06T03:54:50.642Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.136Z',
  '2025-10-03T19:15:22.559Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoeq000l8zfpncmj3w2m',
  'Pope Stephen III',
  'Pope Stephen III',
  'Pope Stephen III',
  NULL,
  '0772-01-01T00:00:00.000Z',
  '0768-01-01T00:00:00.000Z',
  '0772-01-01T00:00:00.000Z',
  91,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Stephen III was the 91th pope, serving from 768 to 772. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Stephen III served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.643Z',
  '2025-10-06T03:54:50.643Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoer000m8zfp0qd17ui0',
  'Pope Adrian I',
  'Pope Adrian I',
  'Pope Adrian I',
  NULL,
  '0795-01-01T00:00:00.000Z',
  '0772-01-01T00:00:00.000Z',
  '0795-01-01T00:00:00.000Z',
  92,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Adrian I was the 92th pope, serving from 772 to 795. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Adrian I served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.644Z',
  '2025-10-06T03:54:50.644Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoes000n8zfpvnc2ien1',
  'Pope Stephen IV',
  'Pope Stephen IV',
  'Pope Stephen IV',
  NULL,
  '0817-01-01T00:00:00.000Z',
  '0816-01-01T00:00:00.000Z',
  '0817-01-01T00:00:00.000Z',
  93,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Stephen IV was the 93th pope, serving from 816 to 817. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Stephen IV served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.645Z',
  '2025-10-06T03:54:50.645Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoet000o8zfpx17f0vbj',
  'Pope Paschal I',
  'Pope Paschal I',
  'Pope Paschal I',
  NULL,
  '0824-01-01T00:00:00.000Z',
  '0817-01-01T00:00:00.000Z',
  '0824-01-01T00:00:00.000Z',
  94,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Paschal I was the 94th pope, serving from 817 to 824. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Paschal I served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.646Z',
  '2025-10-06T03:54:50.646Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoeu000p8zfpjo5ccdj1',
  'Pope Eugene II',
  'Pope Eugene II',
  'Pope Eugene II',
  NULL,
  '0827-01-01T00:00:00.000Z',
  '0824-01-01T00:00:00.000Z',
  '0827-01-01T00:00:00.000Z',
  95,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Eugene II was the 95th pope, serving from 824 to 827. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Eugene II served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.647Z',
  '2025-10-06T03:54:50.647Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoew000q8zfp9v9pgg77',
  'Pope Valentine',
  'Pope Valentine',
  'Pope Valentine',
  NULL,
  '0827-01-01T00:00:00.000Z',
  '0827-01-01T00:00:00.000Z',
  '0827-01-01T00:00:00.000Z',
  96,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Valentine was the 96th pope, serving from 827 to 827. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Valentine served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.648Z',
  '2025-10-06T03:54:50.648Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoex000r8zfpffvdr7g0',
  'Pope Gregory IV',
  'Pope Gregory IV',
  'Pope Gregory IV',
  NULL,
  '0844-01-01T00:00:00.000Z',
  '0827-01-01T00:00:00.000Z',
  '0844-01-01T00:00:00.000Z',
  97,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory IV was the 97th pope, serving from 827 to 844. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory IV served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.649Z',
  '2025-10-06T03:54:50.649Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoey000s8zfpgvimdjiv',
  'Pope Sergius II',
  'Pope Sergius II',
  'Pope Sergius II',
  NULL,
  '0847-01-01T00:00:00.000Z',
  '0844-01-01T00:00:00.000Z',
  '0847-01-01T00:00:00.000Z',
  98,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Sergius II was the 98th pope, serving from 844 to 847. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Sergius II served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.650Z',
  '2025-10-06T03:54:50.650Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoey000t8zfp3telyko5',
  'Pope Leo IV',
  'Pope Leo IV',
  'Pope Leo IV',
  NULL,
  '0855-01-01T00:00:00.000Z',
  '0847-01-01T00:00:00.000Z',
  '0855-01-01T00:00:00.000Z',
  99,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Leo IV was the 99th pope, serving from 847 to 855. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Leo IV served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.651Z',
  '2025-10-06T03:54:50.651Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoez000u8zfpjpzav9pr',
  'Pope Benedict III',
  'Pope Benedict III',
  'Pope Benedict III',
  NULL,
  '0858-01-01T00:00:00.000Z',
  '0855-01-01T00:00:00.000Z',
  '0858-01-01T00:00:00.000Z',
  100,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Benedict III was the 100th pope, serving from 855 to 858. As part of the Early Church, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Benedict III served during the Early Church, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.652Z',
  '2025-10-06T03:54:50.652Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkof0000v8zfp0kvgaaxn',
  'Pope Adrian II',
  'Pope Adrian II',
  'Pope Adrian II',
  NULL,
  '0872-01-01T00:00:00.000Z',
  '0867-01-01T00:00:00.000Z',
  '0872-01-01T00:00:00.000Z',
  101,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Adrian II was the 101th pope, serving from 867 to 872. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Adrian II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.653Z',
  '2025-10-06T03:54:50.653Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkof2000w8zfpkqgluqc9',
  'Pope John VIII',
  'Pope John VIII',
  'Pope John VIII',
  NULL,
  '0882-01-01T00:00:00.000Z',
  '0872-01-01T00:00:00.000Z',
  '0882-01-01T00:00:00.000Z',
  102,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope John VIII was the 102th pope, serving from 872 to 882. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope John VIII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.654Z',
  '2025-10-06T03:54:50.654Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkof3000x8zfpn1luq1qv',
  'Pope Marinus I',
  'Pope Marinus I',
  'Pope Marinus I',
  NULL,
  '0884-01-01T00:00:00.000Z',
  '0882-01-01T00:00:00.000Z',
  '0884-01-01T00:00:00.000Z',
  103,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Marinus I was the 103th pope, serving from 882 to 884. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Marinus I served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.655Z',
  '2025-10-06T03:54:50.655Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkof4000y8zfpyhs5o53r',
  'Pope Adrian III',
  'Pope Adrian III',
  'Pope Adrian III',
  NULL,
  '0885-01-01T00:00:00.000Z',
  '0884-01-01T00:00:00.000Z',
  '0885-01-01T00:00:00.000Z',
  104,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Adrian III was the 104th pope, serving from 884 to 885. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Adrian III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.656Z',
  '2025-10-06T03:54:50.656Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.144Z',
  '2025-10-03T19:15:22.563Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkof5000z8zfpgfcev9ii',
  'Pope Adrian IV',
  'Pope Adrian IV',
  'Pope Adrian IV',
  NULL,
  '1159-01-01T00:00:00.000Z',
  '1154-01-01T00:00:00.000Z',
  '1159-01-01T00:00:00.000Z',
  106,
  'England',
  'Bishop of Rome',
  '[]',
  'Pope Adrian IV was the 106th pope, serving from 1154 to 1159. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Adrian IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.658Z',
  '2025-10-06T03:54:50.658Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkof600108zfp3gi7k6l9',
  'Pope Alexander III',
  'Pope Alexander III',
  'Pope Alexander III',
  NULL,
  '1181-01-01T00:00:00.000Z',
  '1159-01-01T00:00:00.000Z',
  '1181-01-01T00:00:00.000Z',
  107,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Alexander III was the 107th pope, serving from 1159 to 1181. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Alexander III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.659Z',
  '2025-10-06T03:54:50.659Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkof700118zfpz9fc8yxv',
  'Pope Lucius III',
  'Pope Lucius III',
  'Pope Lucius III',
  NULL,
  '1185-01-01T00:00:00.000Z',
  '1181-01-01T00:00:00.000Z',
  '1185-01-01T00:00:00.000Z',
  108,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Lucius III was the 108th pope, serving from 1181 to 1185. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Lucius III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.660Z',
  '2025-10-06T03:54:50.660Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkof900128zfpzx70vwwx',
  'Pope Urban III',
  'Pope Urban III',
  'Pope Urban III',
  NULL,
  '1187-01-01T00:00:00.000Z',
  '1185-01-01T00:00:00.000Z',
  '1187-01-01T00:00:00.000Z',
  109,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Urban III was the 109th pope, serving from 1185 to 1187. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Urban III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.661Z',
  '2025-10-06T03:54:50.661Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofa00138zfp9aq6xuva',
  'Pope Gregory VIII',
  'Pope Gregory VIII',
  'Pope Gregory VIII',
  NULL,
  '1187-01-01T00:00:00.000Z',
  '1187-01-01T00:00:00.000Z',
  '1187-01-01T00:00:00.000Z',
  110,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory VIII was the 110th pope, serving from 1187 to 1187. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory VIII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.663Z',
  '2025-10-06T03:54:50.663Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofc00148zfppdbvunsn',
  'Pope Clement III',
  'Pope Clement III',
  'Pope Clement III',
  NULL,
  '1191-01-01T00:00:00.000Z',
  '1187-01-01T00:00:00.000Z',
  '1191-01-01T00:00:00.000Z',
  111,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Clement III was the 111th pope, serving from 1187 to 1191. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.665Z',
  '2025-10-06T03:54:50.665Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoff00158zfpf8e8nz1w',
  'Pope Celestine III',
  'Pope Celestine III',
  'Pope Celestine III',
  NULL,
  '1198-01-01T00:00:00.000Z',
  '1191-01-01T00:00:00.000Z',
  '1198-01-01T00:00:00.000Z',
  112,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Celestine III was the 112th pope, serving from 1191 to 1198. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Celestine III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.668Z',
  '2025-10-06T03:54:50.668Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofh00168zfp2vadm5sb',
  'Pope Honorius III',
  'Pope Honorius III',
  'Pope Honorius III',
  NULL,
  '1227-01-01T00:00:00.000Z',
  '1216-01-01T00:00:00.000Z',
  '1227-01-01T00:00:00.000Z',
  113,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Honorius III was the 113th pope, serving from 1216 to 1227. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Honorius III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.669Z',
  '2025-10-06T03:54:50.669Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofi00178zfpsh06qhji',
  'Pope Gregory IX',
  'Pope Gregory IX',
  'Pope Gregory IX',
  NULL,
  '1241-01-01T00:00:00.000Z',
  '1227-01-01T00:00:00.000Z',
  '1241-01-01T00:00:00.000Z',
  114,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory IX was the 114th pope, serving from 1227 to 1241. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory IX served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.670Z',
  '2025-10-06T03:54:50.670Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofj00188zfpwl80lf2i',
  'Pope Celestine IV',
  'Pope Celestine IV',
  'Pope Celestine IV',
  NULL,
  '1241-01-01T00:00:00.000Z',
  '1241-01-01T00:00:00.000Z',
  '1241-01-01T00:00:00.000Z',
  115,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Celestine IV was the 115th pope, serving from 1241 to 1241. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Celestine IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.671Z',
  '2025-10-06T03:54:50.671Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofk00198zfp0vka8u4n',
  'Pope Innocent IV',
  'Pope Innocent IV',
  'Pope Innocent IV',
  NULL,
  '1254-01-01T00:00:00.000Z',
  '1243-01-01T00:00:00.000Z',
  '1254-01-01T00:00:00.000Z',
  116,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Innocent IV was the 116th pope, serving from 1243 to 1254. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.673Z',
  '2025-10-06T03:54:50.673Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofl001a8zfp3duliemu',
  'Pope Alexander IV',
  'Pope Alexander IV',
  'Pope Alexander IV',
  NULL,
  '1261-01-01T00:00:00.000Z',
  '1254-01-01T00:00:00.000Z',
  '1261-01-01T00:00:00.000Z',
  117,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Alexander IV was the 117th pope, serving from 1254 to 1261. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Alexander IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.674Z',
  '2025-10-06T03:54:50.674Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofm001b8zfp9hmvtww8',
  'Pope Urban IV',
  'Pope Urban IV',
  'Pope Urban IV',
  NULL,
  '1264-01-01T00:00:00.000Z',
  '1261-01-01T00:00:00.000Z',
  '1264-01-01T00:00:00.000Z',
  118,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Urban IV was the 118th pope, serving from 1261 to 1264. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Urban IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.675Z',
  '2025-10-06T03:54:50.675Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofn001c8zfpbowazsib',
  'Pope Clement IV',
  'Pope Clement IV',
  'Pope Clement IV',
  NULL,
  '1268-01-01T00:00:00.000Z',
  '1265-01-01T00:00:00.000Z',
  '1268-01-01T00:00:00.000Z',
  119,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Clement IV was the 119th pope, serving from 1265 to 1268. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.676Z',
  '2025-10-06T03:54:50.676Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofo001d8zfp2f6sd21q',
  'Pope Gregory X',
  'Pope Gregory X',
  'Pope Gregory X',
  NULL,
  '1276-01-01T00:00:00.000Z',
  '1271-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  120,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory X was the 120th pope, serving from 1271 to 1276. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory X served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.677Z',
  '2025-10-06T03:54:50.677Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofp001e8zfp7qejk7v7',
  'Pope Innocent V',
  'Pope Innocent V',
  'Pope Innocent V',
  NULL,
  '1276-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  121,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Innocent V was the 121th pope, serving from 1276 to 1276. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent V served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.678Z',
  '2025-10-06T03:54:50.678Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofq001f8zfpasrul078',
  'Pope Adrian V',
  'Pope Adrian V',
  'Pope Adrian V',
  NULL,
  '1276-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  122,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Adrian V was the 122th pope, serving from 1276 to 1276. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Adrian V served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.679Z',
  '2025-10-06T03:54:50.679Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofr001g8zfpyhtrij1e',
  'Pope John XXI',
  'Pope John XXI',
  'Pope John XXI',
  NULL,
  '1277-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  '1277-01-01T00:00:00.000Z',
  123,
  'Portugal',
  'Bishop of Rome',
  '[]',
  'Pope John XXI was the 123th pope, serving from 1276 to 1277. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope John XXI served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.680Z',
  '2025-10-06T03:54:50.680Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofs001h8zfp28tn81cv',
  'Pope Nicholas III',
  'Pope Nicholas III',
  'Pope Nicholas III',
  NULL,
  '1280-01-01T00:00:00.000Z',
  '1277-01-01T00:00:00.000Z',
  '1280-01-01T00:00:00.000Z',
  124,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Nicholas III was the 124th pope, serving from 1277 to 1280. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Nicholas III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.681Z',
  '2025-10-06T03:54:50.681Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoft001i8zfpehyrrxg4',
  'Pope Martin IV',
  'Pope Martin IV',
  'Pope Martin IV',
  NULL,
  '1285-01-01T00:00:00.000Z',
  '1281-01-01T00:00:00.000Z',
  '1285-01-01T00:00:00.000Z',
  125,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Martin IV was the 125th pope, serving from 1281 to 1285. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Martin IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.682Z',
  '2025-10-06T03:54:50.682Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofu001j8zfp3h4j2d3n',
  'Pope Honorius IV',
  'Pope Honorius IV',
  'Pope Honorius IV',
  NULL,
  '1287-01-01T00:00:00.000Z',
  '1285-01-01T00:00:00.000Z',
  '1287-01-01T00:00:00.000Z',
  126,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Honorius IV was the 126th pope, serving from 1285 to 1287. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Honorius IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.683Z',
  '2025-10-06T03:54:50.683Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofv001k8zfpyylsq6v2',
  'Pope Nicholas IV',
  'Pope Nicholas IV',
  'Pope Nicholas IV',
  NULL,
  '1292-01-01T00:00:00.000Z',
  '1288-01-01T00:00:00.000Z',
  '1292-01-01T00:00:00.000Z',
  127,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Nicholas IV was the 127th pope, serving from 1288 to 1292. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Nicholas IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.684Z',
  '2025-10-06T03:54:50.684Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofw001l8zfp9g3xmutn',
  'Pope Celestine V',
  'Pope Celestine V',
  'Pope Celestine V',
  NULL,
  '1294-01-01T00:00:00.000Z',
  '1294-01-01T00:00:00.000Z',
  '1294-01-01T00:00:00.000Z',
  128,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Celestine V was the 128th pope, serving from 1294 to 1294. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Celestine V served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.685Z',
  '2025-10-06T03:54:50.685Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofx001m8zfpclk8hvix',
  'Pope Boniface VIII',
  'Pope Boniface VIII',
  'Pope Boniface VIII',
  NULL,
  '1303-01-01T00:00:00.000Z',
  '1294-01-01T00:00:00.000Z',
  '1303-01-01T00:00:00.000Z',
  129,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Boniface VIII was the 129th pope, serving from 1294 to 1303. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Boniface VIII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.685Z',
  '2025-10-06T03:54:50.685Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.150Z',
  '2025-10-03T19:15:22.568Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofy001n8zfpop2m1opj',
  'Pope John XVII',
  'Pope John XVII',
  'Pope John XVII',
  NULL,
  '1003-01-01T00:00:00.000Z',
  '1003-01-01T00:00:00.000Z',
  '1003-01-01T00:00:00.000Z',
  131,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope John XVII was the 131th pope, serving from 1003 to 1003. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope John XVII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.686Z',
  '2025-10-06T03:54:50.686Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkofz001o8zfp9opjuo9u',
  'Pope John XVIII',
  'Pope John XVIII',
  'Pope John XVIII',
  NULL,
  '1009-01-01T00:00:00.000Z',
  '1003-01-01T00:00:00.000Z',
  '1009-01-01T00:00:00.000Z',
  132,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope John XVIII was the 132th pope, serving from 1003 to 1009. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope John XVIII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.688Z',
  '2025-10-06T03:54:50.688Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkog0001p8zfpqh8ucqoc',
  'Pope Sergius IV',
  'Pope Sergius IV',
  'Pope Sergius IV',
  NULL,
  '1012-01-01T00:00:00.000Z',
  '1009-01-01T00:00:00.000Z',
  '1012-01-01T00:00:00.000Z',
  133,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Sergius IV was the 133th pope, serving from 1009 to 1012. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Sergius IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.689Z',
  '2025-10-06T03:54:50.689Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkog1001q8zfpjj4v645k',
  'Pope Benedict VIII',
  'Pope Benedict VIII',
  'Pope Benedict VIII',
  NULL,
  '1024-01-01T00:00:00.000Z',
  '1012-01-01T00:00:00.000Z',
  '1024-01-01T00:00:00.000Z',
  134,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Benedict VIII was the 134th pope, serving from 1012 to 1024. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Benedict VIII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.690Z',
  '2025-10-06T03:54:50.690Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkog2001r8zfpopaskicw',
  'Pope John XIX',
  'Pope John XIX',
  'Pope John XIX',
  NULL,
  '1032-01-01T00:00:00.000Z',
  '1024-01-01T00:00:00.000Z',
  '1032-01-01T00:00:00.000Z',
  135,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope John XIX was the 135th pope, serving from 1024 to 1032. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope John XIX served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.691Z',
  '2025-10-06T03:54:50.691Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkog3001s8zfp1ye5r6y2',
  'Pope Benedict IX',
  'Pope Benedict IX',
  'Pope Benedict IX',
  NULL,
  '1044-01-01T00:00:00.000Z',
  '1032-01-01T00:00:00.000Z',
  '1044-01-01T00:00:00.000Z',
  136,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Benedict IX was the 136th pope, serving from 1032 to 1044. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Benedict IX served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.692Z',
  '2025-10-06T03:54:50.692Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkog4001t8zfpu3u97rt0',
  'Pope Gregory VI',
  'Pope Gregory VI',
  'Pope Gregory VI',
  NULL,
  '1046-01-01T00:00:00.000Z',
  '1045-01-01T00:00:00.000Z',
  '1046-01-01T00:00:00.000Z',
  137,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory VI was the 137th pope, serving from 1045 to 1046. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory VI served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.693Z',
  '2025-10-06T03:54:50.693Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkog6001u8zfpxsluq8f9',
  'Pope Clement II',
  'Pope Clement II',
  'Pope Clement II',
  NULL,
  '1047-01-01T00:00:00.000Z',
  '1046-01-01T00:00:00.000Z',
  '1047-01-01T00:00:00.000Z',
  138,
  'Germany',
  'Bishop of Rome',
  '[]',
  'Pope Clement II was the 138th pope, serving from 1046 to 1047. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.694Z',
  '2025-10-06T03:54:50.694Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkog7001v8zfphgw56oex',
  'Pope Damasus II',
  'Pope Damasus II',
  'Pope Damasus II',
  NULL,
  '1048-01-01T00:00:00.000Z',
  '1048-01-01T00:00:00.000Z',
  '1048-01-01T00:00:00.000Z',
  139,
  'Germany',
  'Bishop of Rome',
  '[]',
  'Pope Damasus II was the 139th pope, serving from 1048 to 1048. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Damasus II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.696Z',
  '2025-10-06T03:54:50.696Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkog8001w8zfp5xj8exkx',
  'Pope Leo IX',
  'Pope Leo IX',
  'Pope Leo IX',
  NULL,
  '1054-01-01T00:00:00.000Z',
  '1049-01-01T00:00:00.000Z',
  '1054-01-01T00:00:00.000Z',
  140,
  'Germany',
  'Bishop of Rome',
  '[]',
  'Pope Leo IX was the 140th pope, serving from 1049 to 1054. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Leo IX served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.696Z',
  '2025-10-06T03:54:50.696Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkog9001x8zfpsx2g8bya',
  'Pope Victor II',
  'Pope Victor II',
  'Pope Victor II',
  NULL,
  '1057-01-01T00:00:00.000Z',
  '1055-01-01T00:00:00.000Z',
  '1057-01-01T00:00:00.000Z',
  141,
  'Germany',
  'Bishop of Rome',
  '[]',
  'Pope Victor II was the 141th pope, serving from 1055 to 1057. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Victor II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.697Z',
  '2025-10-06T03:54:50.697Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoga001y8zfp8t98ofqa',
  'Pope Stephen IX',
  'Pope Stephen IX',
  'Pope Stephen IX',
  NULL,
  '1058-01-01T00:00:00.000Z',
  '1057-01-01T00:00:00.000Z',
  '1058-01-01T00:00:00.000Z',
  142,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Stephen IX was the 142th pope, serving from 1057 to 1058. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Stephen IX served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.698Z',
  '2025-10-06T03:54:50.698Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogb001z8zfpx26av52g',
  'Pope Nicholas II',
  'Pope Nicholas II',
  'Pope Nicholas II',
  NULL,
  '1061-01-01T00:00:00.000Z',
  '1058-01-01T00:00:00.000Z',
  '1061-01-01T00:00:00.000Z',
  143,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Nicholas II was the 143th pope, serving from 1058 to 1061. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Nicholas II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.699Z',
  '2025-10-06T03:54:50.699Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogc00208zfpcbn89ns9',
  'Pope Alexander II',
  'Pope Alexander II',
  'Pope Alexander II',
  NULL,
  '1073-01-01T00:00:00.000Z',
  '1061-01-01T00:00:00.000Z',
  '1073-01-01T00:00:00.000Z',
  144,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Alexander II was the 144th pope, serving from 1061 to 1073. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Alexander II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.700Z',
  '2025-10-06T03:54:50.700Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogc00218zfpdo69g8hl',
  'Pope Gregory VII',
  'Pope Gregory VII',
  'Pope Gregory VII',
  NULL,
  '1085-01-01T00:00:00.000Z',
  '1073-01-01T00:00:00.000Z',
  '1085-01-01T00:00:00.000Z',
  145,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory VII was the 145th pope, serving from 1073 to 1085. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory VII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.701Z',
  '2025-10-06T03:54:50.701Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogd00228zfp2qvrom65',
  'Pope Victor III',
  'Pope Victor III',
  'Pope Victor III',
  NULL,
  '1087-01-01T00:00:00.000Z',
  '1086-01-01T00:00:00.000Z',
  '1087-01-01T00:00:00.000Z',
  146,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Victor III was the 146th pope, serving from 1086 to 1087. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Victor III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.702Z',
  '2025-10-06T03:54:50.702Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoge00238zfp1lxnr5ku',
  'Pope Urban II',
  'Pope Urban II',
  'Pope Urban II',
  NULL,
  '1099-01-01T00:00:00.000Z',
  '1088-01-01T00:00:00.000Z',
  '1099-01-01T00:00:00.000Z',
  147,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Urban II was the 147th pope, serving from 1088 to 1099. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Urban II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.703Z',
  '2025-10-06T03:54:50.703Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogf00248zfpfimvaah6',
  'Pope Paschal II',
  'Pope Paschal II',
  'Pope Paschal II',
  NULL,
  '1118-01-01T00:00:00.000Z',
  '1099-01-01T00:00:00.000Z',
  '1118-01-01T00:00:00.000Z',
  148,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Paschal II was the 148th pope, serving from 1099 to 1118. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Paschal II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.703Z',
  '2025-10-06T03:54:50.703Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogg00258zfpxibvwsl1',
  'Pope Gelasius II',
  'Pope Gelasius II',
  'Pope Gelasius II',
  NULL,
  '1119-01-01T00:00:00.000Z',
  '1118-01-01T00:00:00.000Z',
  '1119-01-01T00:00:00.000Z',
  149,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gelasius II was the 149th pope, serving from 1118 to 1119. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gelasius II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.704Z',
  '2025-10-06T03:54:50.704Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogh00268zfps3i5ejq0',
  'Pope Callistus II',
  'Pope Callistus II',
  'Pope Callistus II',
  NULL,
  '1124-01-01T00:00:00.000Z',
  '1119-01-01T00:00:00.000Z',
  '1124-01-01T00:00:00.000Z',
  150,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Callistus II was the 150th pope, serving from 1119 to 1124. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Callistus II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.705Z',
  '2025-10-06T03:54:50.705Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogh00278zfp1h25pnc7',
  'Pope Honorius II',
  'Pope Honorius II',
  'Pope Honorius II',
  NULL,
  '1130-01-01T00:00:00.000Z',
  '1124-01-01T00:00:00.000Z',
  '1130-01-01T00:00:00.000Z',
  151,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Honorius II was the 151th pope, serving from 1124 to 1130. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Honorius II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.706Z',
  '2025-10-06T03:54:50.706Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogi00288zfpf3pikywd',
  'Pope Innocent II',
  'Pope Innocent II',
  'Pope Innocent II',
  NULL,
  '1143-01-01T00:00:00.000Z',
  '1130-01-01T00:00:00.000Z',
  '1143-01-01T00:00:00.000Z',
  152,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Innocent II was the 152th pope, serving from 1130 to 1143. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.707Z',
  '2025-10-06T03:54:50.707Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogj00298zfp5i6zdzgh',
  'Pope Celestine II',
  'Pope Celestine II',
  'Pope Celestine II',
  NULL,
  '1144-01-01T00:00:00.000Z',
  '1143-01-01T00:00:00.000Z',
  '1144-01-01T00:00:00.000Z',
  153,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Celestine II was the 153th pope, serving from 1143 to 1144. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Celestine II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.708Z',
  '2025-10-06T03:54:50.708Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.156Z',
  '2025-10-03T19:15:22.574Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogl002a8zfp785kvdbv',
  'Pope Eugene III',
  'Pope Eugene III',
  'Pope Eugene III',
  NULL,
  '1153-01-01T00:00:00.000Z',
  '1145-01-01T00:00:00.000Z',
  '1153-01-01T00:00:00.000Z',
  155,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Eugene III was the 155th pope, serving from 1145 to 1153. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Eugene III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.709Z',
  '2025-10-06T03:54:50.709Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogm002b8zfp9mg3g8os',
  'Pope Anastasius IV',
  'Pope Anastasius IV',
  'Pope Anastasius IV',
  NULL,
  '1154-01-01T00:00:00.000Z',
  '1153-01-01T00:00:00.000Z',
  '1154-01-01T00:00:00.000Z',
  156,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Anastasius IV was the 156th pope, serving from 1153 to 1154. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Anastasius IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.711Z',
  '2025-10-06T03:54:50.711Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogp002c8zfpubx4fom1',
  'Pope Lucius II',
  'Pope Lucius II',
  'Pope Lucius II',
  NULL,
  '1145-01-01T00:00:00.000Z',
  '1144-01-01T00:00:00.000Z',
  '1145-01-01T00:00:00.000Z',
  157,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Lucius II was the 157th pope, serving from 1144 to 1145. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Lucius II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.714Z',
  '2025-10-06T03:54:50.714Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogr002d8zfpb7xm26zk',
  'Pope Eugenius III',
  'Pope Eugenius III',
  'Pope Eugenius III',
  NULL,
  '1153-01-01T00:00:00.000Z',
  '1145-01-01T00:00:00.000Z',
  '1153-01-01T00:00:00.000Z',
  158,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Eugenius III was the 158th pope, serving from 1145 to 1153. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Eugenius III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.715Z',
  '2025-10-06T03:54:50.715Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogs002e8zfpjypr52yn',
  'Pope Anastasius IV',
  'Pope Anastasius IV',
  'Pope Anastasius IV',
  NULL,
  '1154-01-01T00:00:00.000Z',
  '1153-01-01T00:00:00.000Z',
  '1154-01-01T00:00:00.000Z',
  159,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Anastasius IV was the 159th pope, serving from 1153 to 1154. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Anastasius IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.717Z',
  '2025-10-06T03:54:50.717Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogu002f8zfp6cbinhov',
  'Pope Hadrian IV',
  'Pope Hadrian IV',
  'Pope Hadrian IV',
  NULL,
  '1159-01-01T00:00:00.000Z',
  '1154-01-01T00:00:00.000Z',
  '1159-01-01T00:00:00.000Z',
  160,
  'England',
  'Bishop of Rome',
  '[]',
  'Pope Hadrian IV was the 160th pope, serving from 1154 to 1159. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Hadrian IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.718Z',
  '2025-10-06T03:54:50.718Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogu002g8zfplj3djxfw',
  'Pope Alexander III',
  'Pope Alexander III',
  'Pope Alexander III',
  NULL,
  '1181-01-01T00:00:00.000Z',
  '1159-01-01T00:00:00.000Z',
  '1181-01-01T00:00:00.000Z',
  161,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Alexander III was the 161th pope, serving from 1159 to 1181. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Alexander III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.719Z',
  '2025-10-06T03:54:50.719Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogv002h8zfp99pth8vn',
  'Pope Lucius III',
  'Pope Lucius III',
  'Pope Lucius III',
  NULL,
  '1185-01-01T00:00:00.000Z',
  '1181-01-01T00:00:00.000Z',
  '1185-01-01T00:00:00.000Z',
  162,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Lucius III was the 162th pope, serving from 1181 to 1185. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Lucius III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.720Z',
  '2025-10-06T03:54:50.720Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogw002i8zfpq673c2rj',
  'Pope Urban III',
  'Pope Urban III',
  'Pope Urban III',
  NULL,
  '1187-01-01T00:00:00.000Z',
  '1185-01-01T00:00:00.000Z',
  '1187-01-01T00:00:00.000Z',
  163,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Urban III was the 163th pope, serving from 1185 to 1187. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Urban III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.721Z',
  '2025-10-06T03:54:50.721Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogx002j8zfpmrkuaoqu',
  'Pope Gregory VIII',
  'Pope Gregory VIII',
  'Pope Gregory VIII',
  NULL,
  '1187-01-01T00:00:00.000Z',
  '1187-01-01T00:00:00.000Z',
  '1187-01-01T00:00:00.000Z',
  164,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory VIII was the 164th pope, serving from 1187 to 1187. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory VIII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.722Z',
  '2025-10-06T03:54:50.722Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.163Z',
  '2025-10-03T19:15:22.577Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgellikp00008z40adz42fub',
  'Pope Clement III',
  'Pope Clement III',
  'Clement III',
  NULL,
  '1191-01-01T00:00:00.000Z',
  '1187-01-01T00:00:00.000Z',
  '1191-01-01T00:00:00.000Z',
  166,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Clement III was the 166th pope, serving from 1187 to 1191. During his pontificate, he worked to maintain Church unity and address the challenges of the medieval period. His papacy was marked by efforts to strengthen papal authority and resolve conflicts within the Church.',
  NULL,
  'Pope Clement III served during the medieval period, a time marked by significant developments in Church governance and doctrine. The papacy during this era faced various challenges including political pressures and the need to maintain Church unity.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  FALSE,
  '2025-10-06T03:55:29.735Z',
  '2025-10-06T03:55:29.735Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkogy002k8zfpzksgrh4m',
  'Pope Honorius III',
  'Pope Honorius III',
  'Pope Honorius III',
  NULL,
  '1227-01-01T00:00:00.000Z',
  '1216-01-01T00:00:00.000Z',
  '1227-01-01T00:00:00.000Z',
  167,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Honorius III was the 167th pope, serving from 1216 to 1227. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Honorius III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.723Z',
  '2025-10-06T03:54:50.723Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoh0002l8zfpt00ggapd',
  'Pope Gregory IX',
  'Pope Gregory IX',
  'Pope Gregory IX',
  NULL,
  '1241-01-01T00:00:00.000Z',
  '1227-01-01T00:00:00.000Z',
  '1241-01-01T00:00:00.000Z',
  168,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory IX was the 168th pope, serving from 1227 to 1241. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory IX served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.724Z',
  '2025-10-06T03:54:50.724Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoh1002m8zfpx1q58w8v',
  'Pope Celestine IV',
  'Pope Celestine IV',
  'Pope Celestine IV',
  NULL,
  '1241-01-01T00:00:00.000Z',
  '1241-01-01T00:00:00.000Z',
  '1241-01-01T00:00:00.000Z',
  169,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Celestine IV was the 169th pope, serving from 1241 to 1241. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Celestine IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.725Z',
  '2025-10-06T03:54:50.725Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoh1002n8zfp127xh0r8',
  'Pope Innocent IV',
  'Pope Innocent IV',
  'Pope Innocent IV',
  NULL,
  '1254-01-01T00:00:00.000Z',
  '1243-01-01T00:00:00.000Z',
  '1254-01-01T00:00:00.000Z',
  170,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Innocent IV was the 170th pope, serving from 1243 to 1254. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.726Z',
  '2025-10-06T03:54:50.726Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoh3002o8zfpcr755tb5',
  'Pope Alexander IV',
  'Pope Alexander IV',
  'Pope Alexander IV',
  NULL,
  '1261-01-01T00:00:00.000Z',
  '1254-01-01T00:00:00.000Z',
  '1261-01-01T00:00:00.000Z',
  171,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Alexander IV was the 171th pope, serving from 1254 to 1261. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Alexander IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.727Z',
  '2025-10-06T03:54:50.727Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoh4002p8zfp85x7wfgy',
  'Pope Urban IV',
  'Pope Urban IV',
  'Pope Urban IV',
  NULL,
  '1264-01-01T00:00:00.000Z',
  '1261-01-01T00:00:00.000Z',
  '1264-01-01T00:00:00.000Z',
  172,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Urban IV was the 172th pope, serving from 1261 to 1264. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Urban IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.728Z',
  '2025-10-06T03:54:50.728Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoh5002q8zfp0c00pmq5',
  'Pope Clement IV',
  'Pope Clement IV',
  'Pope Clement IV',
  NULL,
  '1268-01-01T00:00:00.000Z',
  '1265-01-01T00:00:00.000Z',
  '1268-01-01T00:00:00.000Z',
  173,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Clement IV was the 173th pope, serving from 1265 to 1268. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.729Z',
  '2025-10-06T03:54:50.729Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoh6002r8zfpdwz6ne0v',
  'Pope Gregory X',
  'Pope Gregory X',
  'Pope Gregory X',
  NULL,
  '1276-01-01T00:00:00.000Z',
  '1271-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  174,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory X was the 174th pope, serving from 1271 to 1276. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory X served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.730Z',
  '2025-10-06T03:54:50.730Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoh7002s8zfpu7dr6zzi',
  'Pope Innocent V',
  'Pope Innocent V',
  'Pope Innocent V',
  NULL,
  '1276-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  175,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Innocent V was the 175th pope, serving from 1276 to 1276. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent V served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.731Z',
  '2025-10-06T03:54:50.731Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.178Z',
  '2025-10-03T18:58:07.633Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoh8002t8zfp8071slz3',
  'Pope Nicholas III',
  'Pope Nicholas III',
  'Pope Nicholas III',
  NULL,
  '1280-01-01T00:00:00.000Z',
  '1277-01-01T00:00:00.000Z',
  '1280-01-01T00:00:00.000Z',
  177,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Nicholas III was the 177th pope, serving from 1277 to 1280. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Nicholas III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.732Z',
  '2025-10-06T03:54:50.732Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoh9002u8zfp1znmqhaw',
  'Pope Martin IV',
  'Pope Martin IV',
  'Pope Martin IV',
  NULL,
  '1285-01-01T00:00:00.000Z',
  '1281-01-01T00:00:00.000Z',
  '1285-01-01T00:00:00.000Z',
  178,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Martin IV was the 178th pope, serving from 1281 to 1285. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Martin IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.733Z',
  '2025-10-06T03:54:50.733Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoha002v8zfph1unsrns',
  'Pope Honorius IV',
  'Pope Honorius IV',
  'Pope Honorius IV',
  NULL,
  '1287-01-01T00:00:00.000Z',
  '1285-01-01T00:00:00.000Z',
  '1287-01-01T00:00:00.000Z',
  179,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Honorius IV was the 179th pope, serving from 1285 to 1287. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Honorius IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.734Z',
  '2025-10-06T03:54:50.734Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoha002w8zfp3vyr4lky',
  'Pope Nicholas IV',
  'Pope Nicholas IV',
  'Pope Nicholas IV',
  NULL,
  '1292-01-01T00:00:00.000Z',
  '1288-01-01T00:00:00.000Z',
  '1292-01-01T00:00:00.000Z',
  180,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Nicholas IV was the 180th pope, serving from 1288 to 1292. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Nicholas IV served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.735Z',
  '2025-10-06T03:54:50.735Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohb002x8zfphhebuaaj',
  'Pope Celestine V',
  'Pope Celestine V',
  'Pope Celestine V',
  NULL,
  '1294-01-01T00:00:00.000Z',
  '1294-01-01T00:00:00.000Z',
  '1294-01-01T00:00:00.000Z',
  181,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Celestine V was the 181th pope, serving from 1294 to 1294. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Celestine V served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.736Z',
  '2025-10-06T03:54:50.736Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohc002y8zfpbvtmpuzb',
  'Pope Boniface VIII',
  'Pope Boniface VIII',
  'Pope Boniface VIII',
  NULL,
  '1303-01-01T00:00:00.000Z',
  '1294-01-01T00:00:00.000Z',
  '1303-01-01T00:00:00.000Z',
  182,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Boniface VIII was the 182th pope, serving from 1294 to 1303. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Boniface VIII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.737Z',
  '2025-10-06T03:54:50.737Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohd002z8zfp5w00l3xg',
  'Pope Benedict XI',
  'Pope Benedict XI',
  'Pope Benedict XI',
  NULL,
  '1304-01-01T00:00:00.000Z',
  '1303-01-01T00:00:00.000Z',
  '1304-01-01T00:00:00.000Z',
  183,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Benedict XI was the 183th pope, serving from 1303 to 1304. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Benedict XI served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.738Z',
  '2025-10-06T03:54:50.738Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohf00308zfpt4ode4i3',
  'Pope Clement V',
  'Pope Clement V',
  'Pope Clement V',
  NULL,
  '1314-01-01T00:00:00.000Z',
  '1305-01-01T00:00:00.000Z',
  '1314-01-01T00:00:00.000Z',
  184,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Clement V was the 184th pope, serving from 1305 to 1314. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement V served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.739Z',
  '2025-10-06T03:54:50.739Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohg00318zfph6o28twd',
  'Pope John XXII',
  'Pope John XXII',
  'Pope John XXII',
  NULL,
  '1334-01-01T00:00:00.000Z',
  '1316-01-01T00:00:00.000Z',
  '1334-01-01T00:00:00.000Z',
  185,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope John XXII was the 185th pope, serving from 1316 to 1334. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope John XXII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.740Z',
  '2025-10-06T03:54:50.740Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohh00328zfp91cpvezq',
  'Pope Benedict XII',
  'Pope Benedict XII',
  'Pope Benedict XII',
  NULL,
  '1342-01-01T00:00:00.000Z',
  '1334-01-01T00:00:00.000Z',
  '1342-01-01T00:00:00.000Z',
  186,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Benedict XII was the 186th pope, serving from 1334 to 1342. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Benedict XII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.741Z',
  '2025-10-06T03:54:50.741Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohi00338zfp8zdq55vc',
  'Pope Clement VI',
  'Pope Clement VI',
  'Pope Clement VI',
  NULL,
  '1352-01-01T00:00:00.000Z',
  '1342-01-01T00:00:00.000Z',
  '1352-01-01T00:00:00.000Z',
  187,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Clement VI was the 187th pope, serving from 1342 to 1352. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement VI served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.742Z',
  '2025-10-06T03:54:50.742Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohi00348zfplvd8yky1',
  'Pope Innocent VI',
  'Pope Innocent VI',
  'Pope Innocent VI',
  NULL,
  '1362-01-01T00:00:00.000Z',
  '1352-01-01T00:00:00.000Z',
  '1362-01-01T00:00:00.000Z',
  188,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Innocent VI was the 188th pope, serving from 1352 to 1362. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent VI served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.743Z',
  '2025-10-06T03:54:50.743Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohj00358zfpmomofrwn',
  'Pope Urban V',
  'Pope Urban V',
  'Pope Urban V',
  NULL,
  '1370-01-01T00:00:00.000Z',
  '1362-01-01T00:00:00.000Z',
  '1370-01-01T00:00:00.000Z',
  189,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Urban V was the 189th pope, serving from 1362 to 1370. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Urban V served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.744Z',
  '2025-10-06T03:54:50.744Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohk00368zfpmv7ne912',
  'Pope Gregory XI',
  'Pope Gregory XI',
  'Pope Gregory XI',
  NULL,
  '1378-01-01T00:00:00.000Z',
  '1370-01-01T00:00:00.000Z',
  '1378-01-01T00:00:00.000Z',
  190,
  'France',
  'Bishop of Rome',
  '[]',
  'Pope Gregory XI was the 190th pope, serving from 1370 to 1378. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory XI served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.744Z',
  '2025-10-06T03:54:50.744Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohl00378zfp5ooywdv9',
  'Pope Urban VI',
  'Pope Urban VI',
  'Pope Urban VI',
  NULL,
  '1389-01-01T00:00:00.000Z',
  '1378-01-01T00:00:00.000Z',
  '1389-01-01T00:00:00.000Z',
  191,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Urban VI was the 191th pope, serving from 1378 to 1389. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Urban VI served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.745Z',
  '2025-10-06T03:54:50.745Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohm00388zfpraq09ayq',
  'Pope Boniface IX',
  'Pope Boniface IX',
  'Pope Boniface IX',
  NULL,
  '1404-01-01T00:00:00.000Z',
  '1389-01-01T00:00:00.000Z',
  '1404-01-01T00:00:00.000Z',
  192,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Boniface IX was the 192th pope, serving from 1389 to 1404. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Boniface IX served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.746Z',
  '2025-10-06T03:54:50.746Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohm00398zfp5uf4mr6s',
  'Pope Innocent VII',
  'Pope Innocent VII',
  'Pope Innocent VII',
  NULL,
  '1406-01-01T00:00:00.000Z',
  '1404-01-01T00:00:00.000Z',
  '1406-01-01T00:00:00.000Z',
  193,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Innocent VII was the 193th pope, serving from 1404 to 1406. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent VII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.747Z',
  '2025-10-06T03:54:50.747Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohn003a8zfpajvpil7x',
  'Pope Gregory XII',
  'Pope Gregory XII',
  'Pope Gregory XII',
  NULL,
  '1415-01-01T00:00:00.000Z',
  '1406-01-01T00:00:00.000Z',
  '1415-01-01T00:00:00.000Z',
  194,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory XII was the 194th pope, serving from 1406 to 1415. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory XII served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.748Z',
  '2025-10-06T03:54:50.748Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoho003b8zfp345ttk0b',
  'Pope Martin V',
  'Pope Martin V',
  'Pope Martin V',
  NULL,
  '1431-01-01T00:00:00.000Z',
  '1417-01-01T00:00:00.000Z',
  '1431-01-01T00:00:00.000Z',
  195,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Martin V was the 195th pope, serving from 1417 to 1431. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Martin V served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.748Z',
  '2025-10-06T03:54:50.748Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.195Z',
  '2025-10-03T19:15:22.581Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohp003c8zfpphg671nu',
  'Pope Nicholas V',
  'Pope Nicholas V',
  'Pope Nicholas V',
  NULL,
  '1455-01-01T00:00:00.000Z',
  '1447-01-01T00:00:00.000Z',
  '1455-01-01T00:00:00.000Z',
  197,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Nicholas V was the 197th pope, serving from 1447 to 1455. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Nicholas V served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.750Z',
  '2025-10-06T03:54:50.750Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohq003d8zfpggq8mmfd',
  'Pope Callistus III',
  'Pope Callistus III',
  'Pope Callistus III',
  NULL,
  '1458-01-01T00:00:00.000Z',
  '1455-01-01T00:00:00.000Z',
  '1458-01-01T00:00:00.000Z',
  198,
  'Spain',
  'Bishop of Rome',
  '[]',
  'Pope Callistus III was the 198th pope, serving from 1455 to 1458. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Callistus III served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.750Z',
  '2025-10-06T03:54:50.750Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohr003e8zfpo0t0ck95',
  'Pope Pius II',
  'Pope Pius II',
  'Pope Pius II',
  NULL,
  '1464-01-01T00:00:00.000Z',
  '1458-01-01T00:00:00.000Z',
  '1464-01-01T00:00:00.000Z',
  199,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius II was the 199th pope, serving from 1458 to 1464. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.751Z',
  '2025-10-06T03:54:50.751Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohs003f8zfpewfkwsro',
  'Pope Paul II',
  'Pope Paul II',
  'Pope Paul II',
  NULL,
  '1471-01-01T00:00:00.000Z',
  '1464-01-01T00:00:00.000Z',
  '1471-01-01T00:00:00.000Z',
  200,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Paul II was the 200th pope, serving from 1464 to 1471. As part of the Medieval Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Paul II served during the Medieval Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.752Z',
  '2025-10-06T03:54:50.752Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohs003g8zfp3wldk2f7',
  'Pope Sixtus IV',
  'Pope Sixtus IV',
  'Pope Sixtus IV',
  NULL,
  '1484-01-01T00:00:00.000Z',
  '1471-01-01T00:00:00.000Z',
  '1484-01-01T00:00:00.000Z',
  201,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Sixtus IV was the 201th pope, serving from 1471 to 1484. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Sixtus IV served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.753Z',
  '2025-10-06T03:54:50.753Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohu003h8zfpt9slq7of',
  'Pope Innocent VIII',
  'Pope Innocent VIII',
  'Pope Innocent VIII',
  NULL,
  '1492-01-01T00:00:00.000Z',
  '1484-01-01T00:00:00.000Z',
  '1492-01-01T00:00:00.000Z',
  202,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Innocent VIII was the 202th pope, serving from 1484 to 1492. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent VIII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.754Z',
  '2025-10-06T03:54:50.754Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohu003i8zfpgd8vavpy',
  'Pope Alexander VI',
  'Pope Alexander VI',
  'Pope Alexander VI',
  NULL,
  '1503-01-01T00:00:00.000Z',
  '1492-01-01T00:00:00.000Z',
  '1503-01-01T00:00:00.000Z',
  203,
  'Spain',
  'Bishop of Rome',
  '[]',
  'Pope Alexander VI was the 203th pope, serving from 1492 to 1503. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Alexander VI served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.755Z',
  '2025-10-06T03:54:50.755Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohv003j8zfpudd70rqk',
  'Pope Pius III',
  'Pope Pius III',
  'Pope Pius III',
  NULL,
  '1503-01-01T00:00:00.000Z',
  '1503-01-01T00:00:00.000Z',
  '1503-01-01T00:00:00.000Z',
  204,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius III was the 204th pope, serving from 1503 to 1503. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius III served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.756Z',
  '2025-10-06T03:54:50.756Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohx003k8zfpmkiorvgw',
  'Pope Julius II',
  'Pope Julius II',
  'Pope Julius II',
  NULL,
  '1513-01-01T00:00:00.000Z',
  '1503-01-01T00:00:00.000Z',
  '1513-01-01T00:00:00.000Z',
  205,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Julius II was the 205th pope, serving from 1503 to 1513. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Julius II served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.757Z',
  '2025-10-06T03:54:50.757Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkohy003l8zfph5laan2x',
  'Pope Leo X',
  'Pope Leo X',
  'Pope Leo X',
  NULL,
  '1521-01-01T00:00:00.000Z',
  '1513-01-01T00:00:00.000Z',
  '1521-01-01T00:00:00.000Z',
  206,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Leo X was the 206th pope, serving from 1513 to 1521. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Leo X served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.759Z',
  '2025-10-06T03:54:50.759Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoi1003m8zfppni5lzhb',
  'Pope Adrian VI',
  'Pope Adrian VI',
  'Pope Adrian VI',
  NULL,
  '1523-01-01T00:00:00.000Z',
  '1522-01-01T00:00:00.000Z',
  '1523-01-01T00:00:00.000Z',
  207,
  'Netherlands',
  'Bishop of Rome',
  '[]',
  'Pope Adrian VI was the 207th pope, serving from 1522 to 1523. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Adrian VI served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.761Z',
  '2025-10-06T03:54:50.761Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoi2003n8zfpqplvpb0f',
  'Pope Clement VII',
  'Pope Clement VII',
  'Pope Clement VII',
  NULL,
  '1534-01-01T00:00:00.000Z',
  '1523-01-01T00:00:00.000Z',
  '1534-01-01T00:00:00.000Z',
  208,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Clement VII was the 208th pope, serving from 1523 to 1534. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement VII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.762Z',
  '2025-10-06T03:54:50.762Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoi3003o8zfpdu1m9wnu',
  'Pope Paul III',
  'Pope Paul III',
  'Pope Paul III',
  NULL,
  '1549-01-01T00:00:00.000Z',
  '1534-01-01T00:00:00.000Z',
  '1549-01-01T00:00:00.000Z',
  209,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Paul III was the 209th pope, serving from 1534 to 1549. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Paul III served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.763Z',
  '2025-10-06T03:54:50.763Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.201Z',
  '2025-10-03T19:15:22.586Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoi4003p8zfp95bpjvvz',
  'Pope Julius III',
  'Pope Julius III',
  'Pope Julius III',
  NULL,
  '1555-01-01T00:00:00.000Z',
  '1550-01-01T00:00:00.000Z',
  '1555-01-01T00:00:00.000Z',
  211,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Julius III was the 211th pope, serving from 1550 to 1555. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Julius III served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.764Z',
  '2025-10-06T03:54:50.764Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoi5003q8zfp8yctwn1o',
  'Pope Marcellus II',
  'Pope Marcellus II',
  'Pope Marcellus II',
  NULL,
  '1555-01-01T00:00:00.000Z',
  '1555-01-01T00:00:00.000Z',
  '1555-01-01T00:00:00.000Z',
  212,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Marcellus II was the 212th pope, serving from 1555 to 1555. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Marcellus II served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.765Z',
  '2025-10-06T03:54:50.765Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoi5003r8zfpemj0gbxx',
  'Pope Paul IV',
  'Pope Paul IV',
  'Pope Paul IV',
  NULL,
  '1559-01-01T00:00:00.000Z',
  '1555-01-01T00:00:00.000Z',
  '1559-01-01T00:00:00.000Z',
  213,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Paul IV was the 213th pope, serving from 1555 to 1559. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Paul IV served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.766Z',
  '2025-10-06T03:54:50.766Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoi6003s8zfppu1oqtye',
  'Pope Pius IV',
  'Pope Pius IV',
  'Pope Pius IV',
  NULL,
  '1565-01-01T00:00:00.000Z',
  '1559-01-01T00:00:00.000Z',
  '1565-01-01T00:00:00.000Z',
  214,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius IV was the 214th pope, serving from 1559 to 1565. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius IV served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.767Z',
  '2025-10-06T03:54:50.767Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoi7003t8zfp0jlqshgs',
  'Pope Pius V',
  'Pope Pius V',
  'Pope Pius V',
  NULL,
  '1572-01-01T00:00:00.000Z',
  '1566-01-01T00:00:00.000Z',
  '1572-01-01T00:00:00.000Z',
  215,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius V was the 215th pope, serving from 1566 to 1572. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius V served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.768Z',
  '2025-10-06T03:54:50.768Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.210Z',
  '2025-10-03T19:15:22.591Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoi8003u8zfpryzpl5k9',
  'Pope Gregory XIII',
  'Pope Gregory XIII',
  'Pope Gregory XIII',
  NULL,
  '1585-01-01T00:00:00.000Z',
  '1572-01-01T00:00:00.000Z',
  '1585-01-01T00:00:00.000Z',
  217,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory XIII was the 217th pope, serving from 1572 to 1585. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory XIII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.769Z',
  '2025-10-06T03:54:50.769Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoi9003v8zfp48wkoul1',
  'Pope Sixtus V',
  'Pope Sixtus V',
  'Pope Sixtus V',
  NULL,
  '1590-01-01T00:00:00.000Z',
  '1585-01-01T00:00:00.000Z',
  '1590-01-01T00:00:00.000Z',
  218,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Sixtus V was the 218th pope, serving from 1585 to 1590. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Sixtus V served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.769Z',
  '2025-10-06T03:54:50.769Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoia003w8zfp8pobka8w',
  'Pope Urban VII',
  'Pope Urban VII',
  'Pope Urban VII',
  NULL,
  '1590-01-01T00:00:00.000Z',
  '1590-01-01T00:00:00.000Z',
  '1590-01-01T00:00:00.000Z',
  219,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Urban VII was the 219th pope, serving from 1590 to 1590. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Urban VII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.770Z',
  '2025-10-06T03:54:50.770Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.214Z',
  '2025-10-03T19:15:22.596Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoib003x8zfp9odxmfo8',
  'Pope Clement VIII',
  'Pope Clement VIII',
  'Pope Clement VIII',
  NULL,
  '1605-01-01T00:00:00.000Z',
  '1592-01-01T00:00:00.000Z',
  '1605-01-01T00:00:00.000Z',
  221,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Clement VIII was the 221th pope, serving from 1592 to 1605. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement VIII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.771Z',
  '2025-10-06T03:54:50.771Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoic003y8zfpcovx0lr6',
  'Pope Leo XI',
  'Pope Leo XI',
  'Pope Leo XI',
  NULL,
  '1605-01-01T00:00:00.000Z',
  '1605-01-01T00:00:00.000Z',
  '1605-01-01T00:00:00.000Z',
  222,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Leo XI was the 222th pope, serving from 1605 to 1605. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Leo XI served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.772Z',
  '2025-10-06T03:54:50.772Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoid003z8zfpy54la24w',
  'Pope Paul V',
  'Pope Paul V',
  'Pope Paul V',
  NULL,
  '1621-01-01T00:00:00.000Z',
  '1605-01-01T00:00:00.000Z',
  '1621-01-01T00:00:00.000Z',
  223,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Paul V was the 223th pope, serving from 1605 to 1621. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Paul V served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.773Z',
  '2025-10-06T03:54:50.773Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoie00408zfpd1nvniin',
  'Pope Gregory XV',
  'Pope Gregory XV',
  'Pope Gregory XV',
  NULL,
  '1623-01-01T00:00:00.000Z',
  '1621-01-01T00:00:00.000Z',
  '1623-01-01T00:00:00.000Z',
  224,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory XV was the 224th pope, serving from 1621 to 1623. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory XV served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.774Z',
  '2025-10-06T03:54:50.774Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoif00418zfp8b4ft8hr',
  'Pope Urban VIII',
  'Pope Urban VIII',
  'Pope Urban VIII',
  NULL,
  '1644-01-01T00:00:00.000Z',
  '1623-01-01T00:00:00.000Z',
  '1644-01-01T00:00:00.000Z',
  225,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Urban VIII was the 225th pope, serving from 1623 to 1644. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Urban VIII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.775Z',
  '2025-10-06T03:54:50.775Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoig00428zfpzvbivpds',
  'Pope Innocent X',
  'Pope Innocent X',
  'Pope Innocent X',
  NULL,
  '1655-01-01T00:00:00.000Z',
  '1644-01-01T00:00:00.000Z',
  '1655-01-01T00:00:00.000Z',
  226,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Innocent X was the 226th pope, serving from 1644 to 1655. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent X served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.776Z',
  '2025-10-06T03:54:50.776Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoig00438zfpz6kw64i3',
  'Pope Alexander VII',
  'Pope Alexander VII',
  'Pope Alexander VII',
  NULL,
  '1667-01-01T00:00:00.000Z',
  '1655-01-01T00:00:00.000Z',
  '1667-01-01T00:00:00.000Z',
  227,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Alexander VII was the 227th pope, serving from 1655 to 1667. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Alexander VII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.777Z',
  '2025-10-06T03:54:50.777Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoih00448zfp2nk2c4fr',
  'Pope Clement IX',
  'Pope Clement IX',
  'Pope Clement IX',
  NULL,
  '1669-01-01T00:00:00.000Z',
  '1667-01-01T00:00:00.000Z',
  '1669-01-01T00:00:00.000Z',
  228,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Clement IX was the 228th pope, serving from 1667 to 1669. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement IX served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.778Z',
  '2025-10-06T03:54:50.778Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoij00458zfpw5yyex88',
  'Pope Clement X',
  'Pope Clement X',
  'Pope Clement X',
  NULL,
  '1676-01-01T00:00:00.000Z',
  '1670-01-01T00:00:00.000Z',
  '1676-01-01T00:00:00.000Z',
  229,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Clement X was the 229th pope, serving from 1670 to 1676. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement X served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.780Z',
  '2025-10-06T03:54:50.780Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoik00468zfpp6s0nwjj',
  'Pope Innocent XI',
  'Pope Innocent XI',
  'Pope Innocent XI',
  NULL,
  '1689-01-01T00:00:00.000Z',
  '1676-01-01T00:00:00.000Z',
  '1689-01-01T00:00:00.000Z',
  230,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Innocent XI was the 230th pope, serving from 1676 to 1689. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent XI served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.781Z',
  '2025-10-06T03:54:50.781Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoil00478zfp7od3tpbh',
  'Pope Alexander VIII',
  'Pope Alexander VIII',
  'Pope Alexander VIII',
  NULL,
  '1691-01-01T00:00:00.000Z',
  '1689-01-01T00:00:00.000Z',
  '1691-01-01T00:00:00.000Z',
  231,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Alexander VIII was the 231th pope, serving from 1689 to 1691. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Alexander VIII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.781Z',
  '2025-10-06T03:54:50.781Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoim00488zfpx8huqhip',
  'Pope Innocent XII',
  'Pope Innocent XII',
  'Pope Innocent XII',
  NULL,
  '1700-01-01T00:00:00.000Z',
  '1691-01-01T00:00:00.000Z',
  '1700-01-01T00:00:00.000Z',
  232,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Innocent XII was the 232th pope, serving from 1691 to 1700. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent XII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.782Z',
  '2025-10-06T03:54:50.782Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoim00498zfp577ohux9',
  'Pope Clement XI',
  'Pope Clement XI',
  'Pope Clement XI',
  NULL,
  '1721-01-01T00:00:00.000Z',
  '1700-01-01T00:00:00.000Z',
  '1721-01-01T00:00:00.000Z',
  233,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Clement XI was the 233th pope, serving from 1700 to 1721. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement XI served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.783Z',
  '2025-10-06T03:54:50.783Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoin004a8zfpxzm8fzvc',
  'Pope Innocent XIII',
  'Pope Innocent XIII',
  'Pope Innocent XIII',
  NULL,
  '1724-01-01T00:00:00.000Z',
  '1721-01-01T00:00:00.000Z',
  '1724-01-01T00:00:00.000Z',
  234,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Innocent XIII was the 234th pope, serving from 1721 to 1724. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Innocent XIII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.784Z',
  '2025-10-06T03:54:50.784Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoio004b8zfp8i4bx88e',
  'Pope Benedict XIII',
  'Pope Benedict XIII',
  'Pope Benedict XIII',
  NULL,
  '1730-01-01T00:00:00.000Z',
  '1724-01-01T00:00:00.000Z',
  '1730-01-01T00:00:00.000Z',
  235,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Benedict XIII was the 235th pope, serving from 1724 to 1730. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Benedict XIII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.785Z',
  '2025-10-06T03:54:50.785Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoip004c8zfpt4cal75x',
  'Pope Clement XII',
  'Pope Clement XII',
  'Pope Clement XII',
  NULL,
  '1740-01-01T00:00:00.000Z',
  '1730-01-01T00:00:00.000Z',
  '1740-01-01T00:00:00.000Z',
  236,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Clement XII was the 236th pope, serving from 1730 to 1740. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement XII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.785Z',
  '2025-10-06T03:54:50.785Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoiq004d8zfpezchmwe8',
  'Pope Benedict XIV',
  'Pope Benedict XIV',
  'Pope Benedict XIV',
  NULL,
  '1758-01-01T00:00:00.000Z',
  '1740-01-01T00:00:00.000Z',
  '1758-01-01T00:00:00.000Z',
  237,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Benedict XIV was the 237th pope, serving from 1740 to 1758. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Benedict XIV served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.786Z',
  '2025-10-06T03:54:50.786Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.223Z',
  '2025-10-03T19:15:22.601Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoiq004e8zfp0uvpithp',
  'Pope Clement XIII',
  'Pope Clement XIII',
  'Pope Clement XIII',
  NULL,
  '1769-01-01T00:00:00.000Z',
  '1758-01-01T00:00:00.000Z',
  '1769-01-01T00:00:00.000Z',
  239,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Clement XIII was the 239th pope, serving from 1758 to 1769. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement XIII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.787Z',
  '2025-10-06T03:54:50.787Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoir004f8zfp8nrpc7li',
  'Pope Clement XIV',
  'Pope Clement XIV',
  'Pope Clement XIV',
  NULL,
  '1774-01-01T00:00:00.000Z',
  '1769-01-01T00:00:00.000Z',
  '1774-01-01T00:00:00.000Z',
  240,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Clement XIV was the 240th pope, serving from 1769 to 1774. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Clement XIV served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.788Z',
  '2025-10-06T03:54:50.788Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkois004g8zfpj89mjj3l',
  'Pope Pius VI',
  'Pope Pius VI',
  'Pope Pius VI',
  NULL,
  '1799-01-01T00:00:00.000Z',
  '1775-01-01T00:00:00.000Z',
  '1799-01-01T00:00:00.000Z',
  241,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius VI was the 241th pope, serving from 1775 to 1799. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius VI served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.789Z',
  '2025-10-06T03:54:50.789Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoit004h8zfp9yrvtxxn',
  'Pope Pius VII',
  'Pope Pius VII',
  'Pope Pius VII',
  NULL,
  '1823-01-01T00:00:00.000Z',
  '1800-01-01T00:00:00.000Z',
  '1823-01-01T00:00:00.000Z',
  242,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius VII was the 242th pope, serving from 1800 to 1823. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius VII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.790Z',
  '2025-10-06T03:54:50.790Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoiu004i8zfp4puuafgw',
  'Pope Leo XII',
  'Pope Leo XII',
  'Pope Leo XII',
  NULL,
  '1829-01-01T00:00:00.000Z',
  '1823-01-01T00:00:00.000Z',
  '1829-01-01T00:00:00.000Z',
  243,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Leo XII was the 243th pope, serving from 1823 to 1829. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Leo XII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.791Z',
  '2025-10-06T03:54:50.791Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoiv004j8zfparn2ndy6',
  'Pope Pius VIII',
  'Pope Pius VIII',
  'Pope Pius VIII',
  NULL,
  '1830-01-01T00:00:00.000Z',
  '1829-01-01T00:00:00.000Z',
  '1830-01-01T00:00:00.000Z',
  244,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius VIII was the 244th pope, serving from 1829 to 1830. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius VIII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.791Z',
  '2025-10-06T03:54:50.791Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoiw004k8zfpm0t1nglg',
  'Pope Gregory XVI',
  'Pope Gregory XVI',
  'Pope Gregory XVI',
  NULL,
  '1846-01-01T00:00:00.000Z',
  '1831-01-01T00:00:00.000Z',
  '1846-01-01T00:00:00.000Z',
  245,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Gregory XVI was the 245th pope, serving from 1831 to 1846. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Gregory XVI served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.792Z',
  '2025-10-06T03:54:50.792Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoix004l8zfpz4829g8c',
  'Pope Pius IX',
  'Pope Pius IX',
  'Pope Pius IX',
  NULL,
  '1878-01-01T00:00:00.000Z',
  '1846-01-01T00:00:00.000Z',
  '1878-01-01T00:00:00.000Z',
  246,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius IX was the 246th pope, serving from 1846 to 1878. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius IX served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.793Z',
  '2025-10-06T03:54:50.793Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.229Z',
  '2025-10-03T19:15:22.609Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoix004m8zfpcj91az7t',
  'Pope Leo XIII',
  'Pope Leo XIII',
  'Pope Leo XIII',
  NULL,
  '1903-01-01T00:00:00.000Z',
  '1878-01-01T00:00:00.000Z',
  '1903-01-01T00:00:00.000Z',
  248,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Leo XIII was the 248th pope, serving from 1878 to 1903. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Leo XIII served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.794Z',
  '2025-10-06T03:54:50.794Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoiy004n8zfp6krlsgk9',
  'Pope Pius X',
  'Pope Pius X',
  'Pope Pius X',
  NULL,
  '1914-01-01T00:00:00.000Z',
  '1903-01-01T00:00:00.000Z',
  '1914-01-01T00:00:00.000Z',
  249,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius X was the 249th pope, serving from 1903 to 1914. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius X served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.795Z',
  '2025-10-06T03:54:50.795Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoiz004o8zfp2cpvx3jr',
  'Pope Benedict XV',
  'Pope Benedict XV',
  'Pope Benedict XV',
  NULL,
  '1922-01-01T00:00:00.000Z',
  '1914-01-01T00:00:00.000Z',
  '1922-01-01T00:00:00.000Z',
  250,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Benedict XV was the 250th pope, serving from 1914 to 1922. As part of the Renaissance/Modern Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Benedict XV served during the Renaissance/Modern Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.796Z',
  '2025-10-06T03:54:50.796Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoj0004p8zfpkncs3i7b',
  'Pope Pius XI',
  'Pope Pius XI',
  'Pope Pius XI',
  NULL,
  '1939-01-01T00:00:00.000Z',
  '1922-01-01T00:00:00.000Z',
  '1939-01-01T00:00:00.000Z',
  251,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius XI was the 251th pope, serving from 1922 to 1939. As part of the Contemporary Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius XI served during the Contemporary Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.797Z',
  '2025-10-06T03:54:50.797Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoj1004q8zfp4301t1lz',
  'Pope Pius XII',
  'Pope Pius XII',
  'Pope Pius XII',
  NULL,
  '1958-01-01T00:00:00.000Z',
  '1939-01-01T00:00:00.000Z',
  '1958-01-01T00:00:00.000Z',
  252,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Pius XII was the 252th pope, serving from 1939 to 1958. As part of the Contemporary Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Pius XII served during the Contemporary Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.798Z',
  '2025-10-06T03:54:50.798Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoj3004r8zfpawplpfc1',
  'Pope John XXIII',
  'Pope John XXIII',
  'Pope John XXIII',
  NULL,
  '1963-01-01T00:00:00.000Z',
  '1958-01-01T00:00:00.000Z',
  '1963-01-01T00:00:00.000Z',
  253,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope John XXIII was the 253th pope, serving from 1958 to 1963. As part of the Contemporary Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope John XXIII served during the Contemporary Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.799Z',
  '2025-10-06T03:54:50.799Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgelkoj5004s8zfpmz3w6h5a',
  'Pope Paul VI',
  'Pope Paul VI',
  'Pope Paul VI',
  NULL,
  '1978-01-01T00:00:00.000Z',
  '1963-01-01T00:00:00.000Z',
  '1978-01-01T00:00:00.000Z',
  254,
  'Italy',
  'Bishop of Rome',
  '[]',
  'Pope Paul VI was the 254th pope, serving from 1963 to 1978. As part of the Contemporary Period, this pontificate contributed to the ongoing development of Church doctrine, governance, and mission. Historical records provide insights into the challenges and achievements of this period in papal history.',
  NULL,
  'Pope Pope Paul VI served during the Contemporary Period, a time marked by significant developments in Church history. The papacy during this era faced various challenges including political pressures, theological controversies, and the need to maintain Church unity while adapting to changing historical circumstances.',
  '[{"type":"Official","title":"Vatican Archives","url":"https://www.vatican.va/archive/ACSA/"},{"type":"Historical","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"},{"type":"Reference","title":"List of Popes - Wikipedia","url":"https://en.wikipedia.org/wiki/List_of_popes"}]',
  FALSE,
  '2025-10-06T03:54:50.802Z',
  '2025-10-06T03:54:50.802Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.235Z',
  '2025-10-03T19:15:22.615Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.241Z',
  '2025-10-03T19:15:22.623Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.247Z',
  '2025-10-03T19:15:22.626Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.262Z',
  '2025-10-03T19:15:22.631Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.280Z',
  '2025-10-03T19:15:22.637Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.294Z',
  '2025-10-03T19:15:22.642Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.299Z',
  '2025-10-03T19:15:22.647Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.309Z',
  '2025-10-03T19:15:22.650Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.318Z',
  '2025-10-03T19:15:22.654Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.334Z',
  '2025-10-03T19:15:22.657Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.347Z',
  '2025-10-03T19:15:22.661Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  FALSE,
  '2025-10-03T18:49:54.357Z',
  '2025-10-03T18:58:07.636Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
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
  TRUE,
  '2025-10-03T18:49:54.363Z',
  '2025-10-03T18:58:07.639Z'
);

-- Papal Events
DELETE FROM papal_events;
INSERT INTO papal_events (
  id, title, description, "eventDate", "eventType", location, significance, "imageUrl", "createdAt", "updatedAt", "popeId"
) VALUES (
  'cmgb786bq001p8z6mzy0qxshm',
  'Election as Pope',
  'Elected pope on 8 January 1198, becoming one of the most powerful popes in history.',
  '1198-01-07T18:06:32.000Z',
  'ELECTION',
  'Rome',
  'Became one of the most influential popes in Church history',
  NULL,
  '2025-10-03T18:49:54.183Z',
  '2025-10-03T18:49:54.183Z',
  'cmgb786bm001n8z6mqf14yas9'
);
INSERT INTO papal_events (
  id, title, description, "eventDate", "eventType", location, significance, "imageUrl", "createdAt", "updatedAt", "popeId"
) VALUES (
  'cmgb786bu001r8z6mj55zr5y7',
  'Fourth Lateran Council',
  'Called the most important council of the Middle Ages in 1215.',
  '1215-01-01T00:00:00.000Z',
  'COUNCIL',
  'Rome',
  'Defined key Catholic doctrines including transubstantiation',
  NULL,
  '2025-10-03T18:49:54.187Z',
  '2025-10-03T18:49:54.187Z',
  'cmgb786bm001n8z6mqf14yas9'
);
INSERT INTO papal_events (
  id, title, description, "eventDate", "eventType", location, significance, "imageUrl", "createdAt", "updatedAt", "popeId"
) VALUES (
  'cmgb786h1002c8z6mv489mlu6',
  'Election as Pope',
  'Chosen as successor to Pope Francis, becoming the first American pope.',
  '2025-05-07T18:30:00.000Z',
  'ELECTION',
  'Vatican',
  'First American pope in Church history',
  NULL,
  '2025-10-03T18:49:54.373Z',
  '2025-10-03T18:49:54.373Z',
  'cmgb786gr002a8z6m3d7rm5iq'
);

-- Papal Achievements
DELETE FROM papal_achievements;

COMMIT;


-- =============================
-- 3) CHURCH HISTORY (DIVISIONS, MANUSCRIPTS, TRANSLATIONS)
-- =============================
-- v002_history_data_export.sql
-- Generated: 2025-10-06T09:02:23.858Z
-- Includes: church_divisions, bible_manuscripts, bible_translations

BEGIN;

-- Church Divisions
DELETE FROM church_divisions;
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84sr00028zrxai0dtwxk',
  'Eastern Orthodox Church',
  'The communion of autocephalous Christian churches that follow the Byzantine Rite and recognize the Patriarch of Constantinople as their spiritual leader.',
  1054,
  'Rejection of papal supremacy and Western theological developments.',
  'Maintained traditional Byzantine theology and practices.',
  'cmgau84sj00008zrxs9zn6n36',
  NULL,
  '2025-10-03T12:45:57.195Z',
  '2025-10-03T12:45:57.195Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84sj00008zrxs9zn6n36',
  'Great Schism (1054)',
  'The permanent split between the Eastern Orthodox Church and the Roman Catholic Church, marking the end of the united Christian Church.',
  1054,
  'Disputes over papal authority, the Filioque clause, and cultural differences between East and West.',
  'Formal separation between Eastern Orthodoxy and Roman Catholicism that continues to this day.',
  NULL,
  NULL,
  '2025-10-03T12:45:57.188Z',
  '2025-10-03T12:45:57.188Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84su00048zrx7eb988i0',
  'Roman Catholic Church',
  'The largest Christian denomination, led by the Pope in Rome, maintaining the Western theological tradition.',
  1054,
  'Insistence on papal supremacy and Western theological formulations.',
  'Continued development of Western theology and papal authority.',
  'cmgau84sj00008zrxs9zn6n36',
  NULL,
  '2025-10-03T12:45:57.199Z',
  '2025-10-03T12:45:57.199Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84t500078zrxrm02m0kp',
  'Lutheranism',
  'Founded by Martin Luther, emphasizing justification by faith alone and the authority of Scripture.',
  1517,
  'Luther''s 95 Theses and rejection of papal authority.',
  'Established as a separate Christian tradition in Germany and Scandinavia.',
  'cmgau84sz00058zrxlfz4jluq',
  NULL,
  '2025-10-03T12:45:57.209Z',
  '2025-10-03T12:45:57.209Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84sz00058zrxlfz4jluq',
  'Protestant Reformation (1517)',
  'The 16th-century religious movement that led to the creation of Protestant churches, challenging the authority of the Roman Catholic Church.',
  1517,
  'Corruption in the Church, sale of indulgences, and theological disputes over salvation and authority.',
  'Creation of multiple Protestant denominations and the Counter-Reformation in the Catholic Church.',
  NULL,
  NULL,
  '2025-10-03T12:45:57.204Z',
  '2025-10-03T12:45:57.204Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84tf000d8zrx6qwb80oj',
  'Anabaptism',
  'Radical Reformation movement emphasizing adult baptism and separation of church and state.',
  1525,
  'Rejection of infant baptism and state-church connections.',
  'Influenced modern Baptist, Mennonite, and Amish traditions.',
  'cmgau84sz00058zrxlfz4jluq',
  NULL,
  '2025-10-03T12:45:57.219Z',
  '2025-10-03T12:45:57.219Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84ta000b8zrx3sorf6wj',
  'Anglicanism',
  'The Church of England, established by Henry VIII, combining Catholic liturgy with Protestant theology.',
  1534,
  'Henry VIII''s break with Rome over his divorce from Catherine of Aragon.',
  'Created a unique Anglican tradition that spread throughout the British Empire.',
  'cmgau84sz00058zrxlfz4jluq',
  NULL,
  '2025-10-03T12:45:57.215Z',
  '2025-10-03T12:45:57.215Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84t800098zrxy5g6j24x',
  'Calvinism',
  'Founded by John Calvin, emphasizing predestination and the sovereignty of God.',
  1536,
  'Reformation in Geneva and theological development of Reformed theology.',
  'Spread throughout Europe and influenced Presbyterian and Reformed churches.',
  'cmgau84sz00058zrxlfz4jluq',
  NULL,
  '2025-10-03T12:45:57.212Z',
  '2025-10-03T12:45:57.212Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84tt000g8zrxunurpwlm',
  'Puritan Movement',
  'English Protestants who sought to purify the Church of England from Catholic practices.',
  1560,
  'Desire for further reformation of the Anglican Church.',
  'Influenced the development of Congregationalist and Presbyterian churches.',
  'cmgau84to000e8zrxojp0iw53',
  NULL,
  '2025-10-03T12:45:57.233Z',
  '2025-10-03T12:45:57.233Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84to000e8zrxojp0iw53',
  'English Civil War and Puritanism (1640s)',
  'Religious and political conflicts in England that led to the temporary overthrow of the monarchy and the rise of Puritan influence.',
  1642,
  'Conflicts between Anglicans and Puritans over church governance and theology.',
  'Temporary establishment of a Puritan Commonwealth and lasting influence on English Protestantism.',
  NULL,
  NULL,
  '2025-10-03T12:45:57.228Z',
  '2025-10-03T12:45:57.228Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84tx000i8zrxw32zis7y',
  'Quakerism',
  'Founded by George Fox, emphasizing direct experience of God and pacifism.',
  1652,
  'Rejection of formal church structures and emphasis on inner light.',
  'Established the Religious Society of Friends (Quakers).',
  'cmgau84to000e8zrxojp0iw53',
  NULL,
  '2025-10-03T12:45:57.237Z',
  '2025-10-03T12:45:57.237Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84ur000q8zrxwdlczj44',
  'Evangelical Movement',
  'A broad movement emphasizing personal conversion, biblical authority, and evangelism.',
  1734,
  'Revival preaching and emphasis on personal religious experience.',
  'Shaped modern evangelical Christianity and influenced multiple denominations.',
  'cmgau84ul000o8zrx3nq5bjbt',
  NULL,
  '2025-10-03T12:45:57.267Z',
  '2025-10-03T12:45:57.267Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84ul000o8zrx3nq5bjbt',
  'Great Awakening (1730s-1740s)',
  'A series of religious revivals in the American colonies that emphasized personal conversion and emotional religious experience.',
  1734,
  'Concern over declining religious fervor and the influence of Enlightenment rationalism.',
  'Revitalized American Protestantism and influenced the development of evangelical Christianity.',
  NULL,
  NULL,
  '2025-10-03T12:45:57.262Z',
  '2025-10-03T12:45:57.262Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84u4000j8zrxmgr0f149',
  'Methodist Movement (1730s)',
  'A revival movement within Anglicanism that eventually became a separate denomination, emphasizing personal holiness and social justice.',
  1738,
  'John Wesley''s conversion experience and desire for spiritual renewal within the Church of England.',
  'Formation of the Methodist Church and influence on evangelical Christianity.',
  NULL,
  NULL,
  '2025-10-03T12:45:57.244Z',
  '2025-10-03T12:45:57.244Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84uv000s8zrx6om6zm75',
  'Baptist Expansion',
  'Rapid growth of Baptist churches during the Great Awakening, emphasizing believer''s baptism and congregational autonomy.',
  1740,
  'Revival preaching and emphasis on personal conversion.',
  'Baptists became one of the largest Protestant groups in America.',
  'cmgau84ul000o8zrx3nq5bjbt',
  NULL,
  '2025-10-03T12:45:57.271Z',
  '2025-10-03T12:45:57.271Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84u8000l8zrxkbfavgr8',
  'Wesleyan Methodism',
  'The main branch of Methodism following John Wesley''s teachings on sanctification and social holiness.',
  1784,
  'Formal separation from Anglicanism in America.',
  'Became one of the largest Protestant denominations in America.',
  'cmgau84u4000j8zrxmgr0f149',
  NULL,
  '2025-10-03T12:45:57.248Z',
  '2025-10-03T12:45:57.248Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84uc000n8zrxlbqshtun',
  'Primitive Methodism',
  'A more radical branch of Methodism emphasizing lay preaching and social reform.',
  1811,
  'Desire for more democratic church governance and social activism.',
  'Influenced the development of the Salvation Army and other social reform movements.',
  'cmgau84u4000j8zrxmgr0f149',
  NULL,
  '2025-10-03T12:45:57.252Z',
  '2025-10-03T12:45:57.252Z'
);

-- Bible Manuscripts
DELETE FROM bible_manuscripts;

-- Bible Translations
DELETE FROM bible_translations;

COMMIT;

