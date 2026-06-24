const { RichEmbed } = require('discord.js')
const { Prefix } = require('../../json/config.json')

exports.run = async(client, message, args) => {
    await message.delete().catch(O_o => {})

    const a = message.guild.roles.get('')
    const filter = (reaction, user) => ['A'].includes(reaction.emoji.name) && user.id === message.author.id
    const embed = new RichEmbed()
        .setTitle(`${message.author.username}'s verification!`)
        .setDescription(`
        
        A ${a.toString()}
        
        `)
        .setColor(`#00ff11`)
        .setFooter(`Command executed by ${message.author.username}`)

        message.channel.send(embed).then(async msg => {
            await msg.react('A')

            msg.awaitReactions(filter, {
                max: 1,
                time: 30000,
                errors: [`time`]
            }).then(collected => {
                const reaction = collected.first()

                switch(reaction.emoji.name) {
                    case 'A':
                    if(message.member.roles.has(a.id)) {
                        message.delete(2000)
                        return message.channel.send('> :chains: **You are already verified**!').then(m => m.delete(3000))
                    }

                    message.member.addRole(a).catch(err => {
                        return message.channel.send(`> **Error verifying you, ${err.message }**.`)
                    })

                    message.channel.send('> :chains: **You have been succesfully verified, now you have acess to all channels** !')
                    msg.delete()
                    break
                }
            })
        })
}

exports.help = {
    name: "Verify"
}