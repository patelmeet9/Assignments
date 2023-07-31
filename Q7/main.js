const util = require('util');
const fs = require('fs');
const fs1 = util.promisify(fs.unlink);
async function unlinking() {
    try {
        await fs1('./testing.txt');
        console.log("Unlink Successfull...");
    } catch {
        console.log("No file or directory found...");
    }
}
unlinking();