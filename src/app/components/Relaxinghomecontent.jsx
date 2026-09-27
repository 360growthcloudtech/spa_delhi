import Image from "next/image";

export default function RelaxingHomeContent() {
  return (
    <section className="bg-[#faf8f5] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Images */}
          <div className="space-y-6">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/haboutus.webp"
                alt="Relaxing Spa Massage"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-52 rounded-xl overflow-hidden shadow">
                <Image
                  src="/images/hb1.webp"
                  alt="Spa Ambience"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-52 rounded-xl overflow-hidden shadow">
                <Image
                  src="/images/steptodown.com870307.webp"
                  alt="Spa Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Relaxing Body to Body Massage in Delhi With Female Therapists
            </h2>

            <p className="text-amber-600 font-semibold mb-4">
              Exclusive Body Spa Outlets
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Want Full body to body massage in Delhi? Book best Spa in Delhi with professional female therapists for your deep relaxation. Our therapists focus on 100% safety & Privacy during your session. We have 24+ spa outlets, including 5-star hotels in Delhi. Whenever you are feeling stressed and want some enjoyable time. Book Body to body massage in Delhi with female therapists.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold">Lajpat Nagar</h3>
                <p className="text-sm text-gray-500">Prime Location</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold">Aerocity</h3>
                <p className="text-sm text-gray-500">Luxury Spa</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold">Connaught Place</h3>
                <p className="text-sm text-gray-500">Central Access</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold">Dwarka</h3>
                <p className="text-sm text-gray-500">Exclusive Service</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Trying to remove tensions and anxiety and improve circulation. Our professional therapists apply old and new techniques for your amazing body-to-body massage in Delhi. Once you enter one of our outlets, you will be warmly greeted by the air of hospitality, experienced therapists, and massage service, which will restore your energy and your thoughts.
            </p>

            <p className="text-gray-700 mb-8">
              All sessions are created for your complete comfort and satisfaction. At body spa in Delhi, our female therapists come and give you a relaxing massage experience during your session. We maintain proper hygiene and cleanliness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=9310xxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-full font-semibold"
              >
                Book Via WhatsApp
              </a>

              <a
                href="/spa-price-in-delhi"
                className="flex-1 text-center border border-amber-600 text-amber-600 hover:bg-amber-50 py-3 px-6 rounded-full font-semibold"
              >
                View Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}