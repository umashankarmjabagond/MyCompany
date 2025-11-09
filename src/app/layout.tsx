
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';


export const metadata = {
  title: 'SkillForge AI Technologies — AI, Cloud & Full-Stack Solutions',
  description:
    'SkillForge AI Technologies offers AI-powered solutions, full-stack web and mobile development, and corporate training programs for enterprises worldwide.',
  openGraph: {
    title: 'SkillForge AI Technologies',
    description:
      'AI tools, full-stack development, cloud services, and professional training.',
    url: 'https://skillforgeai.com',
    siteName: 'SkillForge AI Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillForge AI Technologies',
    description:
      'AI tools, full-stack development, cloud services, and professional training.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-slate-800 bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
