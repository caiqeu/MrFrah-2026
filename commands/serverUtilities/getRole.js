const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("../../config.json"); 
const bot = new Discord.Client();
const token = '';

bot.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "") return

    let servidor = client.guilds.get("")
    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get(''),
        cargo2 = servidor.roles.get(''),
        cargo3 = servidor.roles.get('')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === ""){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
        }else if(dados.d.emoji.name === "👌"){
            if(membro.roles.has(cargo2)) return
            membro.addRole(cargo2)
        }else if(dados.d.emoji.id === ""){
            if(membro.roles.has(cargo3)) return
            membro.addRole(cargo3)
        }
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === ""){
            if(membro.roles.has(cargo1)) return
            membro.removeRole(cargo1)
        }else if(dados.d.emoji.name === "👌"){
            if(membro.roles.has(cargo2)) return
            membro.removeRole(cargo2)
        }else if(dados.d.emoji.id === ""){
            if(membro.roles.has(cargo3)) return
            membro.removeRole(cargo3)
        }
    }

})


bot.login(config.token);