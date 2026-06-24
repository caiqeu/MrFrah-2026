module.exports = (client, member) => {
    let userlogs = member.guild.channels.find(c => c.name === 'join-logs')
    userlogs.send(`${member.user.tag} has joined **${member.guild}**!`)
}