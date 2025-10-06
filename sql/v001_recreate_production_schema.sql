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
