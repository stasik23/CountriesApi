import { useState } from 'react';
import '../../index.css';
import { ThemeSwitch } from '../ThemeSwapper'
import styled from 'styled-components';

export const Navbar = () => {

  const NavbarWrapper = styled.nav`
    background-color: ${({ theme }) => (theme ? '#ffffff' : '#000000')};
    color: ${({ theme }) => (theme ? '#000000' : '#ffffff')};
    transition: background-color 0.4s, color 0.4s;
  `;

  return (
    // TODO Ask how fix themeSwapper
    <NavbarWrapper>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <a href='/' className="self-center text-2xl font-semibold whitespace-nowrap">
          GeoStasik
        </a>

        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse gap-5">
          <ThemeSwitch />
        </div>

        <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-theme rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="/register" className="block py-2 px-3 md:p-0 rounded hover:bg-primary">
                Register
              </a>
            </li>
            <li>
              <a href="/login" className="block py-2 px-3 md:p-0 rounded hover:bg-primary">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </NavbarWrapper>
  )
}
