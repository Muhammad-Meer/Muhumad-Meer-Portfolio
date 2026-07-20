import { motion } from 'framer-motion';
import { techStack } from '../utils/constants';
import SectionWrapper from './SectionWrapper';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiMysql, SiJavascript, SiTypescript,
  SiTailwindcss, SiBootstrap, SiRedux, SiGit, SiDocker,
  SiFirebase, SiGraphql,
} from '../lib/si-icons';

const iconMap = {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiMysql, SiJavascript, SiTypescript,
  SiTailwindcss, SiBootstrap, SiRedux, SiGit, SiDocker,
  SiFirebase, SiGraphql,
};

export default function TechStack() {
  return (
    <SectionWrapper id="techstack" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Tech <span className="gradient-text">Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Technologies I work with daily to ship production-grade software
          </motion.p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'center',
          }}
        >
          {techStack.map((tech, i) => {
            const Icon = iconMap[tech.icon] || SiReact;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ y: -8, scale: 1.05 }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <Icon style={{ color: tech.color, fontSize: '1.5rem' }} />
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
