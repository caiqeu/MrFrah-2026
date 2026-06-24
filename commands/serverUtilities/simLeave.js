const Comando = require('discord.js-comando')

module.exports = class SimLeaveCommand extends Comando.Command {
    constructor(client) {
        super(client, {
            name: "simleave",
            group: "server",
            memberName: "simleave",
            userPermissions: ["𝙖𝙙𝙢~"],
            description: "Simulates a leave!"
        })
    }

    run = (message) => {
        this.client.emit('guildMemberAdd', message.member)
    }
}