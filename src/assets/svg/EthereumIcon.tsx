import React from 'react';

export const EthereumIcon = ({ width = 24, height = 24, color = "#FFFFD6" }) => {
  return (
    <svg 
      viewBox="0 0 18 29" 
      fill="none" 
      width={width} 
      height={height} 
      color={color} 
      role="img"
    >
      <path 
        d="m8.652.75-.189.641v18.625l.19.189 8.652-5.11L8.653.75Z" 
        fill={color}
      />
      <path 
        d="M8.652.75 0 15.095l8.652 5.11V.75Z" 
        fill={color}
      />
      <path 
        d="M8.653 21.842l-.106.13v6.634l.106.311 8.658-12.183-8.658 5.108Z" 
        fill={color}
      />
      <path 
        d="M8.652 28.917v-7.075L0 16.734l8.652 12.183Z" 
        fill={color}
      />
      <path 
        d="M8.652 20.205l8.652-5.11-8.652-3.93v9.04Z" 
        fill={color}
      />
      <path 
        d="m0 15.095 8.652 5.11v-9.04L0 15.095Z" 
        fill={color}
      />
    </svg>
  );
};
