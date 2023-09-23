import { Footer } from "@/components/footer";
import { Navbar, PromotionFlyer } from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PromotionFlyer />
      <Navbar />
      <main>
        {children}

      </main>
      <Footer />
    </>

  );
}
