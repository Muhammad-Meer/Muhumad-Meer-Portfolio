import { motion } from 'framer-motion';
import { projectsData } from '../utils/constants';
import SectionWrapper from './SectionWrapper';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        transition: 'all 0.4s ease',
        position: 'relative',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,255,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          height: 200,
          background: 'var(--gradient-dark)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <FiFolder size={48} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--gradient-primary)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
          className="project-overlay"
        />
      </div>

      <div style={{ padding: 24 }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: 8 }}>
          {project.title}
        </h3>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            marginBottom: 16,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0,245,255,0.06)',
                color: 'var(--primary)',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span style={{
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
              fontWeight: 500,
            }}>
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.2s ease',
            }}
          >
            <FiGithub size={14} />
            Code
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--gradient-primary)',
              color: '#fff',
              fontSize: '0.8125rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <FiExternalLink size={14} />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Real-world applications I&apos;ve designed and built from the ground up
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 24,
          }}
          className="projects-grid"
        >
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
