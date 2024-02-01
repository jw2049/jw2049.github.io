import { Component } from "solid-js";
/**
 * @file Hamburger.tsx
 * @author Jacob Whitbourn
 * @brief Hamburger icon for F29SO, team 2 group project. Implements a Hamburger icon with functionality
 * @version 0.2
 * @date 2023-10-13
 * 
 * @copyright Copyright (c) 2024
 * 
 */

/**
 * to use the icon include:
 * import { Hamburger, closeSideBar } from '../components/Hamburger';
 */

/**
 * A Hamburger icon is used to open or close a sidebar and thus will need access to the root
 * of the sidebar denoted with the ID 'SideBar'.
 * 
 * The root of the sidebar in use will need to have this ID applied to it before the icon will
 * have any effect.
 * 
 * The inclusion of the closeSideBar function will need to be added to your sidebar. 
 */

// TODO: add animating of opening and closing of a sidebar
// TODO: add rezising

function openSideBar() {
    document.getElementById('SideBar').style.display = 'block';
    document.getElementById('Hamburger').style.display = 'none';
}

export function closeSideBar() {
    document.getElementById('SideBar').style.display = 'none';
    document.getElementById('Hamburger').style.display = 'block';
}

export const Hamburger: Component = () => {
    return ( 
      <div id='Hamburger' class='my-auto mx-5' onClick={openSideBar}>
        <div class='bg-pennywhite h-1 w-7 m-1 rounded-md'></div>
        <div class='bg-pennywhite h-1 w-7 m-1 rounded-md'></div>
        <div class='bg-pennywhite h-1 w-7 m-1 rounded-md'></div>
      </div>
    );
  };