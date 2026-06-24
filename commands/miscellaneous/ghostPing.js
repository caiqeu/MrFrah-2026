/*const ghostPingSchema = require('../models/ghost-ping-schema')

module.exports = {
    requiredPermissions: ['𝙖𝙙𝙢~'],
    expectedArgs: '<Channel tag>',
    minArgs: 1,
    maxArgs: 1,
    callback: async({ message }) => {
        const{ mentions, guild } = message

        const targetChannel = mentions.channels.first()
        if(!targetChannel) {
            message.channel.send('Please tag a channel.')
            return
        }

        await ghostPingSchema.findOneAndUpdate({
            _id: guild.id,
        }, {
            _id: guild.id,
            channelID: targetChannel.id,
        }, {
            upsert: true,
        })

        message.reply("Ghost ping detection channel set!");
    }
}*/