const Discord = require("discord.js");
const client = new Discord.Client();
const bdd = require("../rpgDiscord/RPG.json");
const bddBestiaire = require("./RPG_Bestiaire.json");
const config = require("./config.json")
const bddArme = require("./RPG_Arme.json");
const bddArmure = require("./RPG_Armure.json");
var fs = require("fs")
var vm = require('vm');
const { timeStamp } = require("console");
var prefix = config.prefix;
var prefixbdd = config.prefixbdd;

client.login(config.token);

function Savebdd()
{
    fs.writeFile("./DiscordBot-master/RPG.json", JSON.stringify(bdd, null, 4), (err) =>
    {
        if (err) message.channel.send("Une erreur est survenue, contacté un admin.");
    });
}


client.on("message",message =>
{
    borneMinimum = 0;
    borneMaximum = 100;
    roll = Math.floor(Math.random() * (borneMaximum - borneMinimum + 1)  + borneMinimum);
    roll1 = Math.floor(Math.random() * (borneMaximum - borneMinimum + 1)  + borneMinimum);
    roll2 = Math.floor(Math.random() * (borneMaximum - borneMinimum + 1)  + borneMinimum);
    roll3 = Math.floor(Math.random() * (borneMaximum - borneMinimum + 1)  + borneMinimum);
    roll4 = Math.floor(Math.random() * (borneMaximum - borneMinimum + 1)  + borneMinimum);
    roll5 = Math.floor(Math.random() * (borneMaximum - borneMinimum + 1)  + borneMinimum);
    roll6 = Math.floor(Math.random() * (borneMaximum - borneMinimum + 1)  + borneMinimum);
   
    //Inclusion des fichier externe
    eval(fs.readFileSync(__dirname + '/RPG_Skill.js')+'');
    eval(fs.readFileSync(__dirname + '/RPG_Personnage.js')+'');
    eval(fs.readFileSync(__dirname + '/RPG_InterfaceCombat.js')+'');
    eval(fs.readFileSync(__dirname + '/RPG_SystemeCombat.js')+'');
    eval(fs.readFileSync(__dirname + '/RPG_Economie.js')+'');

    if(message.content == "?test")
    {
        var embed = new Discord.RichEmbed()
            .setColor('#b8b8b8')
            .setAuthor("Un combat féroce commence !")
            .addField("test", "test",true)
            .addField("test0","test0",true)
            /*.addFields([
            {   
                name : "test0",
                value : "test0",
                inline : true,
            },
            {
                name : "test",
                value : "test",
                inline : true,
            }])*/

        /*Field[0] = new Array(2)
        Field[0][0] = "test"
        Field[0][1] = "test1"
        console.log(Field[0][0])
        console.log(Field[0][1])*/
            //embed.Field[1]
            
        // message.channel.send(embed).then((message) => {
        //     setTimeout(function(){ 

        //        // const embed = new Discord.RichEmbed(message.embeds[0])
        //          //   .spliceFields(0,2,[])
        //         message.edit(embed.)
        //         //embed.spliceFields(0,2,[{name : "reussite", value : "reussite"}])
        //     }, 3000);
        // })

    }


});

