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
};

   