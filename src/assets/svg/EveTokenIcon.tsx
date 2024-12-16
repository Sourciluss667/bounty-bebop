import React from 'react';

export const EveTokenIcon = ({ width = 24, height = 24, color = "#FFFFD6" }) => {
  return (
    <svg 
      viewBox="0 0 20 26" 
      fill="none" 
      width={width} 
      height={height} 
      color={color} 
      role="img"
    >
      <path 
        d="M8.594 0h2.666v2.785H8.594V0ZM0 9.206h3.61V8.021H20V4.49H0v4.715ZM3.61 16.299H0v4.729h20V17.52H3.61V16.3ZM20 14.52H0v-3.513h20v3.513ZM11.26 23.215H8.594V26h2.666v-2.785Z" 
        fill={color}
      />
    </svg>
  );
};