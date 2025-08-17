import { useMemo, useState } from 'react';
import './index.css';

const PALETTE = [
  { name: 'Red',      value: '#ef4444', btn: 'bg-red-500 hover:bg-red-600 focus:ring-red-400 text-white' },
  { name: 'Blue',     value: '#3b82f6', btn: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 text-white' },
  { name: 'Green',    value: '#22c55e', btn: 'bg-green-500 hover:bg-green-600 focus:ring-green-400 text-white' },
  { name: 'Lavender', value: '#e9d5ff', btn: 'bg-purple-300 hover:bg-purple-400 focus:ring-purple-300 text-black' },
  { name: 'Pink',     value: '#ec4899', btn: 'bg-pink-500 hover:bg-pink-600 focus:ring-pink-400 text-white' },
];

export default function App() {
  const [color, setColor] = useState('#ffffff');

  // Show a friendly name for the current color if it’s in the palette
  const activeName = useMemo(() => {
    const found = PALETTE.find(c => c.value.toLowerCase() === color.toLowerCase());
    return found ? found.name : color;
  }, [color]);

  function pickRandom(){
    const idx = Math.floor(Math.random() * PALETTE.length);
    setColor(PALETTE[idx].value);
  }

  return (
    <div
      style={{ backgroundColor: color }}
      className="min-h-screen w-full flex items-end justify-center transition-colors duration-300 relative"
    >
      {/* Top chip showing the current background */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm bg-white/70 backdrop-blur border shadow">
        Background: <span className="font-medium">{activeName}</span>
      </div>

      {/* Floating control bar */}
      <div
        role="radiogroup"
        aria-label="Background color"
        className="mb-6 flex flex-wrap items-center gap-3 bg-white/70 backdrop-blur border rounded-xl shadow-lg px-3 py-3"
      >
        {PALETTE.map((c) => {
          const isActive = c.value.toLowerCase() === color.toLowerCase();
          return (
            <button
              key={c.name}
              role="radio"
              aria-checked={isActive}
              onClick={() => setColor(c.value)}
              className={[
                'px-4 py-2 rounded-lg text-sm font-medium shadow focus:outline-none focus:ring-2 transition',
                c.btn,
                isActive ? 'ring-2 ring-offset-1 ring-black/40' : ''
              ].join(' ')}
            >
              {c.name}
            </button>
          );
        })}

        <button
          onClick={pickRandom}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 hover:bg-gray-900 text-white shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Random
        </button>

        <button
          onClick={() => setColor('#ffffff')}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
