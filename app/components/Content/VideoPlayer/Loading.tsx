export default function Loading() {
  return (
    <svg viewBox="0 0 100 100" className=" fill-white absolute h-full w-full">
      <g transform="translate(32 50)">
        <circle cx="0" cy="0" r="4">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.375s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      <g transform="translate(44 50)">
        <circle cx="0" cy="0" r="4">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.25s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g transform="translate(56 50)">
        <circle cx="0" cy="0" r="4">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.125s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g transform="translate(68 50)">
        <circle cx="0" cy="0" r="4">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="0s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}
