import { useEffect, useState } from "react";
import "./App.css";
import Chatbot from "./Chatbot";
import Viewer from "./Viewer";

function App() {
  const [sessionId, setSessionId] = useState("");
  const [inputSessionId, setInputSessionId] = useState("");

  useEffect(() => {
    setSessionId(window.location.pathname.split("/")[1]);
  }, []);

  return (
    <div>
      <h1>AI Chatbot & 360 Viewer</h1>
      <label>Input Session ID:</label>
      <input onChange={(e) => setInputSessionId(e.target.value)} />
      <button onClick={() => setSessionId(inputSessionId)}>
        Set Session ID
      </button>
      {sessionId && (
        <>
          <Chatbot sessionId={sessionId} />
          <Viewer sessionId={sessionId} />
        </>
      )}
    </div>
  );
}

export default App;
