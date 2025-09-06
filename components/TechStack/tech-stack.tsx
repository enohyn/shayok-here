import React from 'react'
import TextSphere from './text-sphere'

function TechStack() {
    return (<section id='about' className='flex h-full xl:h-[calc(100vh-5vh)] items-center'>
        <div className="w-full lg:container lg:mx-auto">
            <div className="w-full gap-y-10 flex flex-col portfolio-box backdrops rounded-xl py-20">
                <h2 className='font-space text-white text-center'>Get To Know Me</h2>
                <div className='gap-6 flex flex-col-reverse xl:flex-row'>
                    <div className="w-full xl:w-6/12 flex flex-col gap-y-4 justify-center px-5 md:px-10">
                        {/* <div className="w-full justify-start flex"> */}
                        <h3 className="text-white font-space">
                            Framework and Technologies
                        </h3>
                        {/* </div> */}
                        <TextSphere />
                    </div>
                    <div className="w-full xl:w-6/12 flex flex-col gap-y-4 text-white px-5 md:px-10 justify-start ">
                        <h3 className='font-space'>
                            A Unique Perspective on Life and Work
                        </h3>
                        <p className='indent-2 text-justify'>
                            As a front-end developer, I combine my love for coding with my passion for design to create beautiful and functional websites. My expertise includes HTML, CSS, JavaScript, CMS and React, and I am always eager to learn new technologies and frameworks.
                        </p>
                        <p className='indent-2 text-justify'>
                            {"When I'm not coding, you can find me staying active outdoors, whether it's hiking, biking, or playing sports. I believe that maintaining a healthy lifestyle is key to staying energized and productive."}
                        </p>
                        <p className="indent-2 text-justify">
                            Overall, I am someone who is passionate about both programming and life, and I strive to bring that enthusiasm to everything I do.
                        </p>
                    </div>
                </div>

            </div>


        </div>

    </section>)
}

export default TechStack