import type { Component, JSX, JSXElement } from 'solid-js';
import { NavBar, NavSection, NavItem } from './components/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

export const HomePage: Component = () => {
    AOS.init();
    return (
        <div class=' h-full w-full bg-dark_pennygrey overflow-x-hidden'> {/* Entire page starts here*/}
            <div>
                <NavBar>
                    <NavSection>
                        <div class="flex items-center">
                            <img src="src/assets/Penny Inc.png" style={{ width: '35%', height: '35%' }}></img>
                        </div>
                    </NavSection>
                    <NavSection class="justify-end">
                        <NavItem><a href="/">About Us</a></NavItem>
                    </NavSection>
                </NavBar>
            </div>
            <div class='flex flex-col items-stretch'> {/* content of entire page*/}

                <div class='px-14 p-40 justify-center grid grid-cols-1 md:grid-cols-2 items-center h-auto md:h-90vh '>
                    <div>
                        <img src="src/assets/PennyBoardLogo.png" class='h-half w-half drop-shadow-2xl'></img>
                        <p class='text-pennywhite p-5'> Step into a realm of limitless collaboration with PennyBoard, your all-in-one solution for interactive teamwork. With PennyBoard, every idea finds its canvas, every task meets its solution, and every voice is heard..</p>
                        {/* Unleash your creativity on our collaborative whiteboard, where drawing and annotation seamlessly blend with file sharing, chat, voice calls, and task management. Break free from the constraints of traditional communication and elevate your team's productivity.*/}
                        <div class="flex items-center">
                            <button class="ml-4 bg-gray-400 hover:bg-gray-600 text-white px-8 py-4 rounded-md font-medium">Try for free!</button>
                        </div>
                    </div>
                    <div class='flex items-center justify-center'>
                        <img src="src/assets/Penny.png" class='h-1/3 w-1/3 drop-shadow-2xl brightness-125'></img>
                    </div>
                </div>
                {/*EASY TO COLLAB */}

                <div class='bg-light_pennygrey px-14 py-32 grid grid-cols-1 md:grid-cols-2 items-center h-auto md:h-90vh '>
                    <div class='p-5'>
                        <h1 data-aos='fade-right' data-aos-offset='170' class='text-pennywhite text-4xl font-semibold leading-normal'>Easy Collaboration</h1>
                        <p data-aos='fade-right' data-aos-offset='200' class='text-pennywhite'>Experience effortless collaboration with PennyBoard. Our user-friendly interface ensures that working together is as intuitive as putting pen to paper. Whether you're drawing, chatting, or managing tasks.</p>
                    </div>

                    <div data-aos='fade-left' data-aos-offset='200' class='flex justify-center items-center '>
                        <img src="src/assets/CompanyPagePNGs/ChatAnims/ChatSS.png" alt="Empty Chat" class=' w-2/3 h-auto object-contain drop-shadow-2xl brightness-125' />
                    </div>
                </div>
                {/*Intiuitive Design */}

                <div class='bg-dark_pennygrey px-14 py-32 grid grid-cols-1 md:grid-cols-2 items-center h-auto md:h-90vh '>
                    <div data-aos='fade-right' data-aos-offset='200' class='flex justify-center items-center' >
                        <img src="src/assets/CompanyPagePNGs/Projects.png" alt="Logo" class='w-2/3 h-auto object-contain drop-shadow-2xl brightness-125 rounded-3xl'></img>
                    </div>
                    <div class='basis-1/2 flex items-center px-16'>
                        <div>
                            <h1 data-aos='fade-left' data-aos-offset='150' class=' text-pennywhite text-4xl font-semibold leading-normal px-5 '> Intiuitive Design</h1>
                            <p data-aos='fade-left' data-aos-offset='170' class='text-pennywhite p-5'> With PennyBoard, effortlessly switch between projects, ensuring a cohesive and engaging experience as you connect with various teams. Discover the simplicity of our design, offering a fluid pathway to efficiently traverse the landscape of collaborative endeavors.</p>
                        </div>
                    </div>
                </div>

                {/*Management */}

                <div class='bg-light_pennygrey px-14 py-32 grid grid-cols-1 md:grid-cols-2 items-center h-auto md:h-90vh '>
                    <div class='p-5'>
                        <div>
                            <h1 data-aos='fade-right' data-aos-offset='150' class=' text-pennywhite text-4xl font-semibold leading-normal px-5'> Management</h1>
                            <p data-aos='fade-right' data-aos-offset='170' class=' text-pennywhite p-5'> Lead your team with PennyBoard's user-friendly tools. Easily add or remove members and assign roles at the click of a button, streamlining collaboration and enhancing project management. Simplify team administration for increased productivity and effective role distribution. </p>
                        </div>
                    </div>

                    <div data-aos='fade-left' data-aos-offset='200' class='flex items-center justify-center'>
                        <img src="src/assets/CompanyPagePNGs/Managment.png" alt="Logo" class=' w-2/3 h-auto object-contain drop-shadow-2xl brightness-125 rounded-3xl'></img>
                    </div>
                </div>
            </div>


            {/* End of Page */}

            <footer class="bg-dark_pennygrey py-8 px-4 text-white flex items-center justify-between">
                <div class="flex items-center">
                    <a href="#" class="text-sm font-medium hover:text-gray-300">Penny+</a>
                    <span class="mx-4">|</span>
                    <a href="#" class="text-sm font-medium hover:text-gray-300">Safety</a>
                    <span class="mx-4">|</span>
                    <a href="#" class="text-sm font-medium hover:text-gray-300">Policies</a>
                </div>
                <div class="flex justify-center">
                    <span class="mx-4font font-semibold">© Copyright Penny Inc 2023-2024</span>
                </div>
                <div class="flex items-center">
                    <button class="ml-4 bg-gray-400 hover:bg-gray-600 text-white px-8 py-4 rounded-md font-medium">Open PennyBoard</button>
                </div>
            </footer>
        </div>
    );
}
