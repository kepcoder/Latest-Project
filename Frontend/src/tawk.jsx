import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/663268aaa0c6737bd1335f5e/1hsqehnjk';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return null;
};

export default TawkToChat;
