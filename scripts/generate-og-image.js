const sharp = require('sharp');

const width = 1200;
const height = 1200;
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" rx="220" ry="220" fill="#05010a"/>
  <rect x="70" y="70" width="1060" height="1060" rx="220" ry="220" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
  <g filter="url(#glow)">
    <path d="M 360 290 L 510 290 L 600 430 L 690 290 L 840 290 L 640 760 L 600 680 L 560 760 Z"
          fill="none"
          stroke="url(#grad)"
          stroke-width="76"
          stroke-linecap="round"
          stroke-linejoin="round"/>
  </g>
  <circle cx="600" cy="780" r="28" fill="#ffffff"/>
  <circle cx="600" cy="780" r="14" fill="#bf12ee"/>
  <defs>
    <linearGradient id="grad" x1="20%" y1="20%" x2="85%" y2="85%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="48%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#bf12ee"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png')
  .then(() => {
    console.log('created public/og-image.png');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
