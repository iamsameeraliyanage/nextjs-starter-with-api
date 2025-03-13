/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import BaseLayout from "@/app/components/base-layout/BaseLayout";

export const metadata: Metadata = {
  title: "next-js-starter-template",
  description: "next-js-starter-template logo",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <BaseLayout locale={locale}>
      <Navbar locale={locale} />
      {children}
      <Footer />
    </BaseLayout>
  );
}
