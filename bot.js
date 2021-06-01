const {Telegraf} = require("telegraf")
const bot = new Telegraf("1750448983:AAFMqVhUMoQKjzmIAOD94RVBKLiLewgRhbc")

const { array, array2, array3 } = require("./HAY")
const { informationOfFr, nameOfFriend, friends } = require("./information")
const { startKb, chooseNameKb} = require("./keyboard")

bot.start(ctx => ctx.reply(
    `Hello, ${ctx.message.from.first_name}`,
    startKb()
))

bot.hears("Hello", ctx => ctx.reply
(array2[Math.floor(Math.random() * array2.length)]
))

bot.hears("How are you?", ctx => ctx.reply 
    (array[Math.floor(Math.random() * array.length)]
))

bot.hears("Why?", ctx => ctx.reply
(array3[Math.floor(Math.random() * array3.length)]
))

bot.hears("Who should I call?", ctx => ctx.reply 
    (friends[Math.floor(Math.random() * friends.length)]
))

bot.hears("Choose name", ctx => ctx.reply("Choose name:", chooseNameKb()))

bot.hears("Go back", ctx => ctx.reply("Ok", startKb()))

bot.hears(friends, ctx => ctx.reply (nameOfFriend(ctx.message.text).join("\n")))

bot.hears("All friends", ctx => ctx.reply (Object.values(informationOfFr).join("\n\n").split(",").join("\n")))


console.log("BOT HAS BEEN STARTED")
bot.launch()