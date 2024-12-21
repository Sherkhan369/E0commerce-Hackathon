
import Header from "./component/header";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
