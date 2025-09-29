import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Database,
  Palette,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Zap,
} from "lucide-react";
import "./Skills.css";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={32} />,
      skills: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "SASS/SCSS", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server size={32} />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "Django", level: 80 },
        { name: "GraphQL", level: 85 },
        { name: "REST APIs", level: 92 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: <Database size={32} />,
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "AWS", level: 82 },
        { name: "Docker", level: 85 },
        { name: "Firebase", level: 88 },
      ],
    },
    {
      title: "Design & Tools",
      icon: <Palette size={32} />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Git", level: 92 },
        { name: "Webpack", level: 80 },
        { name: "Jest", level: 85 },
        { name: "Cypress", level: 82 },
      ],
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
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="skills-subtitle"
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="skills-grid"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 245, 255, 0.1)",
              }}
              className="skill-category glass-effect"
            >
              <div className="category-header">
                <motion.div
                  whileHover={{ scale: 1.1, color: "#00f5ff" }}
                  className="category-icon"
                >
                  {category.icon}
                </motion.div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                    }}
                    className="skill-item"
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8,
                          ease: "easeOut",
                        }}
                        className="skill-progress"
                        style={{
                          background:
                            skill.level >= 90
                              ? "linear-gradient(90deg, #00f5ff, #8b5cf6)"
                              : skill.level >= 85
                              ? "linear-gradient(90deg, #8b5cf6, #ec4899)"
                              : "linear-gradient(90deg, #ec4899, #f97316)",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="skills-highlights"
        >
          <div className="highlight-item">
            <Zap className="highlight-icon" />
            <div className="highlight-content">
              <h4>Fast Development</h4>
              <p>Rapid prototyping and efficient development workflows</p>
            </div>
          </div>

          <div className="highlight-item">
            <Smartphone className="highlight-icon" />
            <div className="highlight-content">
              <h4>Responsive Design</h4>
              <p>Mobile-first approach with seamless user experiences</p>
            </div>
          </div>

          <div className="highlight-item">
            <Cloud className="highlight-icon" />
            <div className="highlight-content">
              <h4>Cloud Solutions</h4>
              <p>Scalable architecture and modern deployment practices</p>
            </div>
          </div>

          <div className="highlight-item">
            <GitBranch className="highlight-icon" />
            <div className="highlight-content">
              <h4>Best Practices</h4>
              <p>Clean code, version control, and collaborative development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
