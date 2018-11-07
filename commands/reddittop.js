exports.run = (bot, message, args) => {
  const request = require('request');
    request('https://www.reddit.com/r/popular/hot.json', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }

      let num = args[0];
      if(!num) num = 1;
      num = parseInt(num);
      num=num-1;

      console.log(body);
      var url = body.data.children[num].data.url;
      var title = body.data.children[num].data.title;
      console.log(url);
      console.log(title);
      message.channel.send(title);
      message.channel.send(url);
    });
}