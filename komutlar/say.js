const { MessageEmbed } = require("discord.js");
const ayarlar = require("./../settings.json")

module.exports = {
    conf: {
      aliases: ["say"],
      name: "say",
      help: "say"
    },

run: async (client, message, args) => {
    if(!ayarlar.yetkilirole.some(oku => message.member.roles.cache.has(oku)) && !message.member.hasPermission('ADMINISTRATOR')) 
    {
      message.react(ayarlar.redcarpı)
      return
    }
const embed = new MessageEmbed()
    var TotalMember = message.guild.memberCount
    var vip = message.guild.roles.cache.get(ayarlar.viprole).members.size
    let sesli = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b);
           message.channel.send(embed
               .setColor('RANDOM')
               .setDescription(`
\`❯\` Şu anda toplam **${sesli}** kişi seslide.
\`❯\` Sunucuda **${message.guild.memberCount}** adet üye var (**${message.guild.members.cache.filter(member => member.presence.status !== "offline").size}** Aktif)
\`❯\` Sunucuda toplamda **${vip}** özel kişi bulunmakta.
\`❯\` Toplamda **${message.guild.premiumSubscriptionCount}** adet boost basılmış! ve Sunucu **${message.guild.premiumTier}** seviye`)
 )
 }
}
