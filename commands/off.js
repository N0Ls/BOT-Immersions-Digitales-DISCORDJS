exports.run = (bot, message, args) => {
	if(!message.member.roles.some(r=>["Gestion de projet (Administrateur)", "Modérateur"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
  else{
  	message.channel.send("À la prochaine");
	bot.destroy();
    console.log("Goodbye !");
  }
}
