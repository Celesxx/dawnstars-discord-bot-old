function SystemeCombat()
{
  const filter = (reaction,user) => ['⚔️', '🍀', '🌀', '🧬', '❤', '📜', '❌', '🪓', '📦', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'].includes(reaction.emoji.name) && uniquePlayersID.includes(user.id);
  var i = 0;
  var verificationAttaque = false;
  var verificationChoixArme = false;
  var verificationChoixCible = false;
  var textOrdreAttaque = `C'est à ${Participant[i].name} de faire une action !`
  var AffichageCombat = new Discord.RichEmbed()
  .setColor('#b8b8b8')
  .setAuthor("Status des Participants")
  
  Participant.forEach(element => {AffichageCombat.addField(`${element.name}`, `${element.hp}`, true)})
  AffichageCombat.addField(textOrdreAttaque, `Choisis une acion a effectuer en fonction de ce que tu veux faire.`)
  AffichageCombat.addField('Attaque', '⚔️', true)
  AffichageCombat.addField('Skill', '🧬', true)
  AffichageCombat.addField('Magie', '🌀', true)
  AffichageCombat.addField('Potion', '❤', true)
  AffichageCombat.addField('Fuite', '🍀', true)
  AffichageCombat.addField('Romancer le combat', '📜', true)
    
  
  if(Participant[i].name != "Loup sauvage")
  {
    message.channel.send(AffichageCombat).then(async message =>
    {

      await message.react('⚔️');
      // await message.react('🧬');
      // await message.react('🌀');
      // await message.react('❤');
      // await message.react('🍀');
      // await message.react('📜');

      for(let a =0; a < 100; a++)
      {
        const collector = message.awaitReactions(filter, {max : 1, time: 5000000 })
        await collector.then(collected => 
        {
          let reaction = collected.first();
          // function deleteReaction() { idUserWhoReact.forEach(element => { if(element != client.user.id) reaction.remove(element) }) }
          let idUserWhoReact =[]

          for(const array of Array.from(reaction.users)) { idUserWhoReact.push(array[0]) }

          if(idUserWhoReact[idUserWhoReact.length -1] == Participant[i].userId && verificationAttaque == false)
          {
            switch(reaction.emoji.name)
            {
              case '⚔️':
                verificationAttaque = true;
                let armeEmbed = new Discord.RichEmbed()
                .setColor('#b8b8b8')
                .setAuthor("Veuillez choisir votre arme !")
                let EmojisBattleTemp = ["🪓","⚔️"]
                TotalAdversaire.forEach(Adversaire => 
                  {
                    if(Adversaire.Nom == Participant[i].name)
                    {
                      if(Adversaire.Arme.Slot1.Nom != "") armeEmbed.addField(EmojisBattleTemp[1], Adversaire.Arme.Slot1.Nom, true)
                      else armeEmbed.addField(EmojisBattleTemp[1],"Utiliser ses poingts", true)
                      if(Adversaire.Arme.Slot2.Nom != "") armeEmbed.addField(EmojisBattleTemp[0] , Adversaire.Arme.Slot2.Nom, true)
                      else armeEmbed.addField(EmojisBattleTemp[0],"Combattre avec les poings", true)
                      armeEmbed.addField("❌", "Revenir en arrière")
                    }
                  })
                message.channel.send(armeEmbed).then(async message =>
                {
                  await message.react('⚔️');
                  // await message.react('🪓');
                  // await message.react('❌');

                  for(let a =0; a < 100; a++)
                  {
                    const collector = message.awaitReactions(filter, {max : 1, time: 5000000 })
                    await collector.then(collected => 
                    {
                      let reaction = collected.first();
                      let idUserWhoReact =[]
                      for(const array of Array.from(reaction.users)) { idUserWhoReact.push(array[0]) }

                      if(idUserWhoReact[idUserWhoReact.length -1] == Participant[i].userId && verificationChoixArme == false)
                      {
                        switch(reaction.emoji.name)
                        {
                          case '⚔️' : 
                            verificationChoixArme = true;
                            // message.delete()

                            let cibleEmbed = new Discord.RichEmbed()
                            .setColor('#b8b8b8')
                            .setAuthor("Choisis ta cible !")

                            for(let b = 0 ; b < TotalAdversaire.length ; b++) 
                            {
                              cibleEmbed.addField(Participant[b].Emoji, Participant[b].name, true)
                            }
                            cibleEmbed.addField("❌", "Revenir en arrière")
                          
                            message.channel.send(cibleEmbed).then(async message => 
                            {
                              for (let r = 0; r < TotalAdversaire.length; r++) await message.react(Participant[r].Emoji)
                              await message.react('❌');

                              for(let a =0; a < 100; a++)
                              {
                                const collector = message.awaitReactions(filter, {max : 1, time: 5000000 })
                                await collector.then(collected => 
                                {
                                  let reaction = collected.first();
                                  let idUserWhoReact =[]

                                  for(const array of Array.from(reaction.users)) { idUserWhoReact.push(array[0]) }
                                  if(idUserWhoReact[idUserWhoReact.length -1] == Participant[i].userId && verificationChoixCible == false)
                                  {
                                    Participant.forEach(element =>
                                    {
                                      switch(reaction.emoji.name)
                                      {
                                        case element.Emoji :
                                          let Degat = 0;
                                          if(Participant[i].fullUserId.Arme.Slot1.Nom != "") 
                                          {
                                            if(roll <= Participant[i].fullUserId.Arme.Slot1.Critique) Degat = Participant[i].fullUserId.Arme.Slot1.Degat + Participant[i].fullUserId.Arme.Slot1.DegatCritique
                                            else Degat = Participant[i].fullUserId.Arme.Slot1.Degat 

                                            if(element.fullUserId.Armure != undefined) Degat =(Degat  - (Degat * ((element.fullUserId.ResistancePhysique + element.fullUserId.Armure.Protection) -2 ))) * Participant[i].fullUserId.Arme.Slot1.Pénétration
                                            else Degat =(Degat - (Degat * (element.fullUserId.ResistancePhysique -1))) * Participant[i].fullUserId.Arme.Slot1.Pénétration
                                            Degat = Math.ceil(Degat)
                                            element.hp -=  Degat
                                            element.fullUserId.Hp -= Degat
                                            Savebdd()
                                            
                                            let embedAttaque = new Discord.RichEmbed()
                                            .setColor('#b8b8b8')
                                            .setAuthor(`vous infligez ${Degat} dégat à ${element.name}`)
                                            .setImage("https://cdn.discordapp.com/attachments/726571315418628133/810578219262410822/Coup_depee.gif")
                                            message.channel.send(embedAttaque).then(setTimeout(() => {message.channel.bulkDelete(1)}, 5000))
                                            for(const array of Array.from(AffichageCombat.fields)) 
                                            {
                                              if(array.name == element.name) array.value = element.hp
                                              if(array.name == textOrdreAttaque) array.name = `C'est à ${Participant[i].name} de faire une action !`
                                            }
                                          }
                                          break                                           
                                        }
                                      })
                                    }
                                    else if(verificationChoixCible == true) message.channel.send("Alors on essaye de gruger le système et d'attaquer deux fois ? Dommage pour toi j'ai prévu le coup !").then(setTimeout(() => {message.channel.bulkDelete(1)}, 5000))
                                    else message.channel.send(`Ce n'est pas à toi de combattre, c'est à ${Participant[i].name} de jouer`).then(setTimeout(() => {message.channel.bulkDelete(1)}, 5000))
                                    i++
                                    for(const array of Array.from(AffichageCombat.fields)) if(array.name == textOrdreAttaque) array.name = `C'est à ${Participant[i].name} de faire une action !`
                                    reaction.remove(reaction.users.last())
                                  })
                                }
                              })
                              break
                            }
                          }
                          else if(verificationChoixArme == true) message.channel.send("Alors on essaye de gruger le système et d'attaquer deux fois ? Dommage pour toi j'ai prévu le coup !").then(setTimeout(() => {message.channel.bulkDelete(1)}, 5000))
                          else message.channel.send(`Ce n'est pas à toi de combattre, c'est à ${Participant[i].name} de jouer`).then(setTimeout(() => {message.channel.bulkDelete(1)}, 5000))
                          reaction.remove(reaction.users.last())
                        })
                      }
                    })
                    break
                  }
                }
                else if(verificationAttaque == true) message.channel.send("Alors on essaye de gruger le système et d'attaquer deux fois ? Dommage pour toi j'ai prévu le coup !").then(setTimeout(() => {message.channel.bulkDelete(1)}, 5000))
                else message.channel.send(`Ce n'est pas à toi de combattre, c'est à ${Participant[i].name} de jouer`).then(setTimeout(() => {message.channel.bulkDelete(1)}, 5000))
                message.edit(AffichageCombat)
                reaction.remove(reaction.users.last())
              })
        .catch(console.error)
      }
    })
  }else if(Participant[i].name != "Loup sauvage") 
  {
    rollCritique = Math.floor(Math.random() * (100 - 0 + 1)  + 0);
    let Degat = 0;
    do cible = Math.floor(Math.random()*Participant.length)
    while(Participant[cible].name == "Loup sauvage")

    console.log(Participant[cible].name)
    if(rollCritique <= Participant[i].Critique) Degat = Participant[i].Degat + Participant[i].DegatCritique
    else Degat = Participant[i].Degat 

    console.log(`Degat = ${Degat}`)
    
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