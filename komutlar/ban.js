const { MessageEmbed } = require("discord.js");
const moment = require('moment')
const ayarlar = require("./../settings.json")

module.exports = {
    conf: {
      aliases: ["ban","sg","yargı"],
      name: "ban",
      help: "ban"
    },

run: async (client, message, args) => {

Date.prototype.timeNow = function() {
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}
Date.prototype.today = function() {
    return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
}  
             
if(!message.member.hasPermission("BAN_MEMBERS")) return message.react(ayarlar.redcarpı)
  
let member = await client.users.fetch(args[0]);

  let sebep = args.splice(1).join(" ")
  if(!sebep) return message.channel.send(new MessageEmbed().setDescription('Bir sebep belirtmen gerekiyor.')).then(x => x.delete({timeout: 5000}))


 let atılmaay = moment(Date.now()).format("MM")
 let atılmagün = moment(Date.now()).format("DD")
 let atılmasaat = moment(Date.now()).format("HH:mm:ss")
 let banatılma = `${atılmagün} ${atılmaay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${atılmasaat}`
 moment.locale("tr")
        
message.guild.members.ban(member.id, { reason: sebep })
message.react(ayarlar.greentik)
client.channels.cache.get(ayarlar.banlog).send(new MessageEmbed()
.setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))       
.setColor('RANDOM')
.setThumbnail(message.guild.iconURL({ dynamic: true}))     
.setFooter('OZİ GİF')                                                     
.setDescription(`
**Üye sunucudan yasaklandı** \n
Yetkili: ${message.author} (\`${message.author.id}\`)
Cezalı: <@!${member.id}>  (\`${member.id}\`)
Sebep : \`${sebep}\`
Tarih: \`${banatılma}\`
`))
            
 }
};