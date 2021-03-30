const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
const bdd = require("./data/Personnage.json");
const bddBestiaire = require("./data/Bestiaire.json");
const bddArme = require("./data/Arme.json");
const bddArmure = require("./data/Armure.json");
const bddClasse = require("./data/Classe.json");
const bddLog = require("./data/Log.json");
const bddPotion = require("./data/Potion.json");
const bddObjet = require("./data/Objet.json");
const bddMinage = require("./data/Minage.json");
var {_ , shuffle} = require('underscore');
var fs = require("fs");
var vm = require('vm');
const { timeStamp } = require("console");
var Chart = require('chart.js');
const ChartJSImage = require('chart.js-image');
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
    eval(fs.readFileSync(__dirname + '/Job/FunctionJob.js')+'');
    eval(fs.readFileSync(__dirname + '/Job/Job.js')+'');
    
    
    if(message.content == prefix + "test")
    {
        try
        {
            const line_chart = ChartJSImage().chart({
                "type": "radar",
                "data": {
                  "labels": [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July"
                  ],
                  "datasets": [
                    {
                      "label": "My First dataset",
                      "borderColor": "rgb(255,+99,+132)",
                      "backgroundColor": "rgba(255,+99,+132,+.5)",
                      "data": [
                        57,
                        90,
                        11,
                        -15,
                        37,
                        -37,
                        -27
                      ]
                    },
                    {
                      "label": "My Second dataset",
                      "borderColor": "rgb(54,+162,+235)",
                      "backgroundColor": "rgba(54,+162,+235,+.5)",
                      "data": [
                        71,
                        -36,
                        -94,
                        78,
                        98,
                        65,
                        -61
                      ]
                    }
                  ]
                },
                "options": {
                  "title": {
                    "display": true,
                    "text": "Chart.js Line Chart"
                  }
                }
              }) // Line chart
              .backgroundColor('white')
              .width(500) // 500px
              .height(300); // 300px


              let InfoPersonnage = new Discord.RichEmbed()
                .setColor("#bf0000")
                .setAuthor("test")
                .setImage(line_chart.toURL())
            message.channel.send(InfoPersonnage)
            //   line_chart.toURL(); // String: https://image-charts.com/chart.js/2.8.0?icac=documentation&chart=%7Btype%3A%27line%27%2Cdata%3A%7Blabels%3A%5B%27January%27%2C%27February%27%2C%27March%27%2C%27April%27%2C%27May%27%2C%27June%27%2C%27July%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27My+First+dataset%27%2CborderColor%3A%27rgb%28255%2C+99%2C+132%29%27%2CbackgroundColor%3A%27rgba%28255%2C+99%2C+132%2C+.5%29%27%2Cdata%3A%5B57%2C90%2C11%2C-15%2C37%2C-37%2C-27%5D%7D%2C%7Blabel%3A%27My+Second+dataset%27%2CborderColor%3A%27rgb%2854%2C+162%2C+235%29%27%2CbackgroundColor%3A%27rgba%2854%2C+162%2C+235%2C+.5%29%27%2Cdata%3A%5B71%2C-36%2C-94%2C78%2C98%2C65%2C-61%5D%7D%2C%7Blabel%3A%27My+Third+dataset%27%2CborderColor%3A%27rgb%2875%2C+192%2C+192%29%27%2CbackgroundColor%3A%27rgba%2875%2C+192%2C+192%2C+.5%29%27%2Cdata%3A%5B48%2C-64%2C-61%2C98%2C0%2C-39%2C-70%5D%7D%2C%7Blabel%3A%27My+Third+dataset%27%2CborderColor%3A%27rgb%28255%2C+205%2C+86%29%27%2CbackgroundColor%3A%27rgba%28255%2C+205%2C+86%2C+.5%29%27%2Cdata%3A%5B-58%2C88%2C29%2C44%2C3%2C78%2C-9%5D%7D%5D%7D%2Coptions%3A%7Bresponsive%3Atrue%2Ctitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Chart.js+Line+Chart+-+Stacked+Area%27%7D%2Ctooltips%3A%7Bmode%3A%27index%27%7D%2Chover%3A%7Bmode%3A%27index%27%7D%2Cscales%3A%7BxAxes%3A%5B%7BscaleLabel%3A%7Bdisplay%3Atrue%2ClabelString%3A%27Month%27%7D%7D%5D%2CyAxes%3A%5B%7Bstacked%3Atrue%2CscaleLabel%3A%7Bdisplay%3Atrue%2ClabelString%3A%27Value%27%7D%7D%5D%7D%7D%7D&bkg=white&width=700&height=390&icretina=1&ichm=922e17b749b1ab7fab2a14cb742029dc46e50e658457913a9f548793910d2a0d
            //   line_chart.toFile('/path/to/chart.png'); // Promise<()>
            //   line_chart.toDataURI(); // Promise<String> : data:image/png;base64,iVBORw0KGgo...
            //   line_chart.toBuffer(); // Promise<Buffer> : Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 ...
        }catch(error)
        {
            console.log(error)
        }
    }

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

