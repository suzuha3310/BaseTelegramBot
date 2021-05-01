const TelegramBot = require('node-telegram-bot-api')

const token = '' // You bot token

// You can remove this if you have set the bot token
if (token.length == 0) {
  console.log(new Error('Please, set you bot token in file bot.js.'))

  process.exit(1)
}
//

const bot = new TelegramBot(token, { polling: true })

module.exports = bot
