exports.run = (bot, message, args) => {
	/*Shut down the bot*/
	if(!message.member.roles.some(r=>["Moderator", "NAME OF THE ROLE YOU WANT TO BE ABLE TO USE THE COMMAND"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
  	else{
	  	message.channel.send("À la prochaine");
		bot.destroy();
	    console.log("Goodbye !");
  	}
}
