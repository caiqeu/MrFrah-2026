const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';

module.exports = {
    name: 'ticket',
    aliases: [],
    permissions: [''],
    descripion: ['Abra um ticket!'],
    async execute(message, args, cmd, client, discord){
const reactionMessage = await channel.send('Obrigado por contatar o suporte!');

const collector = reactionMessage.createReactionCollector(
    (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission('Creator'),
    { dispose: true }
        );

message.guild.channels.create('ticket', {
    type: "Abra um ticket.",
    parent: "", //coloca o id da categoria aí. N lembro se coloca entre "" ou sem.
    permissionOverwrites: [
        {
            id: message.guild.id, //aqui ele está setando para everyone n ter perm
            deny: ['VIEW_CHANNEL', 'SEND_MESSAGE'],
        }]
    }).then(canal => {

canal.send("Iremos te atender em breve!").then(menssagem =>{

    try{
        awaitReaction.react("🔒");
        awaitReaction.react("🏮");
    }catch(err){
        channel.send('Erro ao enviar emojis!');
        break;
    }

    collector.on('Coletar', (reaction, user) =>{
        switch(reaction.emoji.name){
            case "🔒":
                channel.updateOverwrite(message.author, { SEND_MESSAGE: false});
                break;

            case "🏮":
                channel.send('Deletando esse canal em 10 segundos!')
                setTimeout(() => channel.delete(), 10000);
                break;
}
    })
})
    }
    )
}
}
