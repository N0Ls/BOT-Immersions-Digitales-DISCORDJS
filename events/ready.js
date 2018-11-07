module.exports = (bot) => {
const config = require("../config.json");
	console.log(`C'est parti ma chouquette le bot est ready !`);

  //Choose a random game to set the bot activity
  const randtypeact =Math.floor(Math.random() * 3);
    if (randtypeact==0){
      const rand =Math.floor(Math.random() * (config.games.length+1));
      bot.user.setActivity(config.games[rand],{type:'PLAYING'});

    }
    if (randtypeact==1) {
      const rand =Math.floor(Math.random() * (config.watch.length+1));
      bot.user.setActivity(config.watch[rand],{type:'WATCHING'});

    }
    if (randtypeact==2) {
      const rand =Math.floor(Math.random() * (config.watch.length+1));
      bot.user.setActivity(config.music[rand],{type:'LISTENING'});

    }

  //Change the game every 10 minutes
  /*setInterval(() => {
    const rand =Math.floor(Math.random() * (config.games.length-1)+1);
    bot.user.setActivity(config.games[rand]);
    console.log(config.games[rand]);
  }, 600000);*/

  setInterval(() => {
    const randtypeact =Math.floor(Math.random() * 3);
    if (randtypeact==0){
      const rand =Math.floor(Math.random() * (config.games.length+1));
      bot.user.setActivity(config.games[rand],{type:'PLAYING'});
    }
    if (randtypeact==1) {
      const rand =Math.floor(Math.random() * (config.watch.length+1));
      bot.user.setActivity(config.watch[rand],{type:'WATCHING'});
    }
    if (randtypeact==2) {
      const rand =Math.floor(Math.random() * (config.watch.length+1));
      bot.user.setActivity(config.music[rand],{type:'LISTENING'});
    }
    
  }, 600000);


  //(May change to be replaced with cron)
/*  setTimeout(function(){ // in leftToEight() milliseconds run this:
    sendMessage(); // send the message once
    var dayMillseconds = 1000 * 60 * 60 * 24;
    setInterval(function(){ // repeat this every 24 hours
        sendMessage();
      }, dayMillseconds)
    }, leftToEight())

function leftToEight(){
    var d = new Date();
    return (-d + d.setHours(8,0,0,0));
}

function sendMessage(){
    var guild = bot.guilds.get('487599932463775785');
    if(guild && guild.channels.get('488677807493349407')){
        guild.channels.get('488677807493349407').send("Bonjour !");
    }
}*/
};

   