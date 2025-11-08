import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: "WanderLust",
      description:
        "A full-stack Airbnb clone built with Node.js, Express, MongoDB, and EJS. Features authentication, booking, and Cloudinary image uploads.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
      githubUrl: "https://github.com/divyaHAVES00256/WanderLust",
      liveUrl: "https://wanderlust-vi6y.onrender.com/",
      date: "2025",
    },
    {
      id: 2,
      title: "Zerodha-Clone",
      description:
        "A responsive React-based frontend inspired by Zerodha’s trading platform. Built with React 19, React Router, and Bootstrap for smooth navigation.",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "React Router", "Bootstrap"],
      githubUrl: "https://github.com/divyaHAVES00256/zerodha-clone-frontend",
      liveUrl: "https://github.com/divyaHAVES00256/zerodha-clone-frontend",
      date: "2025",
    },
    {
      id: 3,
      title: "Realtime Multi-Device Tracker",
      description:
        "A Node.js and Socket.IO app for real-time location sharing across devices. Uses Leaflet.js and Geolocation API for live map tracking.",
      image:
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Node.js",
        "Express",
        "Socket.IO",
        "Leaflet.js",
        "Geolocation API",
      ],
      githubUrl:
        "https://github.com/divyaHAVES00256/Real-time_Multiple_Device_Tracker",
      liveUrl: "https://pebble-path.onrender.com/",
      date: "2025",
    },
    {
      id: 4,
      title: "Legal RAG Chatbot",
      description:
        "Built a Retrieval-Augmented Generation chatbot using Mistral-7B and MiniLM embeddings to answer Indian legal queries, with FAISS-based semantic search and optimized 4-bit quantized inference for efficiency.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Python",
        "Hugging Face",
        "FAISS",
        "SentenceTransformers",
        "Gradio",
        "Flask",
      ],
      githubUrl: "https://github.com/divyaHAVES00256/NyayaSetu-backend",
      liveUrl: "https://github.com/divyaHAVES00256/",
      date: "2025",
    },
    {
      id: 6,
      title: "Smart Product Pricing Challenge",
      description:
        "Developed a hybrid ML pipeline combining structured features and TF-IDF embeddings to predict e-commerce prices, achieving ~59.6% SMAPE with an optimized LightGBM regressor.",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Scikit-learn", "LightGBM", "Pandas", "NumPy"],
      githubUrl: "https://github.com/divyaHAVES00256/Amazon_ML_Hackathon_2025",
      date: "2025",
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
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="projects-subtitle"
        >
          A collection of projects that showcase my skills and passion for
          creating exceptional digital experiences
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 245, 255, 0.1)",
              }}
              className="project-card glass-effect"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="project-link"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="project-link"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-date">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  <Tag size={16} className="tech-icon" />
                  <div className="tech-list">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="projects-cta"
        >
          <motion.a
            href="https://github.com/divyaHAVES00256"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button secondary"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
