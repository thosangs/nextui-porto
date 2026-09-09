// Project cover icons — brutalist style (bold strokes, toska accent).
const TOSKA = "#2dd4bf";
const S = 40;

export const PetaMetroSVG = () => (
  <svg width={S} height={S} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10 14 6 26 10 36 6v24l-10 4-12-4-10 4V10Z" stroke="#f5f5f5" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 6v24M26 10v24" stroke="#f5f5f5" strokeWidth="2" />
    <path d="M25 15c3 0 5 2 5 5 0 3.5-5 8-5 8s-5-4.5-5-8c0-3 2-5 5-5Z" fill={TOSKA} stroke="#0a0a0a" strokeWidth="1.5" />
    <circle cx="25" cy="20" r="1.8" fill="#0a0a0a" />
  </svg>
);

export const DbtLectureSVG = () => (
  <svg width={S} height={S} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8 36 15 20 22 4 15 20 8Z" fill={TOSKA} stroke="#0a0a0a" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10 17.5V26c0 2 4.5 4 10 4s10-2 10-4v-8.5" stroke="#f5f5f5" strokeWidth="2" strokeLinejoin="round" />
    <path d="M34 15v7" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TanggaSVG = () => (
  <svg width={S} height={S} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 32h8v-8h8v-8h8V8" stroke="#f5f5f5" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    <rect x="6" y="32" width="8" height="2.5" fill={TOSKA} />
    <rect x="14" y="24" width="8" height="2.5" fill={TOSKA} />
    <rect x="22" y="16" width="8" height="2.5" fill={TOSKA} />
  </svg>
);

export const KeramikSVG = () => (
  <svg width={S} height={S} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="30" height="30" stroke="#f5f5f5" strokeWidth="2" />
    <path d="M20 5v30M5 20h30" stroke="#f5f5f5" strokeWidth="2" />
    <rect x="7" y="7" width="11" height="11" fill={TOSKA} opacity="0.9" />
    <rect x="22" y="22" width="11" height="11" fill={TOSKA} opacity="0.9" />
  </svg>
);
