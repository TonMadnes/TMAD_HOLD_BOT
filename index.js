const TMADBot = require('./src/bot');

// Create and start the bot
const bot = new TMADBot();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  bot.shutdown();
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  bot.shutdown();
});

process.on('uncaughtException', (error) => {
  console.error('💥 Uncaught Exception:', error);
  bot.shutdown();
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
  bot.shutdown();
});

console.log('🤖 TMAD Telegram Bot is running...');
console.log('📱 Bot Token:', '8056776286:AAFLpYO7ZiYTuDWA05ocSW1hg6KZtqiaYSg');
console.log('⏰ Automatic updates every hour');
console.log('🔧 Use /hold command for manual updates');