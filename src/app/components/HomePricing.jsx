"use client";

import { FaSpa, FaHotel, FaCrown, FaCheckCircle, FaStar } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1999/-",
    description: "Perfect for individual relaxation sessions",
    features: [
      "Oil Massage",
      "Cream Massage",
      "Dry Massage",
      "60 min Consultation",
      "Shower",
    ],
    highlight: false,
    ctaLink: "https://api.whatsapp.com/send?phone=9310xxxxxx",
    icon: <FaSpa className="text-amber-500" />,
  },
  {
    title: "Hotel Outlet",
    price: "₹15000/-",
    description: "Premium experience with luxury amenities",
    features: [
      "Oil Massage",
      "Cream Massage",
      "Dry Massage",
      "Private Suite",
      "Complimentary Refreshments",
      "90 min Session",
    ],
    highlight: true,
    ctaLink: "https://api.whatsapp.com/send?phone=9310xxxxxx",
    icon: <FaHotel className="text-amber-500" />,
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹20000/-",
    description: "Comprehensive spa experience with added treatments",
    features: [
      "Foreigner Therapist",
      "5 Star Property",
      "Private Suites",
      "Aromatherapy",
      "120 min Session",
    ],
    highlight: false,
    ctaLink: "https://api.whatsapp.com/send?phone=9310xxxxxx",
    icon: <FaCrown className="text-amber-500" />,
  },
];

export default function HomePricing() {
  return (
    <>
      <section
        id="Pricing"
        className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-50"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-800 font-medium mb-4">
              <FaStar className="text-amber-500" />
              Affordable Luxury
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4">
              Budget-Friendly{" "}
              <span className="text-amber-600">
                Spa Prices in Delhi for a Luxury Experience
              </span>
            </h2>

            <p className="text-amber-800 max-w-3xl mx-auto">
              Our massage service in Delhi starting from just ₹1999. Choose from our
              exclusive massage options designed for complete relaxation and
              rejuvenation. Check our affordable{" "}
              <a
                href="/spa-price-in-delhi"
                className="text-amber-600 font-semibold underline"
              >
                Spa Price in Delhi
              </a>
              .
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden bg-white border ${plan.highlight
                    ? "border-amber-500 shadow-xl"
                    : "border-amber-100 shadow-md"
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div
                  className={`p-6 ${plan.highlight ? "bg-amber-600" : "bg-amber-800"
                    }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {plan.icon}
                    <h3 className="text-2xl font-bold text-white">
                      {plan.title}
                    </h3>
                  </div>

                  <p className="text-amber-100">{plan.description}</p>
                </div>

                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-amber-600">
                      {plan.price}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FaCheckCircle className="text-amber-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 rounded-full font-semibold transition ${plan.highlight
                        ? "bg-amber-600 text-white hover:bg-amber-700"
                        : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                      }`}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>

  );
}