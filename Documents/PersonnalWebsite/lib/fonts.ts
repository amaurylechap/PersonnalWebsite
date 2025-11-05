import { Inter } from "next/font/google";

// Neue Montreal font configuration
// Uses CSS @font-face (see globals.css) to load from local files or system
// This approach allows graceful fallback without breaking the build
export const neueMontreal = Inter({
  subsets: ["latin"],
  variable: "--font-neue-montreal",
  display: "swap",
});

// Alternative: If you have OTF files instead of WOFF2
// Uncomment and use this instead if you have OTF files
/*
export const neueMontrealOTF = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});
*/

