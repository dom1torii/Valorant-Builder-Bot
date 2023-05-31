const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('getweapons')
	    .setDescription('Responds with a list of all VALORANT weapons'),
    async execute(interaction) {

        let response = ""

        await fetch('https://valorant-api.com/v1/weapons', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(data => data.json())
        .then(data => {
            for (i=0; i<data["data"].length; i++) {
                response += JSON.stringify(data["data"][i]["displayName"]) + "\n"
            }
        }

        )
        interaction.reply(response)
    }
}
