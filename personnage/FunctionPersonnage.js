function CreationStatPersonnageHumain()
{
    Hp = Math.floor(Math.random() * (150 - 100 + 1)  + 100);
    Mana = Math.floor(Math.random() * (150 - 100 + 1)  + 100);
    Vitesse = Math.floor(Math.random() * (10 - 5 + 1)  + 5);
    ResistancePhysique = Math.floor(Math.random() * (10 - 5 + 1)  + 5);
    ResistanceMagique = Math.floor(Math.random() * (10 - 5 + 1)  + 5);
    Chance = Math.floor(Math.random() * (15 - 10 + 1)  + 10);
    
    if(roll <= Chance)
    {
        Hp = Math.ceil(Hp * 1.2)
        Mana = Math.ceil(Mana * 1.2)
        Vitesse = Math.ceil(Vitesse * 1.2)
        ResistancePhysique = Math.ceil(ResistancePhysique * 1.2)
        ResistanceMagique = Math.ceil(ResistanceMagique * 1.2)
    }
}

function CreationStatPersonnageElfes()
{
    Hp = Math.floor(Math.random() * (130 - 80 + 1)  + 80);
    Mana = Math.floor(Math.random() * (170 - 120 + 1)  + 120);
    Vitesse = Math.floor(Math.random() * (12 - 8 + 1)  + 8);
    ResistancePhysique = Math.floor(Math.random() * (8 - 3 + 1)  + 3);
    ResistanceMagique = Math.floor(Math.random() * (12 - 8 + 1)  + 8);
    Chance = Math.floor(Math.random() * (12 - 7 + 1)  + 7);
    
    if(roll <= Chance)
    {
        Hp = Math.ceil(Hp * 1.2)
        Mana = Math.ceil(Mana * 1.2)
        Vitesse = Math.ceil(Vitesse * 1.2)
        ResistancePhysique = Math.ceil(ResistancePhysique * 1.2)
        ResistanceMagique = Math.ceil(ResistanceMagique * 1.2)
    }
}

function CreationStatPersonnageNain()
{
    Hp = Math.floor(Math.random() * (160 - 110 + 1)  + 110);
    Mana = Math.floor(Math.random() * (140 - 90 + 1)  + 90);
    Vitesse = Math.floor(Math.random() * (8 - 4 + 1)  + 4);
    ResistancePhysique = Math.floor(Math.random() * (11 - 8 + 1)  + 8);
    ResistanceMagique = Math.floor(Math.random() * (9 - 4 + 1)  + 4);
    Chance = Math.floor(Math.random() * (11 - 7 + 1)  + 7);
    
    if(roll <= Chance)
    {
        Hp = Math.ceil(Hp * 1.2)
        Mana = Math.ceil(Mana * 1.2)
        Vitesse = Math.ceil(Vitesse * 1.2)
        ResistancePhysique = Math.ceil(ResistancePhysique * 1.2)
        ResistanceMagique = Math.ceil(ResistanceMagique * 1.2)
    }
}

function CreationStatPersonnageBeastman()
{
    Hp = Math.floor(Math.random() * (250 - 200 + 1)  + 200);
    Mana = 0
    Vitesse = Math.floor(Math.random() * (12 - 6 + 1)  + 6);
    ResistancePhysique = Math.floor(Math.random() * (15 - 10 + 1)  + 10);
    ResistanceMagique = Math.floor(Math.random() * (8 - 3 + 1)  + 3);
    Chance = Math.floor(Math.random() * (8 - 4 + 1)  + 4);
    
    if(roll <= Chance)
    {
        Hp = Math.ceil(Hp * 1.2)
        Vitesse = Math.ceil(Vitesse * 1.2)
        ResistancePhysique = Math.ceil(ResistancePhysique * 1.2)
        ResistanceMagique = Math.ceil(ResistanceMagique * 1.2)
    }
    
}

function CreationStatPersonnageDemon()
{
    Hp = Math.floor(Math.random() * (160 - 120 + 1)  + 120);
    Mana = Math.floor(Math.random() * (150 - 100 + 1)  + 100);
    Vitesse = Math.floor(Math.random() * (12 - 7 + 1)  + 7);
    ResistancePhysique = Math.floor(Math.random() * (11 - 6 + 1)  + 6);
    ResistanceMagique = Math.floor(Math.random() * (11 - 6 + 1)  + 6);
    Chance = Math.floor(Math.random() * (7 - 4 + 1)  + 4);
    
    if(roll <= Chance)
    {
        Hp = Math.ceil(Hp * 1.2)
        Mana = Math.ceil(Mana * 1.2)
        Vitesse = Math.ceil(Vitesse * 1.2)
        ResistancePhysique = Math.ceil(ResistancePhysique * 1.2)
        ResistanceMagique = Math.ceil(ResistanceMagique * 1.2)
    }
}

function CreationStatPersonnageVampire()
{
    Hp = Math.floor(Math.random() * (160 - 120 + 1)  + 120);
    Mana = Math.floor(Math.random() * (150 - 110 + 1)  + 100);
    Vitesse = Math.floor(Math.random() * (13 - 9 + 1)  + 9);
    ResistancePhysique = Math.floor(Math.random() * (13 - 8 + 1)  + 8);
    ResistanceMagique = Math.floor(Math.random() * (10 - 8 + 1)  + 8);
    Chance = Math.floor(Math.random() * (7 - 3 + 1)  + 3);
    
    if(roll <= Chance)
    {
        Hp = Math.ceil(Hp * 1.2)
        Mana = Math.ceil(Mana * 1.2)
        Vitesse = Math.ceil(Vitesse * 1.2)
        ResistancePhysique = Math.ceil(ResistancePhysique * 1.2)
        ResistanceMagique = Math.ceil(ResistanceMagique * 1.2)
    }
}