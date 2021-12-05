const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    conf: {
      aliases: ["top-pp"],
      name: "top-pp",
      help: "top-pp"
    },

run: async (client, message, args) => {   
  let kisi = message.mentions.members.first() ? message.mentions.members.first() : message.member
  const sorted = message.guild.members.cache.filter(m=>db.has(`pp.${m.user.id}`)&&!m.user.bot).array().sort((a, b) => { return (db.fetch(`pp.${b.user.id}`) || 0) - (db.fetch(`pp.${a.user.id}`) || 0) });
	const top10 = sorted.splice(0, args[1] || 10)
  var sira = 1
  const map = top10.map(s=>`${sira++}. <@!${s.user.id}> - ${db.fetch(`pp.${s.user.id}`)||0} Photo göndermiş.`).join('\n')
  let embed = new Discord.MessageEmbed()
  .setAuthor("PHOTO TOP", message.guild.iconURL({ dynamic: true }))
  .setFooter("Photo Leaderboard", message.author.avatarURL({ dynamic: true }))
  .setTimestamp()
  .addField("Attığın Photo;",`${db.fetch(`pp.${kisi.user.id}`)}`)
  .setDescription(map)
  message.channel.send(embed)
  
   
}};
