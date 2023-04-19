import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-black text-white h-screen  mx-auto">
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
