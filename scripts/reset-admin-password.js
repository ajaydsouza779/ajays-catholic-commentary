const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function resetAdminPassword() {
  console.log('🔐 Resetting admin password...');
  try {
    const adminEmail = 'ajay@example.com';
    const newPassword = 'admin123'; // You can change this
    
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    
    // Update the admin user's password
    const updatedUser = await prisma.user.update({
      where: { email: adminEmail },
      data: { passwordHash: hashedPassword }
    });
    
    console.log('✅ Admin password reset successfully!');
    console.log('📧 Email:', adminEmail);
    console.log('🔑 New Password:', newPassword);
    console.log('💡 You can now sign in with these credentials');
    console.log('🔒 Remember to change your password after signing in!');
    
  } catch (error) {
    console.error('❌ Error resetting password:', error);
  } finally {
    await prisma.$disconnect();
  }
}

resetAdminPassword();
