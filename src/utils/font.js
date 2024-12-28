import localFont from "next/font/local";

export const MyCustomFont = localFont({
  // Define a css variable to use down the line --> e.g. font-family: var(--my-custom-font)
  variable: "--archattson",
  // Define variants for your font. 
  // weight = "font-weight". will use the matching variant when you
  // set font-weight CSS prop on your text elements
  src: [
    {
      path: "/public/fonts/ArchattsonHollmytro.otf", 
      weight: "350",
      style: "normal",
    },
    {
      path: "/public/fonts/ArchattsonHollmytro.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/public/fonts/ArchattsonHollmytro.otf",
      weight: "700",
      style: "normal",
    },
  ],
  // Or, you can define a single font instead e.g.
  // src: "path/to/public/fonts/MyCustomFont-Book_Web.woff2"
});