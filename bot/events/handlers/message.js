const bot = require('@bot/bot.js')

function message(msg) {
  if (msg.text.startsWith('/')) return // Skip if this command

  const chatId = msg.chat.id

  bot.sendMessage(chatId, 'Hello world.')
}


module.exports = message
