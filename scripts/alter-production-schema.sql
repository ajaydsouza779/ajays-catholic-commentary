-- ALTER script to add new columns to production database
-- Run this BEFORE importing the papal data

-- Add historicalContext column to popes table
ALTER TABLE popes 
ADD COLUMN IF NOT EXISTS "historicalContext" TEXT;

-- Add references column to popes table (quoted because it's a reserved keyword)
ALTER TABLE popes 
ADD COLUMN IF NOT EXISTS "references" TEXT;

-- Verify the columns were added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'popes' 
AND column_name IN ('historicalContext', 'references')
ORDER BY column_name;
