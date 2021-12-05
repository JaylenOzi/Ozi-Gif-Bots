const Discord = require('discord.js');
module.exports = {
    conf: {
      aliases: ["av","avatar"],
      name: "avatar",
      help: "avatar"
    },

run: async (client, message, args, prefix) => {

const user = args.length > 0 ? message.mentions.users.first() || await client.users.fetch(args[0]) || message.author : message.author

message.channel.send(`${user.displayAvatarURL({ dynamic: true, size: 4096 })}`)

}
}