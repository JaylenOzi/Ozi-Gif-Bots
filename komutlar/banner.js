const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const axios = require('axios');
const fetch = require('node-fetch')
module.exports = {
    conf: {
      aliases: ["banner"],
      name: "banner",
      help: "banner"
    },

run: async (client, message, args) => {
          const user = args.length > 0 ? message.mentions.users.first() || await client.users.fetch(args[0]) || message.author : message.author
       let uid = user.id // let uid = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; = x !
        let response = fetch(`https://discord.com/api/v8/users/${uid}`, {
            method: 'GET',
            headers: {
                Authorization: `Bot ${client.token}`
            }
        })
        
        let receive = ''
        let banner = `${user.tag} Bannera sahip değil.`
        
        response.then(a => {
        if(a.status !== 404) {
        a.json().then(data => {
        receive = data['banner']
        
        if(receive !== null) {
        
        let response2 = fetch(`https://cdn.discordapp.com/banners/${uid}/${receive}.gif`, {
            method: 'GET',
            headers: {
                Authorization: `Bot ${client.token}`
            }
        })
        let statut = ''
        response2.then(b => {
        statut = b.status
        
        banner = `https://cdn.discordapp.com/banners/${uid}/${receive}.gif?size=1024`
        if(statut === 415) {
        banner = `https://cdn.discordapp.com/banners/${uid}/${receive}.png?size=1024`
        }
        
        })
        }})}})
        
        setTimeout(() => {
        message.channel.send(banner)
        }, 1000)
        
       } 
}
