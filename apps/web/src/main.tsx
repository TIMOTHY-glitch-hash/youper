import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="shell">
      <p className="eyebrow">Youper</p>
      <h1>Collaboration starts here.</h1>
      <p className="intro">
        The web app scaffold is ready. Build product screens here and connect
        them to the API through the shared development workflow.
      </p>
      <a href={`${import.meta.env.VITE_API_URL ?? "http://localhost:3001"}/health`}>
        Check API health
      </a>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
