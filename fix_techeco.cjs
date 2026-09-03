const fs = require('fs');
let s = fs.readFileSync("src/components/TechEcosystem.jsx", 'utf8');
s = s.replace(/boxShadow: isHovered ?