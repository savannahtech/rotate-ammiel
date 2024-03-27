import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/Providers";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feedback board",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jost.className}
        style={{ background: "rgba(247, 248, 253, 1)" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
