const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "notify",
        description: "Sends a message to all the server.",
        usage: "!notify <message>",
        accessableby: "Owners, Enhanced Permissions",
        aliases: ["notificate"]
    },
    run: async (bot, message, args) => {
        let perembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You do not have access to \`notify\`, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let timeembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Please provide a message, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();
  

        if(!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.channel.send(perembed)

        let reason = args[1];
        if(!reason) return message.channel.send(timeembed)

        let notification = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Message from user ${message.author}: ${reason}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let adminrole = bot.guilds.get("574756014163886111").roles.find("name", "Administrator")

        let modrole = bot.guilds.get("574756014163886111").roles.find("name", "Moderator")

        let helprole = bot.guilds.get("574756014163886111").roles.find("name", "Helper")

        for (let i = 0; i < message.guild.members.size; i++) {
            if (message.guild.members[i].roles.has(adminrole.id)) {
                message.guild.members[i].user.send(notification)
            }

            if (message.guild.members[i].roles.has(modrole.id)) {
                message.guild.members[i].user.send(notification)
            }

            if (message.guild.members[i].roles.has(helprole.id)) {
                message.guild.members[i].user.send(notification)
            }
        }
    }
}
