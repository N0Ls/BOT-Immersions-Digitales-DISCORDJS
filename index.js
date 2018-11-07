const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
// requiring node modules

//creating new discord client
const bot = new Discord.Client();
//getting config file 
const config = require("./config.json");

// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
bot.config = config;

//initializing command handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  });
});

bot.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    bot.commands.set(commandName, props);
  });
});

//launching bot with token from config file
bot.login(config.token);
