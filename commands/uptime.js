exports.run = (bot, message, args) => {
/*Since when the bot is up*/
	let totalSeconds = (bot.uptime / 1000);
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = Math.floor(totalSeconds % 60);
	let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
	message.channel.send(uptime);
}