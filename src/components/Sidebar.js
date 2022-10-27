import React from 'react';
import { FaTimes } from 'react-icons/fa';

import logo from '../assets/images/logo.svg';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';
import Wrapper from './../assets/images/wrappers/SidebarWrapper';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div>
          <div className="sidebar-header">
            <img src={logo} className="logo" alt="comfy sloth" />
            <button className="close-btn" type="button" onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="checkout" onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
          {myUser && (
            <li>
              <Link to="history" onClick={closeSidebar}>
                history
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
