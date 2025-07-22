import { useEffect, useState } from "react";
import AppRoute from "./Routes/routes";
import Navbar from './components/navbar';
import LoadingPage from "./components/loading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progressDone, setProgressDone] = useState(false);

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
    <div>
      <div className="w-full fixed top-0 left-0 z-100">
        <Navbar />
      </div>
      <AppRoute />
    </div>
  );
};

export default App;


