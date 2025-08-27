import "./globals.css";
import { EffectorRouterProvider } from "@/providers/EffectorRouterProvider/EffectorRouterProvider";
import { AnimeProvider } from "@/providers/ApolloProvider/AnimeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnimeProvider>
          <EffectorRouterProvider>{children}</EffectorRouterProvider>
        </AnimeProvider>
      </body>
    </html>
  );
}
