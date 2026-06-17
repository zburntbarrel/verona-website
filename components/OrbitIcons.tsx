import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const STROKE = "currentColor";
const SW = 1.4;

export function IconUserCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="9" cy="8" r="3.2" stroke={STROKE} strokeWidth={SW} />
      <path d="M3.5 19c.6-3 2.9-4.8 5.5-4.8s4.9 1.8 5.5 4.8" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M15.5 9.2l1.7 1.7 3.3-3.3" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBox(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3.2 4 7v10l8 3.8 8-3.8V7l-8-3.8Z" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
      <path d="m4 7 8 4 8-4M12 11v9.8" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="9" cy="8" r="3.2" stroke={STROKE} strokeWidth={SW} />
      <path d="M3 19c.6-3 2.9-4.8 6-4.8s5.4 1.8 6 4.8" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M16 5.5a3.2 3.2 0 0 1 0 6M17.5 18.7c-.3-2-1.6-3.5-3.3-4.3" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3.2 4.5 6v6.5c0 4 3.3 6.9 7.5 8.3 4.2-1.4 7.5-4.3 7.5-8.3V6L12 3.2Z" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
      <path d="m8.6 12.4 2.4 2.4 4.4-4.6" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconRepeat(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 9.5h11l-2.4-2.4M18 14.5H7l2.4 2.4" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconServer(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="4.5" width="16" height="6" rx="1.2" stroke={STROKE} strokeWidth={SW} />
      <rect x="4" y="13.5" width="16" height="6" rx="1.2" stroke={STROKE} strokeWidth={SW} />
      <path d="M7.5 7.5h.01M7.5 16.5h.01M11 7.5h4M11 16.5h4" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  );
}

export function IconGlobeNode(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="8.4" stroke={STROKE} strokeWidth={SW} />
      <path d="M3.6 12h16.8M12 3.6c2.2 2.4 3.4 5.4 3.4 8.4 0 3-1.2 6-3.4 8.4M12 3.6C9.8 6 8.6 9 8.6 12c0 3 1.2 6 3.4 8.4" stroke={STROKE} strokeWidth={SW} />
    </svg>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6.5 21V4.5h11V21" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M4 21h16M9.5 8.5h1M13.5 8.5h1M9.5 12h1M13.5 12h1M9.5 15.5h1M13.5 15.5h1" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  );
}
