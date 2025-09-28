import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Alhayat Smart Home",
  description: "Welcome to Alhayat Smart Home Solutions.",
  openGraph: {
    title: "Home | Alhayat Smart Home",
    description: "Welcome to Alhayat Smart Home Solutions.",
    type: "website",
  },
};

export default async function HomePage() {
  // Stub data for demonstration
  const lang = "ar";
  const rtl = lang === "ar";
  const user = { name: "أحمد" };
  const basketCount = 2;
  const settings = {
    facebook: "https://facebook.com/alhayatsmart",
    linkIn: "https://linkedin.com/company/alhayatsmart",
    twitter: "https://twitter.com/alhayatsmart",
    instagram: "https://instagram.com/alhayatsmart",
  };

  return (
    <>
      {/* NavBar with all props */}
      <NavBar user={user} basketCount={basketCount} lang={lang} rtl={rtl} settings={settings} />
      {/* Main home content (stub) */}
      <main className={rtl ? "rtl" : ""}>
        <section className="home">
          <h1>مرحبا بك في الحياة سمارت</h1>
          {/* هنا يمكن إضافة Swiper و باقي أقسام الصفحة لاحقاً */}
        </section>
      </main>
      {/* Footer with all props */}
      <Footer lang={lang} rtl={rtl} settings={settings} />
    </>
  );
}
