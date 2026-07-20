import { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lenis from 'lenis';
import MouseFollower from './components/MouseFollower';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Professional Full Stack Developer & Frontend Engineer specializing in React, Node.js, and modern web technologies." />
        <meta name="keywords" content="full stack developer, frontend engineer, react developer, MERN stack, web developer" />
        <meta property="og:title" content="Portfolio - Full Stack Developer" />
        <meta property="og:description" content="Professional Full Stack Developer & Frontend Engineer" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Home />
      <MouseFollower />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </HelmetProvider>
  );
}

export default App;
