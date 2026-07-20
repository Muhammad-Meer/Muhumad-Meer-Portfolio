import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { FiGithub } from 'react-icons/fi';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/example')
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
          gists: data.public_gists || 0,
        });
      })
      .catch(() => {
        setStats({ repos: 25, followers: 100, gists: 10 });
      });
  }, []);

  const mockContributions = Array.from({ length: 50 }, (_, i) => ({
    level: Math.floor(Math.random() * 5),
    day: i,
  }));

  const levelColors = ['rgba(255,255,255,0.03)', 'rgba(0,245,255,0.1)', 'rgba(0,245,255,0.2)', 'rgba(0,245,255,0.35)', 'rgba(0,245,255,0.5)'];

  return (
    <SectionWrapper id="github" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            GitHub <span className="gradient-text">Stats</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            My open source contributions and activity
          </motion.p>
        </div>

        <div
          style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-xl)',
            padding: 40,
            border: '1px solid var(--border)',
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: 40,
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            {stats && [
              { label: 'Repositories', value: stats.repos },
              { label: 'Followers', value: stats.followers },
              { label: 'Gists', value: stats.gists },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: 4 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contribution graph */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <FiGithub style={{ color: 'var(--primary)' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Contribution Activity</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(50, 1fr)',
                gap: 3,
              }}
            >
              {mockContributions.map((c) => (
                <motion.div
                  key={c.day}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: c.day * 0.005 }}
                  style={{
                    aspectRatio: '1',
                    borderRadius: 3,
                    background: levelColors[c.level],
                    transition: 'all 0.2s ease',
                  }}
                  title={`Day ${c.day + 1}: Level ${c.level}`}
                />
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 4,
                marginTop: 8,
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              <span>Less</span>
              {levelColors.map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 2,
                    background: color,
                  }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
