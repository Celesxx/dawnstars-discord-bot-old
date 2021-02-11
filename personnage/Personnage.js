const { Message } = require("discord.js")
const { Console } = require("console")

function CreationStatPersonnageHumain()
    {
        if(roll >= 0 && roll <= 20){Hp = 4}
        else if(roll >= 21 && roll <= 85){Hp = 5}
        else if(roll >= 85 && roll <= 100){Hp = 6}

        if(roll1 >= 0 && roll1 <= 14){Mana = 3}
        else if(roll1 >= 15 && roll1 <= 79){Mana = 4}
        else if(roll1 >= 80 && roll1 <= 100){Mana = 5}

        if(roll2 >= 0 && roll2 <= 49){CapaciteCombat = 9}
        else if(roll2 >= 50 && roll2 <= 94){CapaciteCombat = 8}
        else if(roll2 >= 95 && roll2 <= 100){CapaciteCombat = 7}
        
        if(roll3 >= 0 && roll3 <= 49){CapaciteTir = 9}
        else if(roll3 >= 50 && roll3 <= 94){CapaciteTir = 8}
        else if(roll3 >= 95 && roll3 <= 100){CapaciteTir = 7}

        if(roll4 >= 0 && roll4 <= 49){Protection = 9}
        else if(roll4 >= 50 && roll4 <= 100){Protection = 8}

        if(roll5 >= 0 && roll5 <= 49){ProtectionMagique = 9}
        else if(roll5 >= 50 && roll5 <= 100){ProtectionMagique = 8}

        if(roll6 >= 0 && roll6 <= 9){Vitesse = 3}
        else if(roll6 >= 10 && roll6 <= 94){Vitesse = 4}
        else if(roll6 >= 95 && roll6 <= 100){Vitesse = 5}
    }

    function CreationStatPersonnageElfes()
    {
        if(roll >= 0 && roll <= 4){Hp = 3}
        else if(roll >= 5 && roll <= 29){Hp = 4}
        else if(roll >= 30 && roll <= 100){Hp = 5}

        if(roll1 >= 0 && roll1 <= 19){Mana = 4}
        else if(roll1 >= 20 && roll1 <= 59){Mana = 5}
        else if(roll1 >= 60 && roll1 <= 100){Mana = 6}

        if(roll2 >= 0 && roll2 <= 49){CapaciteCombat = 9}
        else if(roll2 >= 50 && roll2 <= 94){CapaciteCombat = 8}
        
        if(roll3 >= 0 && roll3 <= 59){CapaciteTir = 8}
        else if(roll3 >= 60 && roll3 <= 94){CapaciteTir = 7}
        else if(roll3 >= 95 && roll3 <= 100){CapaciteTir = 6}

        if(roll4 >= 0 && roll4 <= 59){Protection = 9}
        else if(roll4 >= 60 && roll4 <= 100){Protection = 8}

        if(roll5 >= 0 && roll5 <= 49){ProtectionMagique = 9}
        else if(roll5 >= 50 && roll5 <= 100){ProtectionMagique = 8}

        if(roll6 >= 0 && roll6 <= 69){Vitesse = 3}
        else if(roll6 >= 70 && roll6 <= 94){Vitesse = 4}
    }

    function CreationStatPersonnageNain()
    {
        if(roll >= 0 && roll <= 49){Hp = 5}
        else if(roll >= 50 && roll <= 94){Hp = 6}
        else if(roll >= 95 && roll <= 100){Hp = 7}

        if(roll1 >= 0 && roll1 <= 29){Mana = 2}
        else if(roll1 >= 30 && roll1 <= 89){Mana = 3}
        else if(roll1 >= 90 && roll1 <= 100){Mana = 4}

        if(roll2 >= 0 && roll2 <= 39){CapaciteCombat = 9}
        else if(roll2 >= 40 && roll2 <= 94){CapaciteCombat = 8}
        else if(roll2 >= 95 && roll2 <= 100){CapaciteCombat = 7}
        
        if(roll3 >= 0 && roll3 <= 69){CapaciteTir = 9}
        else if(roll3 >= 70 && roll3 <= 94){CapaciteTir = 8}
        else if(roll3 >= 95 && roll3 <= 100){CapaciteTir = 7}

        if(roll4 >= 0 && roll4 <= 59){Protection = 9}
        else if(roll4 >= 60 && roll4 <= 100){Protection = 8}

        if(roll5 >= 0 && roll5 <= 59){ProtectionMagique = 9}
        else if(roll5 >= 60 && roll5 <= 100){ProtectionMagique = 8}

        if(roll6 >= 0 && roll6 <= 29){Vitesse = 2}
        else if(roll6 >= 30 && roll6 <= 94){Vitesse = 3}
    }

    function CreationStatPersonnageBeastman()
    {
        if(roll >= 0 && roll <= 59){Hp = 6}
        else if(roll >= 60 && roll <= 94){Hp = 7}
        else if(roll >= 95 && roll <= 100){Hp = 8}

        if(roll1 >= 0 && roll1 <= 29){Mana = 1}
        else if(roll1 >= 30 && roll1 <= 89){Mana = 2}
        else if(roll1 >= 90 && roll1 <= 100){Mana = 3}

        if(roll2 >= 0 && roll2 <= 97){CapaciteCombat = 7}
        else if(roll2 >= 99 && roll2 <= 100){CapaciteCombat = 6}
        
        if(roll3 >= 0 && roll3 <= 69){CapaciteTir = 9}
        else if(roll3 >= 70 && roll3 <= 100){CapaciteTir = 8}

        if(roll4 >= 0 && roll4 <= 34){Protection = 9}
        else if(roll4 >= 35 && roll4 <= 94){Protection = 8}
        else if(roll4 >= 95 && roll4 <= 100){Protection = 7}

        if(roll5 >= 0 && roll5 <= 100){ProtectionMagique = 9}

        if(roll6 >= 0 && roll6 <= 9){Vitesse = 3}
        else if(roll6 >= 10 && roll6 <= 94){Vitesse = 4}
        else if(roll6 >= 95 && roll6 <= 100){Vitesse = 5}

        
    }

    function CreationStatPersonnageDemon()
    {
        if(roll >= 0 && roll <= 59){Hp = 6}
        else if(roll >= 60 && roll <= 100){Hp = 7}

        if(roll1 >= 0 && roll1 <= 29){Mana = 2}
        else if(roll1 >= 30 && roll1 <= 89){Mana = 3}
        else if(roll1 >= 90 && roll1 <= 100){Mana = 4}

        if(roll2 >= 0 && roll2 <= 39){CapaciteCombat = 9}
        else if(roll2 >= 40 && roll2 <= 94){CapaciteCombat = 8}
        else if(roll2 >= 95 && roll2 <= 100){CapaciteCombat = 7}
        
        if(roll3 >= 0 && roll3 <= 69){CapaciteTir = 9}
        else if(roll3 >= 70 && roll3 <= 94){CapaciteTir = 8}
        else if(roll3 >= 95 && roll3 <= 100){CapaciteTir = 7}

        if(roll4 >= 0 && roll4 <= 39){Protection = 9}
        else if(roll4 >= 40 && roll4 <= 100){Protection = 8}

        if(roll5 >= 0 && roll5 <= 59){ProtectionMagique = 9}
        else if(roll5 >= 60 && roll5 <= 100){ProtectionMagique = 8}

        if(roll6 >= 0 && roll6 <= 49){Vitesse = 3}
        else if(roll6 >= 50 && roll6 <= 100){Vitesse = 4}
    }


    if(message.content.startsWith("?+bdd PersonnageCreation"))
    {
        if(message.content.length > 25)
        {
            Race= message.content.slice(48)
            PersonnageId = message.content.slice(25,47)
            if(Race == "Humain") {CreationStatPersonnageHumain()}
            else if(Race == "Elfe") {CreationStatPersonnageElfes()}
            else if(Race == "Nain"){CreationStatPersonnageNain()}
            else if(Race == "Beastman"){CreationStatPersonnageBeastman()}
            else if(Race == "Démon"){CreationStatPersonnageDemon()}
            console.log(Race);
            bdd[PersonnageId]  =
            {
                Nom : "Nan",
                imageProfil : "Nan",
                Description : "Nan",
                Race : Race,
                Classe : "Nan",
                Hp: Hp,
                HpMax: Hp,
                Mana: Mana,
                ManaMax:Mana,
                Vitesse:Vitesse,
                CapaciteCombat: CapaciteCombat,
                CapaciteTir: CapaciteTir,
                Protection : Protection,
                ProtectionMagique : ProtectionMagique,
                luck: "",
                Arme :
                {
                    Slot1 :
                    {
                        Nom: ""
                    },

                    Slot2 :
                    {
                        Nom: ""
                    }
                    
                },
                Armure:
                {
                    Nom : "Na"
                },
                Skill:{},
                Magie:{},
                Inventaire:{}
            }
            Savebdd()
        }
    }

    if(message.content.startsWith("?+bdd Name"))
    {
        PersonnageName = message.content.slice(11,33)
        console.log(PersonnageName)
        Name = message.content.slice(34)
        console.log(Name)
        PersonnageId = bdd[PersonnageName]
        console.log(PersonnageId.Nom)
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

    if(message.content.startsWith("?+bdd AjoutArme"))
    {
        if(message.content.length > 15)
        {
            PersonnageName = message.content.slice(16,38);
            PersonnageId = bdd[PersonnageName]
            Weapon = message.content.slice(39);
            console.log(Weapon)
            if(Weapon == "EpeeFer") 
            {
                EpeeFer();
                Savebdd();
            }else if(Weapon == "LanceFer")
            {
                LanceFer();
                Savebdd();
            }
        }
    }

    if(message.content.startsWith("?AchatArme"))
    {
        if(message.content.length > 11)
        {
            PersonnageName = message.content.slice(11,33);
            console.log(PersonnageName)
            PersonnageId = bdd[PersonnageName]
            Weapon = message.content.slice(34);
            console.log(Weapon)
            for(let i = 0; i < 3; i++)
            {
                console.log(i)
                if(i == Weapon)
                {
                    if(PersonnageId.Arme.Slot1.Nom == "")
                    {
                        PersonnageId.Arme.Slot1 = bddArme[i]
                        console.log("test 1")
                        Savebdd()
                    }else if(PersonnageId.Arme.Slot2.Nom == "")
                    {
                        PersonnageId.Arme.Slot2 = bddArme[i]
                        console.log("test 2")
                        Savebdd()
                    }else (message.channel.send("Votre inventaire d'arme est remplis !"));
                }
            }
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
                .addField("⚔️ Capacité de combat :", PersonnageId.CapaciteCombat,true)
                .addField("🏹 Capacité de tir :", PersonnageId.CapaciteTir,true)
                .addField("🛡️ Protection :", PersonnageId.Protection,true)
                .addField("🔰 Protection magique :", PersonnageId.ProtectionMagique,true)
                .addField("🪓 Arme slot 1 :", PersonnageId.Arme.Slot1.Nom,true)
                .addField("🪓 Arme slot 2 :", PersonnageId.Arme.Slot2.Nom,true)
                .addField("⚜️ Armure", PersonnageId.Armure.Nom ,true)
                .setImage(PersonnageId.imageProfil)
            message.channel.send(InfoPersonnage)
        }
    }