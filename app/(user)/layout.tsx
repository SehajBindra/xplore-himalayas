import { getServerSession } from "next-auth";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { SessionProvider } from "../../Components/SessionProvider";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import "../../styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <SessionProvider session={session}>
        <body className="bg-white text-black ">
          <Header />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
