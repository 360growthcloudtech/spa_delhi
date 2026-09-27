import Image from "next/image";
import Link from "next/link";
import WhatsappFloat from "../../components/WhatsappFloat";
import {
  Breadcrumbs,
} from "../../components/BlogComponents";

export const metadata = {
  title:
    "What Is a B2B Full Body Massage - Beginner's Guide | Spa Delhi",
  description:
    "B2B full body massage explained for beginners - how it works, benefits & safety tips. Trusted guide from Spa Delhi's certified therapists. Read now & book!",
  keywords: ["what is b2b full body massage", "b2b massage guide", "b2b massage beginners guide"],
  alternates: {
    canonical:
      "https://www.spadelhi.com/blog/what-is-b2b-full-body-massage",
  },
  openGraph: {
    title: "What is a B2B Full Body Massage? Complete Beginner's Guide",
    description:
      "Learn what a B2B full body massage is, how it works, its benefits, safety tips, and everything beginners should know.",
    images: ["https://www.spadelhi.com/images/spa-treatments.jpg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/spa-treatments.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spadelhi.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.spadelhi.com/blog" },
    { "@type": "ListItem", position: 3, name: "What is a B2B Full Body Massage", item: "https://www.spadelhi.com/blog/what-is-b2b-full-body-massage" },
  ],
};

const benefits = [
  {
    title: "Deep Relaxation",
    description:
      "Helps relax both the body and mind after a busy day.",
  },
  {
    title: "Stress Relief",
    description:
      "May help reduce daily stress and create a peaceful feeling.",
  },
  {
    title: "Less Muscle Tension",
    description:
      "Gentle massage techniques can reduce stiffness and tight muscles.",
  },
  {
    title: "Better Blood Circulation",
    description:
      "Massage may encourage healthy blood flow throughout the body.",
  },
  {
    title: "Better Sleep",
    description:
      "Relaxed muscles may help improve sleep quality.",
  },
  {
    title: "Refreshes the Mind",
    description:
      "Many people leave feeling refreshed and more energetic.",
  },
];

const faqs = [
  {
    question: "What does B2B stand for in massage?",
    answer:
      "B2B stands for Body-to-Body Massage, a massage style that uses smooth body movements along with traditional massage techniques to promote relaxation.",
  },
  {
    question: "Is B2B massage good for stress?",
    answer:
      "Many people find massage helpful for relaxation and reducing stress.",
  },
  {
    question: "How long does a B2B massage take?",
    answer:
      "Most sessions last between 60 and 120 minutes depending on the package.",
  },
  {
    question: "Should I drink water after a massage?",
    answer:
      "Yes. Drinking water afterward helps you feel refreshed.",
  },
  {
    question: "Can beginners try a B2B massage?",
    answer:
      "Yes. Beginners can inform the therapist so the pressure can be adjusted according to their comfort.",
  },
];

const relatedBlogs = [
  {
    title: "Difference Between Spa and Massage",
    href: "/blog/what-is-the-difference-between-spa-and-massage",
    image: "/images/spa-treatments.jpg",
  },
  {
    title: "What Does Thai Massage Do to Your Body?",
    href: "/blog/thai-massage-does-to-your-body",
    image: "/images/thaimassage1.png",
  },
  {
    title: "Health Benefits of Sandwich Massage",
    href: "/health-benefits-of-sandwich-massage",
    image: "/images/hb1.webp",
  },
  {
    title: "How Hot Stone Massage Works",
    href: "/how-hot-stone-massage-works-in-delhi-spa",
    image: "/images/1627.jpg",
  },
];

export default function B2BMassageBlogPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-blog-what-is-b2b-full-body-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <style>{`
        html{
          scroll-behavior:smooth;
        }
      `}</style>

      <main className="bg-[#f5fdfc] text-gray-800">

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "B2B Full Body Massage" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">

          <div className="rounded-[32px] border border-amber-100 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] sm:p-8 lg:p-12">

            <div className="mb-8 space-y-4">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                Wellness Guide
              </p>

              <h1 className="text-3xl font-bold leading-tight text-amber-900 sm:text-4xl lg:text-5xl">
                What is a B2B Full Body Massage?
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>By Spa Delhi Team</span>
                <span>•</span>
                <span>Updated July 2026</span>
                <span>•</span>
                <span>10 min read</span>
              </div>

            </div>

            <div className="relative mb-8 h-[280px] overflow-hidden rounded-[24px] sm:h-[380px]">

              <Image
                src="/images/b2b-blog-banner.png"
                alt="B2B Full Body Massage"
                fill
                priority
                className="object-cover"
              />

            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

              <article className="space-y-8">

                <section className="space-y-4">

                  <p className="text-lg leading-8 text-gray-700">
                    A B2B Full Body Massage stands for
                    Body-to-Body Massage. It is a massage
                    style where the therapist uses not only the hands but also
                    smooth body movements to create a relaxing wellness
                    experience.
                  </p>

                  <p className="text-lg leading-8 text-gray-700">
                    Many people choose this massage to relax after a busy day,
                    reduce muscle tension, and enjoy some peaceful time away
                    from their daily routine.
                  </p>

                  <p className="text-lg leading-8 text-gray-700">
                    In this guide, you will learn everything about a B2B Full
                    Body Massage in simple language—from how it works to its
                    benefits, safety tips, myths, FAQs, and much more.
                  </p>

                </section>

                <section className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6">

                  <h2 className="mb-5 text-2xl font-semibold text-amber-900">
                    Table of Contents
                  </h2>

                  <ul className="space-y-2 text-gray-700">

                    <li><a href="#what-is-b2b" className="hover:text-amber-700">• What is a B2B Full Body Massage?</a></li>

                    <li><a href="#how-does-it-work" className="hover:text-amber-700">• How Does a B2B Massage Work?</a></li>

                    <li><a href="#benefits" className="hover:text-amber-700">• Benefits of B2B Massage</a></li>

                    <li><a href="#who-can-choose" className="hover:text-amber-700">• Who Can Choose This Massage?</a></li>

                    <li><a href="#session" className="hover:text-amber-700">• What Happens During the Session?</a></li>

                    <li><a href="#duration" className="hover:text-amber-700">• How Long Does It Take?</a></li>

                    <li><a href="#prepare" className="hover:text-amber-700">• How to Prepare Before Your Massage</a></li>

                    <li><a href="#after" className="hover:text-amber-700">• What Should You Do After the Massage?</a></li>

                    <li><a href="#safe" className="hover:text-amber-700">• Is B2B Massage Safe?</a></li>

                    <li><a href="#myths" className="hover:text-amber-700">• Common Myths</a></li>

                    <li><a href="#spa-tips" className="hover:text-amber-700">• Tips for Choosing a Good Spa</a></li>

                    <li><a href="#faqs" className="hover:text-amber-700">• FAQs</a></li>

                    <li><a href="#final-thoughts" className="hover:text-amber-700">• Final Thoughts</a></li>

                  </ul>

                </section>
                                <section
                  id="what-is-b2b"
                  className="space-y-4 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    What is a B2B Full Body Massage?
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    A B2B Full Body Massage stands for
                    Body-to-Body Massage. It is a massage
                    style where the therapist uses not only their hands but also
                    other parts of their body, such as the forearms or torso, to
                    create smooth, flowing massage movements.
                  </p>

                  <p className="text-lg leading-8 text-gray-700">
                    The main goal is to help the client relax, reduce muscle
                    tension, and enjoy a peaceful wellness experience in a
                    comfortable environment.
                  </p>

                  <p className="text-lg leading-8 text-gray-700">
                    Every spa may have its own massage techniques and procedure,
                    so the exact experience can vary from one wellness center to
                    another.
                  </p>

                  <div className="relative h-[260px] overflow-hidden rounded-[20px]">
                    <Image
                      src="/images/b2b-massage.jpg"
                      alt="B2B Massage"
                      fill
                      className="object-cover"
                    />
                  </div>
                </section>

                <section
                  id="how-does-it-work"
                  className="space-y-4 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    How Does a B2B Massage Work?
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    A professional massage session usually begins with a short
                    consultation. The therapist asks a few questions to
                    understand your comfort level and whether there are any
                    health concerns.
                  </p>

                  <p className="text-lg leading-8 text-gray-700">
                    During the massage, smooth massage oil is usually applied,
                    and gentle pressure is used through controlled movements.
                    The pressure is adjusted according to your comfort.
                  </p>

                  <p className="text-lg leading-8 text-gray-700">
                    The overall purpose is to help your muscles relax while
                    creating a calm and peaceful wellness experience.
                  </p>

                  <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
                    <h3 className="text-xl font-semibold text-amber-900">
                      Before the Massage Begins
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6 text-lg text-gray-700">
                      <li>Discuss any muscle pain or stiffness.</li>
                      <li>Tell the therapist about health conditions.</li>
                      <li>Mention areas needing extra attention.</li>
                      <li>Share your preferred pressure level.</li>
                    </ul>
                  </div>
                </section>

                <section
                  id="benefits"
                  className="space-y-6 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    Benefits of a B2B Full Body Massage
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    Many people choose a B2B massage because it helps them relax
                    and take a break from their busy daily routine.
                  </p>

                  <div className="grid gap-5 md:grid-cols-2">

                    {benefits.map((item) => (

                      <div
                        key={item.title}
                        className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm hover:shadow-md transition"
                      >

                        <h3 className="text-xl font-semibold text-amber-900">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-7 text-gray-700">
                          {item.description}
                        </p>

                      </div>

                    ))}

                  </div>

                  <div className="space-y-8">

                    <div>

                      <h3 className="text-xl font-semibold text-amber-900">
                        1. Deep Relaxation
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        One of the biggest reasons people choose a massage is to
                        relax. Gentle massage techniques can help calm your body
                        and your mind after a stressful day.
                      </p>

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-amber-900">
                        2. Less Muscle Tension
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Sitting for long hours or doing physical work can make
                        muscles feel tight. Massage may help reduce stiffness
                        and improve overall comfort.
                      </p>

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-amber-900">
                        3. Better Blood Circulation
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Smooth massage movements may encourage healthy blood
                        circulation, helping your body feel refreshed.
                      </p>

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-amber-900">
                        4. Stress Relief
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Taking time for yourself can help reduce everyday stress
                        and leave you feeling calmer and more peaceful.
                      </p>

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-amber-900">
                        5. Better Sleep
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Many people feel relaxed after a massage, which may make
                        it easier to enjoy a good night's sleep.
                      </p>

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-amber-900">
                        6. Refreshes the Mind
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        A relaxing massage session often leaves people feeling
                        fresh, positive, and ready to continue with their daily
                        activities.
                      </p>

                    </div>

                  </div>

                </section>

                <section className="relative h-[260px] overflow-hidden rounded-[20px]">

                  <Image
                    src="/images/b2b-massage1.png"
                    alt="Spa Wellness"
                    fill
                    className="object-cover"
                  />

                </section>

                <section
                  id="who-can-choose"
                  className="space-y-4 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    Who Can Choose a B2B Full Body Massage?
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    A B2B Full Body Massage may be suitable for adults who want
                    to relax, reduce stress, and enjoy a peaceful wellness
                    experience.
                  </p>

                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
                    <li>People who feel stressed from work.</li>
                    <li>Office workers who sit for long hours.</li>
                    <li>People with mild muscle tightness.</li>
                    <li>Anyone looking for relaxation.</li>
                    <li>People who want a break from their busy routine.</li>
                  </ul>

                  <p className="text-lg leading-8 text-gray-700">
                    If you have any medical condition, recent injury, or are
                    pregnant, it is always best to speak with a healthcare
                    professional before booking any massage session.
                  </p>
                </section>

                <section
                  id="session"
                  className="space-y-5 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    What Happens During the Massage Session?
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    Although every spa has its own process, most professional
                    wellness centers follow similar steps.
                  </p>

                  <div className="space-y-4">

                    {[
                      {
                        title: "Step 1",
                        heading: "Welcome",
                        description:
                          "The therapist welcomes you, explains the massage process, and answers any questions."
                      },
                      {
                        title: "Step 2",
                        heading: "Preparation",
                        description:
                          "You are given privacy to prepare according to the spa's instructions."
                      },
                      {
                        title: "Step 3",
                        heading: "Massage Begins",
                        description:
                          "Massage oil is applied, and smooth techniques with gentle pressure are used."
                      },
                      {
                        title: "Step 4",
                        heading: "Relaxation",
                        description:
                          "Soft music and a peaceful environment help create a calming experience."
                      },
                      {
                        title: "Step 5",
                        heading: "Session Ends",
                        description:
                          "The therapist lets you know when the massage is complete and offers aftercare advice."
                      }
                    ].map((step) => (

                      <div
                        key={step.title}
                        className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm"
                      >

                        <p className="font-semibold text-amber-700">
                          {step.title}
                        </p>

                        <h3 className="mt-1 text-xl font-semibold text-amber-900">
                          {step.heading}
                        </h3>

                        <p className="mt-2 text-gray-700 leading-7">
                          {step.description}
                        </p>

                      </div>

                    ))}

                  </div>
                </section>

                <section
                  id="duration"
                  className="space-y-4 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    How Long Does a B2B Massage Take?
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    The duration depends on the package you choose. Most spas
                    commonly offer:
                  </p>

                  <div className="grid gap-5 sm:grid-cols-3">

                    {["60 Minutes", "90 Minutes", "120 Minutes"].map((time) => (

                      <div
                        key={time}
                        className="rounded-2xl border border-amber-100 bg-amber-50 p-6 text-center"
                      >
                        <h3 className="text-2xl font-bold text-amber-900">
                          {time}
                        </h3>
                      </div>

                    ))}

                  </div>

                  <p className="text-lg leading-8 text-gray-700">
                    Longer sessions provide more time for relaxation and allow
                    the therapist to focus on additional muscle groups.
                  </p>
                </section>

                <div className="relative h-[260px] overflow-hidden rounded-[20px]">

                  <Image
                    src="/images/b2b-massage2.png"
                    alt="Professional Massage Session"
                    fill
                    className="object-cover"
                  />

                </div>

                <section
                  id="prepare"
                  className="space-y-4 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    How to Prepare Before Your Massage
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    Following a few simple tips before your appointment can make
                    your experience even better.
                  </p>

                  <ul className="list-disc space-y-3 pl-6 text-lg text-gray-700">

                    <li>Drink plenty of water before your appointment.</li>

                    <li>Eat a light meal instead of a heavy one.</li>

                    <li>Arrive 10–15 minutes early.</li>

                    <li>Wear comfortable clothing.</li>

                    <li>Tell the therapist about any injuries or pain.</li>

                    <li>Keep your phone on silent mode.</li>

                  </ul>
                </section>

                <section
                  id="after"
                  className="space-y-4 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    What Should You Do After the Massage?
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    After your massage session, your body needs a little time to
                    recover and enjoy the relaxing effects.
                  </p>

                  <ul className="list-disc space-y-3 pl-6 text-lg text-gray-700">

                    <li>Drink plenty of water.</li>

                    <li>Take some rest if possible.</li>

                    <li>Avoid heavy exercise for a few hours.</li>

                    <li>Eat a healthy meal.</li>

                    <li>Allow your body to relax naturally.</li>

                  </ul>
                </section>

                <section
                  id="safe"
                  className="space-y-4 scroll-mt-32"
                >

                  <h2 className="text-2xl font-semibold text-amber-900">
                    Is B2B Massage Safe?
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    A massage can be safe when it is performed by trained
                    professionals in a clean, reputable spa that follows proper
                    hygiene standards.
                  </p>

                  <p className="text-lg leading-8 text-gray-700">
                    Before booking, make sure the spa:
                  </p>

                  <ul className="list-disc space-y-3 pl-6 text-lg text-gray-700">

                    <li>Maintains proper cleanliness.</li>

                    <li>Uses fresh towels and sanitized equipment.</li>

                    <li>Has trained professional therapists.</li>

                    <li>Explains the massage process clearly.</li>

                    <li>Respects your privacy and comfort.</li>

                    <li>Always asks for your consent.</li>

                  </ul>

                  <p className="text-lg leading-8 text-gray-700">
                    If you ever feel uncomfortable during the massage, inform
                    the therapist immediately or end the session.
                  </p>

                </section>
                                <section
                  id="myths"
                  className="space-y-6 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    Common Myths About B2B Massage
                  </h2>

                  <div className="space-y-6">

                    <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-amber-900">
                        Myth 1: It Is Only for Luxury
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        <strong>Truth:</strong> Many people choose massage simply
                        for relaxation, stress relief, and overall wellness.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-amber-900">
                        Myth 2: It Is Painful
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        <strong>Truth:</strong> A professional massage is designed
                        to be comfortable. You can always ask for lighter or
                        firmer pressure.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-amber-900">
                        Myth 3: Every Spa Offers the Same Experience
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        <strong>Truth:</strong> Massage techniques, services, and
                        overall quality may differ from one spa to another.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-amber-900">
                        Myth 4: You Must Be Extremely Tired
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        <strong>Truth:</strong> Many people book massages simply
                        for self-care, relaxation, and maintaining overall
                        wellness.
                      </p>
                    </div>

                  </div>
                </section>

                <section
                  id="spa-tips"
                  className="space-y-4 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    Tips for Choosing a Good Spa
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    Choosing the right spa can make your massage experience more
                    comfortable and enjoyable.
                  </p>

                  <ul className="list-disc space-y-3 pl-6 text-lg text-gray-700">
                    <li>Read genuine customer reviews.</li>
                    <li>Choose trained therapists.</li>
                    <li>Look for a clean and hygienic environment.</li>
                    <li>Check clear pricing before booking.</li>
                    <li>Choose a spa with excellent customer service.</li>
                    <li>Select a place where you feel comfortable.</li>
                  </ul>

                </section>

                <section
                  id="faqs"
                  className="space-y-5 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold text-amber-900">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">

                    {faqs.map((faq) => (

                      <div
                        key={faq.question}
                        className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm"
                      >

                        <h3 className="text-lg font-semibold text-amber-900">
                          {faq.question}
                        </h3>

                        <p className="mt-3 leading-7 text-gray-700">
                          {faq.answer}
                        </p>

                      </div>

                    ))}

                  </div>

                </section>

                <section
                  id="final-thoughts"
                  className="space-y-4 scroll-mt-32"
                >

                  <h2 className="text-2xl font-semibold text-amber-900">
                    Final Thoughts
                  </h2>

                  <p className="text-lg leading-8 text-gray-700">
                    A B2B Full Body Massage is one style of
                    professional massage that focuses on relaxation, gentle body
                    movements, and overall wellness.
                  </p>

                  <p className="text-lg leading-8 text-gray-700">
                    Many people choose this massage to reduce stress, relax
                    their muscles, and enjoy some peaceful time away from their
                    busy lifestyle.
                  </p>

                  <p className="text-lg leading-8 text-gray-700">
                    Every spa offers a slightly different experience, so it is
                    always a good idea to choose a professional wellness center
                    that values hygiene, trained therapists, privacy, and clear
                    communication.
                  </p>

                  <p className="text-lg leading-8 text-gray-700">
                    If you have any medical concerns, speak with your healthcare
                    professional before booking any massage therapy.
                  </p>

                </section>

                <section className="rounded-[24px] bg-gradient-to-r from-amber-600 to-amber-700 p-8 text-white shadow-lg">

                  <h2 className="text-3xl font-bold">
                    Ready to Experience Complete Relaxation?
                  </h2>

                  <p className="mt-4 max-w-2xl text-lg text-amber-50">
                    Enjoy a premium wellness experience with professional
                    therapists, hygienic rooms, and relaxing massage therapies
                    designed to help you unwind and refresh your body and mind.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">

                    <Link
                      href="/contact"
                      className="rounded-full bg-white px-7 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
                    >
                      Contact Us
                    </Link>

                    <a
                      href="https://api.whatsapp.com/send?phone=919217255113"
                      target="_blank"
                      className="rounded-full border border-white px-7 py-3 font-semibold hover:bg-white/10"
                    >
                      Book on WhatsApp
                    </a>

                  </div>

                </section>

              </article>

              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">

                <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">

                  <h3 className="text-xl font-semibold text-amber-900">
                    Related Blogs
                  </h3>

                  <div className="mt-5 space-y-4">

                    {relatedBlogs.map((blog) => (

                      <Link
                        key={blog.title}
                        href={blog.href}
                        className="flex items-center gap-3 rounded-xl border border-amber-100 p-3 hover:bg-amber-50 transition"
                      >

                        <div className="relative h-16 w-16 overflow-hidden rounded-lg">

                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />

                        </div>

                        <div>

                          <p className="font-medium text-gray-800">
                            {blog.title}
                          </p>

                          <p className="text-sm text-amber-700">
                            Read More
                          </p>

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