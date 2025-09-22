import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const AboutMe = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [expanded, setExpanded] = useState("aboutMe");

  const handleContactRedirect = () => {
    // Navigate to home page
    navigate('/', { replace: true });

    // Scroll to contact section after a brief delay
    setTimeout(() => {
      scroller.scrollTo('contact', {
        smooth: true,
        duration: 500,
      });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAccordionChange = (panel) => {
    setExpanded(expanded === panel ? null : panel);
  };

  return (
   
    <section
      id="aboutMe"
      className="bg-gray-100 pt-20 pb-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Animated Title */}
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi there! 👋 
        </motion.h1>

        {/* About Me Section */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-12">
          {/* Profile Picture - Now Fixed */}
          <motion.div
            className="w-56 h-56 flex-shrink-0 "
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="./images/profilePic (2).png"
              alt="Jeevitha Pugazhendi"
              className="w-90 h-90 rounded-full object-cover shadow-lg mx-auto border-4 border-gray-300"
            />
          </motion.div>

          {/* Text & Accordion - Now Scrolls Separately */}
          <div className="max-w-xl text-center md:text-left flex-1">
            

            {/* Accordion Section */}
            <motion.div
              className="mt-6 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* My Story */}
              <Accordion 
               expanded={expanded === "aboutMe"}
              onChange={() => handleAccordionChange("aboutMe")}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
              >
                
                  <Typography variant="h6">
                    👋 About Me
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    
                  I'm <span className="font-semibold">Jeevitha Pugazhendi</span> 👩‍💻, a <span className="font-semibold">Full-Stack Developer with a front-end focus,</span> passionate about crafting seamless digital experiences. With expertise in the <span className="font-semibold">MERN stack (MongoDB, Express.js, React, Node.js),</span> I build dynamic, user-friendly applications that balance aesthetics and functionality.<br></br>

My background in <span className="font-semibold">UI/UX design</span> enhances my ability to create intuitive and engaging user experiences.

Always eager to innovate, I love <span className="font-semibold">exploring new front-end trends, optimizing performance, and integrating smooth animations.</span> Let's build something amazing together! 🚀🎨
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
              expanded={expanded === "story"}
              onChange={() => handleAccordionChange("story")}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant="h6">
                    📖 My Story
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    My journey into tech started with a{" "}
                    <span className="font-semibold">
                      Master’s in Computer Application 🎓,
                    </span>{" "}
                    which gave me a strong foundation in{" "}
                    <span className="font-semibold">
                      software development, algorithms, and
                      problem-solving.
                    </span>{" "}
                    Over time, I discovered my passion for{" "}
                    <span className="font-semibold">
                      creating beautiful, user-friendly
                      interfaces
                    </span>{" "}
                    that make digital interactions
                    effortless and enjoyable. To refine my
                    design skills, I earned a{" "}
                    <span className="font-semibold">
                      UX Design Certification from General
                      Assembly 🎨,
                    </span>{" "}
                    equipping me with the expertise to craft
                    engaging and accessible web
                    applications. This combination of{" "}
                    <span className="font-semibold">
                      design and development
                    </span>{" "}
                    allows me to create interfaces that not
                    only look good but feel right.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* What I Do Best */}
              <Accordion
              expanded={expanded === "skills"}
              onChange={() => handleAccordionChange("skills")}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant="h6">
                    💡 What I Do Best
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  ✅ <span className="font-semibold">Front-end Development –</span> Crafting
                    modern, responsive, and interactive UIs
                    using React & TailwindCSS.<br></br> ✅<span className="font-semibold">UX/UI
                    Design –</span>  Creating visually appealing and
                    accessible designs that enhance user
                    experiences.<br></br> ✅ <span className="font-semibold">Full-Stack Development –</span>
                    Building scalable web apps with Node.js,
                    Express, and MongoDB.<br></br> ✅ <span className="font-semibold">Problem-Solving& Collaboration –</span>
                     Thinking critically
                    and working in agile, fast-paced teams.
                    At Per Scholas, I’ve worked on projects
                    where I built full-stack applications,
                    designed dynamic UIs using React, and
                    developed RESTful APIs with Node.js &
                    Express. These experiences strengthened
                    my coding abilities and teamwork skills.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* My Mission & Values */}
              <Accordion
              expanded={expanded === "mission"}
              onChange={() => handleAccordionChange("mission")}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant="h6">
                    🚀 My Mission & Values
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  I believe in <span className="font-semibold">innovation, collaboration, and user-centered design.</span> My goal is to build applications that are not only <span className="font-semibold">technically robust but also delightful to use.</span> I’m passionate about:<br></br>

🎯 Creating seamless digital experiences that solve real-world problems.<br></br>
🤝 Building inclusive and accessible designs that reach diverse audiences.<br></br>
📈 Continuously learning & growing in the ever-evolving world of tech.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Personal Touch */}
              <Accordion
              expanded={expanded === "personal"}
              onChange={() => handleAccordionChange("personal")}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant="h6">
                    ✨ A Little Personal Touch
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  When I’m not coding, you’ll find me:<br></br>
🎮 <span className="font-semibold">Playing puzzle games</span> and exploring new forms of interactive storytelling.<br></br>
📚 <span className="font-semibold">Reading about UI/UX trends</span> and staying updated with front-end development.<br></br>
☕ <span className="font-semibold">Sipping coffee</span> and brainstorming ideas for my next project.<br></br><br></br>

And outside of tech…<br></br>
👩‍👧‍👦 <span className="font-semibold">Mom to two wonderful kids –</span> they keep me on my toes!<br></br>
🌿 <span className="font-semibold">Enjoying nature walks</span> and recharging outdoors.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>

            {/* Contact Button */}
            <motion.button
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition-all"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={handleContactRedirect}
              
            >
              Contact Me 📩
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
