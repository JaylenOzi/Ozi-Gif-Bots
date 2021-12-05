const { MessageEmbed } = require("discord.js");
const ayarlar = require("./../settings.json")

module.exports = {
    conf: {
      aliases: ["help","yardım","y"],
      name: "yardım"
    },

run: async (client, message, args, prefix) => {
let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author);

    if(!ayarlar.yetkilirole.some(oku => message.member.roles.cache.has(oku)) && !message.member.hasPermission('ADMINISTRATOR')) 
    {
    message.react(ayarlar.redcarpı)
    return }
const embed = new MessageEmbed()
let command = args[0]
if (client.commands.has(command)) {
command = client.commands.get(command)
message.channel.send(embed.setThumbnail(message.author.avatarURL({dynamic: true, size: 2048})).setColor("RANDOM").setDescription(`
${ayarlar.greentik} Belirttiğin komuta ait bilgiler aşağıda verilmiştir!
\`Komut Adı\`**:** ${command.conf.name}
\`Komut Açıklaması:\`**:** ${command.conf.description}
\`Komut Kullanımı:\`**:** ${command.conf.help}
\`Komut Alternatifleri:\`**:** ${command.conf.aliases[0] ? command.conf.aliases.join(', ') : `Alternatif bulunmuyor!`}`))
  return;
    }


let komutlars = (client.commands.filter((x) => x.conf.help).sort((a, b) => b.conf.help - a.conf.help).map((x) => ` \`${ayarlar.prefix}${x.conf.help}\``).splice(0, 300).join("\n"))
message.channel.send(embed.setThumbnail(message.author.avatarURL({dynamic: true, size: 2048})).setDescription(`Aşağıda sunucudaki komutlar sıralandırılmıştır. Toplam \`${client.commands.size}\` tane komut kullanılabilir. Komut bilgisini detaylı öğrenmek için \`.yardım <Komut Ismi>\` komutu ile komutun detaylı bilgilerini görebilirsin.

${komutlars}`
))}

}