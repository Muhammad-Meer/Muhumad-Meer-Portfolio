import { motion } from 'framer-motion';
import { servicesData } from '../utils/constants';
import SectionWrapper from './SectionWrapper';
import {
  SiReact, SiNodedotjs, SiNextdotjs, SiMongodb,
  SiExpress, SiDocker, SiTailwindcss,
} from '../lib/si-icons';
import { FiCode } from 'react-icons/fi';

const iconMap = {
  SiReact, SiNodedotjs, SiNextdotjs, SiMongodb,
  SiExpress, SiDocker, SiTailwindcss,
};

const getIcon = (iconName) => {
  const Icon = iconMap[iconName];
  return Icon ? <Icon /> : <FiCode />;
};

export default function Services() {
  return (
    <SectionWrapper id="services" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            What I <span className="gradient-text">Do</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Services I offer to help businesses build world-class digital products
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                padding: 32,
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,245,255,0.2)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,245,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0,245,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '1.25rem',
                  marginBottom: 20,
                }}
              >
                {getIcon(service.icon)}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
