import { useState } from 'react';
import styled from 'styled-components';

export const Tooltip = ({ text, children }) => {
  const [isVisable, setIsVisable] = useState(false);
  return (
    <TooltipStyle
      className='tooltip-container'
      onMouseEnter={() => setIsVisable(true)}
      onMouseLeave={() => setIsVisable(false)}
    >
      <span className='material-symbols-outlined'>info</span>
      {children}
      {isVisable && <div className='tooltip'>{text}</div>}
    </TooltipStyle>
  );
};

const TooltipStyle = styled.div`
  position: relative;
  display: inline-block;
  .tooltip {
    position: absolute;
    top: calc(-100% - 30px);
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    z-index: 1;
    min-width: 200px;
  }
`;
