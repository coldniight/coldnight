const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "notify",
        description: "Sends a message to all the server.",
        usage: "!notify <message>",
        accessableby: "Owners",
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
  

        if(!message.member.hasPermissions(["ADMINISTRATOR"])) return message.channel.send(perembed)

        let reason = args.slice(1).join(" ");
        if(!reason) return message.channel.send(timeembed)

        let notification = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Message from user ${message.author}: ${reason}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        message.guild.members.send(notification)

    }
}
