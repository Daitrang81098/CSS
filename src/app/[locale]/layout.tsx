import { Inter } from "next/font/google";
import { Box, Theme } from "@radix-ui/themes";
import "@/app/globals.css";
import "@radix-ui/themes/styles.css";
import Section from "@/components/custom/Section";
import Header from "@/components/custom/Header";

const inter = Inter({ subsets: ["latin"] });

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Theme>
          <Section>
            <Box className="pt-8 pb-8">
              <Header locale={locale} />
            </Box>
          </Section>

          {/* Body */}
          <Box>{children}</Box>
        </Theme>
      </body>
    </html>
  );
}
