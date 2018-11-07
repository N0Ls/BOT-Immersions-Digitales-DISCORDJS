exports.run = (bot, message, args) => {

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9371b4866db041f69d7ec99ec2252e51');

x = new Date();
x.setFullYear=(x.getFullYear());
x.setMonth=(x.getMonth());
x.setDay=(x.getDay());

y = new Date();
y.setFullYear=(x.getFullYear());
y.setMonth=(x.getMonth());
y.setDay=(x.getDay())-1;

newsapi.v2.everything({
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


// newsapi.v2.everything({
//   q: 'startup OR start-up',
//   from: '2018-09-05',
//   to: '2018-09-06',
//   language: 'fr',
//   sortBy: 'publishedAt',
//   page: 2
// }).then(response => {
//   console.log(response.articles[0]);

//   });