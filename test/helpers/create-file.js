const path = require('path');
const fs = require('fs').promises;

async function createFiles(outputPath, files) {
    // 1. Create directory
    await fs.mkdir(outputPath, { recursive: true });

    return Promise.all(
        Object.entries(files).map(([file, content]) => {
            const filename = path.join(outputPath, file);
            // 2. Create file with content
            return fs.writeFile(filename, content);
        })
    );
}

module.exports = {
    createFiles
};
