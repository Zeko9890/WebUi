
interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

/**
 * Clean ZekoUI logo mark as an inline SVG.
 * Renders only the stylized "Z" icon — no background, no text baked in.
 */
function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="zeko-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      {/* Main stylized Z letterform */}
      <path
        d="M16 12h30c2.5 0 3.5 2.8 1.6 4.4L28 36h17c2 0 3 2 2 3.6l-1.2 1.8c-.5.7-1.3 1.1-2.2 1.1H16c-2.5 0-3.5-2.8-1.6-4.4L34 19H17c-2 0-3-2-2-3.6l1.2-1.8c.5-.7 1.3-1.1 2.2-1.1Z"
        fill="url(#zeko-grad)"
      />
      {/* Upper accent swirl */}
      <path
        d="M40 6c5.5 0 10.5 3.5 11 4l-2.5.5S44.5 8 40 8.5c-4.5.5-7.5 4-7.5 4L31 11.5s3-5.5 9-5.5Z"
        fill="url(#zeko-grad)"
        opacity="0.6"
      />
      {/* Lower accent swirl */}
      <path
        d="M24 58c-5.5 0-10.5-3.5-11-4l2.5-.5S19.5 56 24 55.5c4.5-.5 7.5-4 7.5-4L33 52.5s-3 5.5-9 5.5Z"
        fill="url(#zeko-grad)"
        opacity="0.6"
      />
    </svg>
  );
}

export function BrandLogo({ className = "", size = 28, showText = true }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoMark size={size} />
      {showText && (
        <span
          className="font-bold tracking-tight text-foreground"
          style={{ fontSize: Math.max(14, size * 0.6) }}
        >
          ZekoUI
        </span>
      )}
    </div>
  );
}
