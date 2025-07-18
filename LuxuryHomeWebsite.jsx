export default function LuxuryHomeWebsite() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="bg-black text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wider">The Collection by Adair Homes</h1>
          <nav className="space-x-6 text-lg">
            <a href="#homes" className="hover:underline">Homes</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#floorplans" className="hover:underline">Floorplans</a>
            <a href="#media" className="hover:underline">Media</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[url('/images/hero-luxury-home.jpg')] bg-cover bg-center text-white py-32 px-6 text-center">
        <h2 className="text-5xl font-bold mb-4">Luxury Homes Built Around You</h2>
        <p className="text-xl max-w-3xl mx-auto">Tailored elegance. Enduring craftsmanship. Distinctive design. Discover the next generation of custom living with The Collection by Adair Homes.</p>
      </section>

      {/* Featured Homes */}
      <section id="homes" className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-12">Our Signature Homes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Cascade Estate", "Chelan Retreat", "Sonoma Modern"].map((name, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={`/images/home${idx + 1}.jpg`} alt={name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">{name}</h4>
                  <p className="text-gray-600">Exquisite finishes, modern amenities, and timeless design define this home model.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-semibold text-center mb-12">Our Proven Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "1. Consultation", desc: "We begin with an in-depth design consultation tailored to your lifestyle." },
              { step: "2. Design & Selection", desc: "Collaborate with our in-house architects and designers to shape your dream home." },
              { step: "3. Build & Deliver", desc: "Experience white-glove service through construction to final walkthrough." },
            ].map(({ step, desc }, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl shadow-md">
                <h4 className="text-2xl font-bold mb-3">{step}</h4>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-12">Design Inspiration</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <img key={n} src={`/images/gallery${n}.jpg`} alt={`Gallery ${n}`} className="rounded-xl shadow-md object-cover w-full h-48" />
            ))}
          </div>
        </div>
      </section>

      {/* Floorplans */}
      <section id="floorplans" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-12">High-End Floorplans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["cascade", "chelan", "sonoma"].map((plan, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <img src={`/images/floorplan-${plan}.jpg`} alt={`Floorplan ${plan}`} className="w-full h-64 object-contain mb-4" />
                <h4 className="text-2xl font-semibold capitalize">{plan} Floorplan</h4>
                <p className="text-gray-600 mt-2">Thoughtfully designed layouts blending comfort, space, and elegance.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-12">Experience the Lifestyle</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/your-luxury-home-tour" className="w-full h-full rounded-xl shadow-lg" allowFullScreen></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/your-client-testimonials" className="w-full h-full rounded-xl shadow-lg" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-semibold mb-6">Let’s Build Your Dream Home</h3>
          <p className="text-gray-700 mb-6">Connect with our luxury home advisors and begin the journey today.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-4 border rounded-xl" />
            <input type="email" placeholder="Email Address" className="w-full p-4 border rounded-xl" />
            <textarea placeholder="Tell us about your vision..." className="w-full p-4 border rounded-xl h-32" />
            <button type="submit" className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold">Schedule Consultation</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} The Collection by Adair Homes. All rights reserved.</p>
      </footer>
    </div>
  );
}
