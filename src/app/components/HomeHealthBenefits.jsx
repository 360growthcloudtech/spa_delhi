
import Link from "next/link";

// Physical Benefits Data
  const physicalBenefits = [
    { 
      id: 1, 
      title: "Muscle Relief", 
      description: "Stimulates knotted muscles and relieves pain.",
      icon: "💆"
    },
    { 
      id: 2, 
      title: "Improved Circulation", 
      description: "Increases blood circulation.",
      icon: "❤️"
    },
    { 
      id: 3, 
      title: "Detoxification", 
      description: "Helps the body naturally eliminate toxins.",
      icon: "✨"
    },
    { 
      id: 4, 
      title: "Flexibility Boost", 
      description: "Improves distribution of movement throughout the joints.",
      icon: "🧘"
    },
    { 
      id: 5, 
      title: "Pain Management", 
      description: "Relieves acute and chronic pain.",
      icon: "🛡️"
    }
  ];
  // Spiritual Benefits Data
  const spiritualBenefits = [
    { 
      id: 1, 
      title: "Stress Reduction", 
      description: "Helps to calm the mind and the nerves.",
      icon: "🧘‍♀️"
    },
    { 
      id: 2, 
      title: "Mental Clarity", 
      description: "Helps you concentrate and relax.",
      icon: "⚖️"
    },
    { 
      id: 3, 
      title: "Emotional Balance", 
      description: "It is calming for the mind and soul.",
      icon: "💡"
    },
    { 
      id: 4, 
      title: "Energy Flow", 
      description: "Opens and revitalizes the body energy.",
      icon: "🕊️"
    },
    { 
      id: 5, 
      title: "Deep Relaxation", 
      description: "Connects the body, the mind and the spirit.",
      icon: "🌀"
    }
  ];

export default function HomeHealthBenefits() {
  return (
    <>
    <section className="bg-amber-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-amber-600 uppercase font-semibold tracking-wider mb-3">
            Holistic Wellbeing
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4">
            Benefits Of{" "}
            <span className="text-amber-600">
              Choosing Our Massage Spa in Delhi
            </span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            By choosing our massage service in delhi you will improve sleep quality, blood circulation,
            and skin tone. Our massage spa in Delhi has certified therapists
            for your relaxing massage service.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Physical Benefits */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-8">
              🏃 Physical Benefits
            </h3>

            <div className="space-y-5">
              {physicalBenefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-800">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spiritual Benefits */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-8">
              🧘 Spiritual Benefits
            </h3>

            <div className="space-y-5">
              {spiritualBenefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-800">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/massage-service-in-delhi"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition"
          >
            Discover Our Treatments
          </Link>
        </div>

      </div>
    </section>
    {/* end */}
          <section className="w-full bg-[#f8f6f3] py-20 px-4">
          <div className="max-w-7xl mx-auto">
    
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-4">
                Why Choose Luxury Russian Spa?
              </h2>
              <p className="text-[#6b6b6b] max-w-2xl mx-auto">
               We made thousands of trusted customers by giving professional massage service in Delhi. We have 24+ luxury spa outlets all over Delhi and the NCR Regions.
              </p>
            </div>
    
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              
              {/* Outlets */}
              <div className="bg-white rounded-2xl shadow-md py-12 px-6 hover:shadow-xl transition">
                <h3 className="text-5xl font-bold text-[#9c6b3b] mb-3">24+</h3>
                <p className="text-lg text-[#2c2c2c] font-medium">Outlets</p>
                <p className="text-sm text-[#6b6b6b] mt-2">
                  Premium spa outlets across top locations
                </p>
              </div>
    
              {/* Hotel Partners */}
              <div className="bg-white rounded-2xl shadow-md py-12 px-6 hover:shadow-xl transition">
                <h3 className="text-5xl font-bold text-[#9c6b3b] mb-3">5★</h3>
                <p className="text-lg text-[#2c2c2c] font-medium">Hotel Partners</p>
                <p className="text-sm text-[#6b6b6b] mt-2">
                  Collaborations with luxury five-star hotels
                </p>
              </div>
    
              {/* Happy Clients */}
              <div className="bg-white rounded-2xl shadow-md py-12 px-6 hover:shadow-xl transition">
                <h3 className="text-5xl font-bold text-[#9c6b3b] mb-3">20k+</h3>
                <p className="text-lg text-[#2c2c2c] font-medium">Happy Clients</p>
                <p className="text-sm text-[#6b6b6b] mt-2">
                  Thousands trust us for relaxation & wellness
                </p>
              </div>
    
            </div>
          </div>
        </section>
    </>
    
  );
}

