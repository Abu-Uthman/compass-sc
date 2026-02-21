export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D7A5F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Compass SC</h3>
            <p className="text-green-100">
              NDIS Support Coordination that speaks your language and understands your culture.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-green-100">
              <li>📞 0432 405 388</li>
              <li>📧 info@compasssc.com.au</li>
              <li>📍 Melbourne, VIC</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Languages</h4>
            <ul className="space-y-2 text-green-100">
              <li>🇺🇸 English</li>
              <li>🇸🇴 Somali</li>
              <li>🇸🇦 Arabic</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#D4A017] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#D4A017] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#D4A017] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>&copy; {currentYear} Compass SC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
