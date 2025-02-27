import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt 
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1.05}
    transitionSpeed={450}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
Hey everyone, I’m Lungelo, a comms strategist by day with a passion for AI, NLP, LLMs, and Data Science. I’m always curious about how technologies like DeepSeek and ChatGPT work and love digging into their mechanics. Learning, building, and solving problems in AI keeps me going. Right after High School before diving into corporate comms and strategy, I spent three years in the trenches of a call center, making sales and learning firsthand how to connect, persuade, and deliver value. That foundation shaped everything I do today, It taught me resilience, adaptability, and the power of clear, impactful communication—skills that now fuel my work in both marketing strategy and AI-driven innovation.
Today, I blend storytelling with data, crafting compelling narratives while exploring the limitless possibilities of AI and automation. Whether it's building marketing campaigns, optimizing communications, or diving deep into machine learning models, I’m always pushing forward, learning, and finding new ways to create value.
Let’s connect, collaborate, and build something great! 🚀.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
