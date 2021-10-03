const fs = require('fs')

test('FunctionPersonnage.js exist', () => {
    expect(fs.existsSync('./personnage/FunctionPersonnage.js')).toBe(true);
});

test('Personnage.js exist', () => {
    expect(fs.existsSync('./personnage/Personnage.js')).toBe(true);
});

test('Skill.js exist', () => {
    expect(fs.existsSync('./personnage/Skill.js')).toBe(true);
});