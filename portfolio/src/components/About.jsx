import { motion } from 'framer-motion';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default;
import { personalInfo } from '../utils/constants';
import SectionWrapper from './SectionWrapper';
import { HiCode, HiCube } from 'react-icons/hi';
import { FiUsers, FiCoffee } from 'react-icons/fi';
import myPic from '../assets/mypic.png';

const statIcons = {
  'Projects Completed': HiCube,
  'Technologies': HiCode,
  'Happy Clients': FiUsers,
  'Coffee Consumed': FiCoffee,
};

const timelineData = [
  { year: '2025', event: 'Senior Frontend Engineer at Tech Corp', desc: 'Leading frontend architecture for SaaS platform' },
  { year: '2023', event: 'Full Stack Developer at StartupXYZ', desc: 'Built and scaled 3 SaaS products from zero' },
  { year: '2021', event: 'React Developer at Digital Agency', desc: 'Delivered 15+ client projects' },
  { year: '2019', event: 'Started Professional Journey', desc: 'Began career as a web developer' },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            A decade of turning complex problems into elegant digital solutions
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'start',
            marginBottom: 80,
          }}
          className="about-grid"
        >
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                aspectRatio: '4/5',
                maxWidth: 400,
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--gradient-primary)',
                  opacity: 0.1,
                  zIndex: 2,
                }}
              />
              <img
                src={myPic}
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 32,
                  background: 'linear-gradient(transparent, rgba(5,8,22,0.9))',
                  zIndex: 3,
                }}
              >
                <p style={{ fontWeight: 600, fontSize: '1.125rem' }}>{personalInfo.name}</p>
                <p style={{ color: 'var(--primary)', fontSize: '0.875rem' }}>{personalInfo.title}</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            {personalInfo.aboutParagraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  marginBottom: 20,
                }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Timeline */}
            <div style={{ marginTop: 40 }}>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: 24,
                  color: 'var(--text)',
                }}
              >
                Journey
              </h3>
              {timelineData.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    gap: 16,
                    paddingLeft: 24,
                    borderLeft: '1px solid rgba(0,245,255,0.15)',
                    paddingBottom: 24,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: -5,
                      top: 4,
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      boxShadow: '0 0 10px rgba(0,245,255,0.4)',
                    }}
                  />
                  <div>
                    <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                      {item.year}
                    </span>
                    <h4 style={{ fontWeight: 600, marginBottom: 4, fontSize: '1rem' }}>{item.event}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
          }}
          className="stats-grid"
        >
          {personalInfo.stats.map((stat, i) => {
            const Icon = statIcons[stat.label] || HiCode;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,245,255,0.1)' }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 32,
                  textAlign: 'center',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                }}
              >
                <Icon style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: 16 }} />
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: 8,
                  }}
                >
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
