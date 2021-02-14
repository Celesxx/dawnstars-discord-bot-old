if(message.content.startsWith("?+bdd PersonnageCreation"))
{
    if(message.content.length > 25)
    {
        let erreurDeRace = ""
        Race= message.content.slice(48)
        PersonnageId = message.content.slice(25,47)
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
    }
}

if(message.content.startsWith("?+bdd Name"))
{
    PersonnageName = message.content.slice(11,33)
    Name = message.content.slice(34)
    PersonnageId = bdd[PersonnageName]
    PersonnageId.Nom = Name
    Savebdd()
}

if(message.content.startsWith("?+bdd ProfilImage"))
{
    PersonnageName = message.content.slice(18,40)
    ProfilImage = message.content.slice(41)
    PersonnageId = bdd[PersonnageName]
    PersonnageId.imageProfil = ProfilImage
    Savebdd()
}

if(message.content.startsWith("?+bdd Description"))
{
    PersonnageName = message.content.slice(18,40)
    DescriptionProfil = message.content.slice(41)
    PersonnageId = bdd[PersonnageName]
    PersonnageId.Description = DescriptionProfil
    Savebdd()
}

if(message.content.startsWith("?+bdd Classe"))
{
    PersonnageName = message.content.slice(13,35)
    PersonnageClasse = message.content.slice(36)
    if(bddClasse[PersonnageClasse] != undefined) 
    {
        bdd[PersonnageName].Classe = bddClasse[PersonnageClasse]
        message.channel.send(`Vous avez choisie la classe ${bdd[PersonnageName].Classe.Nom}`)
        Savebdd();
    }
    else message.channel.send("La classe choisie n'est pas valide, attention au espace et au majuscule !")
}

if(message.content.startsWith("?+bdd AjoutArme"))
{
    if(message.content.length > 15)
    {
        PersonnageName = message.content.slice(16,38);
        PersonnageId = bdd[PersonnageName]
        Weapon = message.content.slice(39);
        console.log(Weapon)

        PersonnageId.Arme.Slot1 = bddArme[1]
        Savebdd();

    }
}

if(message.content.startsWith("?AchatArme"))
{
    if(message.content.length > 11)
    {
        PersonnageName = message.content.slice(11,33);
        PersonnageId = bdd[PersonnageName]
        Weapon = message.content.slice(34);

        if(PersonnageId.Arme.Slot1.Nom == "")
        {
            PersonnageId.Arme.Slot1 = bddArme[Weapon]
            message.channel.send("Vous rangez votre arme dans le slot 1")
        }else if(PersonnageId.Arme.Slot2.Nom == "")
        {
            PersonnageId.Arme.Slot2 = bddArme[Weapon]
            message.channel.send("Vous rangez votre arme dans le slot 2")
        }else (message.channel.send("Votre inventaire d'arme est remplis !"));

        Savebdd()
    }
}

if(message.content.startsWith("?+bdd AddSkill"))
{
    PersonnageName = message.content.slice(15,37)
    AddSkill = message.content.slice(38)
    PersonnageId = bdd[PersonnageName]
    if(PersonnageId.Skill.DoubleTranche == null)
    {
        DoubleTranche()
    }else message.channel.send("Vous avez déja acquis ce skill !")
    Savebdd() 
}


if(message.content.startsWith("?PersonnageStat"))
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
            .addField("♥️ Hp :", PersonnageId.Hp + "/" + PersonnageId.HpMax, true)
            .addField("💙 Mana :", PersonnageId.Mana + "/" + PersonnageId.ManaMax,true)
            .addField("🛡️ Resistance Physique :", PersonnageId.ResistancePhysique,true)
            .addField("🔰 Resistance magique :", PersonnageId.ResistanceMagique,true)
            .addField("🪓 Arme slot 1 :", PersonnageId.Arme.Slot1.Nom,true)
            .addField("🪓 Arme slot 2 :", PersonnageId.Arme.Slot2.Nom,true)
            .addField("⚜️ Armure", PersonnageId.Armure.Nom ,true)
            .setImage(PersonnageId.imageProfil)
        message.channel.send(InfoPersonnage)
    }
}