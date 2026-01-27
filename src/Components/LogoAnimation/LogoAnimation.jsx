import "./LogoAnimation.css";

const LogoAnimation = ({ text }) => {
  const jumpDuration = 600;
  const gap = 500;
  const totalTime = text.length * (jumpDuration + gap);

  return (
    <span className="inline-flex">
      {text.split("").map((char, i) => {
        const delay = i * (jumpDuration + gap);

        return (
          <span
            key={i}
            className="inline-block animate-letter-loop"
            style={{
              animationDelay: `${delay}ms`,
              animationDuration: `${totalTime}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
};

export default LogoAnimation;
