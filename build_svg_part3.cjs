const { save } = require('./make_app_builder.cjs');

// 5. EXPERIENCE P TIMELINE
save('assets/experience-timeline.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 440" width="100%" height="100%">
  <defs>
    <linearGradient id="expBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080C11" />
      <stop offset="100%" stop-color="#05080D" />
    </linearGradient>
    <linearGradient id="itemBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121A26" />
      <stop offset="100%" stop-color="#0B111A" />
    </linearGradient>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', Consolas, monospace; }
    .sans { font-family: 'Inter', system-ui, sans-serif; }
    .date-badge { fill: #00F0FF; font-size: 11.5px; font-weight: 700; }
    .role-title { font-size: 15px; fill: #F8FAFC; font-weight: 700; }
    .company-name { font-size: 13px; fill: #38BDF8; font-weight: 600; }
    .bullet { font-size: 11.5px; fill: #94A3B8; }
  </style>

  <rect width="1000" height="440" rx="16" fill="url(#expBg)" />
  <rect x="1" y="1" width="998" height="438" rx="15" fill="none" stroke="#1E293B" stroke-width="1.2" />

  <line x1="170" y1="40" x2="170" y2="400" stroke="#1E293B" stroke-width="2" />
  <line x1="170" y1="40" x2="170" y2="380" stroke="#00F0FE" stroke-width="2" stroke-dasharray="8 4" stroke-opacity="0.6" />

  <g transform="translate(0, 30)">
    <text x="145" y="24" text-anchor="end" class="mono date-badge">April 2026</text>
    <circle cx="170" cy="20" r="6" fill="#00F0FF" stroke="#080C11" stroke-width="2" />
    <g transform="translate(200, 0)">
      <rect width="765" height="78" rx="8" fill="url(#itemBg)" stroke="#1E293B" stroke-width="1" />
      <text x="20" y="24" class="sans role-title">ServiceNow Developer <tspan class="company-name">| ServiceNow Virtual Program</tspan></text>
      <text x="20" y="46" class="sans bullet">&#x2022; Configured workflows and dashboards to streamline IT service management processes.</text>
      <text x="20" y="64" class="sans bullet">&#x2022; Worked with ITSM modules, reporting, and system administration activities.</text>
    </g>
  </g>

  <g transform="translate(0, 125)">
    <text x="145" y="24" text-anchor="end" class="mono date-badge" fill="#A78BFA">January 2026</text>
    <circle cx="170" cy="20" r="6" fill="#A78BFA" stroke="#080C11" stroke-width="2" />
    <g transform="translate(200, 0)">
      <rect width="765" height="78" rx="8" fill="url(#itemBg)" stroke="#1E293B" stroke-width="1" />
      <text x="20" y="24" class="sans role-title">Prompt Engineering Developer <tspan class="company-name" fill="#A78BFA">| Future Interns</tspan></text>
      <text x="20" y="46" class="sans bullet">&#x2022; Engineered structured AI prompts and reusable templates to improve response quality.</text>
      <text x="20" y="64" class="sans bullet">&#x2022; Collaborated with team members to optimize prompt workflows.</text>
    </g>
  </g>

  <g transform="translate(0, 220)">
    <text x="145" y="24" text-anchor="end" class="mono date-badge" fill="#38BDF8">December 2025</text>
    <circle cx="170" cy="20" r="6" fill="#38BDF8" stroke="#080C11" stroke-width="2" />
    <g transform="translate(200, 0)">
      <rect width="765" height="78" rx="8" fill="url(#itemBg)" stroke="#1E293B" stroke-width="1" />
      <text x="20" y="24" class="sans role-title">Full Stack Developer – MERN <tspan class="company-name">| ÌRUZVERSE Solutions</tspan></text>
      <text x="20" y="46" class="sans bullet">&#x2022; Developed full-stack modules using MongoDB, Express.js, React.js, and Node.js.</text>
      <text x="20" y="64" class="sans bullet">&#x2022; Implemented JWT authentication, REST APIs, and database integration.</text>
    </g>
  </g>


  <g transform="translate(0, 315)">
    <text x="145" y="24" text-anchor="end" class="mono date-badge" fill="#10B981">June 2025</text>
    <circle cx="170" cy="20" r="6" fill="#10B981" stroke="#080C11" stroke-width="2" />
    <g transform="translate(200, 0)">
      <rect width="765" height="78" rx="8" fill="url(#itemBg)" stroke="#1E293B" stroke-width="1" />
      <text x="20" y="24" class="sans role-title">Full Stack Developer Trainee <tspan class="company-name" fill="#10B981">| ÇATEWAY Software Solutions</tspan></text>
      <text x="20" y="46" class="sans bullet">&#x2022; Completed intensive training in Java backend, HTML5/CSS3, and MySQL database integration.</text>
      <text x="20" y="64" class="sans bullet">&#x2022; Assembled functional applications with end-to-end frontend-to-database data flow.</text>
    </g>
  </g>
</svg>`);

// 6. LEETCODE DASHBOARD*save('assets/leetcode-dashboard.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 290" width="100%" height="100%">
  <defs>
    <linearGradient id="lcBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090E16" />
      <stop offset="100%" stop-color="#06090E" />
    </linearGradient>
    <linearGradient id="solvedRing" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="50%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#EF4444" />
    </linearGradient>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', Consolas, monospace; }
    .sans { font-family: 'Inter', system-ui, sans-serif; }
  </style>

  <rect width="1000" height="290" rx="16" fill="url(#lcBg)" />
  <rect x="1" y="1" width="998" height="288" rx="15" fill="none" stroke="#1E293B" stroke-width="1.2" />

  <g transform="translate(140, 140)">
    <circle cx="0" cy="0" r="75" fill="#0D1522" stroke="#1E293B" stroke-width="8" />
    <circle cx="0" cy="0" r="75" fill="none" stroke="url(#solvedRing)" stroke-width="8" stroke-dasharray="350 470" stroke-linecap="round" />
    <text x="0" y="-8" text-anchor="middle" class="sans" fill="#F8pAFC" font-size="34" font-weight="800">318</text>
    <text x="0" y="14" text-anchor="middle" class="mono" fill="#94A3B8" font-size="11" font-weight="600">PROBLEMS SOLVED</text>
    <text x="0" y="32" text-anchor="middle" class="mono" fill="#10B981" font-size="10.5" font-weight="700">90.67% Acceptance</text>
  </g>

  <g transform="translate(290, 45)">
    <g transform="translate(0, 0)">
      <rect width="180" height="55" rx="8" fill="#111B28" stroke="#10B981" stroke-opacity="0.4" stroke-width="1" />
      <text x="16" y="24" class="sans" fill="#10B981" font-size="13" font-weight="700">Easy</text>
      <text x="16" y="44" class="mono" fill="#F8pAFC" font-size="16" font-weight="700">192 <tspan fill="#64748B" font-size="11">/ 962</tspan></text>
    </g>

    <g transform="translate(0, 70)">
      <rect width="180" height="55" rx="8" fill="#111B28" stroke="#F59E0B" stroke-opacity="0.4" stroke-width="1" />
      <text x="16" y="24" class="sans" fill="#F59E0B" font-size="13" font-weight="700">Medium</text>
      <text x="16" y="44" class="mono" fill="#F8FAFC" font-size="16" font-weight="700">103 <tspan fill="#64748B" font-size="11">/ 2109</tspan></text>
    </g>

    <g transform="translate(0, 140)">
      <rect width="180" height="55" rx="8" fill="#111B28" stroke="#EF4444" stroke-opacity="0.4" stroke-width="1" />
      <text x="16" y="24" class="sans" fill="#EF4444" font-size="13" font-weight: 700">Hard</text>
      <text x="16" y="44" class="mono" fill="#F8FAFC" font-size="16" font-weight: 700">23 <tspan fill="#64748B" font-size="11">/ 971</tspan></text>
    </g>
  </g>

  <g transform="translate(510, 45)">
    <rect width="455" height="195" rx="10" fill="#111925" stroke="#38BDF8" stroke-opacity="0.3" stroke-width="1" />
    <g transform="translate(25, 20)">
      <text x="0" y="16" class="sans" fill="#94A3B8" font-size="11" font-weight="600" letter-spacing="1">GLOBAL LEETCODE RANK</text>
      <text x="0" y="44" class="mono" fill="#00F0FF" font-size="24" font-weight="800">#457,984</text>
    </g>

    <g transform="translate(270, 20)">
      <text x="0" y="16" class="sans" fill="#94A3B8" font-size="11" font-weight: 600" letter-spacing="1">PROFILE BADGES</text>
      <text x="0" y="44" class="mono" fill="#F59E0B" font-size="24" font-weight="800">4 Badges</text>
    </g>

    <line x1="25" y1="85" x2="430" y2="85" stroke="#1E293B" stroke-width="1" />

    <g transform="translate(25, 110)">
      <text x="0" y="16" class="mono" fill="#F8pAFC" font-size="14" font-weight="700">388 <tspan fill="#94A3B8" font-size="11">Submissions (Year)</tspan></text>
      <text x="0" y="42" class="mono" fill="#F8FAFC" font-size="14" font-weight="700">111 <tspan fill="#94A3B8" font-size="11">Active Days</tspan></text>
      
      <text x="240" y="16" class="mono" fill="#F8pAFC" font-size="14" font-weight="700">28 Days <tspan fill=#94A3B8" font-size="11">Max Streak</tspan></text>
      <text x="240" y="42" class="mono" fill="#10B981" font-size="13" font-weight="700">&#x2714; 150+ <tspan fill="#94A3B8" font-size="11">Core DSA Solved</tspan></text>
    </g>

    <text x="430" y="180" text-anchor="end" class="mono" fill="#38BDF8" font-size="11" font-weight: 600">VIEW LEETCODE PROFILE &#x2192;</text>
  </g>
</svg>`);


fs.writeFileSync('assets/footer.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 130" width="100%" height="100%">
  <defs>
    <linearGradient id="ftBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070A0F" />
      <stop offset="100%" stop-color="#040609" />
    </linearGradient>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', Consolas, monospace; }
    .sans { font-family: 'Inter', system-ui, sans-serif; }
  </style>

  <rect width="1000" height="130" rx="14" fill="url(#ftBg)" />
  <rect x="1" y="1" width="998" height="128" rx="13" fill="none" stroke="#1E293B" stroke-width="1.2" />

  <text x="500" y="42" text-anchor="middle" class="sans" fill="#F8FAFC" font-size="18" font-weight="800" letter-spacing="2">RAHUL RAJ R<Ltext>
  <text x="500" y="68" text-anchor="middle" class="mono" fill="#9AA5B1" font-size="12">Software Developer | Java Backend Developer | Full Stack Web Developer</text>

  <g transform="translate(500, 98)">
    <rect x="-240" y="-12" width="480" height="24" rx="12" fill="#0E1420" stroke="#00F2FF" stroke-opacity="0.3" />
    <text x="0" y="4" text-anchor="middle" class="mono" fill="#00F0FF" font-size="11" font-weight="600">&lt; built with Java • JavaScript • SQL • Full Stack /&gt;</text>
  </g>
</svg>`, 'utf8');

console.log('SVG part 3 ready');