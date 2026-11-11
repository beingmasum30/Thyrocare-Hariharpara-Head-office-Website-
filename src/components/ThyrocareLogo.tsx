import React from 'react';

interface ThyrocareLogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  showBranch?: boolean;
}

const OFFICIAL_LOGO_SRC = '/thyrocare_logo_transparent.png';

export const ThyrocareLogo: React.FC<ThyrocareLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
  showBranch = true
}) => {
  const isDark = theme === 'dark';

  const sizeClasses = {
    sm: 'h-8 sm:h-9 max-w-[140px] sm:max-w-[165px]',
    md: 'h-9 sm:h-11 md:h-12 max-w-[155px] sm:max-w-[195px] md:max-w-[215px]',
    lg: 'h-11 sm:h-14 max-w-[190px] sm:max-w-[240px]'
  }[size];

  return (
    <div className={`inline-flex flex-col items-start select-none min-w-0 ${className}`}>
      {/* Official Thyrocare Logo (Navy 'Thyro' + Red 'care' + 'Tests you can trust') */}
      <div className={isDark ? 'bg-white px-2.5 py-1 rounded-xl shadow-xs' : ''}>
        <img
          src={OFFICIAL_LOGO_SRC}
          alt="Thyrocare Hariharpara Official Logo"
          className={`${sizeClasses} w-auto object-contain block`}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Subtitle Branch Name & Partner Code P7523 */}
      {showBranch && (
        <div className="flex items-center space-x-1.5 pl-0.5 mt-0.5">
          <span className={`font-extrabold text-[8px] sm:text-[9px] uppercase tracking-[0.14em] leading-none ${isDark ? 'text-rose-400' : 'text-[#e23744]'}`}>
            HARIHARPARA
          </span>
          <span className={`text-[7px] sm:text-[8px] font-bold uppercase tracking-wider leading-none ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            CENTRE
          </span>
          <span className="text-[7px] sm:text-[7.5px] font-black text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300 leading-none">
            P7523
          </span>
        </div>
      )}
    </div>
  );
};

