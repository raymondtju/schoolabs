function RightIcon({ stroke = "#E1E1FE",...props }: React.ComponentPropsWithoutRef<'svg'>) {
   return (
      <>
         <svg {...props} width="349" height="342" viewBox="0 0 349 342" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.4141 -62.6607C68.5386 -11.6998 105.24 89.8003 259.05 88.1133C412.86 86.4264 439.406 256.109 433.452 341.161" stroke={stroke} strokeOpacity="1" strokeWidth="3" />
            <path d="M46.7969 -62.6607C45.9214 -11.6998 82.6229 89.8003 236.433 88.1133C390.243 86.4264 416.789 256.109 410.835 341.161" stroke={stroke} strokeOpacity="1" strokeWidth="3" />
            <path d="M22.4288 -63.7151C21.5533 -12.7542 58.2548 88.7458 212.065 87.0589C365.875 85.3719 392.42 255.054 386.467 340.106" stroke={stroke} strokeOpacity="1" strokeWidth="3" />
            <path d="M2.46796 -63.7151C1.59245 -12.7542 38.2939 88.7458 192.104 87.0589C345.914 85.3719 372.46 255.054 366.506 340.106" stroke={stroke} strokeOpacity="1" strokeWidth="3" />
            <path d="M89.468 -62.7149C88.5924 -11.754 125.294 89.7461 279.104 88.0591C432.914 86.3722 459.46 256.054 453.506 341.106" stroke={stroke} strokeOpacity="1" strokeWidth="3" />
         </svg>
      </>
   )
}

interface BottomIconProps extends React.SVGProps<SVGSVGElement> {
   // Add any specific props you expect here
   width?: number | string;
   height?: number | string;
   viewBox?: string;
}

function BottomIcon({ strokeOpacity = "0.3", width = 474, height = 588, viewBox = "0 0 474 588", ...props }: BottomIconProps) {
   return (
      <>
         <svg {...props} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.64466" y="452.296" width="332.843" height="332.843" rx="57" transform="rotate(-45 1.64466 452.296)" stroke="#E1E1FE" strokeOpacity={strokeOpacity} strokeWidth="50" />
            <rect x="1.64466" y="237" width="332.843" height="332.843" rx="57" transform="rotate(-45 1.64466 237)" stroke="#E1E1FE" strokeOpacity="0.3" strokeWidth="50" />
         </svg>
      </>

   )
}

function ButtonIconLeft() {
   return (
      <>
         <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
            <g filter="url(#filter0_dd_1257_7291)">
               <path fillRule="evenodd" clipRule="evenodd" d="M31.4142 12.5858C32.1953 13.3668 32.1953 14.6332 31.4142 15.4142L24.8284 22L31.4142 28.5858C32.1953 29.3668 32.1953 30.6332 31.4142 31.4142C30.6332 32.1953 29.3668 32.1953 28.5858 31.4142L20.5858 23.4142C19.8047 22.6332 19.8047 21.3668 20.5858 20.5858L28.5858 12.5858C29.3668 11.8047 30.6332 11.8047 31.4142 12.5858Z" fill="#4B4EFC" />
            </g>
            <defs>
               <filter id="filter0_dd_1257_7291" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1257_7291" />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1257_7291" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1257_7291" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_1257_7291" result="effect2_dropShadow_1257_7291" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1257_7291" result="shape" />
               </filter>
            </defs>
         </svg>
      </>
   )
}

function ButtonIconRight() {
   return (
      <>
         <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
            <g filter="url(#filter0_dd_1257_7293)">
               <path fillRule="evenodd" clipRule="evenodd" d="M20.5858 31.4142C19.8047 30.6332 19.8047 29.3668 20.5858 28.5858L27.1716 22L20.5858 15.4142C19.8047 14.6332 19.8047 13.3668 20.5858 12.5858C21.3668 11.8047 22.6332 11.8047 23.4142 12.5858L31.4142 20.5858C32.1953 21.3668 32.1953 22.6332 31.4142 23.4142L23.4142 31.4142C22.6332 32.1953 21.3668 32.1953 20.5858 31.4142Z" fill="#4B4EFC" />
            </g>
            <defs>
               <filter id="filter0_dd_1257_7293" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1257_7293" />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1257_7293" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1257_7293" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_1257_7293" result="effect2_dropShadow_1257_7293" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1257_7293" result="shape" />
               </filter>
            </defs>
         </svg>
      </>
   )
}

export {
   RightIcon,
   BottomIcon,
   ButtonIconLeft,
   ButtonIconRight
}