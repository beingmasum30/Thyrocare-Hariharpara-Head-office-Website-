import React, { useState, useEffect } from 'react';

interface ThyrocareLogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  showBranch?: boolean;
  variant?: 'image' | 'vector' | 'badge';
  useImageOnDark?: boolean;
}

const LOGO_SRC = '/assets/aistudio/17942877542027934233577999468613_92562f97.jpg';

export const ThyrocareLogo: React.FC<ThyrocareLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
  showTagline = false,
  showBranch = true
}) => {
  const isDark = theme === 'dark';
  const [whiteBgLogoUrl, setWhiteBgLogoUrl] = useState<string | null>(null);

  // Automatically process uploaded Google Drive logo:
  // Convert pure black background to transparent/white so it seamlessly sits on a white navbar!
  useEffect(() => {
    if (isDark) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = LOGO_SRC;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Turn all black / very dark background pixels into transparent
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          // Near black threshold
          if (r < 32 && g < 32 && b < 32) {
            data[i + 3] = 0; // Alpha transparent
          }
        }
        ctx.putImageData(imgData, 0, 0);
        setWhiteBgLogoUrl(canvas.toDataURL('image/png'));
      } catch (e) {
        console.warn('Canvas logo background processing error:', e);
      }
    };
  }, [isDark]);

  // Height configurations tailored for vertical logo + subtitle stacking
  const heights = {
    sm: 'h-5 sm:h-6',
    md: 'h-6 sm:h-7',
    lg: 'h-8 sm:h-10'
  }[size];

  // ================= 1. DARK THEME (Footer & Admin Header) =================
  if (isDark) {
    return (
      <div className={`flex flex-col items-start select-none min-w-0 ${className}`}>
        <img
          src={LOGO_SRC}
          alt="Thyrocare"
          className={`${heights} w-auto max-w-[130px] sm:max-w-[160px] object-contain rounded-md`}
          loading="eager"
        />
        {showBranch && (
          <div className="flex items-center space-x-1 pl-0.5 mt-0.5">
            <span className="font-black text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-rose-400">
              HARIHARPARA
            </span>
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">
              CENTRE
            </span>
          </div>
        )}
      </div>
    );
  }

  // ================= 2. LIGHT THEME (White Navbar & Cards) =================
  // Directly underneath the Thyrocare logo: clean, small, bold "HARIHARPARA"
  return (
    <div className={`flex flex-col items-start select-none min-w-0 bg-transparent justify-center ${className}`}>
      
      {/* Upper: Thyrocare Logo (Processed Drive Image or Vector fallback) */}
      <div className="flex items-center">
        {whiteBgLogoUrl ? (
          <img
            src={whiteBgLogoUrl}
            alt="Thyrocare"
            className={`${heights} w-auto max-w-[125px] sm:max-w-[155px] object-contain drop-shadow-2xs`}
            loading="eager"
          />
        ) : (
          <div className="flex items-center space-x-1.5">
            {/* Droplet + Microscope icon */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 relative shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <path
                  d="M 50 14 C 44 26 28 47 28 62 C 28 67 30 72 34 76 L 41 68 C 39 65 38 62 38 59 C 38 49 47 34 50 29 C 53 34 62 49 62 59 C 62 62 61 65 59 68 L 66 76 C 70 72 72 67 72 62 C 72 47 56 26 50 14 Z"
                  fill="#f05046"
                />
                <path
                  d="M 68 38 L 74 34 L 79 41 L 73 45 L 68 49 L 60 59 C 58 62 55 64 51 64 L 46 64 C 42 64 39 62 38 59 L 44 54 C 45 55 46 56 48 56 L 50 56 C 52 56 54 54 55 52 L 62 43 Z"
                  fill="#1e293b"
                />
                <path
                  d="M 26 68 L 52 68 C 52 68 64 68 64 78 C 64 88 52 88 40 88 C 28 88 26 78 26 78 Z"
                  stroke="#1e293b"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Typography */}
            <div className="flex items-baseline leading-none">
              <span className="font-black text-lg sm:text-xl font-serif text-[#1e293b] tracking-tight">
                Thyro
              </span>
              <span className="font-black text-lg sm:text-xl font-sans text-[#f05046] tracking-tight ml-0.5">
                care
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Lower: "HARIHARPARA" written neatly directly underneath the logo */}
      {showBranch && (
        <div className="flex items-center space-x-1 pl-1 -mt-0.5 sm:-mt-1">
          <span className="font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#e23744]">
            HARIHARPARA
          </span>
          <span className="text-[7.5px] sm:text-[8px] font-bold text-slate-500 uppercase tracking-wider">
            CENTRE
          </span>
        </div>
      )}

      {showTagline && (
        <span className="text-[8px] text-slate-400 font-medium pl-1">
          Tests you can trust
        </span>
      )}
    </div>
  );
};
