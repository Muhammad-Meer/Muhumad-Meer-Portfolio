import { motion } from 'framer-motion';
import { certificatesData } from '../utils/constants';
import SectionWrapper from './SectionWrapper';
import { FiAward, FiExternalLink } from 'react-icons/fi';

export default function Certificates() {
  return (
    <SectionWrapper id="certificates" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Certificates & <span className="gradient-text">Credentials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Industry-recognized certifications that validate my expertise
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {certificatesData.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(0,245,255,0.3)' }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                padding: 28,
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0,245,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}
              >
                <FiAward />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 4 }}>{cert.title}</h3>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.year}</span>
                </div>
              </div>
              <FiExternalLink style={{ color: 'var(--text-muted)', fontSize: '1rem', flexShrink: 0 }} />
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
