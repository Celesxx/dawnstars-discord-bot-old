function normalizeUserId()
{
  w=13;
  x=w+22;
  y=15;
  z=16;

  do {
    if (message.content.slice(y, z) != "!")
    {
      x = w + 21;
      var Content = message.content.slice(w, y) + "!" + message.content.slice(y, x)
      var Adversaire = bdd[Content]
      w = w + 22;
      x = x + 23;
      y = y + 22;
      z = z + 22;
    }else
    {
      var Adversaire = bdd[message.content.slice(w, x)]
      w = w + 23;
      x = x + 23;
      y = y + 23;
      z = z + 23;
    }

    if(Adversaire != undefined)
    {
      TotalAdversaire.push(Adversaire)
      //TotalParticipant.push(Adversaire)
    }
  }while(Adversaire != undefined)
}

function AjoutObjectPersonnageStat()
{
  uniquePlayersID = []
  TotalAdversaire.forEach(element => 
  {
    
    if(element.userId.startsWith("<@")) 
    {
      id = element.userId.slice(3,-1)
      uniquePlayersID.push(id)
    }else id = element
    ParticipantStat =
    {
      userId : id,
      fullUserId : element,
      name : element.Nom,
      hp : element.Hp,
      vitesse : element.Vitesse,
      ordreAttaque : '',
      Emoji :'',
    
    }
    Participant.push(ParticipantStat)
  })
}
  
function ComparaisonVitesse()
{
  var TEmoji = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟']
  let i = 1    
  Participant = _.sortBy(Participant, 'vitesse');
  Participant.reverse()
  
  Participant.forEach(element => 
  {
    element.Emoji = TEmoji[i-1]
    element.ordreAttaque = i
    i++
  })
}

// function finCombat()
// {
//   setTimeout(() =>
//   {
//     if(monstre.hp <= 0)
//     {
//       message.channel.bulkDelete(3)
      
//       tour1, tour2, tour3 = 100;
//       let xp = 
//       let endEmbed = new Discord.RichEmbed()
//       .setAuthor(`vous avez réussie à abattre le ${monstre.Nom} !`)
//       .setColor("#49FF33")
    
//     }
//   }, 3000)
// }