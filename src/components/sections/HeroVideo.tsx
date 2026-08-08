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
    <div className="relative w-full max-w-[560px] mx-auto">
      <div className="video-frame aspect-video">
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
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className="rounded-md bg-white/95 px-3 py-1.5 text-sm font-medium text-slate shadow-sm hover:bg-white transition-colors"
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="rounded-md bg-white/95 px-3 py-1.5 text-sm font-medium text-slate shadow-sm hover:bg-white transition-colors"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    </div>
  );
}
