import React, { useEffect, useRef } from 'react';

interface KeyboardProps {
  className?: string;
}

const Keyboard3D: React.FC<KeyboardProps> = ({ className = '' }) => {
  const keypadRef = useRef<HTMLDivElement>(null);
  const configRef = useRef({
    platform: 'gemini',
    muted: false,
    one: {
      travel: 26,
      key: '0',
      hue: 330,
      saturation: 0.4,
      brightness: 1.4,
      buttonElement: null as HTMLButtonElement | null,
    },
    two: {
      travel: 26,
      key: 'T',
      hue: 0,
      saturation: 0,
      brightness: 1.4,
      buttonElement: null as HTMLButtonElement | null,
    },
    three: {
      travel: 18,
      key: 'M',
      hue: 0,
      saturation: 0,
      brightness: 0.4,
      buttonElement: null as HTMLButtonElement | null,
    },
    four: {
      travel: 18,
      key: 'L',
      hue: 0,
      saturation: 0,
      brightness: 0.4,
      buttonElement: null as HTMLButtonElement | null,
    },
    five: {
      travel: 18,
      key: '1',
      hue: 0,
      saturation: 0,
      brightness: 0.4,
      buttonElement: null as HTMLButtonElement | null,
    },
  });

  useEffect(() => {
    const config = configRef.current;
    const keypad = keypadRef.current;

    if (!keypad) return;

    // Initialize button references
    config.one.buttonElement = keypad.querySelector('#one') as HTMLButtonElement;
    config.two.buttonElement = keypad.querySelector('#two') as HTMLButtonElement;
    config.three.buttonElement = keypad.querySelector('#three') as HTMLButtonElement;
    config.four.buttonElement = keypad.querySelector('#four') as HTMLButtonElement;
    config.five.buttonElement = keypad.querySelector('#five') as HTMLButtonElement;

    const clickAudio = new Audio(
      'https://cdn.freesound.org/previews/378/378085_6260145-lq.mp3'
    );
    clickAudio.muted = config.muted;

    const ids = ['one', 'two', 'three', 'four', 'five'] as const;

    // Initialize button styles and event listeners
    for (const id of ids) {
      const buttonConfig = config[id];
      if (buttonConfig.buttonElement) {
        buttonConfig.buttonElement.style.setProperty('--travel', buttonConfig.travel.toString());
        buttonConfig.buttonElement.style.setProperty('--saturate', buttonConfig.saturation.toString());
        buttonConfig.buttonElement.style.setProperty('--hue', buttonConfig.hue.toString());
        buttonConfig.buttonElement.style.setProperty('--brightness', buttonConfig.brightness.toString());

        const handlePointerDown = () => {
          if (!config.muted) {
            clickAudio.currentTime = 0;
            clickAudio.play().catch(() => {
              // Handle audio play failure silently
            });
          }
        };

        buttonConfig.buttonElement.addEventListener('pointerdown', handlePointerDown);
      }
    }

    // Handle keyboard input
    const handleKeyDown = (event: KeyboardEvent) => {
      for (const id of ids) {
        const buttonConfig = config[id];
        if (event.key.toLowerCase() === buttonConfig.key.toLowerCase()) {
          if (buttonConfig.buttonElement) {
            buttonConfig.buttonElement.dataset.pressed = 'true';
          }
          if (!config.muted) {
            clickAudio.currentTime = 0;
            clickAudio.play().catch(() => {
              // Handle audio play failure silently
            });
          }
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      for (const id of ids) {
        const buttonConfig = config[id];
        if (event.key.toLowerCase() === buttonConfig.key.toLowerCase() || event.key === 'Meta') {
          if (buttonConfig.buttonElement) {
            buttonConfig.buttonElement.dataset.pressed = 'false';
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // 3D Mouse Movement Effect
    let mouseTimeout: NodeJS.Timeout;

    const handleMouseMove = (event: MouseEvent) => {
      if (!keypad) return;

      const rect = keypad.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Calculate rotation based on mouse position relative to center
      const rotateX = ((mouseY - centerY) / window.innerHeight) * -30; // Max 30 degrees
      const rotateY = ((mouseX - centerX) / window.innerWidth) * 30;   // Max 30 degrees

      // Apply the 3D transformation
      keypad.style.transform = `
        perspective(2000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        translateZ(50px)
      `;

      // Clear existing timeout
      clearTimeout(mouseTimeout);

      // Set timeout to return to center when mouse stops moving
      mouseTimeout = setTimeout(() => {
        if (keypad) {
          keypad.style.transform = `
            perspective(2000px) 
            rotateX(0deg) 
            rotateY(0deg)
            translateZ(0px)
          `;
        }
      }, 2000);
    };

    const handleMouseLeave = () => {
      if (keypad) {
        keypad.style.transform = `
          perspective(2000px) 
          rotateX(0deg) 
          rotateY(0deg)
          translateZ(0px)
        `;
      }
    };

    // Enhanced button press effect for 3D
    for (const id of ids) {
      const buttonConfig = config[id];
      if (buttonConfig.buttonElement) {
        const handleEnhancedPointerDown = () => {
          if (!config.muted) {
            clickAudio.currentTime = 0;
            clickAudio.play().catch(() => {
              // Handle audio play failure silently
            });
          }

          // Add extra 3D effect when pressing
          if (keypad) {
            const currentTransform = keypad.style.transform;
            keypad.style.transform = currentTransform + ' scale(0.98)';

            setTimeout(() => {
              if (keypad) {
                keypad.style.transform = currentTransform;
              }
            }, 150);
          }
        };

        buttonConfig.buttonElement.addEventListener('pointerdown', handleEnhancedPointerDown);
      }
    }

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Set initial platform
    document.documentElement.dataset.platform = config.platform;

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <div className={`keyboard-3d-container ${className}`}>
      <style jsx>{`
        .keyboard-3d-container {
          --travel: 20;
          --font-size-min: 16;
          --font-size-max: 20;
          --font-ratio-min: 1.2;
          --font-ratio-max: 1.33;
          --font-width-min: 375;
          --font-width-max: 1500;
        }

        .keypad {
          position: relative;
          aspect-ratio: 400 / 310;
          display: flex;
          place-items: center;
          width: clamp(280px, 45vw, 500px);
          -webkit-tap-highlight-color: #0000;
          transition-property: translate, transform;
          transition-duration: 0.1s;
          transition-timing-function: ease-out;
          transform-style: preserve-3d;
          scale: 1;
          perspective: 1000px;
          transform-origin: center center;
        }

        .key {
          transform-style: preserve-3d;
          border: 0;
          background: #0000;
          padding: 0;
          cursor: pointer;
          outline: none;
        }

        .key[data-pressed='true'],
        .key:active {
          .key__content {
            translate: 0 calc(var(--travel) * 1%);
          }
        }

        #one {
          left: 13.5%;
          bottom: 57.2%;
          background: transparent !important;
        }

        #two {
          left: 25.8%;
          bottom: 48.5%;
        }

        #three {
          left: 38%;
          bottom: 39.2%;
        }

        #four {
          left: 50.4%;
          bottom: 30.2%;
        }

        #five {
          left: 62.7%;
          bottom: 21%;
        }

        #five .key__text {
          font-size: 34cqi;
          filter: grayscale(1);
        }

        .key__content {
          width: 100%;
          display: inline-block;
          height: 100%;
          transition: translate 0.12s ease-out;
          container-type: inline-size;
        }

        .key__text {
          width: 52%;
          height: 62%;
          position: absolute;
          font-size: 18cqi;
          z-index: 21;
          top: 5%;
          left: 0;
          mix-blend-mode: normal;
          color: hsl(0 0% 4%);
          translate: 45% -16%;
          transform: rotateX(36deg) rotateY(45deg) rotateX(-90deg) rotate(0deg);
          display: grid;
          place-items: center;
        }

        #five .key__text {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: unset !important;
          filter: none !important;
        }

        #five .key__text img {
          max-width: 80%;
          max-height: 80%;
          object-fit: contain;
          display: block;
          margin: auto;
        }

        .keypad__single {
          position: absolute;
          width: 21%;
          left: 54%;
          bottom: 36%;
          height: 24%;
          clip-path: polygon(
            0 0,
            54% 0,
            89% 24%,
            100% 70%,
            54% 100%,
            46% 100%,
            0 69%,
            12% 23%,
            47% 0%
          );
          mask: url(https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86)
            50% 50% / 100% 100%;
        }

        .keypad__single img {
          --brightness: 2;
          --saturate: 0;
          top: 0;
          opacity: 1;
          width: 96%;
          position: absolute;
          left: 50%;
          translate: -50% 1%;
        }

        .key__mask {
          width: 100%;
          height: 100%;
          display: inline-block;
        }

        .key img {
          filter: hue-rotate(calc(var(--hue, 0) * 1deg))
            saturate(var(--saturate, 1)) brightness(var(--brightness, 1));
        }

        .keypad__base {
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .keypad__base img {
          width: 100%;
        }

        #one img {
          filter: brightness(1) saturate(1) hue-rotate(0deg) !important;
        }

        [data-platform='claude'] #one .key__text {
          color: #d97757;
        }
      `}</style>

      <main>
        <div className="keypad" ref={keypadRef}>
          <div className="keypad__base">
            <img
              src="https://assets.codepen.io/605876/ai-base.png?format=auto&quality=86"
              alt=""
            />
          </div>

          <button id="one" className="key keypad__single">
            <span className="key__mask">
              <span className="key__content">
                <span className="key__text">
                  <img src="/images/machine.png" alt="Key Image" style={{ width: '80%', height: 'auto' }} />
                </span>
                <img
                  src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                  alt=""
                />
              </span>
            </span>
          </button>

          <button id="two" className="key keypad__single">
            <span className="key__mask">
              <span className="key__content">
                <span className="key__text" style={{ color: '#000000' }}>T</span>
                <img
                  src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                  alt=""
                />
              </span>
            </span>
          </button>

          <button id="three" className="key keypad__single">
            <span className="key__mask">
              <span className="key__content">
                <span className="key__text" style={{ color: '#e90b0b', fontSize: '20px' }}>M</span>
                <img
                  src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                  alt=""
                />
              </span>
            </span>
          </button>

          <button id="four" className="key keypad__single">
            <span className="key__mask">
              <span className="key__content">
                <span className="key__text">L</span>
                <img
                  src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                  alt=""
                />
              </span>
            </span>
          </button>

          <button id="five" className="key keypad__single">
            <span className="key__mask">
              <span className="key__content">
                <span className="key__text">
                  <img src="/images/redbot.png" alt="Key Image" style={{ width: '80%', height: 'auto' }} />
                </span>
                <img
                  src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                  alt=""
                />
              </span>
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Keyboard3D;