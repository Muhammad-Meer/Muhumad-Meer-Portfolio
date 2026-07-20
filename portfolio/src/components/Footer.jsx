import { motion } from 'framer-motion';
import { personalInfo, navLinks } from '../utils/constants';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiHeart } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.social.twitter, label: 'Twitter' },
  { icon: FiInstagram, href: personalInfo.social.instagram, label: 'Instagram' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '60px 24px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient orb */}
      <div
        style={{
          position: 'absolute',
          bottom: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <motion.button
              onClick={() => scrollTo('#hero')}
              whileHover={{ scale: 1.05 }}
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 16,
                display: 'inline-block',
              }}
            >
              Portfolio
            </motion.button>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                maxWidth: 320,
              }}
            >
              Building world-class digital products that scale. Available for freelance work and full-time opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, fontSize: '0.95rem' }}>Quick Links</h4>
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                whileHover={{ x: 4 }}
                style={{
                  display: 'block',
                  color: 'var(--text-muted)',
                  fontSize: '0.875rem',
                  padding: '4px 0',
                  transition: 'color 0.2s ease',
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, fontSize: '0.95rem' }}>Connect</h4>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: 'var(--primary)' }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    transition: 'all 0.2s ease',
                  }}
                  title={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            Made with <FiHeart style={{ color: 'var(--primary)' }} /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
