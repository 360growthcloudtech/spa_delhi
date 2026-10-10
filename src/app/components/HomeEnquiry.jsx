import { Clock, MessageCircle, Phone } from "lucide-react";
import HomeHeading from "./HomeHeading";
import EnquiryComposer from "./EnquiryComposer";
import { CONTACT_EMAIL, PHONE_LABEL, PHONE_LINK } from "./siteContact";

// Home page booking section: the WhatsApp message builder, so a visitor can enquire without leaving the page.
export default function HomeEnquiry() {
  return (
    <section id="book" aria-labelledby="home-book-title" className="scroll-mt-20 bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <HomeHeading
          id="home-book-title"
          eyebrow="Quick Booking"
          title="Book Your Massage"
          highlight="in 30 Seconds"
          text="Pick a massage and a time, and we'll turn it into a WhatsApp message for you. We reply with the price and a free slot, usually within minutes."
        />
        <EnquiryComposer email={CONTACT_EMAIL} />
        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-bodycolor">
          <li className="flex items-center gap-2">
            <Clock className="size-4 text-primary" /> Bookings 24 hours a day
          </li>
          <li className="flex items-center gap-2">
            <MessageCircle className="size-4 text-primary" /> No advance payment for outlet visits
          </li>
          <li>
            <a href={PHONE_LINK} className="flex items-center gap-2 font-semibold text-amber-900 hover:text-primary">
              <Phone className="size-4 text-primary" /> Prefer to talk? Call {PHONE_LABEL}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
