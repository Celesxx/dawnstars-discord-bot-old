const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.pluralize(null);

const personnageSchema = mongoose.Schema({
    userId: { type: String, required: true },
    Nom: { type: String},
    imageProfil: { type: String},
    Description: {type: String},
    Race: {type: String, required: true},
    Hp: {type: Number},
    HpMax: {type: Number},
    Mana: {type: Number},
    ManaMax: {type: Number},
    Vitesse: {type: Number},
    ResistancePhysique: {type: Number},
    ResistanceMagique: {type: Number},
    Chance: {type: Number},
    Classe: {type: Array},
    Arme: 
    [{
        Slot1: {type: Array},
        Slot2: {type: Array}
    }],
    Armure: {type: Array},
    Skill: {type: Array},
    Magie: {type: Array},
    Job: 
    [{
        Nom: {type: String},
        Description: {type: String},
        Lv: {type: Number},
        Reussite: {type: Number},
        BonusLv: {type: Number}
    }],
    Inventaire: {type: Array}
});

personnageSchema.plugin(AutoIncrement, {inc_field: 'id'});
module.exports = mongoose.model('Users', personnageSchema);