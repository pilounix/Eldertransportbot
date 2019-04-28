const Discord = require('discord.js')
const bot = new Discord.Client();

const prefix = '&';

bot.on('ready', () => {

    console.log('bot is ready with username: ' + bot.user.username)
    bot.user.setActivity(`&help`, {type: "PLAYING"});


});

bot.on('message', msg => {
	if(msg.content.toLowerCase().startsWith(prefix + 'ping')) {
		msg.channel.send('Pong! ' + Math.round(bot.ping) + ' ms!')
	}
});


bot.on('message', msg => {
	if(msg.content.toLowerCase().startsWith(prefix + 'clear')) {		
		msg.delete()
		if(msg.member.hasPermission("MANAGE_MESSAGE")) {
			msg.channel.fetchMessage()
				.then(function(list){
					msg.channel.bulkDelete(list);
				}, function(err){msg.channel.send("Erreur")})}	
	}
});

bot.login("");
