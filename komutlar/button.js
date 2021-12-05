const Discord = require("discord.js");

module.exports = {
  conf: {
    aliases: [],
    name: "sm",
    owner: true,
  },

  run: async (client, message, args) => {
    client.api.channels(message.channel.id).messages.post({ data: {"content":`
Merhaba, Aşağıdaki Renklerden İstediğini Almak için Butona Tıklaman Yeterlidir.

 <a:tik:916834458513068032> (\`Mavi\`)
 <a:tik:916834474434654239> (\`Kırmızı\`) 
 <a:tik:916834485448896572> (\`Sarı\`)
 <a:tik:916834513643003944> (\`Yeşil\`)
 <a:tik:916834499822772245> (\`Siyah\`)
`,"components":[{"type":1,"components":[

        {"type":2,"style":2,"custom_id":"mavi","label":"Mavi","emoji": { "id": "916834458513068032"}},
        {"type":2,"style":2,"custom_id":"kirmizi","label":"Kırmızı","emoji": { "id": "916834474434654239"}},
        {"type":2,"style":2,"custom_id":"sari","label":"Sarı","emoji": { "id": "916834485448896572"}},
        {"type":2,"style":2,"custom_id":"yesil","label":"Yeşil","emoji": { "id": "916834513643003944"}},
        {"type":2,"style":2,"custom_id":"siyah","label":"Siyah","emoji": { "id": "916834499822772245"}}

        ]}]} })
  },
};
