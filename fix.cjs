const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

fs.readdirSync(componentsDir).forEach(file => {
    if (file.endsWith('.tsx')) {
        const filePath = path.join(componentsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Replace: className="some-class" {...fade1}
        // With: ref={fade1.ref} className={`some-class ${fade1.className}`}
        content = content.replace(/className="([^"]+)"\s+\{\.\.\.([a-zA-Z0-9_]+)\}/g, 'ref={$2.ref} className={`$1 ${$2.className}`}');

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed ${file}`);
    }
});
