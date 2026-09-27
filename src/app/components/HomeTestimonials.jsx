
export default function HomeTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Akash Sharma",
      role: "Corporate Professional",
      content: "After long office hours, I wanted a place to relax. Luxury Russian Spa in Connaught Place gave me the perfect body massage. The ambience was soothing, and I felt completely stress-free after the session. Highly recommended for anyone looking for the best body spa in Delhi",
      date: "April 15, 2023",
      rating: 5,
      initials: "JD",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 2,
      name: "Rohit Verma",
      role: "Entrepreneur",
      content: "I have visited several spas in Delhi, but it was quite a different experience. Therapists are trained, the spa facility is clean and the massage actually helped me to shed off the body pains. This must have been one of the best body spas in Delhi.",
      date: "May 3, 2023",
      rating: 5,
      initials: "SA",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      name: "Sonu Kapoor",
      role: "Fitness Enthusiast",
      content: "After my workout sessions, I visit Luxury Russian Spa for full body massage. The team is very professional, and the oils they use are premium quality. This is the perfect spot for relaxation and body care in Delhi",
      date: "June 8, 2023",
      rating: 4,
      initials: "MR",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];
  return (
    <>
      <section className="py-16 px-4 sm:px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-amber-600 uppercase font-semibold tracking-wider mb-3">
              Client Experiences
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4">
              What Customers Said{" "}
              <span className="text-amber-600">
                About Our Body Spa in Delhi
              </span>
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              During our service, our therapists focus on customer satisfaction.
              That's why we are one of the best spa in Delhi.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>

                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                        }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {testimonial.content}
                </p>

                {/* Date */}
                <p className="text-sm text-gray-400">
                  Posted on {testimonial.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="mt-16 py-14 px-4 sm:px-8 bg-amber-800 rounded-3xl">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book a Massage{" "}
            <span className="text-amber-300">
              Spa in Delhi Instantly
            </span>
          </h2>

          <p className="text-amber-200 max-w-3xl mx-auto mb-10">
            For stress relief and removing muscle pain. Book a massage spa in Delhi
            at 24+ premium locations across Delhi NCR.
          </p>

          <div className="grid md:grid-cols-3 gap-4">

            <a
              href="tel:+9310xxxxxx"
              className="bg-white text-amber-800 py-4 px-6 rounded-xl font-semibold"
            >
              📞 Call to Book
            </a>

            <a
              href="/contact"
              className="border border-white text-white py-4 px-6 rounded-xl font-semibold"
            >
              ✉️ Send Inquiry
            </a>

            <a
              href="/outlets"
              className="bg-amber-300 text-amber-900 py-4 px-6 rounded-xl font-semibold"
            >
              💆 View Outlets
            </a>

          </div>

        </div>
      </section>
    </>

  );
}

