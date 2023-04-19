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
      </body>
    </html>
  );
}
