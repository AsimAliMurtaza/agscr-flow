import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ZenFlow | AI-Powered Workflow Management Solution",
  description: "AI-Powered Workflow Management Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
