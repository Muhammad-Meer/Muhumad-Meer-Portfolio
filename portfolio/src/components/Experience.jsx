import { motion } from 'framer-motion';
import { experienceData } from '../utils/constants';
import SectionWrapper from './SectionWrapper';
import { FiBriefcase } from 'react-icons/fi';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            My professional journey building products at scale
          </motion.p>
        </div>

        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: 24,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, var(--primary), var(--secondary), transparent)',
              opacity: 0.3,
            }}
          />

          {experienceData.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: 64,
                paddingBottom: 48,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: 16,
                  top: 4,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  boxShadow: '0 0 20px rgba(0,245,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--bg)',
                  }}
                />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 4 }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 28,
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <FiBriefcase style={{ color: 'var(--primary)', fontSize: '1.25rem', marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>{exp.role}</h3>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 4 }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.875rem' }}>
                        {exp.company}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>•</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul style={{ padding: 0 }}>
                  {exp.achievements.map((achievement, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.1 }}
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        paddingLeft: 20,
                        position: 'relative',
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 10,
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: 'var(--secondary)',
                          opacity: 0.5,
                        }}
                      />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
