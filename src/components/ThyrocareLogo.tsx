import React from 'react';

interface ThyrocareLogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  showBranch?: boolean;
}

const TRANSPARENT_LOGO_SRC = '/transparent_logo.png';

export const ThyrocareLogo: React.FC<ThyrocareLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
  showBranch = true
}) => {
  const isDark = theme === 'dark';

  const heights = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10 md:h-11',
    lg: 'h-11 sm:h-13'
  }[size];

  return (
    <div className={`flex flex-col items-start select-none min-w-0 ${className}`}>
      {/* Clean Seamless Logo Image Without Any White Background Box or Square Stroke */}
      <img
        src={TRANSPARENT_LOGO_SRC}
        alt="Thyrocare Hariharpara Official Logo"
        className={`${heights} w-auto max-w-[160px] sm:max-w-[210px] object-contain`}
        loading="eager"
        decoding="sync"
      />

      {/* Subtitle Branch Name & Partner Code P7523 */}
      {showBranch && (
        <div className="flex items-center space-x-1 pl-0.5 mt-0.5">
          <span className={`font-extrabold text-[7.5px] sm:text-[8px] uppercase tracking-[0.14em] ${isDark ? 'text-rose-400' : 'text-[#e23744]'}`}>
            HARIHARPARA
          </span>
          <span className={`text-[6.5px] sm:text-[7px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
            CENTRE
          </span>
          <span className="text-[6.5px] font-black text-amber-800 bg-amber-50 px-1 py-0.2 rounded border border-amber-200">
            P7523
          </span>
        </div>
      )}
    </div>
  );
};
