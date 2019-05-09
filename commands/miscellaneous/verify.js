const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "verify",
        description: "Gives you the Verified role.",
        usage: "!verify",
        accessableby: "Members",
        aliases: []
    },
    run: async (bot, message, args) => {
        let unverified = bot.guilds.get("574756014163886111").roles.find("name", "Unverified")
        let verified = bot.guilds.get("574756014163886111").roles.find("name", "Verified")
        let embed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You are already verified, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let vembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Verified user **${message.author}** with ID **${message.author.id}**.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();
        
            if(message.author.hasPermissions("BAN_MEMBERS")) {
            let vermember = message.mentions.members.first() || message.guild.members.get(args[0])
            if(!vermember) return message.channel.send(memembed)
            let manualembed = new RichEmbed()
            .setTitle("Lucifer Bot")
            .setDescription(`Manually verified ${vermember}, ${message.author}.`)
            .setColor(0xe20000)
            .setFooter(message.id)
            .setTimestamp();

            if(!vermember.roles.has(unverified.id)) return message.channel.send(alrembed);
            await(vermember.addRole(verified));
            await(vermember.removeRole(unverified));
            message.channel.send(manualembed);
        }

        if(!message.member.roles.has(unverified.id)) return message.author.send(embed).then(message.delete());
        await(message.member.addRole(verified));
        await(message.member.removeRole(unverified));
        await bot.guilds.get("574756014163886111").channels.get("574962903396909056").send(vembed);
        await message.delete();
       
    }
}
