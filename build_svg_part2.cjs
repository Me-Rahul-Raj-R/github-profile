const { save } = require('./make_app_builder.cjs');

// 3. TECH ECOSYSTEM
save('assets/tech-ecosystem.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="100%" height="100%">
  <defs>
    <linearGradient id="ecoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090E16" />
      <stop offset="100%" stop-color="#05080D" />
    </linearGradient>
    <linearGradient id="centerNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E1B4B" />
      <stop offset="50%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#022C22" />
    </linearGradient>
    <linearGradient id="nodeCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111827" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#0B111A" stop-opacity="0.8" />
    </linearGradient>
    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0" />
    </radialGradient>
    <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="1" fill="#1E293B" fill-opacity="0.6" />
    </pattern>
    <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', Consolas, monospace; }
    .sans { font-family: 'Inter', system-ui, sans-serif; }
    .cat-title { font-size: 13px; font-weight: 700; letter-spacing: 1.5px; }
    .tech-item { font-size: 11.5px; fill: #E2E8F0; font-weight: 500; }
  </style>

  <rect width="1000" height="520" rx="16" fill="url(#ecoBg)" />
  <rect width="1000" height="520" rx="16" fill="url(#dotGrid)" />
  <rect x="1" y="1" width="998" height="518" rx="15" fill="none" stroke="#1E293B" stroke-width="1.2" />

  <g stroke-width="1.5" fill="none">
    <path d="M 180 150 L 180 200 L 400 240" stroke="#00F2FF" stroke-opacity="0.45" stroke-dasharray="6 3" />
    <circle cx="180" cy="150" r="4" fill="#00F2FF" />
    
    <path d="M 500 150 L 500 215" stroke="#38BDF8" stroke-opacity="0.45" stroke-dasharray="6 3" />
    <circle cx="500" cy="150" r="4" fill="#38BDF8" />

    <path d="M 820 150 L 820 200 L 600 240" stroke="#818CF8" stroke-opacity="0.45" stroke-dasharray="6 3" />
    <circle cx="820" cy="150" r="4" fill="#818CF8" />

    <path d="M 180 370 L 180 320 L 400 280" stroke="#34D399" stroke-opacity="0.45" stroke-dasharray="6 3" />
    <circle cx="180" cy="370" r="4" fill="#34D399" />
    
    <path d="M 500 370 L 500 305" stroke="#FBBF24" stroke-opacity="0.45" stroke-dasharray="6 3" />
    <circle cx="500" cy="370" r="4" fill="#FBBF24" />

    <path d="M 820 370 L 820 320 L 600 280" stroke="#F472B6" stroke-opacity="0.45" stroke-dasharray="6 3" />
    <circle cx="820" cy="370" r="4" fill="#F472B6" />
  </g>

  <g transform="translate(500, 260)">
    <circle cx="0" cy="0" r="95" fill="url(#hubGlow)" />
    <rect x="-115" y="-45" width="230" height="90" rx="16" fill="url(#centerNodeGrad)" stroke="#38BDF8" stroke-width="1.8" filter="url(#nodeGlow)" />
    <circle cx="-90" cy="-22" r="3" fill="#00F0FF" />
    <circle cx="90" cy="-22" r="3" fill="#00F0FE" />
    <text x="0" y="-12" text-anchor="middle" class="sans" fill="#F8pAFC" font-size="16" font-weight="800" letter-spacing="1.5">FULL-STACK</text>
    <text x="0" y="10" text-anchor="middle" class="sans" fill="#38BDF8" font-size="15" font-weight="800" letter-spacing="1.5">DEVELOPER</text>
    <text x="0" y="28" text-anchor="middle" class="mono" fill="#94A3B8" font-size="9" font-weight="600" letter-spacing="1.5">CSE &#x2022; JAVA &#x2022; AI &#x2022; WEB</text>
  </g>

  <g transform="translate(50, 40)">
    <rect width="260" height="110" rx="10" fill="url(#nodeCardBg)" stroke="#00F0FE" stroke-opacity="0.5" stroke-width="1.2" />
    <rect x="0" y="0" width="4" height="110" rx="2" fill="#00F2FF" />
    <text x="20" y="28" class="sans cat-title" fill="#00F0FF">1. LANGUAGES</text>
    <line x1="20" y1="36" x2="240" y2="36" stroke="#1E293B" stroke-width="1" />
    <text x="20" y="58" class="mono tech-item">&#x25B8; Java</text>
    <text x="20" y="78" class="mono tech-item">&#x25B8; JavaScript</text>
    <text x="20" y="98" class="mono tech-item">&#x25B8; SQL</text>
  </g>

  <g transform="translate(370, 40)">
    <rect width="260" height="110" rx="10" fill="url(#nodeCardBg)" stroke="#38BDF8" stroke-opacity="0.5" stroke-width="1.2" />
    <rect x="0" y="0" width="4" height="110" rx="2" fill="#38BDF8" />
    <text x="20" y="28" class="sans cat-title" fill="#38BDF8">2. FRONTEND</text>
    <line x1="20" y1="36" x2="240" y2="36" stroke="#1E293B" stroke-width="1" />
    <text x="20" y="58" class="mono tech-item">&#x25B8; HTML5</text>
    <text x="20" y="78" class="mono tech-item">&#x25B8; CSS3</text>
    <text x="20" y="98" class="mono tech-item">&#x25B8; React.js</text>
  </g>

  <g transform="translate(690, 40)">
    <rect width="260" height="110" rx="10" fill="url(#nodeCardBg)" stroke="#818CF8" stroke-opacity="0.5" stroke-width="1.2" />
    <rect x="0" y="0" width="4" height="110" rx="2" fill="#818CF8" />
    <text x="20" y="28" class="sans cat-title" fill="#818CF8">3. BACKEND</text>
    <line x1="20" y1="36" x2="240" y2="36" stroke="#1E293B" stroke-width="1" />
    <text x="20" y="56" class="mono tech-item">&#x25B8; Node.js  &#x2022; Express.js</text>
    <text x="20" y="76" class="mono tech-item">&#x25B8; FastAPI</text>
    <text x="20" y="96" class="mono tech-item">&#x25B8; REST APIs</text>
  </g>

  <g transform="translate(50, 370)">
    <rect width="260" height="110" rx="10" fill="url(#nodeCardBg)" stroke="#34D399" stroke-opacity="0.5" stroke-width="1.2" />
    <rect x="0" y="0" width="4" height="110" rx="2" fill="#34D399" />
    <text x="20" y="28" class="sans cat-title" fill="#34D399">4. DATABASES</text>
    <line x1="20" y1="36" x2="240" y2="36" stroke="#1E293B" stroke-width="1" />
    <text x="20" y="60" class="mono tech-item">&#x25B8; MySQL</text>
    <text x="20" y="85" class="mono tech-item">&#x25B8; MongoDB</text>
  </g>

  <g transform="translate(370, 370)">
    <rect width="260" height="110" rx="10" fill="url(#nodeCardBg)" stroke="#FBBF24" stroke-opacity="0.5" stroke-width="1.2" />
    <rect x="0" y="0" width="4" height="110" rx="2" fill="#FBBF24" />
    <text x="20" y="28" class="sans cat-title" fill="#FBBF24">5. TOOLS</text>
    <line x1="20" y1="36" x2="240" y2="36" stroke="#1E293B" stroke-width="1" />
    <text x="20" y="56" class="mono tech-item">&#x25B8; Git  &#x2022; GitHub</text>
    <text x="20" y="76" class="mono tech-item">&#x25B8; IntelliJ IDEA  &#x2022; VS Code</text>
    <text x="20" y="96" class="mono tech-item">&#x25B8; ServiceNow</text>
  </g>

  <g transform="translate(690, 370)">
    <rect width="260" height="110" rx="10" fill="url(#nodeCardBg)" stroke="#F472B6" stroke-opacity="0.5" stroke-width="1.2" />
    <rect x="0" y="0" width="4" height="110" rx="2" fill="#F472B6" />
    <text x="20" y="28" class="sans cat-title" fill="#F472B6">6. CORE CS</text>
    <line x1="20" y1="36" x2="240" y2="36" stroke="#1E293B" stroke-width="1" />
    <text x="20" y="56" class="mono tech-item">&#x25B8; Data Structures &amp; Algorithms</text>
    <text x="20" y="76" class="mono tech-item">&#x25B8; OOP  &#x2022; DBMS</text>
    <text x="20" y="96" class="mono tech-item">&#x25B8; OS  &#x2022; Computer Networks</text>
  </g>
</svg>`);


// 4. FEATURED PROJECTS
save('assets/featured-projects.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 480" width="100%" height="100%">
  <defs>
    <linearGradient id="projBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080C11" />
      <stop offset="100%" stop-color="#05080C" />
    </linearGradient>
    <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111B29" />
      <stop offset="100%" stop-color="#0A101A" />
    </linearGradient>
    <linearGradient id="badgeSIH" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', Consolas, monospace; }
    .sans { font-family: 'Inter', system-ui, sans-serif; }
    .proj-num { font-size: 11px; font-weight: 700; letter-spacing: 2px; }
    .proj-name { font-size: 18px; font-weight: 800; letter-spacing: 1px; }
    .proj-sub { font-size: 12.5px; fill: #94A3B8; font-weight: 600; }
    .proj-desc { font-size: 11.5px; fill: #CBD5E1; }
    .pill { fill: #0B1320; stroke: #38BDF8; stroke-opacity: 0.35; }
    .pill-txt { fill: #38BDF8; font-size: 10px; font-weight: 600; }
  </style>

  <rect width="1000" height="480" rx="16" fill="url(#projBg)" />
  <rect x="1" y="1" width="998" height="478" rx="15" fill="none" stroke="#1E293B" stroke-width="1.2" />

  <g transform="translate(30, 30)">
    <rect width="455" height="195" rx="12" fill="url(#cardGrad1)" stroke="#00F2FF" stroke-opacity="0.35" stroke-width="1.2" />
    <rect x="0" y="0" width="4" height="195" rx="2" fill="#00F2FF" />
    <text x="20" y="28" class="mono proj-num" fill="#00F0FE">01 // FINANCIAL AI</text>
    <text x="20" y="52" class="sans proj-name" fill="#F8pAFC">FINCOPILOT</text>
    <text x="20" y="70" class="sans proj-sub">Smart AI Financial Copilot</text>
    <text x="20" y="96" class="sans proj-desc">Built an AI financial application with fraud detection and expense tracking.</text>
    <text x="20" y="114" class="sans proj-desc">Integrated Java backend with Fast-API &amp; delivered responsive dashboard.</text>
    
    <g transform="translate(20, 140)">
      <g transform="translate(0,0)"><rect width="55" height="22" rx="4" class="pill"/><text x="27" y="15" text-anchor="middle" class="mono pill-txt">Java</text></g>
      <g transform="translate(62,0)"><rect width="75" height="22" rx="4" class="pill"/><text x="37" y="15" text-anchor="middle" class="mono pill-txt">Fast-API</text></g>
      <g transform="translate(144,0)"><rect width="65" height="22" rx="4" class="pill"/><text x="32" y="15" text-anchor="middle" class="mono pill-txt">HTML5</text></g>
      <g transform="translate(216,0)"><rect width="90" height="22" rx="4" class="pill"/><text x="45" y="15" text-anchor="middle" class="mono pill-txt">JavaScript</text></g>
    </g>
    <text x="435" y="180" text-anchor="end" class="mono" fill="#00F0FF" font-size="11" font-weight="600">VIEW REPO &#x2192;</text>
  </g>

  <g transform="translate(515, 30)">
    <rect width="455" height="195" rx="12" fill="url(#cardGrad1)" stroke="#10B981" stroke-opacity="0.35" stroke-width="1.2" />
    <rect x="0" y="0" width="4" height="195" rx="2" fill="#10B981" />
    <rect x="300" y="14" width="135" height="22" rx="11" fill="url(#badgeSIH)" />
    <text x="367" y="29" text-anchor="middle" class="sans" fill="#FFFFFF" font-size="10" font-weight="700">&#x2605; SIH 2025 WINNER</text>

    <text x="20" y="28" class="mono proj-num" fill="#10B981">02 // SMART SYSTEMS</text>
    <text x="20" y="52" class="sans proj-name" fill="#F8FAFC">EDUTRACK</text>
    <text x="20" y="70" class="sans proj-sub">Smart Attendance System</text>
    <text x="20" y="96" class="sans proj-desc">Engineered a QR-based attendance system with automated verification.</text>
    <text x="20" y="114" class="sans proj-desc">Designed robust REST APIs for attendance management. SIH Winner.</text>
    
    <g transform="translate(20, 140)">
      <g transform="translate(0,0)"><rect width="60" height="22" rx="4" class="pill" stroke="#10B981"/><text x="30" y="15" text-anchor="middle" class="mono pill-txt" fill="#10B981">Java</text></g>
      <g transform="translate(68,0)"><rect width="68" height="22" rx="4" class="pill" stroke="#10B981"/><text x="34" y="15" text-anchor="middle" class="mono pill-txt" fill="#10B981">MySQL</text></g>
      <g transform="translate(144,0)"><rect width="85" height="22" rx="4" class="pill" stroke="#10B981"/><text x="42" y="15" text-anchor="middle" class="mono pill-txt" fill="#10B981">REST APIs</text></g>
    </g>
    <text x="435" y="180" text-anchor="end" class="mono" fill="#10B981" font-size="11" font-weight="600">VIEW REPO &#x2192;</text>
  </g>

  <g transform="translate(30, 255)">
    <rect width="455" height="195" rx="12" fill="url(#cardGrad1)" stroke="#38BDF8" stroke-opacity="0.35" stroke-width="1.2" />
    <rect x="0" y="0" width="4" height="195" rx="2" fill="#38BDF8" />
    <text x="20" y="28" class="mono proj-num" fill="#38BDF8">03 // MERN STACK</text>
    <text x="20" y="52" class="sans proj-name" fill="#F8FAFC">EXPENSE-TRACKER</text>
    <text x="20" y="70" class="sans proj-sub">Personal Finance Manager</text>
    <text x="20" y="96" class="sans proj-desc">Developed a MERN finance tracker with role-based access control.</text>
    <text x="20" y="114" class="sans proj-desc">Built dashboard analytics for multi-category spending visualization.</text>
    
    <g transform="translate(20, 140)">
      <g transform="translate(0,0)"><rect width="80" height="22" rx="4" class="pill"/><text x="40" y="15" text-anchor="middle" class="mono pill-txt">MongoDB</text></g>
      <g transform="translate(87,0)"><rect width="85" height="22" rx="4" class="pill"/><text x="42" y="15" text-anchor="middle" class="mono pill-txt">Express.js</text></g>
      <g transform="translate(179,0)"><rect width="75" height="22" rx="4" class="pill"/><text x="37" y="15" text-anchor="middle" class="mono pill-txt">React.js</text></g>
      <g transform="translate(261,0)"><rect width="75" height="22" rx="4" class="pill"/><text x="37" y="15" text-anchor="middle" class="mono pill-txt">Node.js</text></g>
    </g>
    <text x="435" y="180" text-anchor="end" class="mono" fill="#38BDF8" font-size="11" font-weight="600">VIEW REPO &#x2192;</text>
  </g>


  <g transform="translate(515, 255)">
    <rect width="455" height="195" rx="12" fill="url(#cardGrad1)" stroke="#C084FC" stroke-opacity="0.35" stroke-width="1.2" />
    <rect x="0" y="0" width="4" height="195" rx="2" fill="#C084FC" />
    <text x="20" y="28" class="mono proj-num" fill="#C084FC">04 // AI &amp; COMPUTER VISION</text>
    <text x="20" y="52" class="sans proj-name" fill="#F8FAFC">HAIRLOON</text>
    <text x="20" y="70" class="sans proj-sub">AI Hairstyle Recommendation System</text>
    <text x="20" y="96" class="sans proj-desc">Built ML-based web application for autonomous hairstyle recommendations.</text>
    <text x="20" y="114" class="sans proj-desc">Integrated location services &amp; salon booking to identify nearby salons.</text>
    
    <g transform="translate(20, 140)">
      <g transform="translate(0,0)"><rect width="60" height="22" rx="4" class="pill" stroke="#C084FC"/><text x="30" y="15" text-anchor="middle" class="mono pill-txt" fill="#C084FC">HTML5</text></g>
      <g transform="translate(68,0)"><rect width="55" height="22" rx="4" class="pill" stroke="#C084FC"/><text x="27" y="15" text-anchor="middle" class="mono pill-txt" fill="#C084FC">CSS3</text></g>
      <g transform="translate(130,0)"><rect width="85" height="22" rx="4" class="pill" stroke="#C084FC"/><text x="42" y="15" text-anchor="middle" class="mono pill-txt" fill="#C084FC">JavaScript</text></g>
      <g transform="translate(222,0)"><rect width="135" height="22" rx="4" class="pill" stroke="#C084FC"/><text x="67" y="15" text-anchor="middle" class="mono pill-txt" fill="#C084FC">Machine Learning</text></g>
    </g>
    <text x="435" y="180" text-anchor="end" class="mono" fill="#C084FC" font-size="11" font-weight="600">VIEW REPO &#x2192;</text>
  </g>
</svg>`);

console.log('SVG part 2 ready');