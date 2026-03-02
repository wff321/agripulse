export default function Logo({ size = 60 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
  {/* Extra Wide & Softer Heart */}
<path
  d="M50 88
     C12 62, 2 46, 2 30
     C2 14, 24 10, 38 24
     C45 32, 50 38, 50 38
     C50 38, 55 32, 62 24
     C76 10, 98 14, 98 30
     C98 46, 88 62, 50 88Z"
  fill="white"
/>
    {/* Emoji Leaf */}
<text
  x="50"
  y="67"
  textAnchor="middle"
  fontSize="35"
>
  🌿
</text>
    </svg>
  );
}