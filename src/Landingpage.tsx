import { Component } from 'solid-js';
import { NavBar, NavSection, NavItem } from './components/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import { HomePage } from './Homepage';

export const LandingPage: Component = () => {
    AOS.init();
    return (
        <div class="bg-dark_pennygrey text-pennywhite min-h-screen overflow-x-hidden">
            <NavBar>
                <NavSection>
                    <div class="flex items-center">
                        <img src="src/assets/Penny Inc.png" style={{ width: '35%', height: '35%' }}></img>
                    </div>
                </NavSection>
                <NavSection class="justify-end">
                    <NavItem><a href="../Homepage">PennyBoard</a></NavItem>
                </NavSection>
            </NavBar>

            <main>
                <div class=" text-left flex flex-col justify-center h-full md:h-90vh py-20 w-full md:w-3/4 px-20">
                    <h1 class="font-bold text-6xl pb-10"> Where creativity meets technology in collaborative harmony. </h1>
                    <p class="whitespace-pre-wrap"> Our team at PennyInc is a dynamic blend of creative and technical talent, encompassing skilled front-end, back-end, and full-stack developers. Embracing agility and \n problem-solving, we thrive on turning complex challenges into seamless, user-centric solutions. </p>
                </div>

                <section class="text-left py-10 flex flex-col justify-center bg-light_pennygrey h-full md:h-90vh ">

                    <div class='grid grid-cols-1 md:grid-cols-5 px-20'>
                        <div class=' col-span-3'>
                            <h1 data-aos='fade-right' data-aos-offset='80' class="font-bold text-6xl pb-10">Our Mission</h1>
                            <div class="whitespace-pre-wrap" data-aos='fade-right' data-aos-offset='140'>
                                <p>Shaping the future of collaborative technology with creativity and innovation at its core.
                                At PennyInc, we believe in the power of collaboration to bring ideas to life.
                                Our vision is to create the perfect collaboration platform that not only meet current needs but pave the way for future innovations.</p>

                            </div>
                        </div>
                        <div data-aos='fade-left' data-aos-offset='140' class='col-span-2 pl-20'>
                            <div class='flex py-6 '>
                                <div class='whitespace-pre-wrap bg-pennywhite h-auto w-4 rounded-full'></div>
                                <p class='pl-8 py-4'>"Penny Inc. has introduced a whole new standard in terms of collaborating platforms with their creative and intuitive thinking. I have never been happier working from home. 11/10"</p>
                            </div>
                            <div class='flex'>
                                <div class='bg-red-500 rounded-full w-12 h-12'></div>
                                <div class=' pl-5 flex flex-col justify-center'>
                                    <p class=' font-semibold'> Mr. Swaraj Dash </p>
                                    <p> Assisstant Professor, Heriot-Watt University</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section class="text-center py-10 bg-dark_pennygrey h-full">
                    <h2 data-aos="fade-up" data-aos-offset="140" class="text-pennywhite text-4xl font-semibold leading-normal py-5">
                        Meet Our Team
                    </h2>
                    <p data-aos="fade-up" data-aos-offset="140" class="mb-6 pb-8">
                        A diverse group of talented individuals from around the globe, united by a passion for innovation and collaboration.
                    </p>
                    <div data-aos="fade-up" class="grid grid-cols-1 gap-4 px-16">
                        <div class="bg-light_pennygrey rounded w-1/2 mx-auto">
                            <img src="../src/assets/Team.png" class="mx-auto my-2 h-3/4" alt="Team Penny" />
                            <h2 class="font-bold mt-3">Team Penny!</h2>
                                <p class="text-sm mx-5 sm:text-xs mx-5">
                                    We are a team of aspiring software engineers from different parts of this big blue ball, looking to bring our ideas and caffeinated wizards, armed with laptops and fueled by code, on a quest to conquer the digital world (one bug at a time).
                                </p>
                        </div>
                    </div>
                </section>



                <section class="py-10 bg-light_pennygrey h-full md:h-90vh px-20">
                    <h1 data-aos='fade-right' class="font-bold text-6xl py-10">What we do</h1>
                    <div class='grid grid-cols-3 gap-8'>
                        <Service label='Engagement' content=' Enhancing user interaction, we create captivating experiences that foster deeper connections and engagement.' />
                        <Service label='UX' content=' We elevate your digital experience by improving conversions —enhancing usability, customer satisfaction and retention.' />
                        <Service label='Innovation' content=' Pioneering new ideas and technologies, we push boundaries to bring groundbreaking solutions to life.' />
                        <Service label=' Efficiency' content=' Streamlining processes and workflows, we enhance operational effectiveness to deliver results swiftly and smoothly.' />
                        <Service label='Customization' content=' Tailoring solutions to meet unique needs, we ensure our services perfectly align with your specific requirements.' />
                        <Service label='Integration' content=' Seamlessly merging our technologies with existing systems, we create cohesive and interconnected experiences.' />
                        <Service label='Analytics' content='  Utilizing data-driven insights, we help optimize performance and inform strategic decision-making processes.' />
                        <Service label='Scalability' content=' Designing for growth, our solutions evolve with your needs, ensuring lasting relevance and adaptability.' />
                    </div>
                </section>
            </main>

            <footer class="text-light_pennygrey bg-dark_pennygrey p-4 text-center">
                <p>&copy; 2024 PennyInc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;

export const Service: Component<{ label: string, content: string }> = (props) => {
    return (
        <div data-aos='fade-up'>
            <h3 class='py-1'>{props.label}</h3>
            <div class=' bg-pennywhite w-3/5 h-1 rounded-full'></div>
            <p class='pt-5'> {props.content} </p>
        </div>

    );
};