import { useEffect, useState } from "react";
import AppRoute from "./Routes/routes";
import Navbar from './components/navbar';
import LoadingPage from "./components/loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from './CustomCursor';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progressDone, setProgressDone] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);


  useEffect(() => {
    if (progressDone) {
      setTimeout(() => {
        setIsLoading(false);

   
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }, 500);
    }
  }, [progressDone]);


 if (isLoading) {
  return <LoadingPage onComplete={() => {
    setIsLoading(false);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }} />;
}

  return (
<>  
  {/* Custom Circle Cursor */}
     <CustomCursor />
    <div>
      <div className="w-full fixed top-0 left-0 z-100">
        <Navbar />
      </div>
        <AppRoute />
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    </div>
</>    
  );
};

export default App;


