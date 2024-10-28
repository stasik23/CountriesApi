import { useEffect } from 'react';

export const NotAuthorizedPage = () => {
  useEffect(() => {
    const root = document.documentElement;
    const eyef = document.getElementById('eyef');

    const updateEyePosition = (x: number, y: number) => {
      const cx = 115 + 30 * x;
      const cy = 50 + 30 * y;
      eyef?.setAttribute('cx', `${cx}`);
      eyef?.setAttribute('cy', `${cy}`);
    };

    const handleMouseMove = (evt: MouseEvent) => {
      const x = evt.clientX / window.innerWidth;
      const y = evt.clientY / window.innerHeight;
      root.style.setProperty('--mouse-x', x.toString());
      root.style.setProperty('--mouse-y', y.toString());
      updateEyePosition(x, y);
    };

    const handleTouchMove = (touchHandler: TouchEvent) => {
      const x = touchHandler.touches[0].clientX / window.innerWidth;
      const y = touchHandler.touches[0].clientY / window.innerHeight;
      root.style.setProperty('--mouse-x', x.toString());
      root.style.setProperty('--mouse-y', y.toString());
      updateEyePosition(x, y);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center min-h-screen bg-gray-900 text-white font-bungee">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="robot-error"
        viewBox="0 0 260 118.9"
        role="img"
        className="w-1/2"
      >
        <title>403 Error</title>
        <defs>
          <clipPath id="white-clip">
            <circle id="white-eye" cx="130" cy="65" r="20" fill="#cacaca" />
          </clipPath>
          <text id="text-s" x="50%" y="106" textAnchor="middle" className="error-text text-[120px] fill-black">
            403
          </text>
        </defs>
        <path
          className="alarm animate-alarm-on fill-[#e62326]"
          d="M120.9 19.6V9.1c0-5 4.1-9.1 9.1-9.1h0c5 0 9.1 4.1 9.1 9.1v10.6"
        />
        <use href="#text-s" className="fill-gray-700" />
        <g id="robot">
          <g id="eye-wrap" className="overflow-hidden">
            <use href="#white-eye" />
            <circle
              id="eyef"
              className="eye fill-black stroke-blue-500 stroke-[2] stroke-miterlimit-[10]"
              cx="130"
              cy="65"
              r="11"
            />
            <ellipse id="white-eye" cx="130" cy="40" rx="18" ry="12" fill="#2b2b2b" />
          </g>
          <circle id="tornillo" cx="105" cy="32" r="2.5" className="fill-gray-500" />
          <use href="#tornillo" x="50" />
          <use href="#tornillo" x="50" y="60" />
          <use href="#tornillo" y="60" />
        </g>
      </svg>
      <h1 className="mt-5 text-xl">You are not allowed to enter here</h1>
      <h2 className="mt-2">
        Go <a className="text-blue-500 hover:text-white" href="/register" target="_blank">Home!</a>
      </h2>
    </div>
  );
};
