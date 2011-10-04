var http = require('http');
var bind = require('underscore').bind;

module.exports.load = function(bot) {
  bot.onMessage('print?', onMessage);
};

var onMessage = function(channel, from , message) {
  var self = this;


    console.log("message + " + channel + " " + from + " m: " + message);
  
  self.message(channel, '@' + from.split(' ')[0] + ' ' + "https://indyhall.basecamphq.com/W3318818");
  return true;
};

   