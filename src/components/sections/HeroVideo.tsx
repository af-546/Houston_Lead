import { useRef, useState } from "react";
import { site } from "@/data/site";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="relative w-full max-w-[560px] mx-auto group">
      <div className="absolute -inset-4 rounded-3xl bg-brand/10 blur-3xl opacity-60" />
      <div className="mockup-shell relative aspect-video shadow-neonSm overflow-hidden">
        <video
          ref={videoRef}
          src={site.videoUrl}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className="glass-panel rounded-full px-4 py-2 text-sm font-medium text-ink hover:text-brand-light transition-colors"
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="glass-panel rounded-full px-4 py-2 text-sm font-medium text-ink hover:text-brand-light transition-colors"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    </div>
  );
}
