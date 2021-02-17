if(message.content.startsWith("?+bdd PersonnageCreation"))
{
    try
    {
        if(message.content.length > 25)
        {
            let erreurDeRace = ""
            let Race= message.content.slice(48)
            let PersonnageId = message.content.slice(25,47)

            if(Race == "Humain") {CreationStatPersonnageHumain()}
            else if(Race == "Elfe") {CreationStatPersonnageElfes()}
            else if(Race == "Nain"){CreationStatPersonnageNain()}
            else if(Race == "Beastman"){CreationStatPersonnageBeastman()}
            else if(Race == "Démon"){CreationStatPersonnageDemon()}
            else if(Race == "Vampire"){CreationStatPersonnageVampire()}
            else erreurDeRace = Race

            if(erreurDeRace != "") message.channel.send(`La race choisie n'existe pas, attention au majuscule !`)
            else
            {
                bdd[PersonnageId]  =
                {
                    userId : PersonnageId,
                    Nom : "Nan",
                    imageProfil : "Nan",
                    Description : "Nan",
                    Race : Race,
                    Classe : {},
                    Hp: Hp,
                    HpMax: Hp,
                    Mana: Mana,
                    ManaMax:Mana,
                    Vitesse:Vitesse,
                    ResistancePhysique: ResistancePhysique,
                    ResistanceMagique : ResistanceMagique,
                    Chance: Chance,
                    Arme :
                    {
                        Slot1 :{},
                        Slot2 :{}
                    },
                    Armure:{},
                    Skill:{},
                    Magie:{},
                    Inventaire:{}
                }
                Savebdd()
            }
            if(Race == "Beastman") 
            {
                bdd[PersonnageId].Classe = bddClasse["Beastman"]
                bdd[PersonnageId].Arme.Slot1 = bddArme["PetiteGriffe"]
                bdd[PersonnageId].Arme.Slot2 = bddArme["PetitCroc"]
                Savebdd()
                message.channel.send(`votre personnage a bien été créé avec la classe ${bdd[PersonnageId].Race} avec la classe ${bdd[PersonnageId].Classe.Nom}, avec comme arme ${bdd[PersonnageId].Arme.Slot1.Nom} et ${bdd[PersonnageId].Arme.Slot2.Nom} !`)
            }else message.channel.send(`votre personnage a bien été créé avec la classe ${bdd[PersonnageId].Race} !`)
        
        }
    } catch(error)
    {
        message.channel.send("La commande n'a pas marché, merci de refaire la commande : '?+bdd PersonnageCreation @VotreUserName LaRace' !")
        bddLog[logCount].MessageErreur = `Une erreur est survenue lors de l'enregistrement de la création de Personnage`
        bddLog[logCount].Erreur = JSON.stringify(error, Object.getOwnPropertyNames(error))
        SavebddLog()
    }
}

if(message.content.startsWith("?+bdd Name"))
{
    try 
    {
        PersonnageName = message.content.slice(11,33)
        Name = message.content.slice(34)
        PersonnageId = bdd[PersonnageName]
        PersonnageId.Nom = Name
        console.log(message.author.username)
        Savebdd()
        message.channel.send(`${PersonnageId.Nom}, ton nom a bien été rajouté !`)
    }catch(error) 
    {
        message.channel.send("La commande n'a pas marché, merci de refaire la commande : '?+bdd Name @VotreUserName Nom' !")
        bddLog[logCount].MessageErreur = `Une erreur est survenue lors de l'enregistrement du nom`
        bddLog[logCount].Erreur = JSON.stringify(error, Object.getOwnPropertyNames(error))
        SavebddLog()
    }
}

if(message.content.startsWith("?+bdd ProfilImage"))
{
    try
    {
        PersonnageName = message.content.slice(18,40)
        ProfilImage = message.content.slice(41)
        PersonnageId = bdd[PersonnageName]
        PersonnageId.imageProfil = ProfilImage
        Savebdd()
        message.channel.send("l'image a bien été rajouté !")
    } catch(error)
    {
        message.channel.send("La commande n'a pas marché, merci de refaire la commande : '?+bdd ProfilImage @VotreUserName urlImage' !")
        bddLog[logCount].MessageErreur = `Une erreur est survenue lors de l'enregistrement de l'image`
        bddLog[logCount].Erreur = JSON.stringify(error, Object.getOwnPropertyNames(error))
        SavebddLog()
    }
}

if(message.content.startsWith("?+bdd Description"))
{
    try
    {
        PersonnageName = message.content.slice(18,40)
        DescriptionProfil = message.content.slice(41)
        PersonnageId = bdd[PersonnageName]
        PersonnageId.Description = DescriptionProfil
        Savebdd()
        message.channel.send("la description a bien été rajouté !")
    } catch(error)
    {
        message.channel.send("La commande n'a pas marché, merci de refaire la commande : '?+bdd Description @VotreUserName TaDescription' !")
        bddLog[logCount].MessageErreur = `Une erreur est survenue lors de l'enregistrement de la description`
        bddLog[logCount].Erreur = JSON.stringify(error, Object.getOwnPropertyNames(error))
        SavebddLog()
    }
}

if(message.content.startsWith("?+bdd Classe"))
{
    try
    {
        PersonnageName = message.content.slice(13,35)
        PersonnageClasse = message.content.slice(36)
        if(bddClasse[PersonnageClasse] != undefined) 
        {
            bdd[PersonnageName].Classe = bddClasse[PersonnageClasse]
            message.channel.send(`La classe ${bdd[PersonnageName].Classe.Nom} a bien été rajouté !`)
            Savebdd();
        }
        else message.channel.send("La classe choisie n'est pas valide, attention au espace et au majuscule !")
    }catch(error)
    {
        message.channel.send("La commande n'a pas marché, merci de refaire la commande : '?+bdd Classe @VotreUserName LaClasse' !")
        bddLog[logCount].MessageErreur = `Une erreur est survenue lors de l'enregistrement de l'image`
        bddLog[logCount].Erreur = JSON.stringify(error, Object.getOwnPropertyNames(error))
        SavebddLog()
    }
}

if(message.content.startsWith("?+bdd StarterPack"))
{
    try
    {
        if(message.content.length > 17)
        {
            Personnage = bdd[message.content.slice(18,40)]
            console.log(bddArme["Poing"])
            if(Personnage.Classe.Nom == "Guerrier" || Personnage.Classe.Nom == "PetitDemon")
            {
                Personnage.Arme.Slot1 = bddArme["EpeeFer"]
                Personnage.Arme.Slot2 = bddArme["Poing"]
                Personnage.Armure = bddArmure["ArmureCuir"]
                message.channel.send(`Vous avez reçus en starter : ${Personnage.Arme.Slot1.Nom}, ${Personnage.Armure.Nom}`)
            }
            else if(Personnage.Classe.Nom == "Voleur")
            {
                Personnage.Arme.Slot1 = bddArme["PetiteDagueFer"]
                Personnage.Arme.Slot2 = bddArme["Poing"]
                Personnage.Armure = bddArmure["ArmureCuir"]
                message.channel.send(`Vous avez reçus en starter : ${Personnage.Arme.Slot1.Nom}, ${Personnage.Armure.Nom}`)
            }
            else if(Personnage.Classe.Nom == "Mage")
            {
                Personnage.Arme.Slot1 = bddArme["PetitBatonMagique"]
                Personnage.Arme.Slot2 = bddArme["Poing"]
                Personnage.Armure = bddArmure["ArmureCuir"]
                message.channel.send(`Vous avez reçus en starter : ${Personnage.Arme.Slot1.Nom}, ${Personnage.Armure.Nom}`)
            }else message.channel.send(`Vous êtes un ${Personnage.Classe.Nom} vous avez pas besoin de starter pack !`)
            Savebdd();
        }
    }catch(error)
    {
        message.channel.send("La commande n'a pas marché, merci de refaire la commande : '?+bdd StarterPack @VotreUserName' !")
        bddLog[logCount].MessageErreur = `Une erreur est survenue lors de la commande starterPack`
        bddLog[logCount].Erreur = JSON.stringify(error, Object.getOwnPropertyNames(error))
        SavebddLog()
    }
}


if(message.content.startsWith("?PersonnageStat"))
{
    try
    {
        if(message.content.length > 16 )
        {
            PersonnageName = message.content.slice(16)
            //message.channel.send(bdd[PersonnageName])
            let PersonnageId = bdd[PersonnageName];

            if(PersonnageId.Nom == "Nan") message.channel.send("Erreur, vous avez oublié de renseigner votre nom. (?+bdd Name @User Nom)")
            if(PersonnageId.imageProfil == "Nan") message.channel.send("Erreur, vous avez oublié de remplir l'image de profil. (?+bdd ProfilImage @User URL)")
            if(PersonnageId.Description == "Nan") message.channel.send("Erreur, vous avez oublié de remplir la description. (?+bdd Description @User Description)")

            let InfoPersonnage = new Discord.RichEmbed()
                .setColor("#bf0000")
                .setAuthor(PersonnageId.Nom)
                .setDescription(PersonnageId.Description)
                .addField("🧬 Race :",`${PersonnageId.Race}`,true)
                .addField("📔 Classe : ",`${PersonnageId.Classe.Nom}`,true)
                .addField("♥️ Hp :", `${PersonnageId.Hp} / ${PersonnageId.HpMax}`, true)
                .addField("💙 Mana :", `${PersonnageId.Mana} / ${PersonnageId.ManaMax}`,true)
                .addField("⌛ Vitesse :", `${PersonnageId.Vitesse}`,true)
                .addField("🛡️ Resistance Physique :", PersonnageId.ResistancePhysique,true)
                .addField("🔰 Resistance magique :", PersonnageId.ResistanceMagique,true)
                .addField("⚔️ Arme slot 1 :", PersonnageId.Arme.Slot1.Nom,true)
                .addField("🪓 Arme slot 2 :", PersonnageId.Arme.Slot2.Nom,true)
                .addField("⚜️ Armure", PersonnageId.Armure.Nom ,true)
                .setImage(PersonnageId.imageProfil)
            message.channel.send(InfoPersonnage)
        }
    }catch(error)
    {
        message.channel.send("La commande n'a pas marché, merci de refaire la commande : '?PersonnageStat @VotreUserName' !")
        bddLog[logCount].MessageErreur = `Une erreur est survenue lors de la commande PersonnageStat`
        bddLog[logCount].Erreur = JSON.stringify(error, Object.getOwnPropertyNames(error))
        SavebddLog()
    }
}