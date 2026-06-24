module.exports = (client, member) => {
    let userlogs = member.guild.channels.find(c => c.name === 'leave-logs')
    userlogs.send(`${member.user.tag} has left **${member.guild}**.`)
}