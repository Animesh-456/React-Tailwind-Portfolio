import React from "react";
import Hero from '../assets/heroimg.jpg'
import { BsFillCaretDownFill } from "react-icons/bs"
import { FaPagelines } from "react-icons/fa"

const About = () => {
    return (
        <div name="about" className="py-10 w-full bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto my-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-green-500">
                        About Me
                    </p>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div>

                        <h2 className="text-xl mt-20 text-green-500">Summary</h2>

                        <p className="text-lg font-medium mt-10">
                            Passionate about web technologies. I am a Full Stack web developer with experience building websites and web applications. I specialize in Mongo DB, Express, EJS, and Node. I also have experience working with PHP, MySQL, and xampp. Apart from my studies, I'm a tutor for more than 3 years teaching students. My teaching fields are Computer, Mathematics and Science.
                        </p>
                        <br>
                        </br>
                        <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-lime-400 to-green-500'>
                            Get to know more about my skills
                            <span className="animate-bounce">
                                <BsFillCaretDownFill size={25} className="ml-1" />
                            </span>
                        </button>

                        
                            <h2 className="text-xl mt-20 text-green-500">Education</h2>
                            <h2 className="mt-10 text-green-500 text-xl">BCA(Hons.)</h2>
                            <div className=" w-20 bg-green-600 text-center">
                                <h2>2019-2022</h2>
                            </div>
                            <p>
                                Here I have persued my graduation in bachelor of computer Application.
                            </p>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;