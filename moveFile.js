const fs = require('fs/promises');

async function moveFile(source, destination) {
    try {
        await fs.rename(source, destination);
        console.log(`Moved ${source} to ${destination}`);
    } catch (error) {
        console.error(`Got an error trying to move the file: ${error.message}`);
    }
}

moveFile('greetings-2.txt', 'test-data/salutation.txt');