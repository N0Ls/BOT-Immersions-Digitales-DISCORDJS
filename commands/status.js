exports.run = (bot, message, args) => {

	const Discord = require("discord.js");
	message.channel.bulkDelete(5);
	var sayMessage="";
	if(args.length > 0){
		switch (args[0]){
			case ('vron') : 
			index=bot.ateliersNom.indexOf('VR');
			bot.ateliersStatus[index]=1;
			break;
			case ('vroff') :
			index=bot.ateliersNom.indexOf('VR');
			bot.ateliersStatus[index]=0;
			break;

			case ('mapon') :
			index=bot.ateliersNom.indexOf('Mapping');
			bot.ateliersStatus[index]=1;
			break;
			case ('mapoff') :
			index=bot.ateliersNom.indexOf('Mapping');
			bot.ateliersStatus[index]=0;
			break;

			case ('photon') :
			index=bot.ateliersNom.indexOf('Détournement de logo');
			bot.ateliersStatus[index]=1;
			break;
			case ('photoff') :
			index=bot.ateliersNom.indexOf('Détournement de logo');
			bot.ateliersStatus[index]=0;
			break;

			case ('fvon') :
			index=bot.ateliersNom.indexOf('Fond Vert');
			bot.ateliersStatus[index]=1;
			break;
			case ('fvoff') :
			index=bot.ateliersNom.indexOf('Fond Vert');
			bot.ateliersStatus[index]=0;
			break;

			case ('museeon') :
			index=bot.ateliersNom.indexOf('Musée MMI');
			bot.ateliersStatus[index]=1;
			break;
			case ('museeoff') :
			index=bot.ateliersNom.indexOf('Musée MMI');
			bot.ateliersStatus[index]=0;
			break;

			case ('escapeon') :
			index=bot.ateliersNom.indexOf('Escape Game');
			bot.ateliersStatus[index]=1;
			break;
			case ('escapeoff') :
			index=bot.ateliersNom.indexOf('Escape Game');
			bot.ateliersStatus[index]=0;
			break;

			case ('codeon') :
			index=bot.ateliersNom.indexOf('Codathon');
			bot.ateliersStatus[index]=1;
			break;
			case ('codeoff') :
			index=bot.ateliersNom.indexOf('Codathon');
			bot.ateliersStatus[index]=0;
			break;

			case ('sandon') :
			index=bot.ateliersNom.indexOf('Sandbox');
			bot.ateliersStatus[index]=1;
			break;
			case ('sandoff') :
			index=bot.ateliersNom.indexOf('Sandbox');
			bot.ateliersStatus[index]=0;
			break;

			case ('entrepon') :
			index=bot.ateliersNom.indexOf("Dans la peau d'un entrepreneur");
			bot.ateliersStatus[index]=1;
			break;
			case ('entrepoff') :
			index=bot.ateliersNom.indexOf("Dans la peau d'un entrepreneur");
			bot.ateliersStatus[index]=0;
			break;
		}
	}

    //faire un switch
    /*for(i=0; i<bot.ateliersNom.length;i++){
    	if (bot.ateliersStatus[i]==1) {
    		emoji=" :white_check_mark:";
    	}
    	else{
    		emoji=" :x:"
    	}
    	sayMessage = sayMessage + bot.ateliersNom[i] + emoji;
    	sayMessage = sayMessage + '\n'
    }

    message.channel.send(sayMessage);*/

    const embed = new Discord.RichEmbed()

    .setTitle("Disponibilité ateliers")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0xcd0f1b);
    for(i=0; i<bot.ateliersNom.length;i++){
    	if (bot.ateliersStatus[i]==1) {
    		emoji=" :white_check_mark:";
    	}
    	else{
    		emoji=" :x:"
    	}
    	embed.addField( bot.ateliersNom[i] + emoji, '----------------------------------------------------')
    	sayMessage = sayMessage + bot.ateliersNom[i] + emoji;
    	sayMessage = sayMessage + '\n'
    }
    message.channel.send({embed});



    //envoyer message avec tout les trucs 
}
