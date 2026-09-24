import * as React from 'react';
import styled from 'styled-components';

import { Flex, Link, SearchBox } from '@redocly/developer-portal/ui';

export default function NavBar(props) {
  const { items, logo, location } = props;

  const [isMobileMenuOpened, setMobileMenuOpened] = React.useState(false);
  const toggleMobileMenu = () => setMobileMenuOpened(!isMobileMenuOpened);
  const hideMobileMenu = () => setMobileMenuOpened(false);
  const getIsActive = function (navItem, allItems): boolean {
    return (
      props.sidebarName === navItem.activateWithSidebar ||
        (navItem.link === location.pathname &&
        !allItems.some(item => item.activateWithSidebar === props.sidebarName))
    );
  };

  const navItems = items
    .filter(item => item.type !== 'search')
    .map((item, index) => {
      return (
        <NavItem key={index} onClick={hideMobileMenu} active={getIsActive(item, items)}>
          <Link to={item.link}>{item.label}</Link>
        </NavItem>
      );
    });

  const spacingDivStyle = {
    height: '64px',
    width: '100%',
    position: 'static' as const
  };

  return (
    <NavWrapper hasBackground={false}>
      <div style={spacingDivStyle}></div>
      <div id="header" className="top-0 left-0 w-full md:fixed">
        <div className="bg-white flex items-center sticky top-0 z-20 print:hidden border-gray-50 border-l-0 border-r-0 border-solid border-t-0">
          <div className="logoLinkDiv">
            <a href="https://doc.toasttab.com/doc/main/index.html">
              <div className="bg-white text-gray-900 h-16 flex items-center justify-center duration-300 ease-out-quart overflow-hidden px-10" style={{flex: '0 1 0%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.95 126.73" height="35px">
                  <defs><style>{`.cls-1{fill:#ff4c00;}`}</style></defs>
                  <title>Asset 1</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M175.16,118.29c-13.86,0-21.34-7.16-21.34-20.56V58.49H149a8.72,8.72,0,0,1-8.57-8.88A8.61,8.61,0,0,1,149,41.2h4.82V29.52a10,10,0,0,1,19.94,0V41.2h7.78a8.65,8.65,0,0,1,0,17.29h-7.78V92.44c0,5.92,3.74,8.25,6.85,8.25h1.71c5.61,0,8.73,3.74,8.73,8.57S188.09,118.29,175.16,118.29Z"></path>
                      <path className="cls-1" d="M237.46,118.29c-24.76,0-39.72-18.06-39.72-39.56,0-21.33,15-39.4,39.72-39.4,24.92,0,39.87,18.07,39.87,39.4C277.33,100.23,262.38,118.29,237.46,118.29Zm0-61.36c-12.31,0-19.16,10.12-19.16,21.8,0,11.84,6.85,22,19.16,22s19.31-10.12,19.31-22C256.77,67.05,249.76,56.93,237.46,56.93Z"></path>
                      <path className="cls-1" d="M347.26,117.36H345.7c-1.56,0-8.57-1.25-8.57-8.72-5.13,6.07-14,9.65-23.82,9.65-12,0-26.17-8.1-26.17-24.92,0-17.6,14.17-24.29,26.17-24.29,10,0,18.84,3.27,23.82,9.19V68.14c0-7.63-6.54-12.61-16.5-12.61a29.72,29.72,0,0,0-16.82,4.83,7.45,7.45,0,0,1-3.58,1.09,7.6,7.6,0,0,1-7.48-7.63,8.12,8.12,0,0,1,1.09-3.9c4.67-7.47,21.49-10.59,30.21-10.59,17.13,0,32.86,6.85,32.86,28.5v39.72A9.74,9.74,0,0,1,347.26,117.36ZM337.13,89c-3.27-4.36-9.49-6.54-15.88-6.54-7.79,0-14.17,4-14.17,11.37,0,7,6.38,11.06,14.17,11.06,6.39,0,12.61-2.18,15.88-6.54Z"></path>
                      <path className="cls-1" d="M403.64,118.29c-9.81,0-25.54-3.27-30.21-10a6.77,6.77,0,0,1-1.4-4.2,8.4,8.4,0,0,1,8.25-8.25A7.55,7.55,0,0,1,384.33,97c5.92,3.42,13.7,6.07,20.24,6.07,8.57,0,12.62-3.43,12.62-8.1,0-12.46-44.7-2.34-44.7-31.93,0-12.61,11.06-23.67,30.84-23.67,9.81,0,23.2,3.12,27.41,9.19A6.79,6.79,0,0,1,432,52.41a7.74,7.74,0,0,1-7.78,7.48,7.85,7.85,0,0,1-3.74-.93,34.44,34.44,0,0,0-17-4.52c-7.16,0-11.83,3.27-11.83,7.48,0,11.21,44.54,1.86,44.54,32.23C436.19,107.86,424.51,118.29,403.64,118.29Z"></path>
                      <path className="cls-1" d="M476.06,118.29c-13.86,0-21.34-7.16-21.34-20.56V58.49H449.9a8.72,8.72,0,0,1-8.57-8.88,8.62,8.62,0,0,1,8.57-8.41h4.82V29.52a10,10,0,0,1,19.94,0V41.2h7.79a8.65,8.65,0,0,1,0,17.29h-7.79V92.44c0,5.92,3.74,8.25,6.85,8.25h1.72c5.6,0,8.72,3.74,8.72,8.57S489,118.29,476.06,118.29Z"></path>
                      <path className="cls-1" d="M127.71,87.33a227.89,227.89,0,0,0-1.07-24.94c-.6-5.6-2.48-12.76-8.43-14.22a4.14,4.14,0,0,0,2.33-.08c6.92-3.68,6.39-12.74,3.94-19.29-3.21-8.59-10.86-14.67-18.42-18.71C78.89-4.43,42.53-3.21,16.19,13.33,9.34,17.63,1.44,26,4.91,35.35A19,19,0,0,0,9,41.55c.77.83,2.61,2.76,2.61,2.77C8.08,49.19,5.5,53.57,3.84,59.49-1.15,77.27-.32,88.7,1.05,103c.85,8.84,3.73,22,13.75,23.46h0c8.17,1.15,17-1.59,25.18-2.56,9-1.08,18.08-2.76,27.16-2.52,12.82.33,25.54,3.43,38.38,3.55,6.78.07,18.05.72,20.07-8.35,1.92-8.63,2-17.63,2-26.44C127.7,89.2,127.71,88.26,127.71,87.33Zm-14.66,14.93c-3.19,7.31-12.22,6.49-18.51,5.95-9.42-.81-18.69-3.12-28.16-3.41-8.38-.25-16.67,1.36-24.84,3.18-6.11,1.37-14.63,4.94-20.15.16-6.12-5.28-7.22-14.3-7.3-21.87a128.72,128.72,0,0,1,2-20.44,58.84,58.84,0,0,1,3.59-12.15c2.2-5.66,5.43-9.06,5.6-8.88-1.65-1.73-3.62-2.65-4.73-5-4.18-8.9,6.27-16.42,12-19,20-9.09,48-8.19,66.9,3.48,5.89,3.63,17.33,16.15,6.64,22.38,6.59,3.16,8.26,12.71,9,19.49a120.3,120.3,0,0,1-1,32.66A14.94,14.94,0,0,1,113.05,102.26Z"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div className="px-6 flex-1 flex items-center space-x-3 lg:space-x-5 h-16 border-b">
            <div id="headerLinkWrapper" className="p-2 type-subhead flex items-center border-white outline-none rounded-md group-hover:bg-darken-4 group-focus-visible:shadow-focus space-x-3">
              <div id="headerLinkDevCookbook" className="no-underline hover:underline">
                <a href="https://doc.toasttab.com/doc/cookbook/index.html" className="text-gray-75 no-underline hover:underline">How-to guides</a>
              </div>
              <div id="headerLinkDevGuide">
                <a href="https://doc.toasttab.com/doc/devguide/index.html" className="text-gray-75 no-underline hover:underline">Developer guide</a>
              </div>
              <div id="headerLinkDevReference">
                <a href="https://doc.toasttab.com/openapi/" className="text-gray-75 no-underline hover:underline">API reference</a>
              </div>
              <div id="headerLinkDevPlatformGuide">
                <a href="https://doc.toasttab.com/doc/platformguide/index.html" className="text-gray-75 no-underline hover:underline">Platform guide</a>
              </div>
              <div id="headerLinkDevReleaseNotes">
                <a href="https://doc.toasttab.com/doc/relnotes/index.html" className="text-gray-75 no-underline hover:underline">Release notes</a>
              </div>
            </div>
          </div>
          <button type="button" className="mr-20 bg-transparent border-none outline-none group p-1 type-subhead h-full md:p-0 text-primary-75 hover:text-primary-100 focus-visible:text-primary-100" onClick={() => window.location.href='https://doc.toasttab.com/doc/main/techDocSearch.html'}>
            <div className="p-2 type-subhead flex items-center border-white outline-none rounded-md group-hover:bg-darken-4 group-focus-visible:shadow-focus">
              <div className="flex items-center type-subhead">
                <i className="inline-block leading-none lg:mr-2 text-color-secondary" role="img">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block align-middle h-6 w-6">
                    <path d="M15.15 15.15l5.6 5.6m-3.9-10.7a6.8 6.8 0 11-13.6 0 6.8 6.8 0 0113.6 0z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </i>
                <div className="text-default type-subhead">Search</div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <NavControls>
        <MobileMenuIcon onClick={toggleMobileMenu} />
      </NavControls>
      <MobileMenu isShown={isMobileMenuOpened}>
        <CloseIcon onClick={hideMobileMenu} />
        {navItems}
        <SearchBox />
      </MobileMenu>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav<{ hasBackground: boolean }>`
  background: ${({ hasBackground }) => (hasBackground ? '#ffffff' : 'transparent')};
  border-bottom: ${({ hasBackground }) => (hasBackground ? '3px solid #E5E5E5' : 'none')};
  display: flex;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
`;

const NavItems = styled.ul`
  display: none;
  margin-bottom: 0;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
  }

  & li {
    list-style: none;
    margin-right: 20px;
    padding-bottom: 0;
    & a {
      color: #7a7a7a;
      font-size: 20px;
      text-decoration: none;
    }
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  padding: 10px 0;
  a:not([role="button"]) {
    color: ${({ active }) => (active ? '#dd3b11' : '#7a7a7a')};
  }
`;

const LogoText = styled.span`
  color: #7a7a7a;
  font-size: 26px;
  font-weight: bold;
  margin-left: 15px;
  padding-left: 12px;
  position: relative;
  word-break: break-word;
  
  :before {
    background: #7a7a7a;
    content: '';
    height: 40px;
    left: -2px;
    position: absolute;
    top: -4px;
    width: 2px;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const SearchBoxStyled = styled(SearchBox)`
  display: none;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
  }
`;

export const MobileMenu = styled.ul<{ isShown: boolean }>`
  background: ${props => props.theme.colors.primary.main};
  border-top: 1px solid transparent;
  bottom: 0;
  box-shadow: 0 10px 100px 0 rgba(35, 35, 35, 0.1);
  color: ${props => props.theme.colors.primary.contrastText};
  display: none;
  font-size: 1.1875rem;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 50px 40px;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;
  z-index: 100;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: fixed;
    display: ${props => (props.isShown ? 'flex' : 'none')};
    flex-direction: column;
    overflow-y: auto;
  }
  & li {
    list-style: none;
    margin-right: 20px;
    & a {
      color: #ffffff;
      text-decoration: none;
      
      & :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const NavControls = styled.div`
  align-items: center;
  display: flex;
  flex: 0;
  justify-content: flex-end;
  padding: 50px 25px;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
    flex: 1;
  }
`;

export const MobileMenuIcon = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 396.7 396.7' xml:space='preserve'%3E%3Cpath fill='black' d='M17 87.8h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17C0 80.2 7.7 87.8 17 87.8zM17 215.3h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17S7.7 215.3 17 215.3zM17 342.8h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17S7.7 342.8 17 342.8z'/%3E%3C/svg%3E");
  cursor: pointer;
  display: inline-block;
  height: 1.25em;
  width: 1.25em;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const CloseIcon = styled.i`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 15.6 15.6' enable-background='new 0 0 15.642 15.642'%3E%3Cpath fill-rule='evenodd' fill='black' d='M8.9 7.8l6.5-6.5c0.3-0.3 0.3-0.8 0-1.1 -0.3-0.3-0.8-0.3-1.1 0L7.8 6.8 1.3 0.2c-0.3-0.3-0.8-0.3-1.1 0 -0.3 0.3-0.3 0.8 0 1.1l6.5 6.5L0.2 14.4c-0.3 0.3-0.3 0.8 0 1.1 0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2l6.5-6.5 6.5 6.5c0.1 0.1 0.3 0.2 0.5 0.2 0.2 0 0.4-0.1 0.5-0.2 0.3-0.3 0.3-0.8 0-1.1L8.9 7.8z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 15px 15px;
  cursor: pointer;
  height: 15px;
  position: absolute;
  right: 20px;
  top: 25px;
  width: 15px;
`;
