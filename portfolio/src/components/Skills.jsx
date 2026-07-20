import { motion } from 'framer-motion';
import { skillsData } from '../utils/constants';
import SectionWrapper from './SectionWrapper';
import { SiReact, SiNodedotjs, SiMongodb, SiDocker } from '../lib/si-icons';

const iconMap = {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Technologies and tools I use to build world-class products
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {Object.entries(skillsData).map(([key, category], idx) => {
            const Icon = iconMap[category.icon] || SiReact;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 32,
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 24,
                  }}
                >
                  <Icon style={{ color: 'var(--primary)', fontSize: '1.5rem' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{category.title}</h3>
                </div>

                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                    style={{ marginBottom: 16 }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 6,
                        fontSize: '0.875rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                      <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{skill.level}%</span>
                    </div>
                    <div
                      style={{
                        height: 6,
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 3,
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 + i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                          height: '100%',
                          borderRadius: 3,
                          background: 'var(--gradient-primary)',
                          boxShadow: '0 0 10px rgba(0,245,255,0.3)',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
