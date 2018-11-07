exports.run = (bot, message, args) => {
 	// Make the bot say what you input in the command
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    //We elete the command message
    message.delete().catch(O_o=>{}); 
    //The bot send the message
    message.channel.send(sayMessage);
}

