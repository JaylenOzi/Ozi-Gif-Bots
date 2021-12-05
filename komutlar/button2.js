const Discord = require("discord.js");

module.exports = {
  conf: {
    aliases: [],
    name: "sm2",
    owner: true,
  },

  run: async (client, message, args) => {
    client.api.channels(message.channel.id).messages.post({ data: {"content":`
__**Butona tıklarsanız size 🎈 BANNER Kanallarını görüntüleme yetkisi verilir ve BANNER kanallarını görebilirsiniz eğer tekrar tıklarsanız yetkiniz alınır.**__
\`\`\`diff
-If you click on the button, you will be given the authority to view BANNER Channels and you can see the BANNER channels.
\`\`\`
**Click Button** <a:sag:851065827331276810> 🎈 See Banner

__**Butona tıklarsanız size 🔞 NSFW Kanallarını görüntüleme yetkisi verilir ve NSFW kanallarını görebilirsiniz eğer tekrar tıklarsanız yetkiniz alınır.**__
\`\`\`diff
-If you click on the button, you will be given the authority to view NSFW Channels and you can see the NSFW channels.
\`\`\`
**Click Button** <a:sag:851065827331276810> 🔞 NSFW
`,"components":[{"type":1,"components":[

        {"type":2,"style":2,"custom_id":"nfsw","label":"Nfsw","emoji": { "id": "855052992251822081"}},
        {"type":2,"style":2,"custom_id":"banner","label":"Banner","emoji": { "id": "862589696974651413"}}

        ]}]} })
  },
};
