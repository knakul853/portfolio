import './globals.css';

export const metadata = {
  title: 'Manoranjan Kumar Bharti - Portfolio',
  description: 'Backend Developer & Mobile Application Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}