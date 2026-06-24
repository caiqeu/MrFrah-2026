/*const { MessageEmbed } = require('discord.js')
const ghostPingSchema = require('../models/ghost-ping-schema')
const cache = {}

module.exports = bot => {
    bot.on('messageDelete', async, (message) => {
        const { content, channel, author, guild, mentions } = message

        if(!author || author.id || mentions.users.size === 0) {
            return 
        }

        let channelID = cache[guild.id]
        if(!channelID) {
            const result = await ghostPingSchema.findById(guild.id)
            if(!result) {
                return
            }

            channelID = result.channel.ID
            cache[guild.id] = channel.id
        }

        const embed = new MessageEmbed()
            .setTitle('Possible ghost ping detected ')
            .setDescription(`Message: \n\n"${content}"`)
            .setField('Channel', channel)
            .setField('Message author', author)
            
        const targetChannel = guild.channels.cache.get(channelId)
        if(targetChannel) {
            targetChannel.send(embed);
        }
    });
};*/