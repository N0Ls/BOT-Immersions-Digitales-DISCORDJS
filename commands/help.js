exports.run = (bot, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setTitle("Les commandes auxquelles je réponds :")
	    .setColor("#EE2E2C")
	    .addField("!dm", "Envoie ton message en privé si tu as une question par rapport aux Immersions")
	    .addField("!ping", "Classique (Pong ?)")
	    .addField("!uptime", "Temps de depuis lequel le bot est en ligne")
	    .setAuthor(message.author.username,message.author.displayAvatarURL)
	    .setFooter("Bot crée par N0ls")
	    .setTimestamp()
	    .addBlankField(true)
    message.channel.send(embed).catch(console.error);
}