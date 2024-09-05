"use client";

import { PopupButton } from "react-calendly";

export default function CalendlySection() {
  return (
    <section className="contact-section">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Book a Session with Us</h2>
        <p className="text-lg mt-4">
          Schedule a time that works for you using Calendly.
        </p>

        <PopupButton
          url="https://calendly.com/ojighoroemmanuel/30min"
          rootElement={document.getElementById("root") as HTMLElement}
          text="Schedule a Meeting"
          className="mt-8 px-6 py-3 bg-accent text-primary-50 rounded-lg"
        />
      </div>
    </section>
  );
}
