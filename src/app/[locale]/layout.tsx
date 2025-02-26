import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter, DM_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Providers } from '../providers'

// internationalization
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/src/i18n/routing'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
})

interface MetadataImage {
  url: string
  width?: number
  height?: number
  alt?: string
}
interface WebsiteMetadata {
  title?: string
  description?: string
  openGraph?: {
    url?: string
    title?: string
    description?: string
    images?: MetadataImage[]
    siteName?: string
  }
  twitter?: {
    card?: string
    site?: string
    title?: string
    description?: string
    image?: string
  }
}

export const metadata: WebsiteMetadata = {
  title: 'Delvin Shoko - Web Developer',
  description:
    "Explore Delvin Shoko's Web development Projects, showcasing React/Javascript Skills Design Expertise. Get in touch with me.",

  openGraph: {
    url: 'https://www.delvinshoko.me',
    title: 'Delvin Shoko - Web Developer',
    description: 'A showcase of my web development projects and expertise',
    images: [
      {
        url: 'https://imgur.com/PNMcbJi',
        width: 800,
        height: 600,
        alt: 'Website hompage',
      },
    ],
    siteName: 'Delvin Shoko Portfolio',
  },
 
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>; // Type it as a Promise
}>) {

  // Await the params inside the function
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      
      <body
        className={twMerge(
          inter.variable,
          dmSans.variable,
          'dark:bg-gray-900 bg-brown1 text-white antialiased font-sans'
        )}
      >
        {/* wrap our internationalization provider with another theme provider - if any more providers need to make a provider component take props for useTranslation hook to work in client components to avoid translation prop drilling in many components */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
