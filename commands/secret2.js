exports.run = (bot, message, args) => {
 	/*message.delete();*/
  	if(!message.member.roles.some(r=>["Gestion de projet (Administrateur)", "Modérateur"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");

    else{
    const sayMessage = args.join(" ");
  	message.delete().catch(O_o=>{}); 
    member.send(sayMessage);
    }
}