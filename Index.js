const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
const bdd = require("./data/Personnage.json");
const bddBestiaire = require("./data/Bestiaire.json");
const bddArme = require("./data/Arme.json");
const bddArmure = require("./data/Armure.json");
const bddClasse = require("./data/Classe.json");
const bddLog = require("./data/Log.json");
var _ = require('underscore');
var fs = require("fs");
var vm = require('vm');
const { timeStamp } = require("console");
var prefix = config.prefix;
var prefixbdd = config.prefixbdd;
var logExist = false
var logCount = 0
client.login(config.token);

function Savebdd()
{
    fs.writeFile("./data/Personnage.json", JSON.stringify(bdd, null, 4), (err) =>
    {
        if (err) message.channel.send("Une erreur est survenue, contacté un admin.");
    });
}
function SavebddLog()
{
    fs.writeFile("./data/Log.json", JSON.stringify(bddLog, null, 4), (err) =>
    {
        if (err) message.channel.send("Une erreur est survenue, contacté un admin.");
    });
}



client.on("message",message =>
{
    borneMinimum = 0;
    borneMaximum = 100;
    roll = Math.floor(Math.random() * (borneMaximum - borneMinimum + 1)  + borneMinimum);

    if(bddLog[logCount] != undefined) 
    {
        logExist = true
        do logCount += 1
        while(bddLog[logCount] != undefined) 
        logExist = false
    }

    function erreurLog()
    {
        let currentdate = new Date(); 
        let datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() +" "+ currentdate.getHours() + ":" + currentdate.getMinutes() + ":"+ currentdate.getSeconds();
        bddLog[logCount] = 
        {
            Auteur : message.author.username,
            Id : message.author.id,
            Message : message.content,
            Date : datetime,
            MessageErreur : "",
            Erreur : {}
        }
        SavebddLog()
    }
    erreurLog()
    //Inclusion des fichier externe
    eval(fs.readFileSync(__dirname + '/personnage/Skill.js')+'');
    eval(fs.readFileSync(__dirname + '/personnage/FunctionPersonnage.js')+'');
    eval(fs.readFileSync(__dirname + '/personnage/Personnage.js')+'');
    eval(fs.readFileSync(__dirname + '/interface/FunctionCombat.js')+'');
    eval(fs.readFileSync(__dirname + '/interface/InterfaceCombat.js')+'');
    eval(fs.readFileSync(__dirname + '/interface/CommandCombat.js')+'');
    eval(fs.readFileSync(__dirname + '/interface/Economie.js')+'');
    
    logCount += 1;
    // if(message.content == "?nick")
    // {
    //     // if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
    //     console.log(message.member)
    //     message.member.setNickname(message.content.replace('changeNick ', ''));

    //         // message.reply("pseudo changé")
    // }
    

    // if(message.content == "?test")
    // {
    //     var embed = new Discord.RichEmbed()
    //         .setColor('#b8b8b8')
    //         .setAuthor("Un combat féroce commence !")
    //         .addField("test", "test",true)
    //         .addField("test0","test0",true)
    //         /*.addFields([
    //         {   
    //             name : "test0",
    //             value : "test0",
    //             inline : true,
    //         },
    //         {
    //             name : "test",
    //             value : "test",
    //             inline : true,
    //         }])*/

    //     /*Field[0] = new Array(2)
    //     Field[0][0] = "test"
    //     Field[0][1] = "test1"
    //     console.log(Field[0][0])
    //     console.log(Field[0][1])*/
    //         //embed.Field[1]
            
    //     // message.channel.send(embed).then((message) => {
    //     //     setTimeout(function(){ 

    //     //        // const embed = new Discord.RichEmbed(message.embeds[0])
    //     //          //   .spliceFields(0,2,[])
    //     //         message.edit(embed.)
    //     //         //embed.spliceFields(0,2,[{name : "reussite", value : "reussite"}])
    //     //     }, 3000);
    //     // })

    // }


});

