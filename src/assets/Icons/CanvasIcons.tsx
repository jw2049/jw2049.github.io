/**
 * @file canvasIcons.tsx
 * @author Jacob Whitbourn
 * @brief customisable SVGs of icons for F29SO, team 2 group project. Implements an various SVG components for use on whiteboard page
 * @version 1.0.1
 * @date 2024-1-3
 * 
 * @copyright Copyright (c) 2024
 * 
 */

import { Component } from "solid-js";

export const SvgArrowUpLeft: Component<{colour: string, w: string, h: string}> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={"w-" + props.w + " h-" + props.h + " fill-"+ props.colour + " stroke-" + props.colour}>
      <path fill-rule="evenodd" stroke="fill-pennywhite" d="M5.25 6.31v9.44a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75h11.25a.75.75 0 0 1 0 1.5H6.31l13.72 13.72a.75.75 0 1 1-1.06 1.06L5.25 6.31Z" clip-rule="evenodd" />
    </svg>
  );
};

export const SvgCog: Component<{colour: string, w: string, h: string}> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={"w-" + props.w + " h-" + props.h + " fill-"+ props.colour + " stroke-" + props.colour}>
            <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
        </svg>
    );
};

export const SvgCross: Component<{colour: string, w: string, h: string}> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" class={"w-" + props.w + " h-" + props.h + " fill-"+ props.colour + " stroke-" + props.colour}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    );
};

export const SvgEyeDropper: Component<{colour: string, w: string, h: string}> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={"m-auto w-" + props.w + " h-" + props.h + " fill-"+ props.colour + " stroke-" + props.colour}>
            <path fill-rule="evenodd" d="M16.098 2.598a3.75 3.75 0 1 1 3.622 6.275l-1.72.46V12a.75.75 0 0 1-.22.53l-.75.75a.75.75 0 0 1-1.06 0l-.97-.97-7.94 7.94a2.56 2.56 0 0 1-1.81.75 1.06 1.06 0 0 0-.75.31l-.97.97a.75.75 0 0 1-1.06 0l-.75-.75a.75.75 0 0 1 0-1.06l.97-.97a1.06 1.06 0 0 0 .31-.75c0-.68.27-1.33.75-1.81L11.69 9l-.97-.97a.75.75 0 0 1 0-1.06l.75-.75A.75.75 0 0 1 12 6h2.666l.461-1.72c.165-.617.49-1.2.971-1.682Zm-3.348 7.463L4.81 18a1.06 1.06 0 0 0-.31.75c0 .318-.06.63-.172.922a2.56 2.56 0 0 1 .922-.172c.281 0 .551-.112.75-.31l7.94-7.94-1.19-1.19Z" clip-rule="evenodd" />
        </svg>
    );
};

export const SvgMultiShape: Component<{colour: string, w: string, h:string}> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={"w-" + props.w + " h-" + props.h + " fill-"+ props.colour + " stroke-" + props.colour}>
            <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z" />
            <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z" />
        </svg>
    );
};

export const SvgPencil: Component<{colour: string, w: string, h:string}> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={"w-" + props.w + " h-" + props.h + " fill-"+ props.colour + " stroke-" + props.colour}>
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
        </svg>
    );
};

export const SvgTextFile: Component<{colour: string, w: string, h:string}> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={"w-" + props.w + " h-" + props.h + " fill-"+ props.colour + " stroke-" + props.colour}>
            <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd" />
            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
    );
};

