import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

import { Data } from './Data';

const Sidebar = ({ sidebar, showSidebar, isMobile }) => {
  const [toggleTitle, setToggleTitle] = useState('');

  const showSubMenu = ({ target: { innerText } }) => {
    setToggleTitle(toggleTitle === innerText ? '' : innerText);
  };

  const renderIcon = (item) => {
    if (!item.subNav) return null;
    return toggleTitle === item.title ? item.iconOpened : item.iconClosed;
  };

  const moblieCheckAndShowSidebar = () => {
    if (isMobile) showSidebar();
  };

  return (
    <SidebarStyle sidebar={sidebar}>
      <div className='sidebarWrap'>
        <Link to='/' className='homeIcon' onClick={isMobile && showSidebar}>
          <FaIcons.FaReact />
          <span>Siyun Mini App</span>
        </Link>
        {!isMobile && (
          <FaIcons.FaAngleDoubleLeft
            className='closeIcon'
            onClick={showSidebar}
          />
        )}

        {Data.map((item, index) => (
          <div key={index} className='menu'>
            <Link
              className='menuLink'
              to={item.path}
              onClick={item.subNav ? showSubMenu : moblieCheckAndShowSidebar}
            >
              <span className='icon'> {item.icon}</span>

              <span>{item.title}</span>
              {renderIcon(item)}
            </Link>
            {toggleTitle === item.title && (
              <SubMenu
                item={item}
                showSidebar={showSidebar}
                isMobile={isMobile}
              />
            )}
          </div>
        ))}
      </div>
    </SidebarStyle>
  );
};

export default Sidebar;

const SidebarStyle = styled.nav`
  background: #15171c;
  width: 250px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 150ms;
  z-index: 1001;

  .sidebarWrap {
    width: 100%;
    height: 100vh;
  }

  .homeIcon {
    margin: 0 2rem 0 1rem;
    font-size: 2rem;
    height: 80px;
    align-items: center;
    color: #f6ab00;
    text-decoration: none;
    span {
      font-size: 23px;
      margin-left: 13px;
    }
  }

  .closeIcon {
    position: absolute;
    left: 249px;
    font-size: 30px;
    margin: 0 2rem 0 1rem;
    top: 25px;
  }

  .menu {
    .menuLink {
      display: flex;
      align-items: center;
      text-decoration: none;
      height: 60px;
      font-size: 18px;
      color: #e1e9fc;
      justify-content: space-between;
      padding: 20px;
      list-style: none;
      &:hover {
        cursor: pointer;
        background: #252831;
        border-left: 4px solid #f6ab00;
        color: #f6ab00;
      }
    }

    .icon {
      position: relative;
      top: 2px;
      margin-left: 0px;
    }

    span {
      margin-left: 16px;
    }
  }
`;
