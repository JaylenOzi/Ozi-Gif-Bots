const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ayarlar = require("./../settings.json")

module.exports = {
    conf: {
      aliases: ["temizle","sil"],
      name: "temizle",
      help: "temizle"
    },

    run: async (client, message, args, embed) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        if (!args[0]) return message.channel.send(`${ayarlar.redcarpı} Bir miktar belirtmelisin!`).then(x=>x.delete({timeout: 5000}))
        if (isNaN(args[0])) return message.channel.send(`${ayarlar.redcarpı} Belirttiğin miktar bir sayı olmalı!`).then(x=>x.delete({timeout: 5000}))
        await message.delete();
        await message.channel.bulkDelete(args[0]);
        message.channel.send(`${ayarlar.greentik} ${args[0]} adet mesaj silindi!`).then(x=>x.delete({timeout: 5000}))
      },
    };
