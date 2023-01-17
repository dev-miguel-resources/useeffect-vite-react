import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [dependency1, setDependency1] = useState(1);
  const [dependency2, setDependency2] = useState(1);

  useEffect(() => {
    console.log("dependencies", dependency1, dependency2);
  }, []);

  return <div className="App">Hello am App!</div>;
}

export default App;
