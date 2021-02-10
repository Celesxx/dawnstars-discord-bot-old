//Shop underlord

if(message.content === prefix + "Shop")
{
    const filter = (reaction, user) => ['⚔️','📜','🛡','💉','📦','❤','💙','🔙','📃','📝','📄','🍷','🍶','💎','🍀'].includes(reaction.emoji.name) &&user.id === message.author.id;

    let embed = new Discord.RichEmbed()
        .setColor('#b8b8b8')
        .setAuthor('Une fois dans la boutique un vendeur viens vous rejoindre')
        .setDescription('`Bonjour, nous avons une large gamme de produit, \n que désirez-vous ? `')
        .addField('Armes', '⚔️', true)
        .addField('Armures', '🛡', true)
        .addField('Potion', '💉', true)
        .setImage("https://cdn.discordapp.com/attachments/726571315418628133/752559431174193262/631e524f61e78e80088d26a03d2d882b.png")
    message.channel.send(embed).then(async message => 
        {
            await message.react('⚔️');
            await message.react('🛡');
            await message.react('💉');

            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
            collector.on('collect', (reaction, collector) =>
                {
                    switch (reaction.emoji.name)
                    {
                        case '⚔️':
                            let embed = new Discord.RichEmbed()
                                .setColor("#b8b8b8")
                                .setAuthor("Les armes")
                                .setDescription("Voici un large choix d'armes !")
                                
                                for (let i = 1; i < 3; i++)
                                {
                                    console.log(bddArme[i].Nom)
                                    embed.addField("Nom : " + bddArme[i].Nom, 'Degat : ' + bddArme[i].Degat + "\n Pénétration : " + bddArme[i].Pénétration + "\n Chance de Critique : " + bddArme[i].Critique + "\n Degat Critique :" + bddArme[i].DegatCritique + "\n Prix : " + bddArme[i].Prix + "\n Achat : " + bddArme[i].CommandeAchat, true);
                                }
                                embed.addField("Retour au shop", "🔙")
                            message.channel.send(embed).then(async message => 
                            {
                                await message.react('🔙')
                                let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                collector.on('collect', (reaction, collector) =>
                                    {
                                        switch (reaction.emoji.name)
                                        {
                                            case '🔙':
                                                message.delete();
                                            break;
                                        }
                                    });
                            });
                        break;

                        case '🛡':
                          let embed0 = new Discord.RichEmbed()
                          .setColor("#b8b8b8")
                          .setAuthor("Les armures")
                          .setDescription("Voici un large choix d'armures !")

                          for (let i = 1; i < 3; i++)
                            {
                                console.log(bddArmure[i].Nom)
                                embed0.addField("🛡️ Nom : " + bddArmure[i].Nom, '*Hp bonus:* ***' + bddArmure[i].Hp + "*** \n *Protection :* ***" + bddArmure[i].Protection + "*** \n *Protection Magique :* ***" + bddArmure[i].ProtectionMagique + "*** \n *Effet Spécial :* ***" + bddArmure[i].EffetSpecial + "*** \n *Prix :* ***" + bddArmure[i].Prix + "*** \n *Achat :* ***" + bddArmure[i].AchatArmure + "***", true);
                            }
                            message.channel.send(embed0).then(async message => 
                                {
                                    await message.react('🔙')
                                    let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                    collector.on('collect', (reaction, collector) =>
                                        {
                                            switch (reaction.emoji.name)
                                            {
                                                case '🔙':
                                                    message.delete();
                                                break;
                                            }
                                        });
                                });
                                              
                      break;

                      case '💉':
                          let embed2 = new Discord.RichEmbed()
                            .setColor("#b8b8b8")
                            .setAuthor("Liste des potions")
                            .setDescription("Voici un large choix de potion !")
                            .addField("Potion d'Hp", "🍷", true)
                            .addField("Potion mana", "🍶", true)
                            .addField("Retour au shop", "🔙")
                            message.channel.send(embed2).then(async message => 
                                {
                                    await message.react('🔙')
                                    let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                    collector.on('collect', (reaction, collector) =>
                                        {
                                            switch (reaction.emoji.name)
                                            {
                                                case '🔙':
                                                    message.delete();
                                                break;
                                            }
                                        });
                                });
                      break;
                    }  
                });
        });
}