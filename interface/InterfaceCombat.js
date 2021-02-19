function SystemeCombat()
{
  const filter = (reaction,user) => ['⚔️', '🍀', '🌀', '🧬', '❤', '📜', '❌', '🪓', '📦', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'].includes(reaction.emoji.name) && uniquePlayersID.includes(user.id);
  let i = 0;
  let tour = 0;
  let AffichageCombatId = "";
  let verificationAttaque = false;
  let verificationChoixArme = false;
  let verificationChoixCible = false;
  
  let textOrdreAttaque = `C'est à ${Participant[i].name} de faire une action !`
  let AffichageCombat = new Discord.RichEmbed()
  .setColor('#b8b8b8')
  .setDescription(monstre.Description)
  
  Participant.forEach(element => {AffichageCombat.addField(`${element.name}`, `${element.hp}`, true)})
  AffichageCombat.addField(textOrdreAttaque, `Choisis une acion a effectuer en fonction de ce que tu veux faire.`)
  AffichageCombat.addField('Attaque', '⚔️', true)
  AffichageCombat.addField('Skill', '🧬', true)
  AffichageCombat.addField('Magie', '🌀', true)
  AffichageCombat.addField('Potion', '❤', true)
  AffichageCombat.addField('Fuite', '🍀', true)
  AffichageCombat.addField('Romancer le combat', '📜', true)
  
  message.channel.send(AffichageCombat).then(async message =>
  {
    AffichageCombatId = message.id
    function editMessageEmbed()
    {
      message.channel.fetchMessages({around: AffichageCombatId, limit: 1})
      .then(msg => {
          const fetchedMsg = msg.first();
          fetchedMsg.edit(AffichageCombat);
      });
    }
    
    await message.react('⚔️');
    // await message.react('🧬');
    // await message.react('🌀');
      // await message.react('❤');
      // await message.react('🍀');
      // await message.react('📜');
    
    for(var tour1 =0; tour1 < 100; tour1++)
    {
      const collector = message.awaitReactions(filter, {max : 1, time: 5000000 })
      await collector.then(collected => 
      {
        if(i >= Participant.length) i = 0;
        let reaction = collected.first();
        console.log(`i = ${i}`)
        if(Participant[i].name != monstre.Nom)
        {

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
                  if(Adversaire.Nom == Participant[i].name && tour < 1)
                  {
                    armeEmbed.addField(EmojisBattleTemp[1], Adversaire.Arme.Slot1.Nom, true)
                    armeEmbed.addField(EmojisBattleTemp[0] , Adversaire.Arme.Slot2.Nom, true)
                    armeEmbed.addField("❌", "Revenir en arrière")
                  }
                  else if(Adversaire.Nom == Participant[i].name && tour >= 1)
                  {
                    console.log("################# ArmeEmbed #########################")
                    console.log(armeEmbed.fields)
                    for(const array of Array.from(armeEmbed.fields)) 
                    {
                      if(array.name == EmojisBattleTemp[1]) array.value = Adversaire.Arme.Slot1.Nom
                      if(array.name == EmojisBattleTemp[0]) array.value = Adversaire.Arme.Slot2.Nom
                    }
                  }
                  editMessageEmbed()
                })
                if(tour < 1)message.channel.send(armeEmbed)
                .then(async message =>
                {
                  await message.react('⚔️');
                  // await message.react('🪓');
                  // await message.react('❌');

                  for(var tour2 =0; tour2 < 100; tour2++)
                  {
                    const collector = message.awaitReactions(filter, {max : 1, time: 5000000 })
                    await collector.then(collected => 
                    {
                      let reaction = collected.first();
                      let idUserWhoReact =[]
                      for(const array of Array.from(reaction.users)) { idUserWhoReact.push(array[0]) }
                      console.log(`i = ${i}`)
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
                          
                            i
                            if(tour < 1) message.channel.send(cibleEmbed)
                            .then(async message => 
                            {
                              for (let r = 0; r < TotalAdversaire.length; r++) await message.react(Participant[r].Emoji)
                              await message.react('❌');

                              for(var tour3 =0; tour3 < 100; tour3++)
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
                                            Degat = Math.floor(Math.random() * (Participant[i].fullUserId.Classe.DegatMax - Participant[i].fullUserId.Classe.DegatMin + 1)  + Participant[i].fullUserId.Classe.DegatMin);
                                            console.log(`Degat classe : ${Degat}`)
                                            console.log(`Degat Arme : ${Participant[i].fullUserId.Arme.Slot1.Degat / 100 }`)
                                            console.log(`Degat Critique : ${(Participant[i].fullUserId.Arme.Slot1.Degat + Participant[i].fullUserId.Arme.Slot1.DegatCritique)/100}`)
                                            if(roll <= Participant[i].fullUserId.Arme.Slot1.Critique + Participant[i].fullUserId.Classe.CritiqueBonus) Degat += Degat * ((Participant[i].fullUserId.Arme.Slot1.Degat + Participant[i].fullUserId.Arme.Slot1.DegatCritique)/100)
                                            else Degat += (Degat * (Participant[i].fullUserId.Arme.Slot1.Degat /100 ))
                                            console.log(Degat)

                                            if(element.fullUserId.userId.startsWith("<@") == false)
                                            {
                                              Degat -= Degat * (element.fullUserId.ResistancePhysique / 100) 
                                            }
                                            else if(element.fullUserId.Armure.Protection != undefined)
                                            {
                                              console.log("rentre dans la boucle")
                                              Degat -= Degat * ((element.fullUserId.Armure.Protection + element.fullUserId.Classe.ResistancePhysiqueBonus + element.fullUserId.ResistancePhysique - Participant[i].fullUserId.Arme.Slot1.Pénétration) / 100)
                                            }  
                                            else 
                                            {
                                              console.log("rentre dans l'autre boucle")
                                              Degat -= Degat * ((element.fullUserId.Classe.ResistancePhysiqueBonus + element.fullUserId.ResistancePhysique - Participant[i].fullUserId.Arme.Slot1.Pénétration) / 100)
                                            }
                                            Degat = Math.ceil(Degat)
                                            console.log(Degat)
                                          }else if(Participant[i].fullUserId.Arme.Slot2.Nom != "")
                                          {
                                              console.log("lol")
                                          }
                                          element.hp -=  Degat
                                          // element.fullUserId.Hp -= Degat
                                          // Savebdd()
                                          
                                          let embedAttaque = new Discord.RichEmbed()
                                          .setColor('#b8b8b8')
                                          .setAuthor(`vous infligez ${Degat} dégat à ${element.name}`)
                                          .setImage("https://cdn.discordapp.com/attachments/726571315418628133/810578219262410822/Coup_depee.gif")
                                          message.channel.send(embedAttaque).then(setTimeout(() => {message.channel.bulkDelete(1)}, 3000))
                                          i++
                                          for(const array of Array.from(AffichageCombat.fields)) 
                                          {
                                            if(array.name == element.name) array.value = element.hp
                                            if(array.name == textOrdreAttaque) array.name = `C'est à ${Participant[i].name} de faire une action !`
                                          }
                                          verificationAttaque = false;
                                          verificationChoixArme = false;
                                          verificationChoixCible = false;
                                          tour = 1;
                                          editMessageEmbed();
                                          // BattleStart();
                                        break
                                      }
                                    })
                                  }
                                  else if(verificationChoixCible == true) message.channel.send("Alors on essaye de gruger le système et d'attaquer deux fois ? Dommage pour toi j'ai prévu le coup !").then(setTimeout(() => {message.channel.bulkDelete(1)}, 5000))
                                  else message.channel.send(`Ce n'est pas à toi de combattre, c'est à ${Participant[i].name} de jouer`).then(setTimeout(() => {message.channel.bulkDelete(1)}, 5000))
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
          reaction.remove(reaction.users.last())
        }else if(Participant[i].name == "Loup sauvage") 
        {
          // setTimeout(() => 
          // {
            console.log("ici reaction test monstre")
            console.log(reaction)
            console.log(reaction.user)
            rollCritique = Math.floor(Math.random() * (100 - 0 + 1)  + 0);
            let Degat = 0;
            do cible = Math.floor(Math.random()*Participant.length)
            while(Participant[cible].name == "Loup sauvage")
    
            console.log(Participant[cible].name)
            if(rollCritique <= Participant[i].fullUserId.Critique) Degat += Participant[i].fullUserId.Degat + Participant[i].fullUserId.DegatCritique
            else Degat += Participant[i].fullUserId.Degat 
    
            console.log(`Degat = ${Degat}`)
    
            if(Participant[cible].fullUserId.Armure != undefined) Degat -= Degat * ((Participant[cible].fullUserId.ResistancePhysique + Participant[cible].fullUserId.Classe.ResistancePhysiqueBonus - Participant[i].fullUserId.Pénétration) / 100)
            else Degat -= Degat * ((Participant[cible].fullUserId.ResistancePhysique + Participant[cible].fullUserId.Armure.Protection + Participant[cible].fullUserId.Classe.ResistancePhysiqueBonus - Participant[i].fullUserId.Pénétration) / 100)
            
            Degat = Math.ceil(Degat)
            Participant[cible].hp -= Degat
            console.log(`Degat = ${Degat}`)
            
            console.log("test")
            let embedMonstre = new Discord.RichEmbed()
            .setColor('#b8b8b8')
            .setAuthor(`Le loup Sauvage attaque et inflige ${Degat} dégat à ${Participant[cible].name}`)
            .setImage("https://cdn.discordapp.com/attachments/726571315418628133/810857116347662386/7a85e2784c5843c14e3734494f233cb5.png")
            console.log("test1")
            message.channel.send(embedMonstre).then(setTimeout(() => {message.channel.bulkDelete(1)}, 3000))
            i++;
            for(const array of Array.from(AffichageCombat.fields)) 
            {
              if(array.name == Participant[cible].name) 
              {
                array.value = Participant[cible].hp
                
              }
              if(array.name == `C'est à ${Participant[i-1].name} de faire une action !`)
              {
                array.name = `C'est à ${Participant[i-1].name} de faire une action !`
                console.log("test array name bidule")
              }
            }
            reaction.remove(reaction.users.last())
            editMessageEmbed()
            // BattleStart();
          // }, 5000)
          console.log("test3")
        }
      }).catch(console.error)
    }
  })
}