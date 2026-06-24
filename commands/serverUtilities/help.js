module.exports = async (message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#09CAF2')
    .setDescription(`My commands list`)
    .setTimestamp()
    .setFooter(`Command executed by ${message.author.username}`)
    .setFields(
        {
            name: ';avatar',
            value: 'Shows your or other avatars.',
        },
        {
            name: ';ping',
            value: 'Shows your ping.',
        },
        {
            name: ';clear',
            value: 'Clears a number of messages.',
        },
        {
            name: ';ban',
            value: 'You ban a member but you need a reason.',
        },
        )
        message.channel.send(embed)
}