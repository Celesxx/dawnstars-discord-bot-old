const fs = require('fs')

test('FunctionJob.js exist', () => {
    expect(fs.existsSync('./Job/FunctionJob.js')).toBe(true);
});

test('Job.js exist', () => {
    expect(fs.existsSync('./Job/Job.js')).toBe(true);
});