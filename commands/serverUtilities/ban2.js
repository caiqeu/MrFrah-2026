const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';
const collector = reactionMessage.createReactionCollector(
    (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission('Creator'),
    { dispose: true }
        );

exports.run = (bot, message, args) => {
    let user = message.mentions.user.first() ||
    bot.users.cache.get(args[0])

        var membro = message.mentions.members.first() ||
        message.guild.mesmbers.cache.get(args[0]);

        if (!membro)
        return message.reply('The command you typed is incorrect, use ;help for more help.')
        if (membro === message.member)
        return message.reply('You do not have permission to use this!')

        var motivo = args.slice(1).join(" ");

        if (!motivo)
        return message.channel.send('Invalid reason!')
        if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.reply('You do not have permission to use this!')
        if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.reply('You do not have permission to use this!')
        if (guild.me.hasPermission("BAN_MEMBERS"))
        return message.channel.reply('You do not have permission to use this!')

           message.channel.send(`Para banir ${user} clique no emoji`).then(msg => {
                msg.react("🔑")
                
            })

            let filtro = (reaction, usuario) =>
            reaction.emoji.name === "🔑" && usuario.id === message.author.id;
            let collector = msg.createReactionCollector(filtro, {max: 1})

            collector.on("collect", cp => {
                cp.remove(message.author.id); {
                    let embed = new Discord.MessageEmbed()
                    .setTitle('Banned')
                    .setColor('#ff210e')
                    .setTimestamp()
                    .addFields(
                        {
                            name: "``Ban information``",
                            value: `**User banned**: ${membro}\n**Reason**: ${motivo}\n**Banned by**: ${message.author.username}`
                        }
                    )
                    message.channel.send(ember);
                }
                membro.ban();
            })
}