-- Ajay's Catholic Commentary - Production Update SQL
-- Generated: 2025-10-10
-- Description: Add guest comment fields only (reflection field already exists)

-- ==============================================
-- ADD GUEST COMMENT FIELDS TO COMMENTS TABLE
-- ==============================================

-- Add guest comment fields to support non-registered users
-- Check if columns don't already exist before adding them
DO $$ 
BEGIN
    -- Add guestName column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'comments' AND column_name = 'guestName') THEN
        ALTER TABLE comments ADD COLUMN "guestName" TEXT;
    END IF;
    
    -- Add guestEmail column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'comments' AND column_name = 'guestEmail') THEN
        ALTER TABLE comments ADD COLUMN "guestEmail" TEXT;
    END IF;
END $$;

-- Make authorId optional for guest comments (only if it's currently NOT NULL)
DO $$ 
BEGIN
    -- Check if authorId is currently NOT NULL
    IF EXISTS (SELECT 1 FROM information_schema.columns 
               WHERE table_name = 'comments' 
               AND column_name = 'authorId' 
               AND is_nullable = 'NO') THEN
        ALTER TABLE comments ALTER COLUMN "authorId" DROP NOT NULL;
    END IF;
END $$;

-- Add comments to document the purpose of the guest comment fields
COMMENT ON COLUMN comments."guestName" IS 'Name for guest comments when user is not registered';
COMMENT ON COLUMN comments."guestEmail" IS 'Optional email for guest comments';
COMMENT ON COLUMN comments."authorId" IS 'Optional author ID - null for guest comments';

-- ==============================================
-- VERIFICATION
-- ==============================================

-- Verify the guest comment fields were added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'comments' 
AND column_name IN ('guestName', 'guestEmail', 'authorId')
ORDER BY column_name;

-- Check if reflection field exists in posts table
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'posts' 
AND column_name = 'reflection';

-- ==============================================
-- COMMIT CHANGES
-- ==============================================

COMMIT;
