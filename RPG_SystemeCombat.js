function ComparaisonVitesse()
{
        NbrAttaquant = TotalAdversaire;
        var Egalite = []
        AttaquantOrdre = []
        NAttaquant = NbrAttaquant.length
        AttaquantVitesse =[]
        
        //calcul de toute les vitesse
        for(var u = 0; u < NbrAttaquant.length;u++)
        {
            AttaquantVitesse.push(NbrAttaquant[u].Vitesse)
        }

        do
        {
            var Egalite = []
            AttaquantVitesseMax = Math.max.apply(null,AttaquantVitesse)
            //Boucle qui vérifie si deux personne on la même vitesse

            NbrAttaquant.forEach(element => {
                if(element.Vitesse == AttaquantVitesseMax)
                {
                    Egalite.push(element)
                    AttaquantVitesse = AttaquantVitesse.filter(item => item !== element.Vitesse)
                    NbrAttaquant = NbrAttaquant.filter(item => item !== element)
                }
            });
            if(Egalite.length >=2)
            {
            //Si personne on la même vitesse alors choix au hasard
                do
                {
                    RandomAttaquant = Egalite[Math.floor(Math.random()*Egalite.length)];
                    AttaquantOrdre.push(RandomAttaquant)
                    Egalite = Egalite.filter(item => item !==RandomAttaquant)
                }while(Egalite.length >= 1)

            }else 
            {
                AttaquantOrdre.push(Egalite[0])
            }

        }while(NbrAttaquant.length > 0)}




if(message.content.startsWith(prefix + "LoupSauvage"))
{
    if(message.content.length > 13)
    { 
        TotalAdversaire = [];
        TotalMonstre = []
        AdversaireHp = []
        var verificationAntiDoubleAttaque = 0;
        w=13;
        x=w+22;
        y=15;
        z=16;
        monstre = bddBestiaire["Loup"];
        TotalAdversaire.push(monstre)
        TotalMonstre.push(monstre)

        //Calcul de tout les participants
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
        ComparaisonVitesse();

        AttaquantOrdre.forEach(element => {AdversaireHp.push(element.Hp)})
        console.log(AdversaireHp)
        var FieldEmbed = 0;

        SystemeCombat();
    }
}



if (message.content.startsWith(prefix + "Combat"))
{
  if (message.content.length > 7)
  {
    TotalAdversaire = []
    //TotalParticipant = []
    var verificationAntiDoubleAttaque = 0;
    w = 8;
    x = w + 22;
    y = 10;
    z = 11;

    //Calcul de tout les participants
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
        console.log(Adversaire.Nom)
      }
    }while(Adversaire != undefined)

    ComparaisonVitesse();
    var FieldEmbed = 0;
    SystemeCombatPvp();
  }
}