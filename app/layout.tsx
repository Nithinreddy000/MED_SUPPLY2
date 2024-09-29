"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div>{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
