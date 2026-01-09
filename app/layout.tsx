import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: {
    default: 'HeadStart Connect | Mental Health Support Platform',
    template: '%s | Mental Health support by HeadStart Connect',
  },
  description: 'Early mental health support, education, and coping tools',

  openGraph: {
    title: 'HeadStart Connect: Mental Health Support',
    description: 'Early mental health support, education, and coping tools.',
    images: [
      {
        url: 'https://headstartmentalconnect.com/images/card.png',
        width: 1200,
        height: 630,
        alt: 'HeadStart Connect',
      },
    ],
    url: 'https://www.headstartconnect.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mental Health support with HeadStart',
    description: 'Mental Health support with HeadStart',
    images: 'https://headstartconnect.com/images/card.png',
  },

  keywords: ['mental health support'],

  metadataBase: new URL('https://www.headstartconnect.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/icons/icon.png' />
        <meta property='og:image' content='/icons/icon.png' />
        <meta name='twitter:image' content='/icons/icon.png' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HeadStart',
              url: 'https://headstartconnect.com',
              logo: 'https://headstartconnect.com/icons/icon.png',
              sameAs: [
                'https://twitter.com/headstartconnect',
                'https://www.linkedin.com/company/headstartconnect',
              ],
            }),
          }}
        />
      </head>
      <body className={`font-dm_sans bg-white dark:bg-gray-900`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
