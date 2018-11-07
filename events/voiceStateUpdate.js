module.exports = (bot, oldMember, newMember) => {
	//Play a song each time a specific user joins a channel on the server
	let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {

     // User Joins a voice channel
     if (newMember.id=="USER1 ID" || newMember.id=="USER2 ID") {
      const broadcast = bot.createVoiceBroadcast();
      newMember.voiceChannel.join()
      .then(connection => {
        console.log("song playes");
        broadcast.playFile('PATH TO SONG', {volume: 0.25});
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