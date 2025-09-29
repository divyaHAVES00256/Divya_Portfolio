import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Heart } from "lucide-react";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const features = [
    {
      icon: <Code size={30} />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices and modern standards.",
    },
    {
      icon: <Palette size={30} />,
      title: "Creative Design",
      description:
        "Crafting beautiful, intuitive interfaces that enhance user experience.",
    },
    {
      icon: <Zap size={30} />,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and seamless performance.",
    },
    {
      icon: <Heart size={30} />,
      title: "User-Centered",
      description:
        "Putting users first in every design and development decision.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-text"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="about-heading"
            >
              Passionate Developer & Designer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="about-description"
            >
              With experience in web development, I specialize
              in creating modern, responsive applications using cutting-edge
              technologies. My journey began with a curiosity for
              problem-solving and has evolved into a passion for crafting
              exceptional digital experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="about-description"
            >
              I believe in the power of collaboration, continuous learning, and
              attention to detail. When I'm not coding, you can find me
              exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="about-stats"
            >
              <div className="stat">
                <span className="stat-number gradient-text">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="about-features"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 245, 255, 0.1)",
                }}
                className="feature-card glass-effect"
              >
                <motion.div
                  whileHover={{ scale: 1.1, color: "#00f5ff" }}
                  className="feature-icon"
                >
                  {feature.icon}
                </motion.div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
