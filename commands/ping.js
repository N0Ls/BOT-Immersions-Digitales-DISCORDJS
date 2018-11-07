 exports.run = (bot, message, args) => {
 	const Discord = require("discord.js");

 	console.log(`Pong! API Latency is ${Math.round(bot.ping)}ms`);
    const m = message.channel.send("Pong?");
    const embed = new Discord.RichEmbed()
	    .setColor("#EE2E2C")
	    .addField("Ping :",`${Math.round(bot.ping)}` + "ms", true)
	    .addField("Ping :",new Date().getTime() - message.createdTimestamp + " ms",)
	    .setAuthor(message.author.username,message.author.displayAvatarURL);
    message.channel.send(embed).catch(console.error);
}

