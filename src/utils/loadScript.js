import '../styles/bootstrap-4.0.0-dist/css/bootstrap-grid.min.css';
import '../styles/bootstrap-4.0.0-dist/css/bootstrap.min.css';

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load ${src}`));

    document.body.appendChild(script);
  });
};

export default loadScript;
