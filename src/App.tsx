import type React from "react";
import  { useState, useEffect } from "react";
import Spinner from "./components/spinner/Spinner";
import HomePage from "./pages/Home/Home";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Spinner /> : <HomePage/>   ;
};

export default App;
