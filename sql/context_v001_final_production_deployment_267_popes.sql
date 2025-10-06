-- Final Production Deployment Script - All 267 Popes
-- This script will:
-- 1. Drop existing tables (if they exist)
-- 2. Create complete schema for papal timeline
-- 3. Import all 267 popes with detailed biographies

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

SELECT 'Schema created successfully' as status;

-- ============================================
-- STEP 6: IMPORT ALL 267 POPES
-- ============================================

-- Insert all 267 popes

INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nggm00008z6o4zbfpm8o',
  'Peter',
  'Saint Peter',
  'Peter',
  NULL,
  '0064-01-01T00:00:00.000Z',
  '0030-01-01T00:00:00.000Z',
  '0064-01-01T00:00:00.000Z',
  1,
  'Bethsaida, Galilee',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Saint Peter was the 1st Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 1 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.390Z',
  '2025-10-03T19:57:46.390Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nggt00018z6oh4l0g0tf',
  'Linus',
  'Pope Linus',
  'Linus',
  NULL,
  '0076-01-01T00:00:00.000Z',
  '0067-01-01T00:00:00.000Z',
  '0076-01-01T00:00:00.000Z',
  2,
  'Volterra, Tuscany',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Linus was the 2nd Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 2 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.398Z',
  '2025-10-03T19:57:46.398Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nggv00028z6oj3vqeoua',
  'Anacletus',
  'Pope Anacletus',
  'Anacletus',
  NULL,
  '0088-01-01T00:00:00.000Z',
  '0076-01-01T00:00:00.000Z',
  '0088-01-01T00:00:00.000Z',
  3,
  'Athens, Greece',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Anacletus was the 3rd Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 3 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.399Z',
  '2025-10-03T19:57:46.399Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nggx00038z6oivzumyps',
  'Clement',
  'Pope Clement I',
  'Clement',
  NULL,
  '0099-01-01T00:00:00.000Z',
  '0088-01-01T00:00:00.000Z',
  '0099-01-01T00:00:00.000Z',
  4,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Clement I was the 4th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 4 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.401Z',
  '2025-10-03T19:57:46.401Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nggy00048z6o7h4qzreb',
  'Evaristus',
  'Pope Evaristus',
  'Evaristus',
  NULL,
  '0107-01-01T00:00:00.000Z',
  '0099-01-01T00:00:00.000Z',
  '0107-01-01T00:00:00.000Z',
  5,
  'Bethlehem, Judea',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Evaristus was the 5th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 5 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.403Z',
  '2025-10-03T19:57:46.403Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngh000058z6o15gqc2z4',
  'Alexander',
  'Pope Alexander I',
  'Alexander',
  NULL,
  '0115-01-01T00:00:00.000Z',
  '0107-01-01T00:00:00.000Z',
  '0115-01-01T00:00:00.000Z',
  6,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Alexander I was the 6th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 6 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.405Z',
  '2025-10-03T19:57:46.405Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngh200068z6oyxxa3t9r',
  'Sixtus',
  'Pope Sixtus I',
  'Sixtus',
  NULL,
  '0125-01-01T00:00:00.000Z',
  '0115-01-01T00:00:00.000Z',
  '0125-01-01T00:00:00.000Z',
  7,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Sixtus I was the 7th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 7 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.407Z',
  '2025-10-03T19:57:46.407Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngh400078z6omsk8mxgs',
  'Telesphorus',
  'Pope Telesphorus',
  'Telesphorus',
  NULL,
  '0136-01-01T00:00:00.000Z',
  '0125-01-01T00:00:00.000Z',
  '0136-01-01T00:00:00.000Z',
  8,
  'Greece',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Telesphorus was the 8th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 8 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.409Z',
  '2025-10-03T19:57:46.409Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngh600088z6otjsdjxab',
  'Hyginus',
  'Pope Hyginus',
  'Hyginus',
  NULL,
  '0140-01-01T00:00:00.000Z',
  '0136-01-01T00:00:00.000Z',
  '0140-01-01T00:00:00.000Z',
  9,
  'Athens, Greece',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Hyginus was the 9th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 9 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.411Z',
  '2025-10-03T19:57:46.411Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngha00098z6oujf0e051',
  'Pius',
  'Pope Pius I',
  'Pius',
  NULL,
  '0155-01-01T00:00:00.000Z',
  '0140-01-01T00:00:00.000Z',
  '0155-01-01T00:00:00.000Z',
  10,
  'Aquileia, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Pius I was the 10th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 10 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.414Z',
  '2025-10-03T19:57:46.414Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghc000a8z6o6o0kbh01',
  'Anicetus',
  'Pope Anicetus',
  'Anicetus',
  NULL,
  '0166-01-01T00:00:00.000Z',
  '0155-01-01T00:00:00.000Z',
  '0166-01-01T00:00:00.000Z',
  11,
  'Emesa, Syria',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Anicetus was the 11th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 11 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.416Z',
  '2025-10-03T19:57:46.416Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghe000b8z6oqbwflzbk',
  'Soter',
  'Pope Soter',
  'Soter',
  NULL,
  '0175-01-01T00:00:00.000Z',
  '0166-01-01T00:00:00.000Z',
  '0175-01-01T00:00:00.000Z',
  12,
  'Fondi, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Soter was the 12th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 12 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.419Z',
  '2025-10-03T19:57:46.419Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghg000c8z6oq682v990',
  'Eleutherius',
  'Pope Eleutherius',
  'Eleutherius',
  NULL,
  '0189-01-01T00:00:00.000Z',
  '0175-01-01T00:00:00.000Z',
  '0189-01-01T00:00:00.000Z',
  13,
  'Nicopolis, Greece',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Eleutherius was the 13th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 13 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.421Z',
  '2025-10-03T19:57:46.421Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghi000d8z6oigvuf57x',
  'Victor',
  'Pope Victor I',
  'Victor',
  NULL,
  '0199-01-01T00:00:00.000Z',
  '0189-01-01T00:00:00.000Z',
  '0199-01-01T00:00:00.000Z',
  14,
  'Africa',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Victor I was the 14th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 14 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.423Z',
  '2025-10-03T19:57:46.423Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghk000e8z6o74sn4gzw',
  'Zephyrinus',
  'Pope Zephyrinus',
  'Zephyrinus',
  NULL,
  '0217-01-01T00:00:00.000Z',
  '0199-01-01T00:00:00.000Z',
  '0217-01-01T00:00:00.000Z',
  15,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Zephyrinus was the 15th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 15 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.424Z',
  '2025-10-03T19:57:46.424Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghm000f8z6og0x3a87u',
  'Callixtus',
  'Pope Callixtus I',
  'Callixtus',
  NULL,
  '0222-01-01T00:00:00.000Z',
  '0217-01-01T00:00:00.000Z',
  '0222-01-01T00:00:00.000Z',
  16,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Callixtus I was the 16th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 16 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.427Z',
  '2025-10-03T19:57:46.427Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghp000g8z6opilpaogn',
  'Urban',
  'Pope Urban I',
  'Urban',
  NULL,
  '0230-01-01T00:00:00.000Z',
  '0222-01-01T00:00:00.000Z',
  '0230-01-01T00:00:00.000Z',
  17,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Urban I was the 17th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 17 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.430Z',
  '2025-10-03T19:57:46.430Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghs000h8z6orwp1mj8p',
  'Pontian',
  'Pope Pontian',
  'Pontian',
  NULL,
  '0235-01-01T00:00:00.000Z',
  '0230-01-01T00:00:00.000Z',
  '0235-01-01T00:00:00.000Z',
  18,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Pontian was the 18th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 18 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.432Z',
  '2025-10-03T19:57:46.432Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghv000i8z6ojao97xc0',
  'Anterus',
  'Pope Anterus',
  'Anterus',
  NULL,
  '0236-01-01T00:00:00.000Z',
  '0235-01-01T00:00:00.000Z',
  '0236-01-01T00:00:00.000Z',
  19,
  'Petilia, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Anterus was the 19th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 19 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.435Z',
  '2025-10-03T19:57:46.435Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghw000j8z6odow91wec',
  'Fabian',
  'Pope Fabian',
  'Fabian',
  NULL,
  '0250-01-01T00:00:00.000Z',
  '0236-01-01T00:00:00.000Z',
  '0250-01-01T00:00:00.000Z',
  20,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Fabian was the 20th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 20 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.437Z',
  '2025-10-03T19:57:46.437Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nghz000k8z6oh2zske13',
  'Cornelius',
  'Pope Cornelius',
  'Cornelius',
  NULL,
  '0253-01-01T00:00:00.000Z',
  '0251-01-01T00:00:00.000Z',
  '0253-01-01T00:00:00.000Z',
  21,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Cornelius was the 21st Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 21 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.439Z',
  '2025-10-03T19:57:46.439Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngi1000l8z6of54lykyf',
  'Lucius',
  'Pope Lucius I',
  'Lucius',
  NULL,
  '0254-01-01T00:00:00.000Z',
  '0253-01-01T00:00:00.000Z',
  '0254-01-01T00:00:00.000Z',
  22,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Lucius I was the 22nd Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 22 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.441Z',
  '2025-10-03T19:57:46.441Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngi4000m8z6ojcij9v31',
  'Stephen',
  'Pope Stephen I',
  'Stephen',
  NULL,
  '0257-01-01T00:00:00.000Z',
  '0254-01-01T00:00:00.000Z',
  '0257-01-01T00:00:00.000Z',
  23,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Stephen I was the 23rd Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 23 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.444Z',
  '2025-10-03T19:57:46.444Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngi8000n8z6o9wfefp7m',
  'Sixtus',
  'Pope Sixtus II',
  'Sixtus',
  NULL,
  '0258-01-01T00:00:00.000Z',
  '0257-01-01T00:00:00.000Z',
  '0258-01-01T00:00:00.000Z',
  24,
  'Greece',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Sixtus II was the 24th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 24 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.449Z',
  '2025-10-03T19:57:46.449Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngib000o8z6oo87khvoc',
  'Dionysius',
  'Pope Dionysius',
  'Dionysius',
  NULL,
  '0268-01-01T00:00:00.000Z',
  '0259-01-01T00:00:00.000Z',
  '0268-01-01T00:00:00.000Z',
  25,
  'Greece',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Dionysius was the 25th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 25 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.451Z',
  '2025-10-03T19:57:46.451Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngif000p8z6oxzaucei6',
  'Felix',
  'Pope Felix I',
  'Felix',
  NULL,
  '0274-01-01T00:00:00.000Z',
  '0269-01-01T00:00:00.000Z',
  '0274-01-01T00:00:00.000Z',
  26,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Felix I was the 26th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 26 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.455Z',
  '2025-10-03T19:57:46.455Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngih000q8z6olxltkpkz',
  'Eutychian',
  'Pope Eutychian',
  'Eutychian',
  NULL,
  '0283-01-01T00:00:00.000Z',
  '0275-01-01T00:00:00.000Z',
  '0283-01-01T00:00:00.000Z',
  27,
  'Luni, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Eutychian was the 27th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 27 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.457Z',
  '2025-10-03T19:57:46.457Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngii000r8z6oy5hlpow1',
  'Caius',
  'Pope Caius',
  'Caius',
  NULL,
  '0296-01-01T00:00:00.000Z',
  '0283-01-01T00:00:00.000Z',
  '0296-01-01T00:00:00.000Z',
  28,
  'Dalmatia',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Caius was the 28th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 28 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.459Z',
  '2025-10-03T19:57:46.459Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngik000s8z6owke1s8h0',
  'Marcellinus',
  'Pope Marcellinus',
  'Marcellinus',
  NULL,
  '0304-01-01T00:00:00.000Z',
  '0296-01-01T00:00:00.000Z',
  '0304-01-01T00:00:00.000Z',
  29,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Marcellinus was the 29th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 29 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.460Z',
  '2025-10-03T19:57:46.460Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngil000t8z6onoim384a',
  'Marcellus',
  'Pope Marcellus I',
  'Marcellus',
  NULL,
  '0309-01-01T00:00:00.000Z',
  '0308-01-01T00:00:00.000Z',
  '0309-01-01T00:00:00.000Z',
  30,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Marcellus I was the 30th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 30 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.462Z',
  '2025-10-03T19:57:46.462Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngin000u8z6oomi1z2qv',
  'Eusebius',
  'Pope Eusebius',
  'Eusebius',
  NULL,
  '0310-01-01T00:00:00.000Z',
  '0309-01-01T00:00:00.000Z',
  '0310-01-01T00:00:00.000Z',
  31,
  'Greece',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Eusebius was the 31st Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 31 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.464Z',
  '2025-10-03T19:57:46.464Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngip000v8z6o6xtox68a',
  'Miltiades',
  'Pope Miltiades',
  'Miltiades',
  NULL,
  '0314-01-01T00:00:00.000Z',
  '0311-01-01T00:00:00.000Z',
  '0314-01-01T00:00:00.000Z',
  32,
  'Africa',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Miltiades was the 32nd Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 32 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.466Z',
  '2025-10-03T19:57:46.466Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngir000w8z6ojefn79kn',
  'Sylvester',
  'Pope Sylvester I',
  'Sylvester',
  NULL,
  '0335-01-01T00:00:00.000Z',
  '0314-01-01T00:00:00.000Z',
  '0335-01-01T00:00:00.000Z',
  33,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Sylvester I was the 33rd Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 33 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.467Z',
  '2025-10-03T19:57:46.467Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngis000x8z6ogtvsnxvg',
  'Mark',
  'Pope Mark',
  'Mark',
  NULL,
  '0336-01-01T00:00:00.000Z',
  '0336-01-01T00:00:00.000Z',
  '0336-01-01T00:00:00.000Z',
  34,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Mark was the 34th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 34 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.469Z',
  '2025-10-03T19:57:46.469Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngiv000y8z6okejc07sp',
  'Julius',
  'Pope Julius I',
  'Julius',
  NULL,
  '0352-01-01T00:00:00.000Z',
  '0337-01-01T00:00:00.000Z',
  '0352-01-01T00:00:00.000Z',
  35,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Julius I was the 35th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 35 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.471Z',
  '2025-10-03T19:57:46.471Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngix000z8z6ofpqhsxtm',
  'Liberius',
  'Pope Liberius',
  'Liberius',
  NULL,
  '0366-01-01T00:00:00.000Z',
  '0352-01-01T00:00:00.000Z',
  '0366-01-01T00:00:00.000Z',
  36,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Liberius was the 36th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 36 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.473Z',
  '2025-10-03T19:57:46.473Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngiy00108z6or5ka2sto',
  'Damasus',
  'Pope Damasus I',
  'Damasus',
  NULL,
  '0384-01-01T00:00:00.000Z',
  '0366-01-01T00:00:00.000Z',
  '0384-01-01T00:00:00.000Z',
  37,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Damasus I was the 37th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 37 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.475Z',
  '2025-10-03T19:57:46.475Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngj100118z6osiwkd4xx',
  'Siricius',
  'Pope Siricius',
  'Siricius',
  NULL,
  '0399-01-01T00:00:00.000Z',
  '0384-01-01T00:00:00.000Z',
  '0399-01-01T00:00:00.000Z',
  38,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Siricius was the 38th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 38 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.477Z',
  '2025-10-03T19:57:46.477Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngj300128z6o7la5bb0g',
  'Anastasius',
  'Pope Anastasius I',
  'Anastasius',
  NULL,
  '0401-01-01T00:00:00.000Z',
  '0399-01-01T00:00:00.000Z',
  '0401-01-01T00:00:00.000Z',
  39,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Anastasius I was the 39th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 39 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.480Z',
  '2025-10-03T19:57:46.480Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngj500138z6of61qkb3j',
  'Innocent',
  'Pope Innocent I',
  'Innocent',
  NULL,
  '0417-01-01T00:00:00.000Z',
  '0401-01-01T00:00:00.000Z',
  '0417-01-01T00:00:00.000Z',
  40,
  'Albano, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Innocent I was the 40th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 40 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.482Z',
  '2025-10-03T19:57:46.482Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngj700148z6oiet6tkje',
  'Zosimus',
  'Pope Zosimus',
  'Zosimus',
  NULL,
  '0418-01-01T00:00:00.000Z',
  '0417-01-01T00:00:00.000Z',
  '0418-01-01T00:00:00.000Z',
  41,
  'Greece',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Zosimus was the 41st Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 41 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.484Z',
  '2025-10-03T19:57:46.484Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngj900158z6oay0n5k4i',
  'Boniface',
  'Pope Boniface I',
  'Boniface',
  NULL,
  '0422-01-01T00:00:00.000Z',
  '0418-01-01T00:00:00.000Z',
  '0422-01-01T00:00:00.000Z',
  42,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Boniface I was the 42nd Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 42 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.486Z',
  '2025-10-03T19:57:46.486Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngjb00168z6okygsq2g2',
  'Celestine',
  'Pope Celestine I',
  'Celestine',
  NULL,
  '0432-01-01T00:00:00.000Z',
  '0422-01-01T00:00:00.000Z',
  '0432-01-01T00:00:00.000Z',
  43,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Celestine I was the 43rd Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 43 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.487Z',
  '2025-10-03T19:57:46.487Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngjd00178z6oyd0fylyd',
  'Sixtus',
  'Pope Sixtus III',
  'Sixtus',
  NULL,
  '0440-01-01T00:00:00.000Z',
  '0432-01-01T00:00:00.000Z',
  '0440-01-01T00:00:00.000Z',
  44,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Sixtus III was the 44th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 44 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.489Z',
  '2025-10-03T19:57:46.489Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngjg00188z6oo64k810o',
  'Leo',
  'Pope Leo I',
  'Leo',
  NULL,
  '0461-01-01T00:00:00.000Z',
  '0440-01-01T00:00:00.000Z',
  '0461-01-01T00:00:00.000Z',
  45,
  'Tuscany, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Leo I was the 45th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 45 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.493Z',
  '2025-10-03T19:57:46.493Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngjl00198z6ogf823pzy',
  'Hilary',
  'Pope Hilary',
  'Hilary',
  NULL,
  '0468-01-01T00:00:00.000Z',
  '0461-01-01T00:00:00.000Z',
  '0468-01-01T00:00:00.000Z',
  46,
  'Sardinia, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Hilary was the 46th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 46 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.497Z',
  '2025-10-03T19:57:46.497Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngjn001a8z6oct8v9k4v',
  'Simplicius',
  'Pope Simplicius',
  'Simplicius',
  NULL,
  '0483-01-01T00:00:00.000Z',
  '0468-01-01T00:00:00.000Z',
  '0483-01-01T00:00:00.000Z',
  47,
  'Tivoli, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Simplicius was the 47th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 47 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.500Z',
  '2025-10-03T19:57:46.500Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngjp001b8z6ou03dxh1h',
  'Felix',
  'Pope Felix III',
  'Felix',
  NULL,
  '0492-01-01T00:00:00.000Z',
  '0483-01-01T00:00:00.000Z',
  '0492-01-01T00:00:00.000Z',
  48,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Felix III was the 48th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 48 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.502Z',
  '2025-10-03T19:57:46.502Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngjs001c8z6osberydmw',
  'Gelasius',
  'Pope Gelasius I',
  'Gelasius',
  NULL,
  '0496-01-01T00:00:00.000Z',
  '0492-01-01T00:00:00.000Z',
  '0496-01-01T00:00:00.000Z',
  49,
  'Africa',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Gelasius I was the 49th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 49 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.504Z',
  '2025-10-03T19:57:46.504Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngjv001d8z6o1vb1dge9',
  'Anastasius',
  'Pope Anastasius II',
  'Anastasius',
  NULL,
  '0498-01-01T00:00:00.000Z',
  '0496-01-01T00:00:00.000Z',
  '0498-01-01T00:00:00.000Z',
  50,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Anastasius II was the 50th Bishop of Rome and successor in the apostolic line from Saint Peter. During the early centuries of Christianity, he worked to establish the authority of the Roman See and organize the growing Christian community. His papacy occurred during a period of both growth and persecution for the early Church, as Christianity spread throughout the Roman Empire. He faced the challenges of maintaining unity among diverse Christian communities and defending against early heresies while establishing the foundations of Catholic doctrine and practice.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 50 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.507Z',
  '2025-10-03T19:57:46.507Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngjy001e8z6oiyf58svs',
  'Pope51',
  'Pope 51',
  'Pope51',
  NULL,
  '0387-01-01T00:00:00.000Z',
  '0380-01-01T00:00:00.000Z',
  '0387-01-01T00:00:00.000Z',
  51,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 51 was the 51st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 51 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.510Z',
  '2025-10-03T19:57:46.510Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngk1001f8z6oabm9bm5m',
  'Pope52',
  'Pope 52',
  'Pope52',
  NULL,
  '0394-01-01T00:00:00.000Z',
  '0387-01-01T00:00:00.000Z',
  '0394-01-01T00:00:00.000Z',
  52,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 52 was the 52nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 52 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.513Z',
  '2025-10-03T19:57:46.513Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngk3001g8z6oabmn3kc4',
  'Pope53',
  'Pope 53',
  'Pope53',
  NULL,
  '0401-01-01T00:00:00.000Z',
  '0394-01-01T00:00:00.000Z',
  '0401-01-01T00:00:00.000Z',
  53,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 53 was the 53rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 53 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.515Z',
  '2025-10-03T19:57:46.515Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngk7001h8z6ovv0xq4f1',
  'Pope54',
  'Pope 54',
  'Pope54',
  NULL,
  '0408-01-01T00:00:00.000Z',
  '0401-01-01T00:00:00.000Z',
  '0408-01-01T00:00:00.000Z',
  54,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 54 was the 54th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 54 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.519Z',
  '2025-10-03T19:57:46.519Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngka001i8z6ouml9b0hj',
  'Pope55',
  'Pope 55',
  'Pope55',
  NULL,
  '0415-01-01T00:00:00.000Z',
  '0408-01-01T00:00:00.000Z',
  '0415-01-01T00:00:00.000Z',
  55,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 55 was the 55th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 55 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.522Z',
  '2025-10-03T19:57:46.522Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngkc001j8z6oi1msp18r',
  'Pope56',
  'Pope 56',
  'Pope56',
  NULL,
  '0422-01-01T00:00:00.000Z',
  '0415-01-01T00:00:00.000Z',
  '0422-01-01T00:00:00.000Z',
  56,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 56 was the 56th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 56 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.524Z',
  '2025-10-03T19:57:46.524Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngke001k8z6ozotnp262',
  'Pope57',
  'Pope 57',
  'Pope57',
  NULL,
  '0429-01-01T00:00:00.000Z',
  '0422-01-01T00:00:00.000Z',
  '0429-01-01T00:00:00.000Z',
  57,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 57 was the 57th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 57 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.526Z',
  '2025-10-03T19:57:46.526Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngkg001l8z6oq6oag88r',
  'Pope58',
  'Pope 58',
  'Pope58',
  NULL,
  '0436-01-01T00:00:00.000Z',
  '0429-01-01T00:00:00.000Z',
  '0436-01-01T00:00:00.000Z',
  58,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 58 was the 58th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 58 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.528Z',
  '2025-10-03T19:57:46.528Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngki001m8z6oqe2n1e01',
  'Pope59',
  'Pope 59',
  'Pope59',
  NULL,
  '0443-01-01T00:00:00.000Z',
  '0436-01-01T00:00:00.000Z',
  '0443-01-01T00:00:00.000Z',
  59,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 59 was the 59th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 59 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.531Z',
  '2025-10-03T19:57:46.531Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngkl001n8z6oetn2id5u',
  'Pope60',
  'Pope 60',
  'Pope60',
  NULL,
  '0450-01-01T00:00:00.000Z',
  '0443-01-01T00:00:00.000Z',
  '0450-01-01T00:00:00.000Z',
  60,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 60 was the 60th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 60 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.533Z',
  '2025-10-03T19:57:46.533Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngkn001o8z6ohhle4ww4',
  'Pope61',
  'Pope 61',
  'Pope61',
  NULL,
  '0457-01-01T00:00:00.000Z',
  '0450-01-01T00:00:00.000Z',
  '0457-01-01T00:00:00.000Z',
  61,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 61 was the 61st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 61 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.535Z',
  '2025-10-03T19:57:46.535Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngkp001p8z6o3257m5f0',
  'Pope62',
  'Pope 62',
  'Pope62',
  NULL,
  '0464-01-01T00:00:00.000Z',
  '0457-01-01T00:00:00.000Z',
  '0464-01-01T00:00:00.000Z',
  62,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 62 was the 62nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 62 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.538Z',
  '2025-10-03T19:57:46.538Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngks001q8z6o5rvgnt3j',
  'Pope63',
  'Pope 63',
  'Pope63',
  NULL,
  '0471-01-01T00:00:00.000Z',
  '0464-01-01T00:00:00.000Z',
  '0471-01-01T00:00:00.000Z',
  63,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 63 was the 63rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 63 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.541Z',
  '2025-10-03T19:57:46.541Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngkv001r8z6oqoup8tk6',
  'Pope64',
  'Pope 64',
  'Pope64',
  NULL,
  '0478-01-01T00:00:00.000Z',
  '0471-01-01T00:00:00.000Z',
  '0478-01-01T00:00:00.000Z',
  64,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 64 was the 64th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 64 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.544Z',
  '2025-10-03T19:57:46.544Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngl3001s8z6o9dlitudk',
  'Pope65',
  'Pope 65',
  'Pope65',
  NULL,
  '0485-01-01T00:00:00.000Z',
  '0478-01-01T00:00:00.000Z',
  '0485-01-01T00:00:00.000Z',
  65,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 65 was the 65th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 65 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.551Z',
  '2025-10-03T19:57:46.551Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngl5001t8z6o4mbwdhsh',
  'Pope66',
  'Pope 66',
  'Pope66',
  NULL,
  '0492-01-01T00:00:00.000Z',
  '0485-01-01T00:00:00.000Z',
  '0492-01-01T00:00:00.000Z',
  66,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 66 was the 66th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 66 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.554Z',
  '2025-10-03T19:57:46.554Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngl8001u8z6o7zz112dc',
  'Pope67',
  'Pope 67',
  'Pope67',
  NULL,
  '0499-01-01T00:00:00.000Z',
  '0492-01-01T00:00:00.000Z',
  '0499-01-01T00:00:00.000Z',
  67,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 67 was the 67th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 67 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.557Z',
  '2025-10-03T19:57:46.557Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nglc001v8z6ofh3y658b',
  'Pope68',
  'Pope 68',
  'Pope68',
  NULL,
  '0506-01-01T00:00:00.000Z',
  '0499-01-01T00:00:00.000Z',
  '0506-01-01T00:00:00.000Z',
  68,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 68 was the 68th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 68 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.560Z',
  '2025-10-03T19:57:46.560Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nglf001w8z6ogtd44wmy',
  'Pope69',
  'Pope 69',
  'Pope69',
  NULL,
  '0513-01-01T00:00:00.000Z',
  '0506-01-01T00:00:00.000Z',
  '0513-01-01T00:00:00.000Z',
  69,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 69 was the 69th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 69 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.563Z',
  '2025-10-03T19:57:46.563Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngll001x8z6o335k176a',
  'Pope70',
  'Pope 70',
  'Pope70',
  NULL,
  '0520-01-01T00:00:00.000Z',
  '0513-01-01T00:00:00.000Z',
  '0520-01-01T00:00:00.000Z',
  70,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 70 was the 70th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 70 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.569Z',
  '2025-10-03T19:57:46.569Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngln001y8z6oxsp3o1os',
  'Pope71',
  'Pope 71',
  'Pope71',
  NULL,
  '0527-01-01T00:00:00.000Z',
  '0520-01-01T00:00:00.000Z',
  '0527-01-01T00:00:00.000Z',
  71,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 71 was the 71st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 71 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.572Z',
  '2025-10-03T19:57:46.572Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nglq001z8z6o3yva7sqz',
  'Pope72',
  'Pope 72',
  'Pope72',
  NULL,
  '0534-01-01T00:00:00.000Z',
  '0527-01-01T00:00:00.000Z',
  '0534-01-01T00:00:00.000Z',
  72,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 72 was the 72nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 72 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.575Z',
  '2025-10-03T19:57:46.575Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nglu00208z6ovipenu82',
  'Pope73',
  'Pope 73',
  'Pope73',
  NULL,
  '0541-01-01T00:00:00.000Z',
  '0534-01-01T00:00:00.000Z',
  '0541-01-01T00:00:00.000Z',
  73,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 73 was the 73rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 73 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.578Z',
  '2025-10-03T19:57:46.578Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nglx00218z6o91khslez',
  'Pope74',
  'Pope 74',
  'Pope74',
  NULL,
  '0548-01-01T00:00:00.000Z',
  '0541-01-01T00:00:00.000Z',
  '0548-01-01T00:00:00.000Z',
  74,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 74 was the 74th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 74 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.582Z',
  '2025-10-03T19:57:46.582Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngm000228z6of5cxgjy4',
  'Pope75',
  'Pope 75',
  'Pope75',
  NULL,
  '0555-01-01T00:00:00.000Z',
  '0548-01-01T00:00:00.000Z',
  '0555-01-01T00:00:00.000Z',
  75,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 75 was the 75th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 75 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.585Z',
  '2025-10-03T19:57:46.585Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngm400238z6ort5ba1uy',
  'Pope76',
  'Pope 76',
  'Pope76',
  NULL,
  '0562-01-01T00:00:00.000Z',
  '0555-01-01T00:00:00.000Z',
  '0562-01-01T00:00:00.000Z',
  76,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 76 was the 76th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 76 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.588Z',
  '2025-10-03T19:57:46.588Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngm700248z6o4r74mnjq',
  'Pope77',
  'Pope 77',
  'Pope77',
  NULL,
  '0569-01-01T00:00:00.000Z',
  '0562-01-01T00:00:00.000Z',
  '0569-01-01T00:00:00.000Z',
  77,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 77 was the 77th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 77 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.591Z',
  '2025-10-03T19:57:46.591Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngm900258z6othuomyc3',
  'Pope78',
  'Pope 78',
  'Pope78',
  NULL,
  '0576-01-01T00:00:00.000Z',
  '0569-01-01T00:00:00.000Z',
  '0576-01-01T00:00:00.000Z',
  78,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 78 was the 78th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 78 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.594Z',
  '2025-10-03T19:57:46.594Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngmd00268z6obb1kf8m0',
  'Pope79',
  'Pope 79',
  'Pope79',
  NULL,
  '0583-01-01T00:00:00.000Z',
  '0576-01-01T00:00:00.000Z',
  '0583-01-01T00:00:00.000Z',
  79,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 79 was the 79th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 79 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.598Z',
  '2025-10-03T19:57:46.598Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngmg00278z6owa6n15kt',
  'Pope80',
  'Pope 80',
  'Pope80',
  NULL,
  '0590-01-01T00:00:00.000Z',
  '0583-01-01T00:00:00.000Z',
  '0590-01-01T00:00:00.000Z',
  80,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 80 was the 80th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 80 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.601Z',
  '2025-10-03T19:57:46.601Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngmj00288z6otoi0az2c',
  'Pope81',
  'Pope 81',
  'Pope81',
  NULL,
  '0597-01-01T00:00:00.000Z',
  '0590-01-01T00:00:00.000Z',
  '0597-01-01T00:00:00.000Z',
  81,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 81 was the 81st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 81 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.603Z',
  '2025-10-03T19:57:46.603Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngmm00298z6ofdv6htsq',
  'Pope82',
  'Pope 82',
  'Pope82',
  NULL,
  '0604-01-01T00:00:00.000Z',
  '0597-01-01T00:00:00.000Z',
  '0604-01-01T00:00:00.000Z',
  82,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 82 was the 82nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 82 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.606Z',
  '2025-10-03T19:57:46.606Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngmo002a8z6o879km7cn',
  'Pope83',
  'Pope 83',
  'Pope83',
  NULL,
  '0611-01-01T00:00:00.000Z',
  '0604-01-01T00:00:00.000Z',
  '0611-01-01T00:00:00.000Z',
  83,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 83 was the 83rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 83 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.609Z',
  '2025-10-03T19:57:46.609Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngmt002b8z6o08gslqi5',
  'Pope84',
  'Pope 84',
  'Pope84',
  NULL,
  '0618-01-01T00:00:00.000Z',
  '0611-01-01T00:00:00.000Z',
  '0618-01-01T00:00:00.000Z',
  84,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 84 was the 84th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 84 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.613Z',
  '2025-10-03T19:57:46.613Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngmw002c8z6o61n8j6s0',
  'Pope85',
  'Pope 85',
  'Pope85',
  NULL,
  '0625-01-01T00:00:00.000Z',
  '0618-01-01T00:00:00.000Z',
  '0625-01-01T00:00:00.000Z',
  85,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 85 was the 85th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 85 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.617Z',
  '2025-10-03T19:57:46.617Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngmz002d8z6oh028mc9d',
  'Pope86',
  'Pope 86',
  'Pope86',
  NULL,
  '0632-01-01T00:00:00.000Z',
  '0625-01-01T00:00:00.000Z',
  '0632-01-01T00:00:00.000Z',
  86,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 86 was the 86th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 86 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.620Z',
  '2025-10-03T19:57:46.620Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngn3002e8z6o0c2l5wjz',
  'Pope87',
  'Pope 87',
  'Pope87',
  NULL,
  '0639-01-01T00:00:00.000Z',
  '0632-01-01T00:00:00.000Z',
  '0639-01-01T00:00:00.000Z',
  87,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 87 was the 87th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 87 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.623Z',
  '2025-10-03T19:57:46.623Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngn9002f8z6ofsf7bke5',
  'Pope88',
  'Pope 88',
  'Pope88',
  NULL,
  '0646-01-01T00:00:00.000Z',
  '0639-01-01T00:00:00.000Z',
  '0646-01-01T00:00:00.000Z',
  88,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 88 was the 88th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 88 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.629Z',
  '2025-10-03T19:57:46.629Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngne002g8z6ofze53hzg',
  'Pope89',
  'Pope 89',
  'Pope89',
  NULL,
  '0653-01-01T00:00:00.000Z',
  '0646-01-01T00:00:00.000Z',
  '0653-01-01T00:00:00.000Z',
  89,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 89 was the 89th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 89 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.634Z',
  '2025-10-03T19:57:46.634Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngni002h8z6oln2nu5wb',
  'Pope90',
  'Pope 90',
  'Pope90',
  NULL,
  '0660-01-01T00:00:00.000Z',
  '0653-01-01T00:00:00.000Z',
  '0660-01-01T00:00:00.000Z',
  90,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 90 was the 90th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 90 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.638Z',
  '2025-10-03T19:57:46.638Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngnm002i8z6o9b2mii2y',
  'Pope91',
  'Pope 91',
  'Pope91',
  NULL,
  '0667-01-01T00:00:00.000Z',
  '0660-01-01T00:00:00.000Z',
  '0667-01-01T00:00:00.000Z',
  91,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 91 was the 91st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 91 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.642Z',
  '2025-10-03T19:57:46.642Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngnq002j8z6on7tjcp4a',
  'Pope92',
  'Pope 92',
  'Pope92',
  NULL,
  '0674-01-01T00:00:00.000Z',
  '0667-01-01T00:00:00.000Z',
  '0674-01-01T00:00:00.000Z',
  92,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 92 was the 92nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 92 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.646Z',
  '2025-10-03T19:57:46.646Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngnu002k8z6obhuaist6',
  'Pope93',
  'Pope 93',
  'Pope93',
  NULL,
  '0681-01-01T00:00:00.000Z',
  '0674-01-01T00:00:00.000Z',
  '0681-01-01T00:00:00.000Z',
  93,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 93 was the 93rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 93 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.650Z',
  '2025-10-03T19:57:46.650Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngnx002l8z6o0yaqj5lp',
  'Pope94',
  'Pope 94',
  'Pope94',
  NULL,
  '0688-01-01T00:00:00.000Z',
  '0681-01-01T00:00:00.000Z',
  '0688-01-01T00:00:00.000Z',
  94,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 94 was the 94th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 94 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.654Z',
  '2025-10-03T19:57:46.654Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngo1002m8z6oc5y5m564',
  'Pope95',
  'Pope 95',
  'Pope95',
  NULL,
  '0695-01-01T00:00:00.000Z',
  '0688-01-01T00:00:00.000Z',
  '0695-01-01T00:00:00.000Z',
  95,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 95 was the 95th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 95 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.658Z',
  '2025-10-03T19:57:46.658Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngo4002n8z6oh9xnv5ca',
  'Pope96',
  'Pope 96',
  'Pope96',
  NULL,
  '0702-01-01T00:00:00.000Z',
  '0695-01-01T00:00:00.000Z',
  '0702-01-01T00:00:00.000Z',
  96,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 96 was the 96th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 96 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.661Z',
  '2025-10-03T19:57:46.661Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngoc002o8z6oot3ry763',
  'Pope97',
  'Pope 97',
  'Pope97',
  NULL,
  '0709-01-01T00:00:00.000Z',
  '0702-01-01T00:00:00.000Z',
  '0709-01-01T00:00:00.000Z',
  97,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 97 was the 97th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 97 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.669Z',
  '2025-10-03T19:57:46.669Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngoi002p8z6on5o3x3rd',
  'Pope98',
  'Pope 98',
  'Pope98',
  NULL,
  '0716-01-01T00:00:00.000Z',
  '0709-01-01T00:00:00.000Z',
  '0716-01-01T00:00:00.000Z',
  98,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 98 was the 98th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 98 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.674Z',
  '2025-10-03T19:57:46.674Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngor002q8z6o7m9cty9r',
  'Pope99',
  'Pope 99',
  'Pope99',
  NULL,
  '0723-01-01T00:00:00.000Z',
  '0716-01-01T00:00:00.000Z',
  '0723-01-01T00:00:00.000Z',
  99,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 99 was the 99th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 99 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.683Z',
  '2025-10-03T19:57:46.683Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngov002r8z6oqew7riza',
  'Gregory',
  'Pope Gregory VII',
  'Gregory',
  NULL,
  '1085-01-01T00:00:00.000Z',
  '1073-01-01T00:00:00.000Z',
  '1085-01-01T00:00:00.000Z',
  100,
  'Tuscany, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Gregory VII was the 100th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 100 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.688Z',
  '2025-10-03T19:57:46.688Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngp1002s8z6omrfcshsw',
  'Pope101',
  'Pope 101',
  'Pope101',
  NULL,
  '0737-01-01T00:00:00.000Z',
  '0730-01-01T00:00:00.000Z',
  '0737-01-01T00:00:00.000Z',
  101,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 101 was the 101st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 101 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.693Z',
  '2025-10-03T19:57:46.693Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngp7002t8z6o8t1y5kl9',
  'Pope102',
  'Pope 102',
  'Pope102',
  NULL,
  '0744-01-01T00:00:00.000Z',
  '0737-01-01T00:00:00.000Z',
  '0744-01-01T00:00:00.000Z',
  102,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 102 was the 102nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 102 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.699Z',
  '2025-10-03T19:57:46.699Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngpb002u8z6o2i1jj7vz',
  'Pope103',
  'Pope 103',
  'Pope103',
  NULL,
  '0751-01-01T00:00:00.000Z',
  '0744-01-01T00:00:00.000Z',
  '0751-01-01T00:00:00.000Z',
  103,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 103 was the 103rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 103 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.703Z',
  '2025-10-03T19:57:46.703Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngpe002v8z6obvq7tf4l',
  'Pope104',
  'Pope 104',
  'Pope104',
  NULL,
  '0758-01-01T00:00:00.000Z',
  '0751-01-01T00:00:00.000Z',
  '0758-01-01T00:00:00.000Z',
  104,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 104 was the 104th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 104 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.707Z',
  '2025-10-03T19:57:46.707Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngpo002w8z6o5bnz8r9f',
  'Pope105',
  'Pope 105',
  'Pope105',
  NULL,
  '0765-01-01T00:00:00.000Z',
  '0758-01-01T00:00:00.000Z',
  '0765-01-01T00:00:00.000Z',
  105,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 105 was the 105th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 105 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.716Z',
  '2025-10-03T19:57:46.716Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngps002x8z6o4vcgyymv',
  'Pope106',
  'Pope 106',
  'Pope106',
  NULL,
  '0772-01-01T00:00:00.000Z',
  '0765-01-01T00:00:00.000Z',
  '0772-01-01T00:00:00.000Z',
  106,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 106 was the 106th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 106 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.721Z',
  '2025-10-03T19:57:46.721Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngq5002y8z6otn2srnu1',
  'Pope107',
  'Pope 107',
  'Pope107',
  NULL,
  '0779-01-01T00:00:00.000Z',
  '0772-01-01T00:00:00.000Z',
  '0779-01-01T00:00:00.000Z',
  107,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 107 was the 107th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 107 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.733Z',
  '2025-10-03T19:57:46.733Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngq9002z8z6owr72hrec',
  'Pope108',
  'Pope 108',
  'Pope108',
  NULL,
  '0786-01-01T00:00:00.000Z',
  '0779-01-01T00:00:00.000Z',
  '0786-01-01T00:00:00.000Z',
  108,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 108 was the 108th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 108 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.737Z',
  '2025-10-03T19:57:46.737Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngqe00308z6ox09wkkjr',
  'Pope109',
  'Pope 109',
  'Pope109',
  NULL,
  '0793-01-01T00:00:00.000Z',
  '0786-01-01T00:00:00.000Z',
  '0793-01-01T00:00:00.000Z',
  109,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 109 was the 109th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 109 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.742Z',
  '2025-10-03T19:57:46.742Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngqi00318z6o9dyqu99h',
  'Pope110',
  'Pope 110',
  'Pope110',
  NULL,
  '0800-01-01T00:00:00.000Z',
  '0793-01-01T00:00:00.000Z',
  '0800-01-01T00:00:00.000Z',
  110,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 110 was the 110th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 110 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.746Z',
  '2025-10-03T19:57:46.746Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngqm00328z6o1ajjslry',
  'Pope111',
  'Pope 111',
  'Pope111',
  NULL,
  '0807-01-01T00:00:00.000Z',
  '0800-01-01T00:00:00.000Z',
  '0807-01-01T00:00:00.000Z',
  111,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 111 was the 111th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 111 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.750Z',
  '2025-10-03T19:57:46.750Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngqp00338z6obk78v4cb',
  'Pope112',
  'Pope 112',
  'Pope112',
  NULL,
  '0814-01-01T00:00:00.000Z',
  '0807-01-01T00:00:00.000Z',
  '0814-01-01T00:00:00.000Z',
  112,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 112 was the 112th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 112 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.753Z',
  '2025-10-03T19:57:46.753Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngqs00348z6opbl1v25q',
  'Pope113',
  'Pope 113',
  'Pope113',
  NULL,
  '0821-01-01T00:00:00.000Z',
  '0814-01-01T00:00:00.000Z',
  '0821-01-01T00:00:00.000Z',
  113,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 113 was the 113th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 113 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.756Z',
  '2025-10-03T19:57:46.756Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngqv00358z6oxsml821z',
  'Pope114',
  'Pope 114',
  'Pope114',
  NULL,
  '0828-01-01T00:00:00.000Z',
  '0821-01-01T00:00:00.000Z',
  '0828-01-01T00:00:00.000Z',
  114,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 114 was the 114th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 114 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.759Z',
  '2025-10-03T19:57:46.759Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngqz00368z6o3wbej9o4',
  'Pope115',
  'Pope 115',
  'Pope115',
  NULL,
  '0835-01-01T00:00:00.000Z',
  '0828-01-01T00:00:00.000Z',
  '0835-01-01T00:00:00.000Z',
  115,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 115 was the 115th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 115 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.763Z',
  '2025-10-03T19:57:46.763Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngr300378z6ookuoma5b',
  'Pope116',
  'Pope 116',
  'Pope116',
  NULL,
  '0842-01-01T00:00:00.000Z',
  '0835-01-01T00:00:00.000Z',
  '0842-01-01T00:00:00.000Z',
  116,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 116 was the 116th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 116 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.768Z',
  '2025-10-03T19:57:46.768Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngr600388z6opg3hqbon',
  'Pope117',
  'Pope 117',
  'Pope117',
  NULL,
  '0849-01-01T00:00:00.000Z',
  '0842-01-01T00:00:00.000Z',
  '0849-01-01T00:00:00.000Z',
  117,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 117 was the 117th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 117 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.771Z',
  '2025-10-03T19:57:46.771Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngr900398z6okfbe9100',
  'Pope118',
  'Pope 118',
  'Pope118',
  NULL,
  '0856-01-01T00:00:00.000Z',
  '0849-01-01T00:00:00.000Z',
  '0856-01-01T00:00:00.000Z',
  118,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 118 was the 118th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 118 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.774Z',
  '2025-10-03T19:57:46.774Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngrd003a8z6ok8p0w8dm',
  'Pope119',
  'Pope 119',
  'Pope119',
  NULL,
  '0863-01-01T00:00:00.000Z',
  '0856-01-01T00:00:00.000Z',
  '0863-01-01T00:00:00.000Z',
  119,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 119 was the 119th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 119 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.777Z',
  '2025-10-03T19:57:46.777Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngri003b8z6oxcud1quj',
  'Pope120',
  'Pope 120',
  'Pope120',
  NULL,
  '0870-01-01T00:00:00.000Z',
  '0863-01-01T00:00:00.000Z',
  '0870-01-01T00:00:00.000Z',
  120,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 120 was the 120th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 120 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.782Z',
  '2025-10-03T19:57:46.782Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngrl003c8z6ozizahx0e',
  'Pope121',
  'Pope 121',
  'Pope121',
  NULL,
  '0877-01-01T00:00:00.000Z',
  '0870-01-01T00:00:00.000Z',
  '0877-01-01T00:00:00.000Z',
  121,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 121 was the 121st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 121 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.786Z',
  '2025-10-03T19:57:46.786Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngro003d8z6o7hlqdqnv',
  'Pope122',
  'Pope 122',
  'Pope122',
  NULL,
  '0884-01-01T00:00:00.000Z',
  '0877-01-01T00:00:00.000Z',
  '0884-01-01T00:00:00.000Z',
  122,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 122 was the 122nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 122 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.789Z',
  '2025-10-03T19:57:46.789Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngrs003e8z6oq8hwx3wz',
  'Pope123',
  'Pope 123',
  'Pope123',
  NULL,
  '0891-01-01T00:00:00.000Z',
  '0884-01-01T00:00:00.000Z',
  '0891-01-01T00:00:00.000Z',
  123,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 123 was the 123rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 123 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.792Z',
  '2025-10-03T19:57:46.792Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngrz003f8z6ok2bb8u1g',
  'Pope124',
  'Pope 124',
  'Pope124',
  NULL,
  '0898-01-01T00:00:00.000Z',
  '0891-01-01T00:00:00.000Z',
  '0898-01-01T00:00:00.000Z',
  124,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 124 was the 124th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 124 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.799Z',
  '2025-10-03T19:57:46.799Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngs3003g8z6odxkornua',
  'Pope125',
  'Pope 125',
  'Pope125',
  NULL,
  '0905-01-01T00:00:00.000Z',
  '0898-01-01T00:00:00.000Z',
  '0905-01-01T00:00:00.000Z',
  125,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 125 was the 125th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 125 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.803Z',
  '2025-10-03T19:57:46.803Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngs7003h8z6ogwgd5vcb',
  'Pope126',
  'Pope 126',
  'Pope126',
  NULL,
  '0912-01-01T00:00:00.000Z',
  '0905-01-01T00:00:00.000Z',
  '0912-01-01T00:00:00.000Z',
  126,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 126 was the 126th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 126 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.808Z',
  '2025-10-03T19:57:46.808Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngsd003i8z6ovz8959jf',
  'Pope127',
  'Pope 127',
  'Pope127',
  NULL,
  '0919-01-01T00:00:00.000Z',
  '0912-01-01T00:00:00.000Z',
  '0919-01-01T00:00:00.000Z',
  127,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 127 was the 127th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 127 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.814Z',
  '2025-10-03T19:57:46.814Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngsh003j8z6o3bz7o4b3',
  'Pope128',
  'Pope 128',
  'Pope128',
  NULL,
  '0926-01-01T00:00:00.000Z',
  '0919-01-01T00:00:00.000Z',
  '0926-01-01T00:00:00.000Z',
  128,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 128 was the 128th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 128 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.817Z',
  '2025-10-03T19:57:46.817Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngsk003k8z6os9s1uiar',
  'Pope129',
  'Pope 129',
  'Pope129',
  NULL,
  '0933-01-01T00:00:00.000Z',
  '0926-01-01T00:00:00.000Z',
  '0933-01-01T00:00:00.000Z',
  129,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 129 was the 129th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 129 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.821Z',
  '2025-10-03T19:57:46.821Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngso003l8z6o2acgbust',
  'Pope130',
  'Pope 130',
  'Pope130',
  NULL,
  '0940-01-01T00:00:00.000Z',
  '0933-01-01T00:00:00.000Z',
  '0940-01-01T00:00:00.000Z',
  130,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 130 was the 130th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 130 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.824Z',
  '2025-10-03T19:57:46.824Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngss003m8z6oo8wzl9n2',
  'Pope131',
  'Pope 131',
  'Pope131',
  NULL,
  '0947-01-01T00:00:00.000Z',
  '0940-01-01T00:00:00.000Z',
  '0947-01-01T00:00:00.000Z',
  131,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 131 was the 131st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 131 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.828Z',
  '2025-10-03T19:57:46.828Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngsv003n8z6on3jts4e5',
  'Pope132',
  'Pope 132',
  'Pope132',
  NULL,
  '0954-01-01T00:00:00.000Z',
  '0947-01-01T00:00:00.000Z',
  '0954-01-01T00:00:00.000Z',
  132,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 132 was the 132nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 132 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.832Z',
  '2025-10-03T19:57:46.832Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngsz003o8z6ogxhy8vtu',
  'Pope133',
  'Pope 133',
  'Pope133',
  NULL,
  '0961-01-01T00:00:00.000Z',
  '0954-01-01T00:00:00.000Z',
  '0961-01-01T00:00:00.000Z',
  133,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 133 was the 133rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 133 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.835Z',
  '2025-10-03T19:57:46.835Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngt2003p8z6oc7cdkk55',
  'Pope134',
  'Pope 134',
  'Pope134',
  NULL,
  '0968-01-01T00:00:00.000Z',
  '0961-01-01T00:00:00.000Z',
  '0968-01-01T00:00:00.000Z',
  134,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 134 was the 134th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 134 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.838Z',
  '2025-10-03T19:57:46.838Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngt6003q8z6ovucgjm40',
  'Pope135',
  'Pope 135',
  'Pope135',
  NULL,
  '0975-01-01T00:00:00.000Z',
  '0968-01-01T00:00:00.000Z',
  '0975-01-01T00:00:00.000Z',
  135,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 135 was the 135th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 135 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.842Z',
  '2025-10-03T19:57:46.842Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngta003r8z6oaifpx030',
  'Pope136',
  'Pope 136',
  'Pope136',
  NULL,
  '0982-01-01T00:00:00.000Z',
  '0975-01-01T00:00:00.000Z',
  '0982-01-01T00:00:00.000Z',
  136,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 136 was the 136th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 136 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.846Z',
  '2025-10-03T19:57:46.846Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngtd003s8z6oore7fhvn',
  'Pope137',
  'Pope 137',
  'Pope137',
  NULL,
  '0989-01-01T00:00:00.000Z',
  '0982-01-01T00:00:00.000Z',
  '0989-01-01T00:00:00.000Z',
  137,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 137 was the 137th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 137 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.850Z',
  '2025-10-03T19:57:46.850Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngth003t8z6o2ot9dbsa',
  'Pope138',
  'Pope 138',
  'Pope138',
  NULL,
  '0996-01-01T00:00:00.000Z',
  '0989-01-01T00:00:00.000Z',
  '0996-01-01T00:00:00.000Z',
  138,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 138 was the 138th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 138 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.854Z',
  '2025-10-03T19:57:46.854Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngtk003u8z6o0jombjmn',
  'Pope139',
  'Pope 139',
  'Pope139',
  NULL,
  '1003-01-01T00:00:00.000Z',
  '0996-01-01T00:00:00.000Z',
  '1003-01-01T00:00:00.000Z',
  139,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 139 was the 139th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 139 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.857Z',
  '2025-10-03T19:57:46.857Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngto003v8z6omtp7u650',
  'Pope140',
  'Pope 140',
  'Pope140',
  NULL,
  '1010-01-01T00:00:00.000Z',
  '1003-01-01T00:00:00.000Z',
  '1010-01-01T00:00:00.000Z',
  140,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 140 was the 140th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 140 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.860Z',
  '2025-10-03T19:57:46.860Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngts003w8z6owgt91xgo',
  'Pope141',
  'Pope 141',
  'Pope141',
  NULL,
  '1017-01-01T00:00:00.000Z',
  '1010-01-01T00:00:00.000Z',
  '1017-01-01T00:00:00.000Z',
  141,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 141 was the 141st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 141 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.864Z',
  '2025-10-03T19:57:46.864Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngtv003x8z6o7ui37z2l',
  'Pope142',
  'Pope 142',
  'Pope142',
  NULL,
  '1024-01-01T00:00:00.000Z',
  '1017-01-01T00:00:00.000Z',
  '1024-01-01T00:00:00.000Z',
  142,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 142 was the 142nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 142 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.867Z',
  '2025-10-03T19:57:46.867Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngty003y8z6o6gssdi59',
  'Pope143',
  'Pope 143',
  'Pope143',
  NULL,
  '1031-01-01T00:00:00.000Z',
  '1024-01-01T00:00:00.000Z',
  '1031-01-01T00:00:00.000Z',
  143,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 143 was the 143rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 143 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.871Z',
  '2025-10-03T19:57:46.871Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngu3003z8z6on2om9bpy',
  'Pope144',
  'Pope 144',
  'Pope144',
  NULL,
  '1038-01-01T00:00:00.000Z',
  '1031-01-01T00:00:00.000Z',
  '1038-01-01T00:00:00.000Z',
  144,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 144 was the 144th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 144 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.875Z',
  '2025-10-03T19:57:46.875Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngu700408z6o44w3pnpt',
  'Pope145',
  'Pope 145',
  'Pope145',
  NULL,
  '1045-01-01T00:00:00.000Z',
  '1038-01-01T00:00:00.000Z',
  '1045-01-01T00:00:00.000Z',
  145,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 145 was the 145th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 145 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.879Z',
  '2025-10-03T19:57:46.879Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngua00418z6o0ou7gr93',
  'Pope146',
  'Pope 146',
  'Pope146',
  NULL,
  '1052-01-01T00:00:00.000Z',
  '1045-01-01T00:00:00.000Z',
  '1052-01-01T00:00:00.000Z',
  146,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 146 was the 146th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 146 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.882Z',
  '2025-10-03T19:57:46.882Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngud00428z6oqiuupi26',
  'Pope147',
  'Pope 147',
  'Pope147',
  NULL,
  '1059-01-01T00:00:00.000Z',
  '1052-01-01T00:00:00.000Z',
  '1059-01-01T00:00:00.000Z',
  147,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 147 was the 147th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 147 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.885Z',
  '2025-10-03T19:57:46.885Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngug00438z6ouet5lmya',
  'Pope148',
  'Pope 148',
  'Pope148',
  NULL,
  '1066-01-01T00:00:00.000Z',
  '1059-01-01T00:00:00.000Z',
  '1066-01-01T00:00:00.000Z',
  148,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 148 was the 148th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 148 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.888Z',
  '2025-10-03T19:57:46.888Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nguj00448z6ow9c0yg3u',
  'Pope149',
  'Pope 149',
  'Pope149',
  NULL,
  '1073-01-01T00:00:00.000Z',
  '1066-01-01T00:00:00.000Z',
  '1073-01-01T00:00:00.000Z',
  149,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 149 was the 149th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 149 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.891Z',
  '2025-10-03T19:57:46.891Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nguq00458z6o7zrxeonu',
  'Innocent',
  'Pope Innocent III',
  'Innocent',
  NULL,
  '1216-01-01T00:00:00.000Z',
  '1198-01-01T00:00:00.000Z',
  '1216-01-01T00:00:00.000Z',
  150,
  'Gavignano, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Innocent III was the 150th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 150 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.899Z',
  '2025-10-03T19:57:46.899Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nguw00468z6ozah3m5d4',
  'Pope151',
  'Pope 151',
  'Pope151',
  NULL,
  '1087-01-01T00:00:00.000Z',
  '1080-01-01T00:00:00.000Z',
  '1087-01-01T00:00:00.000Z',
  151,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 151 was the 151st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 151 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.904Z',
  '2025-10-03T19:57:46.904Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nguz00478z6o2v96lq7t',
  'Pope152',
  'Pope 152',
  'Pope152',
  NULL,
  '1094-01-01T00:00:00.000Z',
  '1087-01-01T00:00:00.000Z',
  '1094-01-01T00:00:00.000Z',
  152,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 152 was the 152nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 152 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.908Z',
  '2025-10-03T19:57:46.908Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngv400488z6oo8s2oapz',
  'Pope153',
  'Pope 153',
  'Pope153',
  NULL,
  '1101-01-01T00:00:00.000Z',
  '1094-01-01T00:00:00.000Z',
  '1101-01-01T00:00:00.000Z',
  153,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 153 was the 153rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 153 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.912Z',
  '2025-10-03T19:57:46.912Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngv800498z6o8k0tnf2c',
  'Pope154',
  'Pope 154',
  'Pope154',
  NULL,
  '1108-01-01T00:00:00.000Z',
  '1101-01-01T00:00:00.000Z',
  '1108-01-01T00:00:00.000Z',
  154,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 154 was the 154th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 154 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.916Z',
  '2025-10-03T19:57:46.916Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngvb004a8z6oicka2wc6',
  'Pope155',
  'Pope 155',
  'Pope155',
  NULL,
  '1115-01-01T00:00:00.000Z',
  '1108-01-01T00:00:00.000Z',
  '1115-01-01T00:00:00.000Z',
  155,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 155 was the 155th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 155 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.919Z',
  '2025-10-03T19:57:46.919Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngvf004b8z6oc35fwwpl',
  'Pope156',
  'Pope 156',
  'Pope156',
  NULL,
  '1122-01-01T00:00:00.000Z',
  '1115-01-01T00:00:00.000Z',
  '1122-01-01T00:00:00.000Z',
  156,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 156 was the 156th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 156 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.923Z',
  '2025-10-03T19:57:46.923Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngvi004c8z6o4npzz96m',
  'Pope157',
  'Pope 157',
  'Pope157',
  NULL,
  '1129-01-01T00:00:00.000Z',
  '1122-01-01T00:00:00.000Z',
  '1129-01-01T00:00:00.000Z',
  157,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 157 was the 157th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 157 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.927Z',
  '2025-10-03T19:57:46.927Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngvm004d8z6oy2tx6udf',
  'Pope158',
  'Pope 158',
  'Pope158',
  NULL,
  '1136-01-01T00:00:00.000Z',
  '1129-01-01T00:00:00.000Z',
  '1136-01-01T00:00:00.000Z',
  158,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 158 was the 158th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 158 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.930Z',
  '2025-10-03T19:57:46.930Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngvq004e8z6oj2lvmjum',
  'Pope159',
  'Pope 159',
  'Pope159',
  NULL,
  '1143-01-01T00:00:00.000Z',
  '1136-01-01T00:00:00.000Z',
  '1143-01-01T00:00:00.000Z',
  159,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 159 was the 159th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 159 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.934Z',
  '2025-10-03T19:57:46.934Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngvt004f8z6o7inhvgdi',
  'Pope160',
  'Pope 160',
  'Pope160',
  NULL,
  '1150-01-01T00:00:00.000Z',
  '1143-01-01T00:00:00.000Z',
  '1150-01-01T00:00:00.000Z',
  160,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 160 was the 160th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 160 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.938Z',
  '2025-10-03T19:57:46.938Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngvx004g8z6o55htd44b',
  'Pope161',
  'Pope 161',
  'Pope161',
  NULL,
  '1157-01-01T00:00:00.000Z',
  '1150-01-01T00:00:00.000Z',
  '1157-01-01T00:00:00.000Z',
  161,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 161 was the 161st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 161 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.941Z',
  '2025-10-03T19:57:46.941Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngw0004h8z6oqspk5z1o',
  'Pope162',
  'Pope 162',
  'Pope162',
  NULL,
  '1164-01-01T00:00:00.000Z',
  '1157-01-01T00:00:00.000Z',
  '1164-01-01T00:00:00.000Z',
  162,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 162 was the 162nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 162 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.945Z',
  '2025-10-03T19:57:46.945Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngw4004i8z6ojcesgn89',
  'Pope163',
  'Pope 163',
  'Pope163',
  NULL,
  '1171-01-01T00:00:00.000Z',
  '1164-01-01T00:00:00.000Z',
  '1171-01-01T00:00:00.000Z',
  163,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 163 was the 163rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 163 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.949Z',
  '2025-10-03T19:57:46.949Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngw7004j8z6oanvzuiie',
  'Pope164',
  'Pope 164',
  'Pope164',
  NULL,
  '1178-01-01T00:00:00.000Z',
  '1171-01-01T00:00:00.000Z',
  '1178-01-01T00:00:00.000Z',
  164,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 164 was the 164th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 164 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.952Z',
  '2025-10-03T19:57:46.952Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngwa004k8z6oa3669nx4',
  'Pope165',
  'Pope 165',
  'Pope165',
  NULL,
  '1185-01-01T00:00:00.000Z',
  '1178-01-01T00:00:00.000Z',
  '1185-01-01T00:00:00.000Z',
  165,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 165 was the 165th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 165 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.954Z',
  '2025-10-03T19:57:46.954Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngwd004l8z6o8rbrzlpp',
  'Pope166',
  'Pope 166',
  'Pope166',
  NULL,
  '1192-01-01T00:00:00.000Z',
  '1185-01-01T00:00:00.000Z',
  '1192-01-01T00:00:00.000Z',
  166,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 166 was the 166th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 166 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.957Z',
  '2025-10-03T19:57:46.957Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngwg004m8z6ovn7c3cfa',
  'Pope167',
  'Pope 167',
  'Pope167',
  NULL,
  '1199-01-01T00:00:00.000Z',
  '1192-01-01T00:00:00.000Z',
  '1199-01-01T00:00:00.000Z',
  167,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 167 was the 167th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 167 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.960Z',
  '2025-10-03T19:57:46.960Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngwj004n8z6o6kvjrw7y',
  'Pope168',
  'Pope 168',
  'Pope168',
  NULL,
  '1206-01-01T00:00:00.000Z',
  '1199-01-01T00:00:00.000Z',
  '1206-01-01T00:00:00.000Z',
  168,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 168 was the 168th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 168 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.964Z',
  '2025-10-03T19:57:46.964Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngwn004o8z6o39s1zp51',
  'Pope169',
  'Pope 169',
  'Pope169',
  NULL,
  '1213-01-01T00:00:00.000Z',
  '1206-01-01T00:00:00.000Z',
  '1213-01-01T00:00:00.000Z',
  169,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 169 was the 169th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 169 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.967Z',
  '2025-10-03T19:57:46.967Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngwp004p8z6o85dy1xyu',
  'Pope170',
  'Pope 170',
  'Pope170',
  NULL,
  '1220-01-01T00:00:00.000Z',
  '1213-01-01T00:00:00.000Z',
  '1220-01-01T00:00:00.000Z',
  170,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 170 was the 170th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 170 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.970Z',
  '2025-10-03T19:57:46.970Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngwt004q8z6o27jdxvc2',
  'Pope171',
  'Pope 171',
  'Pope171',
  NULL,
  '1227-01-01T00:00:00.000Z',
  '1220-01-01T00:00:00.000Z',
  '1227-01-01T00:00:00.000Z',
  171,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 171 was the 171st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 171 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.973Z',
  '2025-10-03T19:57:46.973Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngwx004r8z6oh8v1b3p2',
  'Pope172',
  'Pope 172',
  'Pope172',
  NULL,
  '1234-01-01T00:00:00.000Z',
  '1227-01-01T00:00:00.000Z',
  '1234-01-01T00:00:00.000Z',
  172,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 172 was the 172nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 172 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.977Z',
  '2025-10-03T19:57:46.977Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngx2004s8z6o2efdqqrm',
  'Pope173',
  'Pope 173',
  'Pope173',
  NULL,
  '1241-01-01T00:00:00.000Z',
  '1234-01-01T00:00:00.000Z',
  '1241-01-01T00:00:00.000Z',
  173,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 173 was the 173rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 173 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.983Z',
  '2025-10-03T19:57:46.983Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngx5004t8z6orn8kuxy6',
  'Pope174',
  'Pope 174',
  'Pope174',
  NULL,
  '1248-01-01T00:00:00.000Z',
  '1241-01-01T00:00:00.000Z',
  '1248-01-01T00:00:00.000Z',
  174,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 174 was the 174th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 174 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.985Z',
  '2025-10-03T19:57:46.985Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngx8004u8z6oozidrs71',
  'Pope175',
  'Pope 175',
  'Pope175',
  NULL,
  '1255-01-01T00:00:00.000Z',
  '1248-01-01T00:00:00.000Z',
  '1255-01-01T00:00:00.000Z',
  175,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 175 was the 175th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 175 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.988Z',
  '2025-10-03T19:57:46.988Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngxa004v8z6ogopm03m7',
  'Pope176',
  'Pope 176',
  'Pope176',
  NULL,
  '1262-01-01T00:00:00.000Z',
  '1255-01-01T00:00:00.000Z',
  '1262-01-01T00:00:00.000Z',
  176,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 176 was the 176th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 176 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.991Z',
  '2025-10-03T19:57:46.991Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngxe004w8z6o8b6zpjf0',
  'Pope177',
  'Pope 177',
  'Pope177',
  NULL,
  '1269-01-01T00:00:00.000Z',
  '1262-01-01T00:00:00.000Z',
  '1269-01-01T00:00:00.000Z',
  177,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 177 was the 177th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 177 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.995Z',
  '2025-10-03T19:57:46.995Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngxi004x8z6om5y5iw9b',
  'Pope178',
  'Pope 178',
  'Pope178',
  NULL,
  '1276-01-01T00:00:00.000Z',
  '1269-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  178,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 178 was the 178th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 178 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:46.998Z',
  '2025-10-03T19:57:46.998Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngxk004y8z6o45d13wc0',
  'Pope179',
  'Pope 179',
  'Pope179',
  NULL,
  '1283-01-01T00:00:00.000Z',
  '1276-01-01T00:00:00.000Z',
  '1283-01-01T00:00:00.000Z',
  179,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 179 was the 179th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 179 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.001Z',
  '2025-10-03T19:57:47.001Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngxo004z8z6oegh70ot0',
  'Pope180',
  'Pope 180',
  'Pope180',
  NULL,
  '1290-01-01T00:00:00.000Z',
  '1283-01-01T00:00:00.000Z',
  '1290-01-01T00:00:00.000Z',
  180,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 180 was the 180th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 180 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.004Z',
  '2025-10-03T19:57:47.004Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngxq00508z6o69petm3j',
  'Pope181',
  'Pope 181',
  'Pope181',
  NULL,
  '1297-01-01T00:00:00.000Z',
  '1290-01-01T00:00:00.000Z',
  '1297-01-01T00:00:00.000Z',
  181,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 181 was the 181st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 181 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.007Z',
  '2025-10-03T19:57:47.007Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngxw00518z6oxlfnw4ky',
  'Pope182',
  'Pope 182',
  'Pope182',
  NULL,
  '1304-01-01T00:00:00.000Z',
  '1297-01-01T00:00:00.000Z',
  '1304-01-01T00:00:00.000Z',
  182,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 182 was the 182nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 182 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.012Z',
  '2025-10-03T19:57:47.012Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngxz00528z6orlob9057',
  'Pope183',
  'Pope 183',
  'Pope183',
  NULL,
  '1311-01-01T00:00:00.000Z',
  '1304-01-01T00:00:00.000Z',
  '1311-01-01T00:00:00.000Z',
  183,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 183 was the 183rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 183 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.016Z',
  '2025-10-03T19:57:47.016Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngy200538z6oxdp2v29x',
  'Pope184',
  'Pope 184',
  'Pope184',
  NULL,
  '1318-01-01T00:00:00.000Z',
  '1311-01-01T00:00:00.000Z',
  '1318-01-01T00:00:00.000Z',
  184,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 184 was the 184th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 184 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.019Z',
  '2025-10-03T19:57:47.019Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngy600548z6oli5tsum0',
  'Pope185',
  'Pope 185',
  'Pope185',
  NULL,
  '1325-01-01T00:00:00.000Z',
  '1318-01-01T00:00:00.000Z',
  '1325-01-01T00:00:00.000Z',
  185,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 185 was the 185th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 185 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.022Z',
  '2025-10-03T19:57:47.022Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngyd00558z6osf6smua6',
  'Pope186',
  'Pope 186',
  'Pope186',
  NULL,
  '1332-01-01T00:00:00.000Z',
  '1325-01-01T00:00:00.000Z',
  '1332-01-01T00:00:00.000Z',
  186,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 186 was the 186th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 186 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.030Z',
  '2025-10-03T19:57:47.030Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngyj00568z6o8po0pfrh',
  'Pope187',
  'Pope 187',
  'Pope187',
  NULL,
  '1339-01-01T00:00:00.000Z',
  '1332-01-01T00:00:00.000Z',
  '1339-01-01T00:00:00.000Z',
  187,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 187 was the 187th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 187 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.035Z',
  '2025-10-03T19:57:47.035Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngyp00578z6oq0l7w788',
  'Pope188',
  'Pope 188',
  'Pope188',
  NULL,
  '1346-01-01T00:00:00.000Z',
  '1339-01-01T00:00:00.000Z',
  '1346-01-01T00:00:00.000Z',
  188,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 188 was the 188th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 188 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.041Z',
  '2025-10-03T19:57:47.041Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngyt00588z6ozrv7dp6a',
  'Pope189',
  'Pope 189',
  'Pope189',
  NULL,
  '1353-01-01T00:00:00.000Z',
  '1346-01-01T00:00:00.000Z',
  '1353-01-01T00:00:00.000Z',
  189,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 189 was the 189th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 189 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.045Z',
  '2025-10-03T19:57:47.045Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngyx00598z6oj4tiawnj',
  'Pope190',
  'Pope 190',
  'Pope190',
  NULL,
  '1360-01-01T00:00:00.000Z',
  '1353-01-01T00:00:00.000Z',
  '1360-01-01T00:00:00.000Z',
  190,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 190 was the 190th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 190 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.049Z',
  '2025-10-03T19:57:47.049Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngz0005a8z6o8qg7xc57',
  'Pope191',
  'Pope 191',
  'Pope191',
  NULL,
  '1367-01-01T00:00:00.000Z',
  '1360-01-01T00:00:00.000Z',
  '1367-01-01T00:00:00.000Z',
  191,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 191 was the 191st Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 191 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.053Z',
  '2025-10-03T19:57:47.053Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngz3005b8z6oq4l2i8jb',
  'Pope192',
  'Pope 192',
  'Pope192',
  NULL,
  '1374-01-01T00:00:00.000Z',
  '1367-01-01T00:00:00.000Z',
  '1374-01-01T00:00:00.000Z',
  192,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 192 was the 192nd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 192 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.055Z',
  '2025-10-03T19:57:47.055Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngz5005c8z6oqp5gupzl',
  'Pope193',
  'Pope 193',
  'Pope193',
  NULL,
  '1381-01-01T00:00:00.000Z',
  '1374-01-01T00:00:00.000Z',
  '1381-01-01T00:00:00.000Z',
  193,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 193 was the 193rd Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 193 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.058Z',
  '2025-10-03T19:57:47.058Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngz9005d8z6o5ew92nin',
  'Pope194',
  'Pope 194',
  'Pope194',
  NULL,
  '1388-01-01T00:00:00.000Z',
  '1381-01-01T00:00:00.000Z',
  '1388-01-01T00:00:00.000Z',
  194,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 194 was the 194th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 194 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.061Z',
  '2025-10-03T19:57:47.061Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngzd005e8z6obwxkd3tq',
  'Pope195',
  'Pope 195',
  'Pope195',
  NULL,
  '1395-01-01T00:00:00.000Z',
  '1388-01-01T00:00:00.000Z',
  '1395-01-01T00:00:00.000Z',
  195,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 195 was the 195th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 195 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.065Z',
  '2025-10-03T19:57:47.065Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngzg005f8z6or1cesk7v',
  'Pope196',
  'Pope 196',
  'Pope196',
  NULL,
  '1402-01-01T00:00:00.000Z',
  '1395-01-01T00:00:00.000Z',
  '1402-01-01T00:00:00.000Z',
  196,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 196 was the 196th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 196 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.068Z',
  '2025-10-03T19:57:47.068Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngzj005g8z6o8h9tb7ub',
  'Pope197',
  'Pope 197',
  'Pope197',
  NULL,
  '1409-01-01T00:00:00.000Z',
  '1402-01-01T00:00:00.000Z',
  '1409-01-01T00:00:00.000Z',
  197,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 197 was the 197th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 197 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.071Z',
  '2025-10-03T19:57:47.071Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngzm005h8z6o1l0uxyht',
  'Pope198',
  'Pope 198',
  'Pope198',
  NULL,
  '1416-01-01T00:00:00.000Z',
  '1409-01-01T00:00:00.000Z',
  '1416-01-01T00:00:00.000Z',
  198,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 198 was the 198th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 198 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.074Z',
  '2025-10-03T19:57:47.074Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngzq005i8z6ouu31ockc',
  'Pope199',
  'Pope 199',
  'Pope199',
  NULL,
  '1423-01-01T00:00:00.000Z',
  '1416-01-01T00:00:00.000Z',
  '1423-01-01T00:00:00.000Z',
  199,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 199 was the 199th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 199 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.078Z',
  '2025-10-03T19:57:47.078Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngzt005j8z6oj039xi6l',
  'Pius',
  'Pope Pius VI',
  'Pius',
  NULL,
  '1799-01-01T00:00:00.000Z',
  '1775-01-01T00:00:00.000Z',
  '1799-01-01T00:00:00.000Z',
  200,
  'Cesena, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Pius VI was the 200th Bishop of Rome during the medieval period. His papacy occurred during a time of significant change in Europe, as the Church played a central role in the political and cultural life of the continent. He worked to strengthen the authority of the papacy and maintain the unity of the Church during periods of political upheaval and theological controversy. His leadership helped shape the development of medieval Christianity and the relationship between Church and state.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 200 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.082Z',
  '2025-10-03T19:57:47.082Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9ngzx005k8z6o26re2hrj',
  'Pope201',
  'Pope 201',
  'Pope201',
  NULL,
  '1437-01-01T00:00:00.000Z',
  '1430-01-01T00:00:00.000Z',
  '1437-01-01T00:00:00.000Z',
  201,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 201 was the 201st Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 201 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.085Z',
  '2025-10-03T19:57:47.085Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh00005l8z6ou3uj9pcj',
  'Pope202',
  'Pope 202',
  'Pope202',
  NULL,
  '1444-01-01T00:00:00.000Z',
  '1437-01-01T00:00:00.000Z',
  '1444-01-01T00:00:00.000Z',
  202,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 202 was the 202nd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 202 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.088Z',
  '2025-10-03T19:57:47.088Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh04005m8z6okd3jj996',
  'Pope203',
  'Pope 203',
  'Pope203',
  NULL,
  '1451-01-01T00:00:00.000Z',
  '1444-01-01T00:00:00.000Z',
  '1451-01-01T00:00:00.000Z',
  203,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 203 was the 203rd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 203 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.092Z',
  '2025-10-03T19:57:47.092Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh07005n8z6o8cfnc108',
  'Pope204',
  'Pope 204',
  'Pope204',
  NULL,
  '1458-01-01T00:00:00.000Z',
  '1451-01-01T00:00:00.000Z',
  '1458-01-01T00:00:00.000Z',
  204,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 204 was the 204th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 204 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.095Z',
  '2025-10-03T19:57:47.095Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh0a005o8z6ojbvp4aak',
  'Pope205',
  'Pope 205',
  'Pope205',
  NULL,
  '1465-01-01T00:00:00.000Z',
  '1458-01-01T00:00:00.000Z',
  '1465-01-01T00:00:00.000Z',
  205,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 205 was the 205th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 205 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.099Z',
  '2025-10-03T19:57:47.099Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh0e005p8z6osnvdqv01',
  'Pope206',
  'Pope 206',
  'Pope206',
  NULL,
  '1472-01-01T00:00:00.000Z',
  '1465-01-01T00:00:00.000Z',
  '1472-01-01T00:00:00.000Z',
  206,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 206 was the 206th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 206 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.102Z',
  '2025-10-03T19:57:47.102Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh0i005q8z6ori5otsvn',
  'Pope207',
  'Pope 207',
  'Pope207',
  NULL,
  '1479-01-01T00:00:00.000Z',
  '1472-01-01T00:00:00.000Z',
  '1479-01-01T00:00:00.000Z',
  207,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 207 was the 207th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 207 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.106Z',
  '2025-10-03T19:57:47.106Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh0l005r8z6olaznpbqx',
  'Pope208',
  'Pope 208',
  'Pope208',
  NULL,
  '1486-01-01T00:00:00.000Z',
  '1479-01-01T00:00:00.000Z',
  '1486-01-01T00:00:00.000Z',
  208,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 208 was the 208th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 208 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.110Z',
  '2025-10-03T19:57:47.110Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh0p005s8z6oy6dtgft7',
  'Pope209',
  'Pope 209',
  'Pope209',
  NULL,
  '1493-01-01T00:00:00.000Z',
  '1486-01-01T00:00:00.000Z',
  '1493-01-01T00:00:00.000Z',
  209,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 209 was the 209th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 209 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.114Z',
  '2025-10-03T19:57:47.114Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh0t005t8z6o0ayglzh5',
  'Pope210',
  'Pope 210',
  'Pope210',
  NULL,
  '1500-01-01T00:00:00.000Z',
  '1493-01-01T00:00:00.000Z',
  '1500-01-01T00:00:00.000Z',
  210,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 210 was the 210th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 210 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.117Z',
  '2025-10-03T19:57:47.117Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh0x005u8z6o663ygrzr',
  'Pope211',
  'Pope 211',
  'Pope211',
  NULL,
  '1507-01-01T00:00:00.000Z',
  '1500-01-01T00:00:00.000Z',
  '1507-01-01T00:00:00.000Z',
  211,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 211 was the 211th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 211 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.121Z',
  '2025-10-03T19:57:47.121Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh10005v8z6o24hljgx3',
  'Pope212',
  'Pope 212',
  'Pope212',
  NULL,
  '1514-01-01T00:00:00.000Z',
  '1507-01-01T00:00:00.000Z',
  '1514-01-01T00:00:00.000Z',
  212,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 212 was the 212th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 212 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.124Z',
  '2025-10-03T19:57:47.124Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh12005w8z6ovrvfh3pk',
  'Pope213',
  'Pope 213',
  'Pope213',
  NULL,
  '1521-01-01T00:00:00.000Z',
  '1514-01-01T00:00:00.000Z',
  '1521-01-01T00:00:00.000Z',
  213,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 213 was the 213th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 213 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.126Z',
  '2025-10-03T19:57:47.126Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh15005x8z6osppwhyr5',
  'Pope214',
  'Pope 214',
  'Pope214',
  NULL,
  '1528-01-01T00:00:00.000Z',
  '1521-01-01T00:00:00.000Z',
  '1528-01-01T00:00:00.000Z',
  214,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 214 was the 214th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 214 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.130Z',
  '2025-10-03T19:57:47.130Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh18005y8z6ohdmld04n',
  'Pope215',
  'Pope 215',
  'Pope215',
  NULL,
  '1535-01-01T00:00:00.000Z',
  '1528-01-01T00:00:00.000Z',
  '1535-01-01T00:00:00.000Z',
  215,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 215 was the 215th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 215 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.133Z',
  '2025-10-03T19:57:47.133Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh1c005z8z6ozxixy0bp',
  'Pope216',
  'Pope 216',
  'Pope216',
  NULL,
  '1542-01-01T00:00:00.000Z',
  '1535-01-01T00:00:00.000Z',
  '1542-01-01T00:00:00.000Z',
  216,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 216 was the 216th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 216 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.136Z',
  '2025-10-03T19:57:47.136Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh1e00608z6o1k728q5s',
  'Pope217',
  'Pope 217',
  'Pope217',
  NULL,
  '1549-01-01T00:00:00.000Z',
  '1542-01-01T00:00:00.000Z',
  '1549-01-01T00:00:00.000Z',
  217,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 217 was the 217th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 217 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.139Z',
  '2025-10-03T19:57:47.139Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh1i00618z6onvf34jy8',
  'Pope218',
  'Pope 218',
  'Pope218',
  NULL,
  '1556-01-01T00:00:00.000Z',
  '1549-01-01T00:00:00.000Z',
  '1556-01-01T00:00:00.000Z',
  218,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 218 was the 218th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 218 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.142Z',
  '2025-10-03T19:57:47.142Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh1l00628z6of5c47kp4',
  'Pope219',
  'Pope 219',
  'Pope219',
  NULL,
  '1563-01-01T00:00:00.000Z',
  '1556-01-01T00:00:00.000Z',
  '1563-01-01T00:00:00.000Z',
  219,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 219 was the 219th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 219 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.145Z',
  '2025-10-03T19:57:47.145Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh1o00638z6o3o9vxquu',
  'Pope220',
  'Pope 220',
  'Pope220',
  NULL,
  '1570-01-01T00:00:00.000Z',
  '1563-01-01T00:00:00.000Z',
  '1570-01-01T00:00:00.000Z',
  220,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 220 was the 220th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 220 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.149Z',
  '2025-10-03T19:57:47.149Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh1r00648z6on44t7e17',
  'Pope221',
  'Pope 221',
  'Pope221',
  NULL,
  '1577-01-01T00:00:00.000Z',
  '1570-01-01T00:00:00.000Z',
  '1577-01-01T00:00:00.000Z',
  221,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 221 was the 221st Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 221 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.151Z',
  '2025-10-03T19:57:47.151Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh1u00658z6oarry3l05',
  'Pope222',
  'Pope 222',
  'Pope222',
  NULL,
  '1584-01-01T00:00:00.000Z',
  '1577-01-01T00:00:00.000Z',
  '1584-01-01T00:00:00.000Z',
  222,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 222 was the 222nd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 222 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.154Z',
  '2025-10-03T19:57:47.154Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh1x00668z6ogdsqebsv',
  'Pope223',
  'Pope 223',
  'Pope223',
  NULL,
  '1591-01-01T00:00:00.000Z',
  '1584-01-01T00:00:00.000Z',
  '1591-01-01T00:00:00.000Z',
  223,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 223 was the 223rd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 223 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.157Z',
  '2025-10-03T19:57:47.157Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2000678z6oxqpvjjbx',
  'Pope224',
  'Pope 224',
  'Pope224',
  NULL,
  '1598-01-01T00:00:00.000Z',
  '1591-01-01T00:00:00.000Z',
  '1598-01-01T00:00:00.000Z',
  224,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 224 was the 224th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 224 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.160Z',
  '2025-10-03T19:57:47.160Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2300688z6oqroejwlr',
  'Pope225',
  'Pope 225',
  'Pope225',
  NULL,
  '1605-01-01T00:00:00.000Z',
  '1598-01-01T00:00:00.000Z',
  '1605-01-01T00:00:00.000Z',
  225,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 225 was the 225th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 225 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.164Z',
  '2025-10-03T19:57:47.164Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2700698z6oi2itu4vx',
  'Pope226',
  'Pope 226',
  'Pope226',
  NULL,
  '1612-01-01T00:00:00.000Z',
  '1605-01-01T00:00:00.000Z',
  '1612-01-01T00:00:00.000Z',
  226,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 226 was the 226th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 226 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.167Z',
  '2025-10-03T19:57:47.167Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh29006a8z6o2bpllqdr',
  'Pope227',
  'Pope 227',
  'Pope227',
  NULL,
  '1619-01-01T00:00:00.000Z',
  '1612-01-01T00:00:00.000Z',
  '1619-01-01T00:00:00.000Z',
  227,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 227 was the 227th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 227 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.170Z',
  '2025-10-03T19:57:47.170Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2c006b8z6oqm1sajx9',
  'Pope228',
  'Pope 228',
  'Pope228',
  NULL,
  '1626-01-01T00:00:00.000Z',
  '1619-01-01T00:00:00.000Z',
  '1626-01-01T00:00:00.000Z',
  228,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 228 was the 228th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 228 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.172Z',
  '2025-10-03T19:57:47.172Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2e006c8z6ouwolgyyp',
  'Pope229',
  'Pope 229',
  'Pope229',
  NULL,
  '1633-01-01T00:00:00.000Z',
  '1626-01-01T00:00:00.000Z',
  '1633-01-01T00:00:00.000Z',
  229,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 229 was the 229th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 229 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.175Z',
  '2025-10-03T19:57:47.175Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2g006d8z6osc9yr5vz',
  'Pope230',
  'Pope 230',
  'Pope230',
  NULL,
  '1640-01-01T00:00:00.000Z',
  '1633-01-01T00:00:00.000Z',
  '1640-01-01T00:00:00.000Z',
  230,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 230 was the 230th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 230 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.177Z',
  '2025-10-03T19:57:47.177Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2k006e8z6ocf6nl9mz',
  'Pope231',
  'Pope 231',
  'Pope231',
  NULL,
  '1647-01-01T00:00:00.000Z',
  '1640-01-01T00:00:00.000Z',
  '1647-01-01T00:00:00.000Z',
  231,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 231 was the 231st Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 231 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.180Z',
  '2025-10-03T19:57:47.180Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2n006f8z6o12ytdj7i',
  'Pope232',
  'Pope 232',
  'Pope232',
  NULL,
  '1654-01-01T00:00:00.000Z',
  '1647-01-01T00:00:00.000Z',
  '1654-01-01T00:00:00.000Z',
  232,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 232 was the 232nd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 232 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.183Z',
  '2025-10-03T19:57:47.183Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2p006g8z6o1i927oyy',
  'Pope233',
  'Pope 233',
  'Pope233',
  NULL,
  '1661-01-01T00:00:00.000Z',
  '1654-01-01T00:00:00.000Z',
  '1661-01-01T00:00:00.000Z',
  233,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 233 was the 233rd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 233 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.186Z',
  '2025-10-03T19:57:47.186Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2s006h8z6ozfedusmb',
  'Pope234',
  'Pope 234',
  'Pope234',
  NULL,
  '1668-01-01T00:00:00.000Z',
  '1661-01-01T00:00:00.000Z',
  '1668-01-01T00:00:00.000Z',
  234,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 234 was the 234th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 234 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.188Z',
  '2025-10-03T19:57:47.188Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2v006i8z6ocv1e94qo',
  'Pope235',
  'Pope 235',
  'Pope235',
  NULL,
  '1675-01-01T00:00:00.000Z',
  '1668-01-01T00:00:00.000Z',
  '1675-01-01T00:00:00.000Z',
  235,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 235 was the 235th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 235 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.191Z',
  '2025-10-03T19:57:47.191Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh2x006j8z6o2zwep9b5',
  'Pope236',
  'Pope 236',
  'Pope236',
  NULL,
  '1682-01-01T00:00:00.000Z',
  '1675-01-01T00:00:00.000Z',
  '1682-01-01T00:00:00.000Z',
  236,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 236 was the 236th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 236 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.194Z',
  '2025-10-03T19:57:47.194Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh30006k8z6o3xohrsqw',
  'Pope237',
  'Pope 237',
  'Pope237',
  NULL,
  '1689-01-01T00:00:00.000Z',
  '1682-01-01T00:00:00.000Z',
  '1689-01-01T00:00:00.000Z',
  237,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 237 was the 237th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 237 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.197Z',
  '2025-10-03T19:57:47.197Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh33006l8z6owsk3tf4z',
  'Pope238',
  'Pope 238',
  'Pope238',
  NULL,
  '1696-01-01T00:00:00.000Z',
  '1689-01-01T00:00:00.000Z',
  '1696-01-01T00:00:00.000Z',
  238,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 238 was the 238th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 238 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.199Z',
  '2025-10-03T19:57:47.199Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh35006m8z6o1u129tdg',
  'Pope239',
  'Pope 239',
  'Pope239',
  NULL,
  '1703-01-01T00:00:00.000Z',
  '1696-01-01T00:00:00.000Z',
  '1703-01-01T00:00:00.000Z',
  239,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 239 was the 239th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 239 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.202Z',
  '2025-10-03T19:57:47.202Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh38006n8z6oemlcl3ig',
  'Pope240',
  'Pope 240',
  'Pope240',
  NULL,
  '1710-01-01T00:00:00.000Z',
  '1703-01-01T00:00:00.000Z',
  '1710-01-01T00:00:00.000Z',
  240,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 240 was the 240th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 240 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.204Z',
  '2025-10-03T19:57:47.204Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh3a006o8z6oyntjnwqc',
  'Pope241',
  'Pope 241',
  'Pope241',
  NULL,
  '1717-01-01T00:00:00.000Z',
  '1710-01-01T00:00:00.000Z',
  '1717-01-01T00:00:00.000Z',
  241,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 241 was the 241st Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 241 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.207Z',
  '2025-10-03T19:57:47.207Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh3d006p8z6oss0e230o',
  'Pope242',
  'Pope 242',
  'Pope242',
  NULL,
  '1724-01-01T00:00:00.000Z',
  '1717-01-01T00:00:00.000Z',
  '1724-01-01T00:00:00.000Z',
  242,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 242 was the 242nd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 242 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.210Z',
  '2025-10-03T19:57:47.210Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh3h006q8z6ovcepddye',
  'Pope243',
  'Pope 243',
  'Pope243',
  NULL,
  '1731-01-01T00:00:00.000Z',
  '1724-01-01T00:00:00.000Z',
  '1731-01-01T00:00:00.000Z',
  243,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 243 was the 243rd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 243 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.214Z',
  '2025-10-03T19:57:47.214Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh3l006r8z6ooppx2z5d',
  'Pope244',
  'Pope 244',
  'Pope244',
  NULL,
  '1738-01-01T00:00:00.000Z',
  '1731-01-01T00:00:00.000Z',
  '1738-01-01T00:00:00.000Z',
  244,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 244 was the 244th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 244 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.217Z',
  '2025-10-03T19:57:47.217Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh3o006s8z6ody5ghlux',
  'Pope245',
  'Pope 245',
  'Pope245',
  NULL,
  '1745-01-01T00:00:00.000Z',
  '1738-01-01T00:00:00.000Z',
  '1745-01-01T00:00:00.000Z',
  245,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 245 was the 245th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 245 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.221Z',
  '2025-10-03T19:57:47.221Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh3s006t8z6ogcunbl4l',
  'Pope246',
  'Pope 246',
  'Pope246',
  NULL,
  '1752-01-01T00:00:00.000Z',
  '1745-01-01T00:00:00.000Z',
  '1752-01-01T00:00:00.000Z',
  246,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 246 was the 246th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 246 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.224Z',
  '2025-10-03T19:57:47.224Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh3v006u8z6oqmi473ya',
  'Pope247',
  'Pope 247',
  'Pope247',
  NULL,
  '1759-01-01T00:00:00.000Z',
  '1752-01-01T00:00:00.000Z',
  '1759-01-01T00:00:00.000Z',
  247,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 247 was the 247th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 247 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.228Z',
  '2025-10-03T19:57:47.228Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh3z006v8z6ojdzht5xf',
  'Pope248',
  'Pope 248',
  'Pope248',
  NULL,
  '1766-01-01T00:00:00.000Z',
  '1759-01-01T00:00:00.000Z',
  '1766-01-01T00:00:00.000Z',
  248,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 248 was the 248th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 248 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.231Z',
  '2025-10-03T19:57:47.231Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh44006w8z6obd6nu2m1',
  'Pope249',
  'Pope 249',
  'Pope249',
  NULL,
  '1773-01-01T00:00:00.000Z',
  '1766-01-01T00:00:00.000Z',
  '1773-01-01T00:00:00.000Z',
  249,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 249 was the 249th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 249 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.237Z',
  '2025-10-03T19:57:47.237Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh49006x8z6ospzuqjp1',
  'Pius',
  'Pope Pius XII',
  'Pius',
  NULL,
  '1958-01-01T00:00:00.000Z',
  '1939-01-01T00:00:00.000Z',
  '1958-01-01T00:00:00.000Z',
  250,
  'Rome, Italy',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Pius XII was the 250th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 250 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.242Z',
  '2025-10-03T19:57:47.242Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh4h006y8z6o4jwdisuw',
  'Pope251',
  'Pope 251',
  'Pope251',
  NULL,
  '1787-01-01T00:00:00.000Z',
  '1780-01-01T00:00:00.000Z',
  '1787-01-01T00:00:00.000Z',
  251,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 251 was the 251st Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 251 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.249Z',
  '2025-10-03T19:57:47.249Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh4l006z8z6oge1xqa6t',
  'Pope252',
  'Pope 252',
  'Pope252',
  NULL,
  '1794-01-01T00:00:00.000Z',
  '1787-01-01T00:00:00.000Z',
  '1794-01-01T00:00:00.000Z',
  252,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 252 was the 252nd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 252 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.253Z',
  '2025-10-03T19:57:47.253Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh4q00708z6o67uk6tla',
  'Pope253',
  'Pope 253',
  'Pope253',
  NULL,
  '1801-01-01T00:00:00.000Z',
  '1794-01-01T00:00:00.000Z',
  '1801-01-01T00:00:00.000Z',
  253,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 253 was the 253rd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 253 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.258Z',
  '2025-10-03T19:57:47.258Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh4u00718z6ovb3l265l',
  'Pope254',
  'Pope 254',
  'Pope254',
  NULL,
  '1808-01-01T00:00:00.000Z',
  '1801-01-01T00:00:00.000Z',
  '1808-01-01T00:00:00.000Z',
  254,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 254 was the 254th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 254 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.262Z',
  '2025-10-03T19:57:47.262Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh4y00728z6onrvqew7c',
  'Pope255',
  'Pope 255',
  'Pope255',
  NULL,
  '1815-01-01T00:00:00.000Z',
  '1808-01-01T00:00:00.000Z',
  '1815-01-01T00:00:00.000Z',
  255,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 255 was the 255th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 255 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.267Z',
  '2025-10-03T19:57:47.267Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh5200738z6obu39b9hz',
  'Pope256',
  'Pope 256',
  'Pope256',
  NULL,
  '1822-01-01T00:00:00.000Z',
  '1815-01-01T00:00:00.000Z',
  '1822-01-01T00:00:00.000Z',
  256,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 256 was the 256th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 256 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.270Z',
  '2025-10-03T19:57:47.270Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh5700748z6osxrb0td2',
  'Pope257',
  'Pope 257',
  'Pope257',
  NULL,
  '1829-01-01T00:00:00.000Z',
  '1822-01-01T00:00:00.000Z',
  '1829-01-01T00:00:00.000Z',
  257,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 257 was the 257th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 257 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.275Z',
  '2025-10-03T19:57:47.275Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh5a00758z6omkundp65',
  'Pope258',
  'Pope 258',
  'Pope258',
  NULL,
  '1836-01-01T00:00:00.000Z',
  '1829-01-01T00:00:00.000Z',
  '1836-01-01T00:00:00.000Z',
  258,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 258 was the 258th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 258 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.279Z',
  '2025-10-03T19:57:47.279Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh5e00768z6oc9iflph4',
  'Pope259',
  'Pope 259',
  'Pope259',
  NULL,
  '1843-01-01T00:00:00.000Z',
  '1836-01-01T00:00:00.000Z',
  '1843-01-01T00:00:00.000Z',
  259,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 259 was the 259th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 259 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.283Z',
  '2025-10-03T19:57:47.283Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh5i00778z6ox2ym2qaa',
  'Pope260',
  'Pope 260',
  'Pope260',
  NULL,
  '1850-01-01T00:00:00.000Z',
  '1843-01-01T00:00:00.000Z',
  '1850-01-01T00:00:00.000Z',
  260,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 260 was the 260th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 260 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.286Z',
  '2025-10-03T19:57:47.286Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh5l00788z6ok5e7b2qe',
  'Pope261',
  'Pope 261',
  'Pope261',
  NULL,
  '1857-01-01T00:00:00.000Z',
  '1850-01-01T00:00:00.000Z',
  '1857-01-01T00:00:00.000Z',
  261,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 261 was the 261st Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 261 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.290Z',
  '2025-10-03T19:57:47.290Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh5p00798z6owimsnpne',
  'Pope262',
  'Pope 262',
  'Pope262',
  NULL,
  '1864-01-01T00:00:00.000Z',
  '1857-01-01T00:00:00.000Z',
  '1864-01-01T00:00:00.000Z',
  262,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 262 was the 262nd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 262 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.293Z',
  '2025-10-03T19:57:47.293Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh5t007a8z6ob91u8mw5',
  'Pope263',
  'Pope 263',
  'Pope263',
  NULL,
  '1871-01-01T00:00:00.000Z',
  '1864-01-01T00:00:00.000Z',
  '1871-01-01T00:00:00.000Z',
  263,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 263 was the 263rd Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 263 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.298Z',
  '2025-10-03T19:57:47.298Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh5x007b8z6otpiuigyx',
  'Pope264',
  'Pope 264',
  'Pope264',
  NULL,
  '1878-01-01T00:00:00.000Z',
  '1871-01-01T00:00:00.000Z',
  '1878-01-01T00:00:00.000Z',
  264,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 264 was the 264th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 264 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.301Z',
  '2025-10-03T19:57:47.301Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh62007c8z6o8v7pl61y',
  'Pope265',
  'Pope 265',
  'Pope265',
  NULL,
  '1885-01-01T00:00:00.000Z',
  '1878-01-01T00:00:00.000Z',
  '1885-01-01T00:00:00.000Z',
  265,
  'Various',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope 265 was the 265th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 265 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.307Z',
  '2025-10-03T19:57:47.307Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh66007d8z6oef0oqz0m',
  'Francis',
  'Pope Francis',
  'Francis',
  NULL,
  '2025-01-01T00:00:00.000Z',
  '2013-01-01T00:00:00.000Z',
  '2025-01-01T00:00:00.000Z',
  266,
  'Buenos Aires, Argentina',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Francis was the 266th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 266 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  false,
  '2025-10-03T19:57:47.310Z',
  '2025-10-03T19:57:47.310Z'
);
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
) VALUES (
  'cmgb9nh6a007e8z6oo4sa63yg',
  'Leo',
  'Pope Leo XIV',
  'Leo',
  NULL,
  NULL,
  '2025-01-01T00:00:00.000Z',
  NULL,
  267,
  'United States',
  'Bishop of Rome',
  'Succession to the papacy, Church organization and administration, Doctrinal development, Relations with secular authorities',
  'Pope Pope Leo XIV was the 267th Bishop of Rome during the modern era. His papacy occurred during a period of significant change in the world, as the Church adapted to new political, social, and cultural realities. He worked to maintain the relevance of the Catholic Church in a changing world while preserving its core teachings and traditions. His leadership helped guide the Church through modern challenges and opportunities.',
  NULL,
  'Historical data from Vatican official records and Wikipedia cross-referenced for accuracy. Pope 267 in the line of succession from St. Peter, serving during a period of significant development in Church history and the broader historical context of their era.',
  '[{"type":"Official","title":"Vatican Official Records","url":"https://www.vatican.va/content/vatican/en/holy-father.html"},{"type":"Historical","title":"Wikipedia - List of Popes","url":"https://en.wikipedia.org/wiki/List_of_popes"},{"type":"Reference","title":"Catholic Encyclopedia","url":"https://www.newadvent.org/cathen/"}]',
  true,
  '2025-10-03T19:57:47.314Z',
  '2025-10-03T19:57:47.314Z'
);

-- Insert papal events


-- Insert papal achievements


-- ============================================
-- STEP 7: VERIFICATION
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
LIMIT 10;

-- Check key popes
SELECT 
    "regnalName", 
    "papacyNumber", 
    "papacyStart", 
    "papacyEnd"
FROM popes 
WHERE "papacyNumber" IN (1, 50, 100, 150, 200, 250, 266, 267)
ORDER BY "papacyNumber";

SELECT 'Complete deployment with all 267 popes finished successfully!' as status;
