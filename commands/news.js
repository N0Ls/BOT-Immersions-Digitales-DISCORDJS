exports.run = (bot, message, args) => {

/*Command that use the news API to get the latest news over a subject*/
/*For more information refer to newsapi*/
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('YOUR API KEY');

x = new Date();
x.setFullYear=(x.getFullYear());
x.setMonth=(x.getMonth());
x.setDay=(x.getDay());

y = new Date();
y.setFullYear=(x.getFullYear());
y.setMonth=(x.getMonth());
y.setDay=(x.getDay())-1;

newsapi.v2.everything({
/*query subject here*/
  q: 'startup OR start-up',
  from: y,
  to: x,
  language: 'fr',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
	if(args==""){
		i=0;
	}
	else{
		i=args[0];
	}
	if (response.articles[i]) {
		console.log(response.articles[i]);
  		const Discord = require("discord.js");
  		const embed = new Discord.RichEmbed()
			.setTitle(response.articles[i].source.name)
		    .setColor("#EE2E2C")
		    .addField(response.articles[i].title,response.articles[i].url)
		    .setImage(response.articles[i].urlToImage)

		message.channel.send(embed).catch(console.error);
		message.delete();
	}
  });

}