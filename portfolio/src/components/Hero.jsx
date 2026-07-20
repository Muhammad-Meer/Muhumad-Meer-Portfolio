import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../utils/constants';
import { HiArrowRight, HiDownload } from 'react-icons/hi';

const FloatingBlob = ({ size, color, x, y, duration }) => (
  <motion.div
    animate={{
      x: [0, 30, -20, 50, 0],
      y: [0, -40, 20, -30, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      top: y,
      left: x,
      filter: 'blur(60px)',
      opacity: 0.3,
      pointerEvents: 'none',
    }}
  />
);

const GridBackground = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)',
      pointerEvents: 'none',
    }}
  />
);

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 24px',
        paddingTop: 'var(--nav-height)',
      }}
    >
      <GridBackground />

      {/* Floating Blobs */}
      <FloatingBlob size={400} color="#00F5FF" x="10%" y="20%" duration={8} />
      <FloatingBlob size={300} color="#7C3AED" x="70%" y="30%" duration={6} />
      <FloatingBlob size={250} color="#00F5FF" x="50%" y="60%" duration={10} />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: 800,
          width: '100%',
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(0,245,255,0.08)',
            border: '1px solid rgba(0,245,255,0.15)',
            fontSize: '0.875rem',
            color: 'var(--primary)',
            marginBottom: 32,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Available for projects
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            marginBottom: 16,
          }}
        >
          Hi, I&apos;m {personalInfo.name}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 24,
          }}
        >
          I build{' '}
          <span
            style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            digital products
          </span>
          <br />
          that matter
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--text-secondary)',
            marginBottom: 40,
            minHeight: '2em',
          }}
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Frontend Engineer',
              2000,
              'React Specialist',
              2000,
              'MERN Stack Developer',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={50}
            deletionSpeed={30}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <motion.a
            href={personalInfo.resumeUrl}
            download
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,245,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--gradient-primary)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <HiDownload size={18} />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => scrollTo('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              borderRadius: 'var(--radius-full)',
              background: 'transparent',
              color: 'var(--text)',
              fontWeight: 600,
              fontSize: '1rem',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
            }}
          >
            Hire Me
            <HiArrowRight size={18} />
          </motion.button>

          <motion.button
            onClick={() => scrollTo('#projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text)',
              fontWeight: 600,
              fontSize: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
