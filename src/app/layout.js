import "./globals.css";

export const metadata = {
  title: "Zillow Clone",
  description: "A demo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
