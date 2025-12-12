import "./globals.css";

export const metadata = {
  title: "Free AI Income Challenge",
  description: "Actionable roadmap to reach $2,000/month using 100% free AI tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
