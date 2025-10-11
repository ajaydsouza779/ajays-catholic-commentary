-- Add guest comment fields to comments table
-- This script adds the missing guestName and guestEmail columns

-- Add guestName column
ALTER TABLE comments ADD COLUMN IF NOT EXISTS "guestName" TEXT;

-- Add guestEmail column  
ALTER TABLE comments ADD COLUMN IF NOT EXISTS "guestEmail" TEXT;

-- Make authorId nullable (it's already nullable in our schema but let's ensure it)
-- Note: This might fail if there are existing non-null values, but that's expected
-- ALTER TABLE comments ALTER COLUMN "authorId" DROP NOT NULL;

-- Verify the changes
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'comments' 
AND column_name IN ('guestName', 'guestEmail', 'authorId')
ORDER BY column_name;
