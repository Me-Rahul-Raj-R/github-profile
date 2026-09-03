const { save } = require('./make_app_builder.cjs');

// 1. HERO BANNER
save('assets/hero-banner.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080C10" />
      <stop offset="50%" stop-color="#0D1219" />
      <stop offset="100%" stop-color="#05080C" />
    </linearGradient>
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="35%" stop-color="#C084FC" />
      <stop offset="70%" stop-color="#EC4899" />
      <stop offset="100%" stop-color="#38BDF8" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#131B28" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#0B1018" stop-opacity="0.8" />
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F2FF" stop-opacity="0.6" />
      <stop offset="50%" stop-color="#8B5CF6" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#00F2FF" stop-opacity="0.15" />
    </linearGradient>
    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6366F1" stop-opacity="0.22" />
      <stop offset="40%" stop-color="#00F2FF" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#0B0F14" stop-opacity="0" />
    </radialGradient>
    <pattern id="gridPattern" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#1E293B" stroke-width="0.65" stroke-opacity="0.35" />
      <circle cx="28" cy="0" r="1" fill="#38BDF8" fill-opacity="0.25" />
    </pattern>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace; }
    .sans { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
  </style>

  <rect width="1000" height="360" rx="16" fill="url(#bgGrad)" />
  <rect width="1000" height="360" rx="16" fill="url(#gridPattern)" />
  <rect x="1" y="1" width="998" height="358" rx="15" fill="none" stroke="url(#borderGrad)" stroke-width="1.5" />
  <ellipse cx="500" cy="170" rx="380" ry="130" fill="url(#centerGlow)" />

  <g transform="translate(500, 64)">
    <rect x="-120" y="-16" width="240" height="32" rx="16" fill="#09111C" stroke="#00F2FF" stroke-opacity="0.4" stroke-width="1" />
    <circle cx="-95" cy="0" r="4" fill="#10B981" filter="url(#glow)" />
    <text x="8" y="4" text-anchor="middle" class="mono" fill="#00F0FE" font-size="12" font-weight="600" letter-spacing="2">&lt; developer.profile /&gt;</text>
  </g>

  <text x="500" y="146" text-anchor="middle" class="sans" fill="url(#titleGrad)" font-size="48" font-weight="800" letter-spacing="4" filter="url(#glow)">RAHUL RAR R</text>

  <text x="500" y="186" text-anchor="middle" class="mono" fill="#9AA5B1" font-size="14.5" font-weight="500" letter-spacing="1.5">SOFTWARE DEVELOPER  |  JAVA BACKEND DEVELOPER  |  FULL STACK WEB DEVELOPER</text>

  <g transform="translate(500, 226)">
    <rect x="-230" y="-14" width="460" height="28" rx="14" fill="#0F1724" stroke="#38BDF8" stroke-opacity="0.35" stroke-width="1" />
    <text x="0" y="4" text-anchor="middle" class="mono" fill="#38BDF8" font-size="11.5" font-weight="600" letter-spacing="2.5">CSE &#x2022; JAVA &#x2022; FULL STACK &#x2022; AI &#x2022; WEB</text>
  </g>

  <g transform="translate(200, 270)">
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="135" height="36" rx="8" fill="url(#cardGrad)" stroke="#00F2FF" stroke-opacity="0.4" stroke-width="1" />
      <circle cx="22" cy="18" r="3.5" fill="#00F0FE" />
      <text x="75" y="22" text-anchor="middle" class="mono" fill="#F4F7FA" font-size="12" font-weight="600">GitHub</text>
    </g>
    <g transform="translate(155, 0)">
      <rect x="0" y="0" width="135" height="36" rx="8" fill="url(#cardGrad)" stroke="#F59E0B" stroke-opacity="0.4" stroke-width="1" />
      <circle cx="22" cy="18" r="3.5" fill="#F59E0B" />
      <text x="75" y="22" text-anchor="middle" class="mono" fill="#F4F7FA" font-size="12" font-weight="600">LeetCode</text>
    </g>
    <g transform="translate(310, 0)">
      <rect x="0" y="0" width="135" height="36" rx="8" fill="url(#cardGrad)" stroke="#38BDF8" stroke-opacity="0.4" stroke-width="1" />
      <circle cx="22" cy="18" r="3.5" fill="#38BDF8" />
      <text x="75" y="22" text-anchor="middle" class="mono" fill="#F4F7FA" font-size="12" font-weight="600">LinkedIn</text>
    </g>
    <g transform="translate(465, 0)">
      <rect x="0" y="0" width="135" height="36" rx="8" fill="url(#cardGrad)" stroke="#A78BFA" stroke-opacity="0.4" stroke-width="1" />
      <circle cx="22" cy="18" r="3.5" fill="#A78BFA" />
      <text x="75" y="22" text-anchor="middle" class="mono" fill="#F4F7FA" font-size="12" font-weight="600">Portfolio</text>
    </g>
  </g>
</svg>`);

// 2. ABOUT TERMINAL
save('assets/about-terminal.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 280" width="100%" height="100%">
  <defs>
    <linearGradient id="termBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D131C" />
      <stop offset="100%" stop-color="#080C12" />
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.1" />
    </linearGradient>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', Consolas, monospace; }
    .sans { font-family: 'Inter', system-ui, sans-serif; }
    .cmd { fill: #00F0FF; font-weight: 600; font-size: 13.5px; }
    .ans { fill: #F4F7FA; font-weight: 500; font-size: 13px; }
    .muted { fill: #64748B; font-size: 12px; }
    .tag-bg { fill: #131E2E; stroke: #38BDF8; stroke-opacity: 0.3; }
    .tag-text { fill: #38BDF8; font-size: 11px; font-weight: 600; }
  </style>

  <rect width="1000" height="280" rx="12" fill="url(#termBg)" />
  <rect x="1" y="1" width="998" height="278" rx="11" fill="none" stroke="url(#borderGrad)" stroke-width="1.2" />

  <rect width="1000" height="38" rx="12" fill="#131B26" />
  <rect y="26" width="1000" height="12" fill="#131B26" />
  <line x1="0" y1="38" x2="1000" y2="38" stroke="#1E293B" stroke-width="1" />

  <circle cx="24" cy="19" r="6" fill="#EF4444" fill-opacity="0.85" />
  <circle cx="44" cy="19" r="6" fill="#F59E0B" fill-opacity="0.85" />
  <circle cx="64" cy="19" r="6" fill="#10B981" fill-opacity="0.85" />
  <text x="500" y="24" text-anchor="middle" class="mono muted">rahul@command-center:~ (bash 80x24)</text>

  <g transform="translate(35, 65)">
    <text x="0" y="20" class="mono cmd">&gt; whoami</text>
    <text x="0" y="45" class="mono ans">&#x2714; Software Developer</text>
    <text x="0" y="70" class="mono ans">&#x2714; Java Backend Developer</text>
    <text x="0" y="95" class="mono ans">&#x2714; Full Stack Web Developer</text>
    
    <text x="0" y="130" class="mono cmd">&gt; status --current</text>
    <text x="0" y="155" class="mono ans">Building scalable backend APIs &amp; full-stack systems</text>
    <text x="0" y="180" class="mono cmd">&gt; ready_for_action <tspan fill="#10B981">true</tspan><tspan fill="#00F2FF"> _</tspan></text>
  </g>

  <line x1="480" y1="55" x2="480" y2="255" stroke="#1E293B" stroke-width="1" stroke-dasharray="4 4" />

  <g transform="translate(515, 65)">
    <text x="0" y="20" class="sans" fill="#00F0FF" font-size="14" font-weight="700" letter-spacing="1">CORE ENGINEERING FOCUS</text>
    <text x="0" y="48" class="sans" fill="#9AA5B1" font-size="12.5" line-height="1.5">
      Hands-on experience in Java, REST APIs, MySQL, MongoDB, &amp; MERN.
    </text>
    <text x="0" y="70" class="sans" fill="#9AA5B1" font-size="12.5">
      Production systems delivered with 150+ LeeqCode DSA mastery.
    </text>

    <g transform="translate(0, 100)">
      <g transform="translate(0,0)"><rect width="100" height="26" rx="6" class="tag-bg"/><text x="50" y="17" text-anchor="middle" class="mono tag-text">Java</text></g>
      <g transform="translate(110,0)"><rect width="100" height="26" rx="6" class="tag-bg"/><text x="50" y="17" text-anchor="middle" class="mono tag-text">Full Stack</text></g>
      <g transform="translate(220,0)"><rect width="100" height="26" rx="6" class="tag-bg"/><text x="50" y="17" text-anchor="middle" class="mono tag-text">REST APIs</text></g>
      <g transform="translate(330,0)"><rect width="100" height="26" rx="6" class="tag-bg"/><text x="50" y="17" text-anchor="middle" class="mono tag-text">MERN</text></g>
      
      <g transform="translate(0,35)"><rect width="100" height="26" rx="6" class="tag-bg"/><text x="50" y="17" text-anchor="middle" class="mono tag-text">MySQL</text></g>
      <g transform="translate(110,35)"><rect width="100" height="26" rx="6" class="tag-bg"/><text x="50" y="17" text-anchor="middle" class="mono tag-text">MongoDB</text></g>
      <g transform="translate(220,35)"><rect width="100" height="26" rx="6" class="tag-bg"/><text x="50" y="17" text-anchor="middle" class="mono tag-text">DSA</text></g>
      <g transform="translate(330,35)"><rect width="100" height="26" rx="6" class="tag-bg"/><text x="50" y="17" text-anchor="middle" class="mono tag-text">AI</text></g>
    </g>
  </g>
</svg>`);

console.log('SVG part 1 ready');