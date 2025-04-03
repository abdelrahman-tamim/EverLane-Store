
import Navbar from "./_components/Navbar";
import "./globals.css";
import Providers from "./Providers";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Providers>
         
        <Navbar/>
        {children}
     
        </Providers>
        
      </body>
    </html>
  );
}
