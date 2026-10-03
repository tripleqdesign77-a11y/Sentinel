// src/App.jsx
import { SpeedInsights } from '@vercel/speed-insights/react';
import "./index.css";
import Hero3D from "./components/Hero3D";

function App() {
  return (
    <div className="app">
      <Hero3D />
      {/* Later: sections for Honeypots, Voice, RF/APN, Predictions, Command Center */}
      <SpeedInsights />
    </div>
  );
}

export default App;
