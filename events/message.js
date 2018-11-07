module.exports = (bot, message) => {

  //Ban swear words (delete messages and send warning to user)
  const gm = require("../gm.json");
  const msglect = message.content.toLowerCase();
  
  var swearlist=[
  /\bcon\b/,
  /\bpd\b/,
  /\bta gueule\b/,
  /\btg\b/
  ];

  for (var i = swearlist.length - 1; i >= 0; i--) {
    if(swearlist[i].test(msglect)){
      message.delete();
      message.author.send("Les injures/gros mots sont interdits sur ce serveur");
    }
  }

  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(bot.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  // Grab the command data from the client.commands Enmap
  const cmd = bot.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // If message is a DM to the bot return unless the command is the dm owner one 
  // Avoid crashes
  if (message.channel.type=="dm") {
    if(command=="dm"){
      cmd.run(bot, message, args);
    }
    else{
    console.log("Message direct évité");
    return; 
    }
  }

  // Run the command
  cmd.run(bot, message, args);
};