import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.addEventListener('load', (e) => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'IMG' && target.getAttribute('loading') === 'lazy') {
    target.classList.add('loaded');
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
