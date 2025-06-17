export function ResetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      className={props.className}
      {...props}
    >
      <path
        d="M18 6a12 12 0 1 1-8.49 3.51"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6v7h7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
