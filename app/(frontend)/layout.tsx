import "@/styles/globals.css"

import { Suspense } from "react"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/general/SiteHeader"
import { TailwindIndicator } from "@/components/general/TailwindIndicator"
import { ThemeProvider } from "@/components/general/ThemeProvider"

import Loading from "../../components/dashboard/Loading"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}
export const dynamic = "force-dynamic"
export const revalidate = 0
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <Suspense fallback={<Loading />}>
              <div className="flex-1">{children}</div>
            </Suspense>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
