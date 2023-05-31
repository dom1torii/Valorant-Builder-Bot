const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('getskins')
	    .setDescription('Responds with a list of skins for chosen weapon')
	    .addStringOption(option =>
		    option.setName('weapon')
			    .setDescription('Weapon name')),
    async execute(interaction) {
        if (interaction.member.roles.cache.has('1113017259875651594')) {
            const weapon = interaction.options.getString("weapon")

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
                    if (data["data"][i]["displayName"] == weapon) {
                        for (j=0; j<data["data"][i]["skins"].length; j++) {
                            response += JSON.stringify(data["data"][i]["skins"][j]["displayName"]) + "\n"
                        }

                    }
                }
            }

            )
            if (response.length>0) {
                await interaction.reply(response)
            }
        }

    }
}
