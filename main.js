const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('I am ready!'); 
});

bot.on("message", message => {
if (message.author.bot) return

    if (message.content.toLowerCase().startsWith('repeat')){
        message.channel.send(message.content.replace(repeat', ''))
        message.delete()
    }

})

client.login('token');
