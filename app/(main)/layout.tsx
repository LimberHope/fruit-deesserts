import ModalProvider from "@/src/context/modal.provider";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalProvider>
      <div className="flex flex-1 flex-col min-h-full">
        <main className="flex-1">
          <NavBar />
          {children}
          <Footer />
        </main>
      </div>
    </ModalProvider>
  );
}
