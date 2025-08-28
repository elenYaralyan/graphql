import { EffectorRouterProvider } from "@/providers/EffectorRouterProvider/EffectorRouterProvider";
import { AnimeProvider } from "@/providers/ApolloProvider/AnimeProvider";
import Header from "@/components/features/Header";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        <main className="relative overflow-hidden">
          <AnimeProvider>
            <EffectorRouterProvider>{children}</EffectorRouterProvider>
          </AnimeProvider>
        </main>
      </body>
    </html>
  );
}
