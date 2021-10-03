const fs = require('fs')

test('CommandCombat.js exist', () => {
    expect(fs.existsSync('./interface/CommandCombat.js')).toBe(true);
});

test('Economie.js exist', () => {
    expect(fs.existsSync('./interface/Economie.js')).toBe(true);
});

test('FunctionCombat.js exist', () => {
    expect(fs.existsSync('./interface/FunctionCombat.js')).toBe(true);
});

test('InterfaceCombat.js exist', () => {
    expect(fs.existsSync('./interface/InterfaceCombat.js')).toBe(true);
});