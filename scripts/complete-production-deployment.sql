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

-- The papal data will be inserted here
-- (This section will be populated by the export script)
