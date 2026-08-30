import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alexis Rosset — Portfolio',
  description: "Portfolio d'Alexis Rosset, étudiant en Master MIAGE, Alternant DevOps/QA chez LuxCarta Technology.",
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
