const Discord = require('discord.js')
const { round } = require('mathjs')
const bot = new Discord.Client();
const token = '';
const ms = require('ms')

module.exports = {
    name: "uptime",
    description: "See the bot's uptime",

    async run (client, message, args){

        const embed = new Discord.messageEmbed()
        .setTitle("Uptime")
        .setDescription(`I have been online for **${ms(client.uptime, { long: true })}**`)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        .setTimestamp();

        message.channel.send(embed);
    }
}