import { Component, JSXElement, createReaction, createSignal } from 'solid-js';

document.styleSheets[0].insertRule(".navbar-up { transform: translateY(-100%); }");
document.styleSheets[0].insertRule(".navbar-transparent { background-color: dark_pennygrey !important; color: pennywhite !important; box-shadow: none !important;}");

export const NavBar: Component<{children?: JSXElement}> = (props) => {
	let element: HTMLElement;
	let lastScrollY: number = 0.0;

	window.addEventListener("scroll", (scrollEvent) => {
		element.classList.toggle("navbar-transparent", window.scrollY < 400);
		element.classList.toggle("navbar-up", window.scrollY - lastScrollY > 0);

		lastScrollY = window.scrollY;
	});

	return (
		<nav ref={element} class="navbar-transparent bg-light_pennygrey  text-white fixed top-0 left-0 flex py-5 px-20 w-full z-50 text-xl shadow-xl transition-all duration-500">
			{props.children}
		</nav>
	);
};

export const NavSection: Component<{children?: JSXElement, class?: string}> = (props) => {
	return (
		<section class={`${props.class} h-full w-full flex gap-4 items-center`}>
			{props.children}
		</section>
	);
};

export const NavItem: Component<{children?: JSXElement}> = (props) => {
	return (
		<span class="">
			{props.children}
		</span>
	);
};