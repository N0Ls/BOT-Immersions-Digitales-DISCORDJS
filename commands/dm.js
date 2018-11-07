exports.run = (bot, message, args) => {
	/*DM the guild owner*/
	const guild=bot.guilds.get("YOUR GUILD ID");
	const sayMessage = args.join(" ");
	
	/*Sends the username of the author*/
	/*Send the message itself*/
	/*Delete the message from channel*/
	guild.owner.send(message.author.username);
	guild.owner.send(sayMessage);
	message.delete().catch(O_o=>{});
}