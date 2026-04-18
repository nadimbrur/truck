import { useEffect, useState } from "react";

const BRAND = "#005ecc";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // later connect to backend / email
    alert("Message sent successfully!");
  };

  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-3 text-gray-600">
            Get in touch for truck inquiries, quotes, or business partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-6 text-gray-600">

            <div>
              <h3 className="font-semibold text-gray-900">Company</h3>
              <p>Nakajima Automobile Co., Ltd.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p>
                1857 Shibamachi, Isesaki,<br />
                Gunma 372-0824, Japan
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <a
                href="mailto:nakajima4141@gmail.com"
                className="hover:underline"
                style={{ color: BRAND }}
              >
                nakajima4141@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <a
                href="tel:+81270325810"
                className="hover:underline"
                style={{ color: BRAND }}
              >
                +81-270-32-5810
              </a>
            </div>

            {/* MAP */}
            <div className="mt-6 h-[250px] rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps?q=36.2840345,139.1721446&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="map"
              />
            </div>

          </div>

          {/* RIGHT: CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-2xl shadow space-y-5"
          >

            <h3 className="text-xl font-semibold text-gray-900">
              Send a Message
            </h3>

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full text-white py-3 rounded-lg font-semibold transition hover:opacity-90"
              style={{ backgroundColor: BRAND }}
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;