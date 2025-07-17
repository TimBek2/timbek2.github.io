import {useEffect, useState} from 'react';
import './style.scss';

interface TypewriterProps {
  text: string;
  speed: number;
}

const Typewriter = ({ text, speed }: TypewriterProps) => {
  const useTypewriter = (text: string, speed: number=500) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const typingId = setInterval(() => {
        if (index < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(index));
          setIndex((i) => i + 1);
        } else {
          clearInterval(typingId);
        }
      }, speed);

      return () => {
        clearInterval(typingId);
      };
    }, [text, index]);

    return displayText;
  };

  const displayText = useTypewriter(text, speed);

  return (
    <>
      <span className="typewriter-text">{displayText}</span>
    </>
  );
};

export default Typewriter;