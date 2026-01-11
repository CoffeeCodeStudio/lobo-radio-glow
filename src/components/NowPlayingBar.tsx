import { useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Radio } from "lucide-react";

const NowPlayingBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-neon-cyan/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Play Button and Visualizer */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple flex items-center justify-center hover:scale-110 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-1" />
            )}
          </button>

          {/* Audio Visualizer */}
          <div className="flex items-end gap-1 h-8">
            {[1, 2, 3, 4, 5].map((bar) => (
              <div
                key={bar}
                className={`w-1 bg-gradient-to-t from-neon-pink to-neon-cyan rounded-full ${
                  isPlaying ? "visualizer-bar" : "h-2"
                }`}
                style={{
                  height: isPlaying ? undefined : "8px",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Now Playing Info */}
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 text-neon-cyan text-xs mb-1">
            <Radio className="w-3 h-3" />
            <span className="font-medium tracking-wider">NOW PLAYING</span>
          </div>
          <p className="text-foreground font-medium">
            DJ Lobo Radio - 80s & 90s Hits
          </p>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3">
          <Volume2 className="w-5 h-5 text-muted-foreground" />
          <div className="relative w-24 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full"
              style={{ width: `${volume}%` }}
            ></div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingBar;
