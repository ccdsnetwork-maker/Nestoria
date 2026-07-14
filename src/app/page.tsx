export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 border-b">
        <h1 className="text-2xl font-bold">
          Nestoria
          <span className="text-green-700">.</span>
        </h1>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#">Properties</a>
          <a href="#">Interiors</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Find Your Dream Home
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Nestoria Interiors and Properties connects you with premium
          properties and exceptional interior design solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg">
            Explore Properties
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Interior Services
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-12">
        <div className="p-6 rounded-xl border">
          <h3 className="text-xl font-bold">
            Real Estate
          </h3>
          <p className="mt-3 text-gray-600">
            Discover verified properties and connect with opportunities.
          </p>
        </div>

        <div className="p-6 rounded-xl border">
          <h3 className="text-xl font-bold">
            Interior Design
          </h3>
          <p className="mt-3 text-gray-600">
            Request quotations and transform your spaces beautifully.
          </p>
        </div>

        <div className="p-6 rounded-xl border">
          <h3 className="text-xl font-bold">
            Join Our Team
          </h3>
          <p className="mt-3 text-gray-600">
            Work with us as a marketer, field agent, or designer.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-12 bg-gray-100">
        <h3 className="text-2xl font-bold">
          Contact Nestoria
        </h3>

        <p className="mt-4">
          Email: nestoriainteriorsandproperties@gmail.com
        </p>

        <p>
          WhatsApp: 08168049408
        </p>

        <p>
          Call: 08029651803
        </p>

        <p>
          Instagram: nestoria_properties_
        </p>
      </section>

      <footer className="text-center py-6 border-t">
        © {new Date().getFullYear()} Nestoria Interiors and Properties
      </footer>
    </main>
  );
}