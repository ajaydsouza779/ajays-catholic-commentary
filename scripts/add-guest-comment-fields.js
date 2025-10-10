const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function addGuestCommentFields() {
  console.log('🔧 Adding guest comment fields to database...');
  try {
    // This will be handled by Prisma when we run the migration
    console.log('✅ Guest comment fields will be added via Prisma migration');
    console.log('💡 Run: npx prisma db push to apply schema changes');
  } catch (error) {
    console.error('❌ Error adding guest comment fields:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addGuestCommentFields();
