const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
    conf: {
      aliases: ["bilgi","stat"],
      name: "stat",
      help: "stat"
    },

run: async (client, message, args) => {
let kisi = message.mentions.members.first() ? message.mentions.members.first() : message.member
let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author);
let stat = []

  if(db.has(`gif.${kisi.user.id}`)){
  stat.push(`${member.user} kullanıcısının bilgileri aşağıda belirtilmiştir.\n\n\`❯\` Gif Sayısı: **${db.fetch(`gif.${kisi.user.id}`)}**\n`)
}
  if(db.has(`pp.${kisi.user.id}`)){
  stat.push(`\`❯\` Photo Sayısı: **${db.fetch(`pp.${kisi.user.id}`)}**\n\n`)
}
  if(db.has(`pp.${kisi.user.id}`)){
  stat.push(`\`❯\` Toplam Paylaşım: **${db.fetch(`sayı.${kisi.user.id}`)}**\n`)
}  
  
let embed = new Discord.MessageEmbed()
.setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
.setDescription(stat[0] ? stat.join('') : "Kişinin Şunanda Bir Paylaşımı Yoktur")
.setThumbnail(member.user.avatarURL({ dynamic: true }))
.setColor(message.member.displayHexColor)
message.channel.send(embed)
}};
