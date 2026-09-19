/** Ilustraciones de línea del hero (trazo = color de tinta del tema). */
const ATTRS = 'fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"';

export const plantLeft = `
<svg viewBox="0 0 320 580" stroke-width="1.2" ${ATTRS}>
  <path d="M160 570 C155 510 148 450 152 390 C156 330 168 280 158 220 C148 160 134 118 144 68"/>
  <path d="M158 168 C174 186 196 202 188 222 C180 242 161 257 158 274 C155 257 136 242 128 222 C120 202 142 186 158 168"/>
  <path d="M106 222 C123 207 138 187 158 168 C156 188 146 205 128 222 C146 239 156 256 158 274 C138 258 123 238 106 222"/>
  <path d="M210 222 C193 207 178 187 158 168 C160 188 170 205 188 222 C170 239 160 256 158 274 C178 258 193 238 210 222"/>
  <path d="M128 174 C143 190 150 206 158 222 C153 206 143 190 128 174" stroke-width="0.6" opacity="0.5"/>
  <path d="M188 174 C173 190 166 206 158 222 C163 206 173 190 188 174" stroke-width="0.6" opacity="0.5"/>
  <circle cx="158" cy="222" r="14" stroke-width="0.9"/>
  <circle cx="158" cy="222" r="6" stroke-width="0.7"/>
  <path d="M144 334 C114 312 96 280 106 258 C114 238 138 244 144 334"/>
  <path d="M144 334 C128 304 124 274 126 258"/><line x1="126" y1="258" x2="144" y2="334" stroke-width="0.8"/>
  <path d="M168 355 C198 333 222 303 215 280 C208 258 183 264 168 355"/>
  <path d="M168 355 C188 322 194 290 190 280"/><line x1="190" y1="280" x2="168" y2="355" stroke-width="0.8"/>
  <path d="M150 92 C143 78 140 62 148 50 C154 61 158 76 150 92"/>
  <path d="M150 92 C157 78 160 62 154 50 C148 61 144 76 150 92"/>
  <path d="M140 82 C128 72 122 56 130 50 C138 57 140 70 140 82"/>
  <path d="M166 78 C178 68 184 52 176 46 C168 53 166 66 166 78"/>
  <path d="M148 434 C141 422 138 406 146 394 C152 405 155 420 148 434"/>
  <path d="M148 434 C155 422 158 406 152 394 C146 405 142 420 148 434"/>
  <path d="M156 394 C142 384 129 368 124 352" stroke-width="0.9"/>
  <path d="M158 474 C144 462 132 450 130 437" stroke-width="0.9"/>
</svg>`;

export const plantRight = `
<svg viewBox="0 0 280 500" stroke-width="1.1" ${ATTRS}>
  <path d="M140 485 C138 425 135 362 140 302 C145 242 150 192 145 132"/>
  <path d="M158 310 C190 285 216 250 208 225 C200 200 174 208 158 310"/>
  <path d="M158 310 C184 274 194 242 190 225"/><line x1="190" y1="225" x2="158" y2="310" stroke-width="0.8"/>
  <path d="M122 372 C90 347 68 310 80 285 C90 262 114 270 122 372"/>
  <path d="M122 372 C98 336 90 302 94 285"/><line x1="94" y1="285" x2="122" y2="372" stroke-width="0.8"/>
  <path d="M142 192 C130 176 122 158 124 142"/>
  <ellipse cx="122" cy="112" rx="5" ry="11" transform="rotate(-15,122,112)" stroke-width="1"/>
  <path d="M142 192 C154 174 162 156 158 140"/>
  <ellipse cx="160" cy="132" rx="5" ry="11" transform="rotate(20,160,132)" stroke-width="1"/>
  <path d="M142 250 C154 238 164 224 160 210"/>
  <ellipse cx="162" cy="202" rx="5" ry="10" transform="rotate(25,162,202)" stroke-width="1"/>
</svg>`;

/** Flor de cuatro pétalos con núcleo: pantalla de carga y favicon. */
export const loaderFlower = `
<svg class="loader-flower" width="70" height="70" viewBox="0 0 80 80" ${ATTRS}>
  <g transform="translate(40,40)" stroke-width="1.1">
    <ellipse rx="7" ry="17" transform="rotate(0)"/>
    <ellipse rx="7" ry="17" transform="rotate(45)"/>
    <ellipse rx="7" ry="17" transform="rotate(90)"/>
    <ellipse rx="7" ry="17" transform="rotate(135)"/>
    <circle r="6" stroke-width="1.4"/>
  </g>
</svg>`;

export const petal = `
<svg viewBox="0 0 20 30" width="10" height="16" ${ATTRS}>
  <ellipse cx="10" cy="15" rx="7" ry="13" stroke-width="0.9"/>
</svg>`;
