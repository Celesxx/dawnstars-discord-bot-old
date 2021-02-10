const { MessageReaction } = require("discord.js");

function SystemeCombat()
{
  const filter = (reaction, user) => ['⚔️', '🍀', '🌀', '🧬', '❤', '📜', '❌', '🪓', '📦', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'].includes(reaction.emoji.name) && user.id === message.author.id;
  var m = 0;
  var TEmoji = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟']

  var AffichageCombat = new Discord.RichEmbed()
    .setColor('#b8b8b8')
    .setAuthor("Un combat féroce commence !")


    for (let r = 0; r < AttaquantOrdre.length; r++)
    {
      AffichageCombat.addField(AttaquantOrdre[r].Nom, 'Hp : ' + AdversaireHp[r], true);
    }
  

    if(AttaquantOrdre.length > 1)
    {
      AffichageCombat.addField("C'est à " + AttaquantOrdre[m].Nom + " De faire une action !", "Choisis une acion a effectuer en fonction de ce que tu veux faire.")
      AffichageCombat.addField('Attaque', '⚔️', true)
      AffichageCombat.addField('Skill', '🧬', true)
      AffichageCombat.addField('Magie', '🌀', true)
      AffichageCombat.addField('Potion', '❤', true)
      AffichageCombat.addField('Fuite', '🍀', true)
      AffichageCombat.addField('Romancer le combat', '📜', true)
    }



  if (FieldEmbed == 1)
  {
    AffichageCombat.addField('Vous foncez sur votre adversaire un coup', '💢 ' + Degat)
    AffichageCombat.setImage('https://cdn.discordapp.com/attachments/726571315418628133/726571387002814464/the-knight-attack-martin-beckett-art-600x951.jpg')
  }else if (FieldEmbed == 2)
  {

    AffichageCombat.addField(monstre.DescriptionAttaque, '💢 ' + Degat)
    AffichageCombat.setImage(monstre.ImageAttaque)

  }else if (FieldEmbed == 3)
  {
    AffichageCombat.setAuthor("All Monster Must Die !")
    AffichageCombat.addField("Félicitation vous avez terrassé " + monstre.Nom + "!", monstre.DescriptionMort)
    AffichageCombat.addField('Récompense', '📦', true)
    message.channel.send(AffichageCombat).then(async message =>
    {
      await message.react('📦');

      let collector = message.createReactionCollector(filter, { time: 3600000, errors: ['time'] });
      collector.on('collect', (reaction, collector) =>
      {
        switch (reaction.emoji.name)
        {
          case '📦':
            message.channel.send("ta gagné !")
            break;
        }
      });
    });
  }else if (FieldEmbed == 4)
  {

    AffichageCombat.setAuthor("Après un long combat, votre heure est finalement arrivée !")
    AffichageCombat.setImage("https://cdn.discordapp.com/attachments/726571315418628133/727205059456270346/8361ddada8a1495bc4cd828c6f87ba30.gif")
    message.channel.send(AffichageCombat)
  }


  if(AttaquantOrdre.length > 1 && TotalMonstre.length > 0)
  {
    message.channel.send(AffichageCombat).then(async message =>
    {
      await message.react('⚔️');
      await message.react('🧬');
      await message.react('🌀');
      await message.react('❤');
      await message.react('🍀');
      await message.react('📜');

      if (AttaquantOrdre[0] != monstre && TotalMonstre.length >= 1)
      {
        let collector = message.createReactionCollector(filter, { time: 3600000, errors: ['time'] });
        collector.on('collect', (reaction, collector) =>
        {
        
          switch (reaction.emoji.name)
          {
            case '⚔️':
              let embed = new Discord.RichEmbed()
                .setColor('#b8b8b8')
                .setAuthor("Veuillez choisir votre arme !")

                if(AttaquantOrdre[m].Arme.Slot1.Nom != "")
                {
                  embed.addField("⚔️", AttaquantOrdre[m].Arme.Slot1.Nom, true)
                  if(AttaquantOrdre[m].Arme.Slot2.Nom != "")
                  {
                    embed.addField("🪓", AttaquantOrdre[m].Arme.Slot2.Nom, true)
                  }else{embed.addField("🪓", "Jte prend à main nue", true)}
                  
                }else
                {
                  embed.addField("⚔️", "Jte prend à main nue", true)
                  embed.addField("🪓", "Jte prend à main nue", true)
                }
                embed.addField("❌", "Revenir en arrière")

              message.channel.send(embed).then(async message =>
              {
                await message.react('⚔️');
                await message.react('🪓');
                await message.react('❌');

                let collector = message.createReactionCollector(filter, { time: 3600000, errors: ['time'] });
                collector.on('collect', (reaction, collector) =>
                {
                  switch (reaction.emoji.name)
                  {
                    case '⚔️':

                      message.delete()

                      let embed1 = new Discord.RichEmbed()
                        .setColor('#b8b8b8')
                        .setAuthor("Choisis ta cible !")

                      var EmojiAdversaire = []
                      for (let r = 0; r < AttaquantOrdre.length; r++)
                      {
                        console.log("etape 1")
                        embed1.addField(AttaquantOrdre[r].Nom, TEmoji[r], true);
                        EmojiAdversaire.push(TEmoji[r])
                      }
                      console.log("etape 2")

                      message.channel.send(embed1).then(async message =>
                      {

                        for (let r = 0; r < AttaquantOrdre.length; r++)
                        {
                          await message.react(EmojiAdversaire[r])
                        }
                        let collector = message.createReactionCollector(filter, { time: 3600000, errors: ['time'] });
                        collector.on('collect', (reaction, collector) =>
                        {
                          var v = 0;
                          EmojiAdversaire.forEach(element =>
                          {
                            switch (reaction.emoji.name)
                            {
                              case element:

                                CapCombat = Math.floor(Math.random() * 10) + 1;
                                Protec = Math.floor(Math.random() * 10) + 1;
                                
                                console.log(CapCombat)
                                console.log(Protec)
                                //Verification touche 
                                if (CapCombat >= AttaquantOrdre[0].CapaciteCombat)
                                {
                                  if(Protec >= AttaquantOrdre[v].Protection)
                                  {
                                    Degat = 0
                                  }else
                                  {
                                    if(AttaquantOrdre[0].Arme.Slot1.Nom == "")
                                    {
                                      Degat = 1
                                    }else{Degat = AttaquantOrdre[0].Arme.Slot1.Degat}}  
                                }else{Degat = 0}

                                //Degat
                                AdversaireHp[v] = AdversaireHp[v] - Degat
                                FieldEmbed = 1


                              if (AdversaireHp[v] <= 0)
                              {
                                if (AttaquantOrdre[v] == monstre){FieldEmbed = 3;}else {FieldEmbed = 4;}
                                TotalAdversaire = TotalAdversaire.filter(item => item !== AttaquantOrdre[v])
                                if(AttaquantOrdre[v] == TotalMonstre[0]){TotalMonstre = TotalMonstre.filter(item => item !== AttaquantOrdre[v])}
                                AttaquantOrdre = AttaquantOrdre.filter(item => item !== AttaquantOrdre[v])
                              }

                              TemporaireTransitionParticipant = AttaquantOrdre[0]
                              AttaquantOrdre = AttaquantOrdre.filter(item => item !== AttaquantOrdre[0])
                              AttaquantOrdre.push(TemporaireTransitionParticipant)

                              TemporaireTransitionHpParticipant = AdversaireHp[0]
                              AdversaireHp = AdversaireHp.filter(item => item !== AdversaireHp[0])
                              AdversaireHp.push(TemporaireTransitionHpParticipant)


                              message.channel.bulkDelete(2);
                              SystemeCombat();

                              break;
                            }
                            v++;
                          });
                        });
                      });

                      break;

                    case '🪓':
                      
                    break;

                    case '❌':
                      message.delete();
                    break;
                  }
                });
              });
              break;
            }
          });
        }else if (AttaquantOrdre[0] == monstre && TotalAdversaire.length > 0 && verificationAntiDoubleAttaque == 0)
        {
          var delayInMilliseconds = 2000;

          setTimeout(function() 
          {
            var MonstreCible = new Array(TotalAdversaire.length - TotalMonstre.length)

            for (let a =0; a < TotalAdversaire.length - TotalMonstre.length; a++)
            {
              MonstreCible[a] = new Array(TotalAdversaire.length - TotalMonstre.length)
            }
            
            let i = 0;
            let a = 0;
            TotalAdversaire.forEach(element => 
              {
                TotalMonstre.forEach(elementMonstre => 
                  {
                    if(element != elementMonstre)
                    {
                      MonstreCible[a][0] = element
                      MonstreCible[a][1]= AdversaireHp[i]
                      a++
                    }
                  })
                i++
              })

              if(MonstreCible.length > 1)
              {
                MonstreCibleRandom = Math.floor(Math.random()*MonstreCible.length);
              }else{MonstreCibleRandom = 0}

            FieldEmbed = 2
            CapCombat = Math.floor(Math.random() * 10) + 1;
            Protec = Math.floor(Math.random() * 10) + 1;

            if (CapCombat >= AttaquantOrdre[0].CapaciteCombat)
            {
              if(Protec >= AttaquantOrdre[MonstreCibleRandom].Protection)
              {
                Degat = 0
              }else
              {
                Degat = AttaquantOrdre[0].Degat
              }  
            }else{Degat = 0}

          //Degat
          MonstreHpChoix = MonstreCible[MonstreCibleRandom][1]

          MonstreCible[MonstreCibleRandom][1] = MonstreCible[MonstreCibleRandom][1] - Degat

          if (MonstreCible[MonstreCibleRandom][1] <= 0)
            {
              TotalAdversaire = TotalAdversaire.filter(item => item !== MonstreCible[MonstreCibleRandom][0])
              AttaquantOrdre = AttaquantOrdre.filter(item => item !== MonstreCible[MonstreCibleRandom][0])
              AdversaireHp.forEach(element0 => 
                {
                  if(MonstreHpChoix == element0){AdversaireHp = AdversaireHp.filter(item => item !== element0)}
                });

                if(MonstreCible.length == 0){FieldEmbed = 4;}
            }

          TemporaireTransitionParticipant = AttaquantOrdre[0]
          AttaquantOrdre = AttaquantOrdre.filter(item => item !== AttaquantOrdre[0])
          AttaquantOrdre.push(TemporaireTransitionParticipant)

          TemporaireTransitionHpParticipant = AdversaireHp[0]
          AdversaireHp = AdversaireHp.filter(item => item !== AdversaireHp[0])
          AdversaireHp.push(TemporaireTransitionHpParticipant)

          message.channel.bulkDelete(1);
          verificationAntiDoubleAttaque = 0

          SystemeCombat();

        }, delayInMilliseconds);
      }
    });
  }
}













//SystemeCombat pvp
function SystemeCombatPvp()
{
  const filter = (reaction, user) => ['⚔️', '🍀', '🌀', '🧬', '❤', '📜', '❌', '🪓', '📦', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'].includes(reaction.emoji.name) && user.id === message.author.id;
  let m = 0;
  let TEmoji = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟']
  let TemporaireTransitionParticipant = 0;
  
  var AffichageCombat = new Discord.RichEmbed()
    .setColor('#b8b8b8')
    .setAuthor("Un combat féroce commence !")


  for (let r = 0; r < AttaquantOrdre.length; r++)
  {
    AffichageCombat.addField(AttaquantOrdre[r].Nom, 'Hp : ' + AttaquantOrdre[r].Hp + "/" + AttaquantOrdre[r].HpMax, true);
  }

  if(AttaquantOrdre.length > 1 && FieldEmbed != 3)
  {
    AffichageCombat.addField("C'est à " + AttaquantOrdre[m].Nom + " De faire une action !", "Choisis une acion a effectuer en fonction de ce que tu veux faire.")
    AffichageCombat.addField('Attaque', '⚔️', true)
    AffichageCombat.addField('Skill', '🧬', true)
    AffichageCombat.addField('Magie', '🌀', true)
    AffichageCombat.addField('Potion', '❤', true)
    AffichageCombat.addField('Fuite', '🍀', true)
    AffichageCombat.addField('Romancer le combat', '📜', true)
  }

  if (FieldEmbed == 1)
  {
    AffichageCombat.addField('Vous foncez sur votre adversaire et vous lui infligez', '💢 ' + Degat)
    AffichageCombat.setImage('https://cdn.discordapp.com/attachments/726571315418628133/726571387002814464/the-knight-attack-martin-beckett-art-600x951.jpg')
  } else if (FieldEmbed == 2)
  {

    AffichageCombat.addField(MonstreDescriptionAttaque, '💢 ' + DegatAdversaire)
    AffichageCombat.setImage(MonstreImageAttaque)

  }else if (AttaquantOrdre.length == 1)
  {

    AffichageCombat.setAuthor("Félicitation tu est le dernier debout, preuve de ta force ou de ta chance ...")
    message.channel.send(AffichageCombat)
  }
  
  if (AttaquantOrdre.length > 1)
  {
    message.channel.send(AffichageCombat).then(async message =>
    {

      await message.react('⚔️');
      await message.react('🧬');
      await message.react('🌀');
      await message.react('❤');
      await message.react('🍀');
      await message.react('📜'); 

        let collector = message.createReactionCollector(filter, { /*time: 3600000, errors: ['time']*/ });
        
        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => 
        {
          const reaction = collected.first();
          if (reaction.emoji.name === '⚔️') console.log("test")
        })
        .catch(collected => 
        {
          console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        });
        collector.on('collect', async(reaction, user) =>
        {
          
          if(emoji.name === '⚔️') console.log("test reussite")
          let idArray = []
          //pour chaque array dans le reaction.users on le met dans le tab
          for(const array of Array.from(reaction.users))
          {
            idArray.push(array[0])
            console.log(array)
          }

          //function pour delete la reaction
          function deleteReaction() { idArray.forEach(element => { if(element != client.user.id) reaction.remove(element) }) }

          console.log(reaction.emoji.name)

          idArray.forEach(element => 
          {
            if(element != client.user.id)
            {
              switch (reaction.emoji.name)
              {
                case '⚔️':
                  CombatMelee(m,filter,TEmoji)
                  
                break;
              }
              deleteReaction()
            }
          })          
        });
    });
  }
}


function CombatMelee(m,filter,TEmoji)
{
  let embed = new Discord.RichEmbed()
    .setColor('#b8b8b8')
    .setAuthor("Veuillez choisir votre arme !")

    if(AttaquantOrdre[m].Arme.Slot1.Nom != "")
    {

      embed.addField("⚔️", AttaquantOrdre[m].Arme.Slot1.Nom, true)

      if(AttaquantOrdre[m].Arme.Slot2.Nom != "") embed.addField("🪓", AttaquantOrdre[m].Arme.Slot2.Nom, true)
      else{embed.addField("🪓", "Jte prend à main nue", true)}
      
    }else
    {
      embed.addField("⚔️", "Jte prend à main nue", true)
      embed.addField("🪓", "Jte prend à main nue", true)
    }

  embed.addField("❌", "Revenir en arrière")

  message.channel.send(embed).then(async message =>
  {
    await message.react('⚔️');
    await message.react('🪓');
    await message.react('❌');

    let collector = message.createReactionCollector(filter, { time: 3600000, errors: ['time'] });
    collector.on('collect', (reaction, collector) =>
    {
      switch (reaction.emoji.name)
      {
        case '⚔️':

          //Embed Choix de la cible
          message.delete()
          let embed = new Discord.RichEmbed()
            .setColor('#b8b8b8')
            .setAuthor("Choisis ta cible !")

          //Emoji pour chaque adversaire
          var EmojiAdversaire = []
          for (let r = 0; r < AttaquantOrdre.length; r++)
          {
            embed.addField(AttaquantOrdre[r].Nom, TEmoji[r], true);
            EmojiAdversaire.push(TEmoji[r])
          }


          message.channel.send(embed).then(async message =>
          {

            for (let r = 0; r < AttaquantOrdre.length; r++)
            {
              await message.react(EmojiAdversaire[r])
            }

            let collector = message.createReactionCollector(filter, { time: 3600000, errors: ['time'] });
            collector.on('collect', (reaction, collector) =>
            {
              var v = 0;
              EmojiAdversaire.forEach(element =>
              {
                switch (reaction.emoji.name)
                {
                  case element:

                  console.log("Etape 0 : " + v)
                    //Critique
                    CapCombat = Math.floor(Math.random() * 10) + 1;
                    Protec = Math.floor(Math.random() * 10) + 1;
                    
                    console.log(CapCombat)
                    console.log(Protec)
                    //Verification touche 
                    if (CapCombat >= AttaquantOrdre[0].CapaciteCombat)
                    {
                      if(Protec >= AttaquantOrdre[v].Protection)
                      {
                        Degat = 0
                      }else
                      {
                        if(AttaquantOrdre[0].Arme.Slot1.Nom == "")
                        {
                          Degat = 1
                        }else{Degat = AttaquantOrdre[0].Arme.Slot1.Degat}}  
                    }else{Degat = 0}
                    
                    //Degat
                    AttaquantOrdre[v].Hp = AttaquantOrdre[v].Hp - Degat
                    
                    FieldEmbed = 1

                    //Verification si adversaire est mort
                    if (AttaquantOrdre[v].Hp <= 0)
                    {
                        FieldEmbed = 4;
                        console.log("element 2 " + AttaquantOrdre[v].Nom)
                        //TotalParticipant = TotalParticipant.filter(item => item !== AttaquantOrdre[v])
                        AttaquantOrdre = AttaquantOrdre.filter(item => item !== AttaquantOrdre[v])
                    }

                    TemporaireTransitionParticipant = AttaquantOrdre[0]
                    AttaquantOrdre = AttaquantOrdre.filter(item => item !== AttaquantOrdre[0])
                    AttaquantOrdre.push(TemporaireTransitionParticipant)

                    message.channel.bulkDelete(1);


                    SystemeCombatPvp();

                    break;
                }
                v++;
              });
            });
          });

          break;
          
        case '🪓':

          //Embed Choix de la cible
          message.delete()
          let embed1 = new Discord.RichEmbed()
            .setColor('#b8b8b8')
            .setAuthor("Choisis ta cible !")

          //Emoji pour chaque adversaire
          var EmojiAdversaire = []
          for (let r = 0; r < AttaquantOrdre.length; r++)
          {
            embed1.addField(AttaquantOrdre[r].Nom, TEmoji[r], true);
            EmojiAdversaire.push(TEmoji[r])
          }


          message.channel.send(embed1).then(async message =>
          {

            for (let r = 0; r < AttaquantOrdre.length; r++)
            {
              await message.react(EmojiAdversaire[r])
            }

            let collector = message.createReactionCollector(filter, { time: 3600000, errors: ['time'] });
            collector.on('collect', (reaction, collector) =>
            {
              var v = 0;
              EmojiAdversaire.forEach(element =>
              {
                switch (reaction.emoji.name)
                {
                  case element:

                  console.log("Etape 0 : " + v)
                    //Critique
                    CapCombat = Math.floor(Math.random() * 10) + 1;
                    Protec = Math.floor(Math.random() * 10) + 1;
                    
                    console.log(CapCombat)
                    console.log(Protec)
                    //Verification touche 
                    if (CapCombat >= AttaquantOrdre[0].CapaciteCombat)
                    {
                      if(Protec >= AttaquantOrdre[v].Protection)
                      {
                        Degat = 0
                      }else
                      {
                        if(AttaquantOrdre[0].Arme.Slot1.Nom == "")
                        {
                          Degat = 1
                        }else{Degat = AttaquantOrdre[0].Arme.Slot1.Degat}}  
                    }else{Degat = 0}
                    
                    //Degat
                    AttaquantOrdre[v].Hp = AttaquantOrdre[v].Hp - Degat
                    
                    FieldEmbed = 1

                    //Verification si adversaire est mort
                    if (AttaquantOrdre[v].Hp <= 0)
                    {
                        FieldEmbed = 4;
                        console.log("element 2 " + AttaquantOrdre[v].Nom)
                        //TotalParticipant = TotalParticipant.filter(item => item !== AttaquantOrdre[v])
                        AttaquantOrdre = AttaquantOrdre.filter(item => item !== AttaquantOrdre[v])
                    }

                    TemporaireTransitionParticipant = AttaquantOrdre[0]
                    AttaquantOrdre = AttaquantOrdre.filter(item => item !== AttaquantOrdre[0])
                    AttaquantOrdre.push(TemporaireTransitionParticipant)

                    message.channel.bulkDelete(2);

                    SystemeCombatPvp();

                    break;
                }
                v++;
              });
            });
          });
        break;
          
        case '❌':
          message.delete();
          break;
      }
    });
  });
}