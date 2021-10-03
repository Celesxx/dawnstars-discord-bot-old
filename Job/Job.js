if(message.content.startsWith(prefix + "Minage"))
{
    try
    {
        PersonnageId = bdd[message.content.slice(10,32)]
        const filter = (reaction,user) => ['✅', '❌'].includes(reaction.emoji.name) && message.member.id.includes(user.id);
        let Niveau = message.content.slice(8,9)
        let ResultatMinage = []
        let Resultat = ""
        let gain = ""
        let end = false
        let Materiau = ["<:Fer:814658411118723133>","<:Acier:814658354030444554>"]

        rollPierre = Math.floor(Math.random() * bddMinage[`Minage` + Niveau].Pierre.Rare) + 7 - bdd["<@!" + message.member.id + ">"].Job.Lv
        rollFer = Math.floor(Math.random() * bddMinage[`Minage` + Niveau].Fer.Rare)
        rollAcier = Math.floor(Math.random() * bddMinage[`Minage` + Niveau].Acier.Rare)
        rollMalus = Math.floor(Math.random() * bddMinage[`Minage` + Niveau].Malus.Rare)
        for(let i = 0; i < rollPierre; i++) ResultatMinage.push(client.emojis.get(bddMinage[`Minage` + Niveau].Pierre.EmojiId))
        for(let i = 0; i < rollFer; i++) ResultatMinage.push(client.emojis.get(bddMinage[`Minage` + Niveau].Fer.EmojiId))
        for(let i = 0; i < rollAcier; i++) ResultatMinage.push(client.emojis.get(bddMinage[`Minage` + Niveau].Acier.EmojiId))
        for(let i = 0; i < rollMalus; i++) ResultatMinage.push(client.emojis.get(bddMinage[`Minage` + Niveau].Malus.EmojiId))
        ResultatMinage = shuffle(ResultatMinage)
        

        let embed = new Discord.RichEmbed()
            .setColor("#00FF00")
            .setAuthor("Minage")
            .setDescription(bddMinage[`Minage` + Niveau].Description)
            .addField("Minage en cours",'\u200b')

        message.channel.send(embed).then(async message =>
        {
            await message.react('✅')
            await message.react('❌')

            function edit()
            {
                message.channel.fetchMessages({around: message.id, limit: 1})
                .then(msg => {
                    const fetchedMsg = msg.first();
                    fetchedMsg.edit(embed);
                });
            }
            
            console.log(`Le resultat est : ${ResultatMinage}`)
            let i = 0;
            for await (let element of ResultatMinage)
            {
                console.log(`element : ${element}`)
                console.log(`element : "<:Fer:814658411118723133>`)
                console.log(Materiau.includes(element))
                if(Materiau.includes(element) && end === false)
                {
                    console.log("test")

                    setTimeout(() =>
                    {
                        embed.addField(`Vous avez trouvé un ${element} voulez vous continuer à miner ?`,'\u200b')
                        embed.addField('Oui', '✅',true)
                        embed.addField('Non', '❌', true)

                        Resultat += element
                        for(const array of Array.from(embed.fields)) if(array.name == "Minage en cours") array.value = Resultat
                        edit()
                        gain += element

                    },i*1500)       

                    const collector = message.awaitReactions(filter, {max : 1, time: 5000000 })
                    await collector.then(collected =>
                    {
                        let reaction = collected.first();
        
                        switch(reaction.emoji.name)
                        {
                            case '✅':
                                embed.spliceFields(1, 3);
                                reaction.remove(reaction.users.last())
                            break

                            case '❌': 
                                embed.description = `Vous avez décidé de vous arrêter la et de repartir avec votre butin : ${gain}`
                                reaction.remove(reaction.users.last())
                                end = true
                                embed.spliceFields(0, 4);
                            break
                        }
                        if(end === true) return
                    });
                }else if(element == "<:Croix:814658455302045716>" && end === false)
                {
                    setTimeout(() =>
                    {
                        Resultat += element
                        for(const array of Array.from(embed.fields)) if(array.name == "Minage en cours") array.value = Resultat
                        edit()
                        embed.addField("Lose", "ta perdu lol")
                        end = true
                    }, i*1500)
                    return
                }else if(end === false)
                {
                    setTimeout(() =>
                    {
                        Resultat += element
                        for(const array of Array.from(embed.fields)) if(array.name == "Minage en cours") array.value = Resultat
                        edit()
                    }, i*1500)
                } 
                i++;
            }
            for(const array of Array.from(embed.fields)) 
            {
                if(array.name == "Minage en cours") 
                {
                    array.name = "Résultat"
                    array.value = `Vous avez finis de miner et vous avez recolté : ${gain}`
                    
                }
            }
            edit()
            embed.spliceFields(2, 3);
        })
    }catch(error)
    {
        console.log(error)
    }
}