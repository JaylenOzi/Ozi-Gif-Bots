const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    conf: {
      aliases: ["top-gif"],
      name: "top-gif",
      help: "top-gif"
    },

run: async (client, message, args) => {  
  let kisi = message.mentions.members.first() ? message.mentions.members.first() : message.member
  const sorted = message.guild.members.cache.filter(m=>db.has(`gif.${m.user.id}`)&&!m.user.bot).array().sort((a, b) => { return (db.fetch(`gif.${b.user.id}`) || 0) - (db.fetch(`gif.${a.user.id}`) || 0) });
	const top10 = sorted.splice(0, args[1] || 10)
  var sira = 1
  const map = top10.map(s=>`${sira++}. <@!${s.user.id}> - ${db.fetch(`gif.${s.user.id}`)||0} gif göndermiş.`).join('\n')
  let embed = new Discord.MessageEmbed()
  .setAuthor("GİF TOP", message.guild.iconURL({ dynamic: true }))
  .setFooter("Gif Leaderboard", message.author.avatarURL({ dynamic: true }))
  .setTimestamp()
  .addField("Attığın Gif;",`${db.fetch(`gif.${kisi.user.id}`)}`)
  .setDescription(map)
  message.channel.send(embed)   
      
   
}}