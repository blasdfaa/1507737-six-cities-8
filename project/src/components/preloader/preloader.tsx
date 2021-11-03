import React from 'react';

type PreloaderProps = {
  onAnimationEnd: () => void;
};

function Preloader(porps: PreloaderProps): JSX.Element {
  const { onAnimationEnd } = porps;

  return (
    <div className="loader" onAnimationEnd={onAnimationEnd}>
      <svg
        className="loader__image"
        xmlns="http://www.w3.org/2000/svg"
        width="98"
        height="98"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#4481c3"
          strokeWidth="10"
          r="40"
          strokeDasharray="188.49555921538757 64.83185307179586"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.075268817204301s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    </div>
  );
}

export default Preloader;
