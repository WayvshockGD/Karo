module.exports = {
    name: "ping",
    description: "Pong!",
    aliases: ["pong"],
    usage: 'ping',
    async run(message, args, bot) {
        const ping = Date.now() - message.createdTimestamp

        const m = await message.channel.send('pong!')

        m.edit(`pong! ${ping}`)
    }
};