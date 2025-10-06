-- v004_add_pope_divisions_join.sql
-- Create implicit many-to-many join table for Popes <-> Church Divisions
-- Matches Prisma implicit m2m naming used locally: _PopeDivisions

BEGIN;

CREATE TABLE IF NOT EXISTS "_PopeDivisions" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL
);

-- Unique pair and lookup index
CREATE UNIQUE INDEX IF NOT EXISTS "_PopeDivisions_AB_unique" ON "_PopeDivisions"("A","B");
CREATE INDEX IF NOT EXISTS "_PopeDivisions_B_index" ON "_PopeDivisions"("B");

-- Foreign keys to popes and church_divisions (ignore if already exist)
DO $$ BEGIN
  ALTER TABLE "_PopeDivisions"
    ADD CONSTRAINT "_PopeDivisions_A_fkey"
    FOREIGN KEY ("A") REFERENCES "popes"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  ALTER TABLE "_PopeDivisions"
    ADD CONSTRAINT "_PopeDivisions_B_fkey"
    FOREIGN KEY ("B") REFERENCES "church_divisions"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

COMMIT;
