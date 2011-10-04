var wobot = require('wobot');
var http = require('http');
var bot = new wobot.Bot({
  debug: true,
  jid: '12132_43576@chat.hipchat.com',
  password: 'vjames123',
  name: 'Virtual James'
});

bot.loadPlugin('weather', require('../lib/wobot/examples/plugins/weather'));
bot.loadPlugin('ih_concierge', require('./ih_concierge'));


bot.connect();

bot.onConnect(function() {
  console.log(' -=-=-=-=-=-=-=- Connect');
  this.join('12132_virtual_james_lab@conf.hipchat.com');
});

bot.onError(function(error, stanza) {
  console.log(' -=- > Error: ' + error);
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

 