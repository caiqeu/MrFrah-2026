const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: "ban command",

    async run (bot, message, args) {
        if(!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send("You can not use this command!")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason given"

        const kickembed = new Discord.MessageEmbed()
        .setTitle(`You were banned from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if(!args[0])
        return message.channel.send("You need to specify to ban!");
        if(!mentionMember)
        return message.channel.send("This user is not a valid user / is no-longer in the server!")
        if(!mentionMember.bannable)
        return message.channel.send("I was unable to ban this user.");

        await mentionMember.send(embed);
        await memtionMember.ban({
            reason: reason
        }).then(() => message.channel.send("Sucefully banned: " + mentionMember.user.tag));
    }
}