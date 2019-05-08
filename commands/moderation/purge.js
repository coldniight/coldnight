const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "purge",
        description: "Deletes an specific amount of messages.",
        usage: "!purge <amount>",
        accessableby: "Helpers",
        aliases: ["clear"]
    },
    run: async (bot, message, args) => {
        let amountembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Please provide a valid amount of messages, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let hundredembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Please provide a number less than 100, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();
        
        let successembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Successfully purged ${args[0]} messages, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();
        
        let perembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You do not have access to \`purge\`, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();
        
        f(message.author.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(perembed)
        
        if (isNaN(args[0])) return message.channel.send(amountembed)
        if(args[0] > 100) return message.channel.send(hundredembed)

        message.channel.bulkDelete(args[0])
        .then(message.channel.send(successembed))
        .catch( error => message.channel.send(`[E] ${error.message}`))
    }
}
