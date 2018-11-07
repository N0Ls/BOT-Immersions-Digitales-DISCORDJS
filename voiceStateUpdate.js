module.exports = (bot, oldMember, newMember) => {
	
	let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {

     // User Joins a voice channel
     if (newMember.id=="251069580607356928" || newMember.id=="142317014730539008" || newMember.id=="276416841788686336" || newMember.id=="133966052886315008" || newMember.id=="93444414529081344" ) {
      const broadcast = bot.createVoiceBroadcast();
      newMember.voiceChannel.join()
      .then(connection => {
        console.log("Envoie la musique mamène");
        broadcast.playFile('./ouais.mp3', {volume: 0.25});
        const dispatcher = connection.playBroadcast(broadcast);
        broadcast.on("end", end=>{
          broadcast.destroy();
          connection.disconnect();
        })
        
      })
      .catch(console.error); 
      
      
     }

  } else if(newUserChannel === undefined){

    // User leaves a voice channel

  }
}