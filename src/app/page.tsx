import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #420B20 0%, #600E2E 50%, #2D0B1F 100%)",
      }}
    >
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="anasayfa" className="pt-30 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Süreyya Alper"
                width={200}
                height={200}
                className="mx-auto rounded-full shadow-2xl border-3"
                style={{ borderColor: "#AB7B66" }}
              />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #C4A447, #E8D5A8, #B8956F)",
                }}
              >
                Süreyya Alper
              </span>
            </h1>
            <p
              className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
              style={{ color: "#E8D5A8" }}
            >
              Geleneksel Türk Sanatları Ustası • Müzehhibe
            </p>
            <p
              className="text-lg mb-10 max-w-4xl mx-auto leading-relaxed"
              style={{ color: "#E6D7C3" }}
            >
              Asırlardır süregelen müzehhiplik sanatını modern dokuşlarla
              harmanlayarak, her eserde zarafet ve inceliği yaşatan usta bir
              sanatçı.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#eserler"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
                style={{
                  background: "linear-gradient(45deg, #600E2E, #8B1538)",
                }}
              >
                Eserlerini İnceleyin
              </Link>
              <Link
                href="#iletisim"
                className="inline-flex items-center px-8 py-3 border-2 text-base font-medium rounded-lg transition-all duration-300 hover:opacity-80"
                style={{
                  borderColor: "#C4A447",
                  color: "#C4A447",
                  backgroundColor: "rgba(66, 11, 32, 0.3)",
                }}
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="hakkinda"
        className="py-16"
        style={{
          backgroundColor: "rgba(66, 11, 32, 0.8)",
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#E8D5A8" }}
            >
              Hakkında
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ background: "linear-gradient(90deg, #C4A447, #E8D5A8)" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#E6D7C3" }}
              >
                Müzehhiplik sanatına olan tutkusu, geleneksel Türk sanatlarının
                bu nadide dalını yaşatma arzusundan doğmuştur. Her fırça
                darbesi, her altın varak parçası, asırlık bir geleneğin modern
                yorumudur.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#E6D7C3" }}
              >
                Çalışmalarında klasik motiflerden ilham alırken, çağdaş estetik
                anlayışını da harmanlayarak benzersiz eserler ortaya
                çıkarmaktadır. Her proje, müzehhiplik sanatının incelikli
                dünyasına açılan bir kapıdır.
              </p>

              {/* Contact and Social Media - Side by Side */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "#C4A447" }}
                  >
                    İletişim
                  </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      style={{ color: "#C4A447" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:sureyyaalper@gmail.com"
                      className="hover:underline transition-all duration-300"
                      style={{ color: "#E6D7C3" }}
                    >
                      sureyyaalper@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      style={{ color: "#C4A447" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+905327224103"
                      className="hover:underline transition-all duration-300"
                      style={{ color: "#E6D7C3" }}
                    >
                      0532 722 41 03
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#C4A447" }}
                >
                  Sosyal Medya
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/sureyya.alper"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "rgba(196, 164, 71, 0.2)" }}
                  >
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#C4A447" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/sureyyaalper"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "rgba(196, 164, 71, 0.2)" }}
                  >
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#C4A447" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Close grid container */}
            </div>

            <div className="relative">
              <div className="aspect-w-3 aspect-h-4 rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
                <Image
                  src="/sureyya-alper.jpg"
                  alt="Süreyya Alper - Müzehhibe"
                  width={400}
                  height={500}
                  className="object-cover rounded-2xl w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="eserler" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#F5DEB3" }}
            >
              Eserleri
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ background: "linear-gradient(90deg, #C4A447, #F5DEB3)" }}
            ></div>
            <p
              className="mt-6 text-lg max-w-3xl mx-auto"
              style={{ color: "#E6D7C3" }}
            >
              Geleneksel müzehhiplik sanatının güzelliklerini modern yorumlarla
              buluşturan eserler
            </p>
          </div>

          <Gallery />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="iletisim"
        className="py-16"
        style={{
          backgroundColor: "rgba(66, 11, 32, 0.8)",
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#F5DEB3" }}
            >
              İletişim
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ background: "linear-gradient(90deg, #C4A447, #F5DEB3)" }}
            ></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: "#420B20" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logo.png"
                alt="Süreyya Alper"
                width={50}
                height={50}
                className="rounded-full mr-3"
              />
              <span className="text-2xl font-bold" style={{ color: "#F5DEB3" }}>
                Süreyya Alper
              </span>
            </div>
            <p className="mb-6" style={{ color: "#C4A447" }}>
              Geleneksel Türk Sanatları • Müzehhiplik
            </p>
            <p className="text-sm" style={{ color: "#E6D7C3" }}>
              © 2024 Süreyya Alper. Tüm hakları saklıdır.
            </p>
            <p className="text-xs mt-2" style={{ color: "#C4A447" }}>
              geliştiren:{" "}
              <a
                href="https://mustafagenc.info"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-all duration-300"
                style={{ color: "#F5DEB3" }}
              >
                mustafa genç
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
