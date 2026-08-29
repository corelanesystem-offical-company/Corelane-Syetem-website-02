const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walkDir(file));
        } else { 
            if (file.endsWith('.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walkDir('src/pages');
files.forEach(f => {
    const c = fs.readFileSync(f, 'utf-8');
    const titleMatch = c.match(/title=["'](.*?)["']/);
    const descMatch = c.match(/description=["'](.*?)["']/);
    const canMatch = c.match(/canonical=["'](.*?)["']/);
    
    // We only care if it has SEO
    if (c.includes('<SEO')) {
        console.log(`\nFILE: ${f}`);
        console.log(`TITLE: ${titleMatch ? titleMatch[1] : 'N/A'}`);
        console.log(`DESC: ${descMatch ? descMatch[1].substring(0, 50) + '...' : 'N/A'}`);
        console.log(`CANONICAL: ${canMatch ? canMatch[1] : 'N/A'}`);
    }
});
