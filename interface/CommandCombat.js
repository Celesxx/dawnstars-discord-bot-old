if (message.content.startsWith(prefix + "Combat"))
{
  if (message.content.length > 7)
  {
    TotalAdversaire = []
    Participant=[]

    normalizeUserId()
    AjoutObjectPersonnageStat()
    ComparaisonVitesse();
    SystemeCombatPvp();
  }
}else if(message.content.startsWith(prefix + "Combat")) message.channel.send(`Vous avez oublier de sélectionner des participants avec ${prefix}LoupSauvage @User !`)


if(message.content.startsWith(prefix + "LoupSauvage"))
{
    if(message.content.length > 13)
    { 
      TotalAdversaire = []
      Participant=[]

      monstre = bddBestiaire["Loup"];
      normalizeUserId()
      TotalAdversaire.push(monstre)

      AjoutObjectPersonnageStat()
      ComparaisonVitesse();
      SystemeCombat();

    }else if(message.content.startsWith(prefix + "LoupSauvage")) message.channel.send(`Vous avez oublier de sélectionner des participants avec ${prefix}LoupSauvage @User !`)
}


