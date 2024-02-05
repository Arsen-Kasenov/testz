import '@/app/ui/global.css';
import navbar from '@/app/ui/dashboard/navbar';
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
