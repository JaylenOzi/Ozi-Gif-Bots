const Discord = require("discord.js");
const ayarlar = require("./../settings.json")

module.exports = {
    conf: {
      aliases: ["rolsüz","check"],
      name: "rolsüz",
      help: "rolsüz"
    },

run: async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.react(ayarlar.redcarpı)

let knaveqwe = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)

if(args[0] == "ver") {
    knaveqwe.forEach(r => {
r.roles.add(ayarlar.otorol)
})
const khold = new Discord.MessageEmbed()
.setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
.setDescription("Sunucuda rolü olmayan \`"+ knaveqwe.size +"\` kişiye  rolü verildi!")
.setColor("GREEN")
message.channel.send(khold).then(m => message.react((ayarlar.greentik)))
} else if(!args[0]) {
const ozi = new Discord.MessageEmbed()
.setColor("#2f3136")
.setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
.setDescription("\`\`\`Sunucumuzda rolü olmayan "+ knaveqwe.size +" kişi var.\`\`\` \n\nBu kişilere rolü vermek için \`.rolsüz ver\` komutunu uygulayın!")
message.channel.send(ozi)
}

}}