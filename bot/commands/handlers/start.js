const bot = require('@bot/bot.js')

function start(msg) {
  const chatId = msg.chat.id

  bot.sendMessage(chatId, 'Execute the start command..')
}


module.exports = start
