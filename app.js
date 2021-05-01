const moduleAlias = require('module-alias')
const pathAliases = require('./pathAliases.js')

// Set path aliases
moduleAlias.addAliases({
  ...pathAliases,
})

moduleAlias()
//

const commandRouter = require('@bot/commands/commandRouter.js')
const eventRouter = require('@bot/events/eventRouter.js')
const bot = require('@bot/bot.js')

// Set commands
for (let [command, handler] of Object.entries(commandRouter)) {
  const regExp = new RegExp(command)

  bot.onText(regExp, handler)
}
//

// Set events
for (let [event, handler] of Object.entries(eventRouter)) {
  bot.on(event, handler)
}
//

// Errors
bot.on('polling_error', (e) => {
  console.log('Polling error:', e)
});

bot.on('error', (e) => {
  console.log('Error:', e.stack)
})
//
