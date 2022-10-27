import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import logo from '../assets/images/logo.svg';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';
import Wrapper from '../assets/images/wrappers/NavbarWrapper';

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="comfy sloth" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}

          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}

          {myUser && (
            <li>
              <Link to="/history">history</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </Wrapper>
  );
};

export default Navbar;
