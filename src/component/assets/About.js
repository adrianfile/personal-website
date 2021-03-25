import React from 'react';
import Scratch from './Images/scratchidea.png'

const About = () => {
    return (
        <section class="about flex mt-96 pb-24 pt-20">
            <div class='about_background flex sm:w-1/4  sm:rounded-lg  sm:mx-35 md:mx-40 2xl:mx-72 pt-10 pb-14'>
                <div class="mt-2 ">
                   <p class='aboutheader oswald text-2xl font-bold uppercase'>about me</p>
                   <br></br>
                   <p class='oswald font-thin sm:text-justify'>Web Developer and Founder of Scratch Idea. I like confusing things like math and also love to help out with programming. I spent time sharing my self-taught experience learning Website Programming.<br></br><br></br>Currently, I'm a 3 year student at Areta Informatics College. I majored in informatics engineering. I took to my focus on programming development.</p>
                   <br></br>
                   <p class="oswald font-bold">Born : <span>3 Sept. 2000 on Central Lampung, Indonesia</span></p>
                </div>
            </div>
            <div class="pt-10">
                <div>
                    <p class="last_organization oswald text-2xl font-bold">LAST ORGANIZATION :</p>
                    <br></br>
                    <div class="flex mx-auto xl:m-0 ">
                        <div class="pb-32 content-center">
                            <img draggable="false" class="organization" src={ Scratch } alt=" Scratch Idea"/>
                        </div>
                        <div class="oswald starting mt-3 justify-center">
                            <table>
                                <tr>
                                    <td><p class="text-left font-bold">Start </p></td>
                                    <td><p class="font-bold"> :</p></td>
                                    <td><p class="text-left">March 2021</p></td>
                                </tr>
                                <tr>
                                    <td><p class="text-left font-bold">As </p></td>
                                    <td><p class="font-bold">:</p></td>
                                    <td><p class="text-left">Founder and Head of Technical</p></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;