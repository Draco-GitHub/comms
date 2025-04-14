import React, { ReactNode, CSSProperties } from 'react';

interface IconProps {
  svg: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  svg,
  className = "",
  style,
  onClick
}) => {
 
  const defaultWrapperStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
  const mergedWrapperStyle = { ...defaultWrapperStyle, ...style };
  
  return (
    <div
      className={`icon-wrapper ${className}`}
      style={mergedWrapperStyle}
      onClick={onClick}
    >
      {svg}
    </div>
  );
};

export default Icon;