import { PROJECTS } from "../constants"
import Card from "./Card"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, y: -20},
  visible: {opacity: 1, y: 0,
  transition: {duration: 0.5, straggerChildren: 0.4,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 0.8},
  visible: { opacity: 1, scale: 1, transition: {duration: 0.5}}
}

const Projects = () => {
  return (
    <div id="projects">
        <motion.h2 className="mt-20 text-center text-4xl font-semibold" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{once: true}}>Projects</motion.h2>
        <motion.div className="flex flex-wrap justify-center py-8" initial="hidden" variants={containerVariants} whileInView="visible" viewport={{once: true}}>
            {PROJECTS.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <Card image={project.image} title={project.title} subtitle={project.subtitle} link='#'/>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Projects
