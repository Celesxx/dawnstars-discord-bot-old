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
  TotalAdversaire.forEach(element => 
    {
      ParticipantStat =
      {
        name : element.Nom,
        hp : element.Hp,
        vitesse : element.Vitesse,
        ordreAttaque : '',
      }
      Participant.push(ParticipantStat)
    })
}

function ComparaisonVitesse()
{
  let i = 1    
  Participant = _.sortBy(Participant, 'vitesse');
  Participant.reverse()
  
  Participant.forEach(element => 
  {
    element.ordreAttaque = i
    i++
  })
}