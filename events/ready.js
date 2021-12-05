const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../settings.json');

var prefix = ayarlar.prefix;
module.exports = client => {
  client.user.setStatus("dnd");
};

//idle = Boşta // dnd = Rahatsız Etmeyin 