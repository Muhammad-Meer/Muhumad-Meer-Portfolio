import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { serviceOptions, budgetOptions } from '../utils/constants';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { FiSend, FiCheck, FiAlertCircle, FiLoader } from 'react-icons/fi';

const InputField = ({ label, type = 'text', value, onChange, required, error, textarea, options, placeholder }) => {
  const id = label.toLowerCase().replace(/\s+/g, '-');

  const sharedStyles = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: 'var(--radius-md)',
    border: error ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.08)',
    color: 'var(--text)',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    outline: 'none',
    fontFamily: 'var(--font-sans)',
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = 'rgba(0,245,255,0.4)';
    e.target.style.boxShadow = '0 0 20px rgba(0,245,255,0.05)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = error ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: 500,
          marginBottom: 8,
          color: 'var(--text-secondary)',
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--primary)', marginLeft: 4 }}>*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ ...sharedStyles, resize: 'vertical', minHeight: 120 }}
        />
      ) : options ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={sharedStyles}
        >
          <option value="" style={{ background: 'var(--bg-card)' }}>Select {label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} style={{ background: 'var(--bg-card)' }}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={sharedStyles}
        />
      )}
      {error && (
        <p style={{ color: 'rgba(239,68,68,0.8)', fontSize: '0.8rem', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
          <FiAlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
};

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    service: '',
    details: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.details.trim()) newErrors.details = 'Project details are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await emailjs.send(
        'service_010q00j',
        'template_6d9vvi9',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          budget: formData.budget,
          service: formData.service,
          message: formData.details,
        },
        '_LndCOHWTFZASsQxr'
      );
      toast.success('Message sent successfully! I\'ll get back to you within 24 hours.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        icon: <FiCheck />,
        style: { background: 'var(--bg-card)', color: 'var(--text)', border: '1px solid rgba(0,245,255,0.15)' },
      });
      setFormData({ name: '', email: '', phone: '', company: '', budget: '', service: '', details: '' });
    } catch {
      toast.error('Failed to send message. Please try again or email me directly.', {
        position: 'bottom-right',
        autoClose: 5000,
        icon: <FiAlertCircle />,
        style: { background: 'var(--bg-card)', color: 'var(--text)', border: '1px solid rgba(239,68,68,0.2)' },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Let&apos;s Work <span className="gradient-text">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Have a project in mind? Let&apos;s build something amazing together
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: 680,
            margin: '0 auto',
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-xl)',
            padding: 48,
            border: '1px solid var(--border)',
          }}
          className="contact-form-card"
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0 20px',
              }}
              className="form-grid"
            >
              <InputField
                label="Full Name"
                value={formData.name}
                onChange={handleChange('name')}
                required
                error={errors.name}
                placeholder="John Doe"
              />
              <InputField
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                required
                error={errors.email}
                placeholder="john@example.com"
              />
              <InputField
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange('phone')}
                placeholder="+1 (555) 123-4567"
              />
              <InputField
                label="Company"
                value={formData.company}
                onChange={handleChange('company')}
                placeholder="Company Inc."
              />
              <InputField
                label="Project Budget"
                value={formData.budget}
                onChange={handleChange('budget')}
                options={budgetOptions}
              />
              <InputField
                label="Service Required"
                value={formData.service}
                onChange={handleChange('service')}
                options={serviceOptions}
                required
                error={errors.service}
              />
            </div>

            <InputField
              label="Project Details"
              textarea
              value={formData.details}
              onChange={handleChange('details')}
              required
              error={errors.details}
              placeholder="Describe your project, goals, timeline, and any specific requirements..."
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.02, boxShadow: '0 0 40px rgba(0,245,255,0.3)' } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              style={{
                width: '100%',
                padding: '16px 32px',
                borderRadius: 'var(--radius-md)',
                background: loading ? 'rgba(0,245,255,0.3)' : 'var(--gradient-primary)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                marginTop: 8,
              }}
            >
              {loading ? (
                <>
                  <FiLoader style={{ animation: 'spin 1s linear infinite' }} />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
