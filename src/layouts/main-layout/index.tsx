import type { ReactNode } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="grid h-screen grid-cols-1 grid-rows-6 overflow-auto md:grid-cols-6 lg:grid-cols-12">
        {children}
      </main>
      <Footer />
    </>
  );
}
