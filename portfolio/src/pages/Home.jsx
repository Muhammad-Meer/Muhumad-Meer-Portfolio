import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Certificates from '../components/Certificates';
import Blog from '../components/Blog';
import GitHubStats from '../components/GitHubStats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Experience />
      <Services />
      <Testimonials />
      <Certificates />
      <Blog />
      <GitHubStats />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
