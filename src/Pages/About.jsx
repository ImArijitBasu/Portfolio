import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section id="about-me" className="container mx-auto p-8 lg:h-screen flex">
      <div className="flex flex-col md:flex-row justify-center items-stretch ">
        <div className="md:w-2/5">
          <h2 className="text-3xl font-semibold text-center mb-6 uppercase md:border-r-8 md:mr-5 h-full flex justify-center items-center border-blue-900 bg-gradient-to-tr from-blue-500 to-cyan-300 text-white relative">
            <span className="opacity-0 absolute">who am i?</span>
            <Typewriter
              words={["about", "who am i?"]}
              loop={Infinity}
              cursor="|"
              typeSpeed={200}
              delaySpeed={4000}
            />
          </h2>
        </div>
        <div className="md:w-3/5 text-justify">
          <p className="text-lg text-gray-700 mb-4">
            Hello, I am{" "}
            <strong className="text-2xl text-blue-500">Arijit Basu</strong>, a
            passionate technology enthusiast with a deep interest in
            programming. From a young age, I have enjoyed learning new things
            and embracing challenges. My journey into programming began when I
            was introduced to HTML and CSS during computer classes in school. At
            that time, creating websites and designing layouts was an entirely
            new world for me, and it ignited a lasting passion. Since then, my
            enthusiasm for coding has only grown stronger.
          </p>

          <h3 className="text-2xl font-semibold mb-4 underline underline-offset-8">
            My Programming Journey
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            I started my journey in web development, initially working with
            HTML, CSS, and JavaScript. As time progressed, I delved deeper into
            modern JavaScript frameworks such as React.js and Node.js. I have
            always been eager to learn new technologies and apply them in my
            projects. Currently, I work extensively with{" "}
            <strong>React.js</strong> and <strong>Node.js</strong>, and I am
            continuously improving my skills to build responsive and efficient
            web applications.
          </p>

          <h3 className="text-2xl font-semibold mb-4 underline underline-offset-8">
            My Interests Outside Programming
          </h3>
          <p className="text-lg text-gray-700">
            Outside of programming, I have a keen interest in various creative
            and recreational activities. I enjoy playing sports, especially
            football, as it helps me stay active and focused. Additionally, I
            have a passion for photography, and I often capture moments that
            inspire me. I believe in maintaining a healthy work-life balance and
            enjoy spending my free time exploring new hobbies and enhancing my
            skills beyond the world of code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
