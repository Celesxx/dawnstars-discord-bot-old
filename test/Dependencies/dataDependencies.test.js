const fs = require('fs')

test('Arme.json exist', () => {
    expect(fs.existsSync('./data/Arme.json')).toBe(true);
});

test('Armure.json exist', () => {
    expect(fs.existsSync('./data/Armure.json')).toBe(true);
});

test('Bestiaire.json exist', () => {
    expect(fs.existsSync('./data/Bestiaire.json')).toBe(true);
});

test('Boutique.json exist', () => {
    expect(fs.existsSync('./data/Boutique.json')).toBe(true);
});

test('Classe.json exist', () => {
    expect(fs.existsSync('./data/Classe.json')).toBe(true);
});

test('Job.json exist', () => {
    expect(fs.existsSync('./data/Job.json')).toBe(true);
});

test('Minage.json exist', () => {
    expect(fs.existsSync('./data/Minage.json')).toBe(true);
});

test('Objet.json exist', () => {
    expect(fs.existsSync('./data/Objet.json')).toBe(true);
});

test('Personnage.json exist', () => {
    expect(fs.existsSync('./data/Personnage.json')).toBe(true);
});

test('Potion.json exist', () => {
    expect(fs.existsSync('./data/Potion.json')).toBe(true);
});