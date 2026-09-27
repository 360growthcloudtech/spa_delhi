import Image from "next/image";
import Link from "next/link";
import WhatsappFloat from "../../components/WhatsappFloat";
import { Breadcrumbs, InfoBox, BenefitCard, FaqAccordion } from "../../components/BlogComponents";

export const metadata = {
  title: "What Thai Massage Does to Your Body - Benefits | Spa Delhi",
  description: "Thai massage benefits for your body explained - stress relief, flexibility & pain relief. Backed by Spa Delhi's certified therapists. Read the full guide now!",
  keywords: ["thai massage benefits", "what does thai massage do", "thai massage stress relief"],
  alternates: {
    canonical: "https://www.spadelhi.com/blog/thai-massage-does-to-your-body",
  },
  openGraph: {
    title: "What Does Thai Massage Do to Your Body?",
    description:
      "Learn how Thai massage helps reduce stress, improve flexibility, relieve muscle pain, and support better circulation.",
    images: ["https://www.spadelhi.com/images/steptodown.com870307.webp"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/steptodown.com870307.webp"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spadelhi.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.spadelhi.com/blog" },
    { "@type": "ListItem", position: 3, name: "What Does Thai Massage Do to Your Body", item: "https://www.spadelhi.com/blog/thai-massage-does-to-your-body" },
  ],
};

const benefits = [
  { title: "Stress Relief", description: "Helps your body relax and may leave you feeling calmer after the session." },
  { title: "Better Sleep", description: "A calming massage can support more restful sleep and better recovery." },
  { title: "Pain Relief", description: "Gentle stretching and pressure can ease tight muscles and soreness." },
  { title: "Flexibility", description: "Improves mobility and makes daily movement feel more comfortable." },
  { title: "Blood Circulation", description: "May support better circulation and a fresh, energized feeling." },
];

const faqs = [
  {
    question: "Is Thai massage painful?",
    answer: "Thai massage should not be painful. Some stretches may feel strong, but you should always tell your therapist if you feel uncomfortable.",
  },
  {
    question: "How long does a Thai massage session last?",
    answer: "Most sessions last between 60 and 90 minutes, depending on the treatment you choose.",
  },
  {
    question: "Can Thai massage help with back pain?",
    answer: "Many people find that Thai massage helps reduce muscle tightness and improves flexibility. If you have severe or long-term back pain, it is best to consult a doctor first.",
  },
  {
    question: "What should I wear for a Thai massage?",
    answer: "Loose and comfortable clothing is usually recommended because the massage includes stretching and body movements.",
  },
];

const relatedBlogs = [
  {
    title: "Difference Between Spa and Massage",
    href: "/blog/what-is-the-difference-between-spa-and-massage",
    image: "/images/spa-treatments.jpg",
  },
  {
    title: "Swedish Massage vs Deep Tissue Massage",
    href: "/swedish-massage-vs-deep-tissue-massage",
    image: "/images/80535.webp",
  },
  {
    title: "Health Benefits of Sandwich Massage",
    href: "/health-benefits-of-sandwich-massage",
    image: "/images/hb1.webp",
  },
  {
    title: "How a Hot Stone Massage Works",
    href: "/how-hot-stone-massage-works-in-delhi-spa",
    image: "/images/1627.jpg",
  },
];

export default function ThaiMassageBlogPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-blog-thai-massage-does-to-your-body"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <main className="bg-[#f5fdfc] text-gray-800">
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Thai Massage" }]} />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-amber-100 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] sm:p-8 lg:p-12">
            <div className="mb-8 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Wellness Guide</p>
              <h1 className="text-3xl font-bold leading-tight text-amber-900 sm:text-4xl lg:text-5xl">
                What Does Thai Massage Do to Your Body?
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>By Spa Delhi Team</span>
                <span>•</span>
                <span>Updated July 20, 2026</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>

            <div className="relative mb-8 h-[280px] overflow-hidden rounded-[24px] sm:h-[380px]">
              <Image
                src="/images/thaimassage1.png"
                alt="Thai massage therapy session"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="space-y-8">
                <section className="space-y-4">
                  <p className="text-lg leading-8 text-gray-700">
                    Have you ever felt tired, stressed, or had pain in your back or shoulders? Many people feel this way after working long hours or sitting in one place for too long.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    A Thai massage is one of the best ways to relax your body and mind. It is not just about feeling good for a short time. It can also help improve flexibility, reduce muscle pain, and make you feel fresh again.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    In this guide, you will learn what Thai massage does to your body, its benefits, what happens during a session, and who should or should not get one.
                  </p>
                </section>

                <section className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5 sm:p-6">
                  <h2 className="mb-4 text-2xl font-semibold text-amber-900">Table of Contents</h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><a href="#what-is-thai-massage" className="hover:text-amber-700">• What is Thai Massage?</a></li>
                    <li><a href="#how-does-thai-massage-work" className="hover:text-amber-700">• How Does Thai Massage Work?</a></li>
                    <li><a href="#benefits" className="hover:text-amber-700">• Benefits</a></li>
                    <li><a href="#who-should-get-it" className="hover:text-amber-700">• Who Should Get a Thai Massage?</a></li>
                    <li><a href="#what-to-expect" className="hover:text-amber-700">• What to Expect During a Thai Massage Session</a></li>
                    <li><a href="#risks" className="hover:text-amber-700">• Risks and Safety</a></li>
                    <li><a href="#who-should-avoid-thai-massage" className="hover:text-amber-700">• Who Should Avoid Thai Massage?</a></li>
                    <li><a href="#tips-before-your-thai-massage" className="hover:text-amber-700">• Tips Before Your Thai Massage</a></li>
                    <li><a href="#what-to-do-after-a-thai-massage" className="hover:text-amber-700">• What Should You Do After a Thai Massage?</a></li>
                    <li><a href="#faqs" className="hover:text-amber-700">• Frequently Asked Questions</a></li>
                    <li><a href="#final-thoughts" className="hover:text-amber-700">• Final Thoughts</a></li>
                  </ul>
                </section>

                <section id="what-is-thai-massage" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">What Is Thai Massage?</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Thai massage is a traditional healing therapy that started in Thailand many years ago.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Unlike a regular oil massage, Thai massage uses gentle stretching, body movements, and pressure on different parts of the body. Some people even call it "lazy yoga" because the therapist helps stretch your body while you relax.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    During the session, you usually wear comfortable clothes, and oil is not always used.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    The main goal of Thai massage is to help your body move better, reduce stress, and improve overall wellness.
                  </p>
                  <div className="relative h-[240px] overflow-hidden rounded-[20px]">
                    <Image src="/images/steptodown.com870307.webp" alt="Thai massage stretching movement" fill className="object-cover" />
                  </div>
                </section>

                <section id="how-does-thai-massage-work" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">How Does Thai Massage Work?</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    A trained therapist uses their hands, thumbs, elbows, knees, and sometimes even their feet to apply gentle pressure and stretch different muscles.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    These movements can help:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
                    <li>Relax tight muscles</li>
                    <li>Improve blood flow</li>
                    <li>Increase flexibility</li>
                    <li>Reduce body stiffness</li>
                    <li>Help you feel calm</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-700">
                    The pressure is adjusted according to your comfort level, so you should always let the therapist know if something feels too strong.
                  </p>
                </section>

                <section id="benefits" className="space-y-5 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Benefits of Thai Massage</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Thai massage offers many benefits for both your body and your mind.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Let&apos;s look at some of the most common ones.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">1. Reduces Stress</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Daily life can be stressful. Work, studies, family responsibilities, and long hours on your phone or computer can make your mind feel tired.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Thai massage helps your body relax, which may also help you feel calmer and more peaceful after the session.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Many people say they sleep better and feel less stressed after getting a massage.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">2. Relieves Muscle Pain</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        If your neck, shoulders, back, or legs often feel tight or sore, Thai massage may help reduce that discomfort.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Gentle stretching and pressure can help loosen tight muscles and improve how your body feels.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        This is one reason why many office workers choose Thai massage after long working hours.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">3. Improves Flexibility</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Your body becomes stiff when you don&apos;t move enough.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Thai massage includes different stretching techniques that may help your muscles and joints move more freely.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Better flexibility can make everyday activities feel easier and more comfortable.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">4. Improves Blood Circulation</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Good blood circulation helps carry oxygen and nutrients throughout your body.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        The stretching and pressure used during Thai massage may support healthy blood flow, which can help your muscles feel refreshed.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">5. Helps You Sleep Better</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Stress and body pain can make it difficult to sleep well.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        After a relaxing Thai massage, many people feel calmer and more comfortable, which may help improve sleep quality.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        A good night&apos;s sleep also helps your body recover and gives you more energy for the next day.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">6. Helps You Feel More Active</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        When your muscles feel relaxed and your body moves more easily, you may notice that you have more energy during the day.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Many people leave a Thai massage session feeling refreshed, lighter, and ready to get back to their daily routine.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="relative h-[240px] overflow-hidden rounded-[20px]">
                  <Image src="/images/thaimassage2.png" alt="Relaxing spa environment" fill className="object-cover" />
                </section>

                <section id="who-should-get-it" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Who Should Get a Thai Massage?</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Thai massage may be a good choice for:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
                    <li>Office workers who sit for long hours</li>
                    <li>People with muscle tightness</li>
                    <li>Those who feel stressed or tired</li>
                    <li>People who want to improve flexibility</li>
                    <li>Anyone looking for a natural way to relax</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-700">
                    If you have a medical condition or recent injury, it is always a good idea to speak with your doctor before getting any type of massage.
                  </p>
                </section>

                <section id="what-to-expect" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">What to Expect During a Thai Massage Session</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    If it is your first Thai massage, you may wonder what will happen.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    A typical session usually follows these steps:
                  </p>
                  <div className="space-y-4">
                    {[
                      "Consultation: The therapist will ask if you have any pain, injuries, or health concerns.",
                      "Comfortable Clothing: Unlike many other massages, you usually wear loose and comfortable clothes.",
                      "Massage Begins: The therapist gently stretches your body and applies pressure to different muscles using their hands, thumbs, elbows, or feet.",
                      "Relaxation: The session normally lasts between 60 and 90 minutes, depending on the treatment you choose.",
                    ].map((step, index) => (
                      <div key={step} className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                        <p className="font-semibold text-amber-900">Step {index + 1}</p>
                        <p className="mt-1 text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg leading-8 text-gray-700">
                    After the massage, many people feel relaxed, refreshed, and more flexible.
                  </p>
                </section>

                <section id="risks" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Risks and Safety</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Thai massage is safe for most healthy people when it is done by a trained therapist.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    However, it may not be the right choice for everyone.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    You should talk to your doctor before getting a Thai massage if you:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
                    <li>Are pregnant</li>
                    <li>Have a recent bone fracture</li>
                    <li>Have severe osteoporosis</li>
                    <li>Have a serious heart condition</li>
                    <li>Have recently had surgery</li>
                    <li>Have a serious skin infection or open wound</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-700">
                    Always tell your therapist about any medical condition before the massage starts. This helps them choose the safest technique for you.
                  </p>
                </section>

                <section id="who-should-avoid-thai-massage" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Who Should Avoid Thai Massage?</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Thai massage may not be suitable for some people.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    It is better to avoid it if you have:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
                    <li>A high fever</li>
                    <li>A fresh injury</li>
                    <li>Severe back or neck problems without medical advice</li>
                    <li>Blood clotting disorders</li>
                    <li>Serious medical conditions unless your doctor says it is safe</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-700">
                    If you are unsure, ask your healthcare provider before booking a session.
                  </p>
                </section>

                <section id="tips-before-your-thai-massage" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Tips Before Your Thai Massage</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    A little preparation can make your experience even better.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Here are some simple tips:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
                    <li>Wear loose and comfortable clothes.</li>
                    <li>Drink enough water before your appointment.</li>
                    <li>Avoid eating a heavy meal just before the massage.</li>
                    <li>Arrive 10–15 minutes early so you can relax.</li>
                    <li>Tell your therapist if you have pain or any health condition.</li>
                  </ul>
                </section>

                <section id="what-to-do-after-a-thai-massage" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">What Should You Do After a Thai Massage?</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    After your session, your body needs a little time to recover.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Here are a few simple things you can do:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
                    <li>Drink plenty of water.</li>
                    <li>Rest for a while if you feel tired.</li>
                    <li>Avoid heavy exercise for a few hours.</li>
                    <li>Eat a light and healthy meal.</li>
                    <li>Enjoy the relaxed feeling and let your body recover naturally.</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-700">
                    Some people may feel mild soreness after their first session. This usually goes away within a day or two.
                  </p>
                </section>

                <section id="faqs" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                      <h3 className="font-semibold text-amber-900">Is Thai massage painful?</h3>
                      <p className="mt-2 text-gray-700">Thai massage should not be painful. Some stretches may feel strong, but you should always tell your therapist if you feel uncomfortable.</p>
                    </div>
                    <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                      <h3 className="font-semibold text-amber-900">How long does a Thai massage session last?</h3>
                      <p className="mt-2 text-gray-700">Most sessions last between 60 and 90 minutes, depending on the treatment you choose.</p>
                    </div>
                    <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                      <h3 className="font-semibold text-amber-900">Can Thai massage help with back pain?</h3>
                      <p className="mt-2 text-gray-700">Many people find that Thai massage helps reduce muscle tightness and improves flexibility. If you have severe or long-term back pain, it is best to consult a doctor first.</p>
                    </div>
                    <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                      <h3 className="font-semibold text-amber-900">How often should I get a Thai massage?</h3>
                      <p className="mt-2 text-gray-700">It depends on your needs.</p>
                      <p className="mt-2 text-gray-700">Some people enjoy one session every month, while others visit every two weeks to help manage stress and muscle tension.</p>
                    </div>
                    <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                      <h3 className="font-semibold text-amber-900">What should I wear for a Thai massage?</h3>
                      <p className="mt-2 text-gray-700">Loose and comfortable clothing is usually recommended because the massage includes stretching and body movements.</p>
                    </div>
                    <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                      <h3 className="font-semibold text-amber-900">Can beginners get a Thai massage?</h3>
                      <p className="mt-2 text-gray-700">Yes.</p>
                      <p className="mt-2 text-gray-700">If it is your first session, tell your therapist so they can adjust the pressure according to your comfort.</p>
                    </div>
                  </div>
                </section>

                <section id="final-thoughts" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Final Thoughts</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Thai massage is much more than a way to relax.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    It may help improve flexibility, reduce muscle tension, support better blood circulation, and leave you feeling refreshed.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Every person is different, so your experience may not be exactly the same as someone else&apos;s. If you have any medical concerns, always speak with your doctor before getting a massage.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    When performed by a trained therapist, Thai massage can be a safe and enjoyable part of your wellness routine.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-amber-900">Looking for a Professional Thai Massage in Delhi?</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    If you are looking for a relaxing and professional Thai massage experience in Delhi, choose a spa that has trained therapists, maintains high hygiene standards, and focuses on customer comfort.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Spa Delhi offers a dedicated <a href="/thai-massage-in-delhi" className="font-semibold text-amber-700 underline hover:text-amber-800">Thai massage in Delhi</a> service across 24+ outlets, including home and hotel spa options. Book your appointment today and experience the benefits of Thai massage for yourself.
                  </p>
                </section>

                <section className="rounded-[24px] bg-gradient-to-r from-amber-600 to-amber-700 p-8 text-white shadow-lg">
                  <h2 className="text-2xl font-semibold">Book Your Thai Massage in Delhi</h2>
                  <p className="mt-3 max-w-2xl text-amber-50">
                    Experience a relaxing, professional Thai massage session in Delhi with trained therapists and a soothing atmosphere.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a href="/thai-massage-in-delhi" className="rounded-full bg-white px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50">View Thai Massage Service</a>
                    <a href="https://api.whatsapp.com/send?phone=919217255113" className="rounded-full border border-white/60 px-6 py-3 font-semibold transition hover:bg-white/10">Book on WhatsApp</a>
                  </div>
                </section>
              </article>

              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-amber-900">Related Blogs</h3>
                  <div className="mt-5 space-y-4">
                    {relatedBlogs.map((blog) => (
                      <Link key={blog.title} href={blog.href} className="flex items-center gap-3 rounded-xl border border-amber-100 p-3 transition hover:bg-amber-50">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                          <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{blog.title}</p>
                          <p className="text-sm text-amber-700">Read more</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <WhatsappFloat />
    </>
  );
}
