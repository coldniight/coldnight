const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "fixname",
        description: "Fixes the name of a user.",
        usage: "!fixname <member>",
        accessableby: "Helpers",
        aliases: []
    },
    run: async (bot, message, args) => {
        let perembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You do not have access to \`fixname\`, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let memembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Please provide a valid user to fixname, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        if(!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.channel.send(perembed)

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!mutee) return message.channel.send(memembed)

        let adminembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You are not allowed to perform \`fixname\` on user ${mutee}, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        if(mutee.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(adminembed)

        if(!message.guild.me.hasPermissions(["MANAGE_ROLES"])) return console.log("I don't have enough permissions to run some commands!");

        let muteembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Fixed ${mutee}'s nickname, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        await(mutee.setNickname(""))
        await(mutee.setNickname(replace('a', '')))
        message.channel.send(muteembed)
    }
}
