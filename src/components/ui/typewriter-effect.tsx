import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "../../../lib/utils";

export const TypewriterEffect = ({
  texts,
  className,
  cursorClassName,
}: {
  texts: string[]; 
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0); 
  const [currentText, setCurrentText] = useState(""); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [typingSpeed, setTypingSpeed] = useState(150); 
  const [deletingSpeed, setDeletingSpeed] = useState(50); 
  
  const currentWord = texts[currentTextIndex];

  // Handle typewriter effect loop
  useEffect(() => {
    if (!isDeleting && currentText.length < currentWord.length) {
      // Typing effect
      const timeout = setTimeout(() => {
        setCurrentText(currentText + currentWord[currentText.length]);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting effect
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, currentText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (currentText.length === currentWord.length && !isDeleting) {
      // Pause after typing is complete
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000); // 1-second pause after typing
      return () => clearTimeout(timeout);
    } else if (currentText.length === 0 && isDeleting) {
      // Switch to next text after deleting
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Loop through texts
    }
  }, [currentText, isDeleting, currentWord, texts, typingSpeed, deletingSpeed]);

  return (
    <div className={cn("text-5xl font-bold text-center", className)}>
      <motion.div className="inline">
        <span className="text-white">{currentText}</span>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-indigo-400",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
