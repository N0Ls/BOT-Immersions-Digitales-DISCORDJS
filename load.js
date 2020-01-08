const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const bot = new Discord.Client();
const config = require("./config.json");
const ateliersNom = ["VR", "Mapping","Détournement de logo","Fond Vert", "Musée MMI","Escape Game","Codathon","Sandbox","Dans la peau d'un entrepreneur"];
const ateliersStatus = [0,0,0,0,0,0,0,0,0,0];

bot.config = config;
bot.ateliersNom=ateliersNom;
bot.ateliersStatus=ateliersStatus;

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

bot.login(config.token);
