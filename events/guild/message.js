const { prefix } = require("../../botconfig.json")

module.exports = async (bot, message) => {
    if (message.author.bot || message.channel.type === "dm") return;
    
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()
    if(!message.content.startsWith(prefix)) return;
    
     let channelembed = new RichEmbed()
     .setTitle("Lucifer Bot")
     .setDescription(`Use the \`bot-commands\` channel to run commands, ${message.author}.`)
     .setColor(0xe20000)
     .setFooter(message.id)
     .setTimestamp();
    
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(!commandfile.message.channels.find("574966288741302284")) {
        if(!message.author.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(channelembed);
    }
    if(commandfile) commandfile.run(bot, message, args)
}
