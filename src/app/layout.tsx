import type { Metadata } from "next";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Hunter Clone",
  description: "Encontre os melhores produtos aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <ClerkProvider>
            <Header>
              <Show when="signed-out">
                <SignInButton>
                  <button className="rounded-full border-2 border-gray-200 hover:border-gray-400 hover:transition-colors duration-200 font-medium text-sm px-4 py-2 cursor-pointer">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="rounded-full bg-[#F4320B] text-white font-medium text-sm px-4 py-2 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </Header>
            <main className="pt-16">
              {children}
            </main>
          </ClerkProvider>
        </body>
      </html>
    </>
  );
}
