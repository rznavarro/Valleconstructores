import { useEffect, useRef, useState } from 'react';
// Import the generated drone shot as fallback
import fallbackImg from '../../assets/images/valle_cachapoal_drone_shot_1779379725527.png';

type Props = {
  src: string;
  className?: string;
};

export default function BackgroundVideoCrossfade({ src, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Reset error state on src change
    setVideoError(!src);
    const video = videoRef.current;
    if (!video || !src) return;

    let fadeFrame = 0;

    const animateOpacity = (from: number, to: number, duration: number) => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        if (video) video.style.opacity = String(from + (to - from) * t);
        if (t < 1) fadeFrame = requestAnimationFrame(step);
      };
      cancelAnimationFrame(fadeFrame);
      fadeFrame = requestAnimationFrame(step);
    };

    const onCanPlay = () => {
      video.play().catch(() => {});
      animateOpacity(0, 1, 500);
    };

    const onError = () => {
      setVideoError(true);
    };

    const onTimeUpdate = () => {
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && remaining > 0) {
        animateOpacity(Number(video.style.opacity || 1), 0, 500);
      }
    };

    const onEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        animateOpacity(0, 1, 500);
      }, 100);
    };

    video.style.opacity = '0';
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('error', onError);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);

    // Trigger video load/play manual check
    video.load();

    return () => {
      cancelAnimationFrame(fadeFrame);
      if (video) {
        video.removeEventListener('canplay', onCanPlay);
        video.removeEventListener('error', onError);
        video.removeEventListener('timeupdate', onTimeUpdate);
        video.removeEventListener('ended', onEnded);
      }
    };
  }, [src]);

  if (videoError || !src) {
    return (
      <div 
        className={className ?? 'absolute inset-0 w-full h-full object-cover'}
        style={{
          backgroundImage: `url(${fallbackImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
        }}
        role="img"
        aria-label="Valle del Cachapoal drone territorial view"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      className={className ?? 'absolute inset-0 w-full h-full object-cover'}
      muted
      autoPlay
      playsInline
      preload="auto"
      style={{ opacity: 0 }}
    />
  );
}
