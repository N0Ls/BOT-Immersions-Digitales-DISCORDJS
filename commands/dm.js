exports.run = (bot, message, args) => {
	const guild=bot.guilds.get("487599932463775785");
	const sayMessage = args.join(" ");
	
	guild.owner.send(message.author.username);
	guild.owner.send(sayMessage);
	message.delete().catch(O_o=>{});
}