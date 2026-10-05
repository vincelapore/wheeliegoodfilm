export function WheelMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="11.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="2.6" fill="#b24a36" />
      <path
        d="M16 5.2v21.6M5.2 16h21.6M8.4 8.4l15.2 15.2M23.6 8.4L8.4 23.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function BurstFrame({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M100,6 L117.6,34.3 L145.5,21.2 L149.5,50.5 L179.7,54 L164.7,82.7 L194,100 L158,115.5 L185.7,149.5 L144.5,144.5 L148,183.1 L115,156 L100,195 L82.4,165.7 L54.5,178.8 L53.3,146.7 L18.6,147 L43,115.3 L3,100 L37.2,83.2 L20.3,54 L51.9,51.9 L53,18.6 L84.2,41.1 Z"
      />
    </svg>
  );
}
