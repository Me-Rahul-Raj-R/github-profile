const fs = require('fs');
let s = fs.readFileSync("src/components/AboutMe.jsx", 'utf8');
s = s.split("key=tiz"> ' + r}").join("key={i}>{'> ' + r}");
s = s.split("#F8FAFA').join("#F8pAFC");
s = s.split("ready_for_action('").join("ready_for_action");
s = s.split("{{profile.summary}}").join("{profile.summary}");
fs.writeFileSync("src/components/AboutMe.jsx", s, 'utf8');
console.log('AboutMe ready!');