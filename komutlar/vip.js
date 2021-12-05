const Discord = require('discord.js');
const db = require("quick.db")
const ayarlar = require("./../settings.json")

module.exports = {
    conf: {
      aliases: ["vip","special"],
      name: "vip",
      help: "vip"
    },

run: async (client, message, args) => {  
  if(!message.member.hasPermission("ADMINISTRATOR")) { message.channel.send("Yeterli yetkin bulunmuyor!").then(x=>x.delete({timeout:5000}))
  message.react(ayarlar.redcarpı)
  return }
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
  if (!member) { message.channel.send( "Böyle bir kullanıcı bulunamadı!").then(x=>x.delete({timeout:5000}))
  message.react(ayarlar.redcarpı)
  return }
  if (!member.roles.cache.has(ayarlar.viprole)){
  message.react(ayarlar.greentik)
  message.channel.send(`${member} kişisine başarıyla VIP rolü verildi!`).then(x=>x.delete({timeout:5000}))
  await member.roles.add(ayarlar.viprole)
  } else {
  message.react(ayarlar.greentik)
  message.channel.send(`${member} kişisinden başarıyla VIP rolü alındı!`).then(x=>x.delete({timeout:5000}))
  await member.roles.remove(ayarlar.viprole)
  }}}