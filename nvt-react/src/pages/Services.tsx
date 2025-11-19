// src/pages/Services.tsx
import ServicesGrid from "../components/ServicesGrid";
import FaqAccordion from "../components/FaqAccordion";
import RecentlyViewed from "../components/RecentlyViewed";

const Services = () => {
  return (
    <div className="services-page">
      <section>
        <div className="content">
          <p className="subheading color-blue">Here to help you feel better</p>
          <h2 className="heading">
            Our <span className="color-blue">Services</span> for Mental
            Wellness
          </h2>
          <p className="description">
            At New Venture Therapy, we offer a range of specialized services
            designed to address your unique mental health needs. Each service is
            provided by experienced professionals committed to helping you
            achieve lasting well-being. Explore our options below to find the
            right approach for your personal journey.
          </p>

          {/* Dynamic filter + grid + modal */}
          <ServicesGrid />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="content">
          <p className="subheading color-red">Your path to wellness</p>
          <h2 className="heading">
            How <span className="color-red">Therapy</span> Works at New Venture
          </h2>
          <p className="description">
            Beginning therapy is a courageous step toward self-improvement.
            We&apos;ve designed a straightforward process to support you from
            the first contact to ongoing sessions.
          </p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Initial Contact</h3>
            <p>
              Reach out through our booking form, email, or phone. We&apos;ll
              respond within 24 hours to schedule your first appointment.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>First Session</h3>
            <p>
              Your first session focuses on understanding your needs and goals.
              We&apos;ll discuss your history, current challenges, and what you
              hope to achieve.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Personalized Plan</h3>
            <p>
              Together, we&apos;ll develop a customized treatment plan that
              addresses your specific needs and sets achievable goals for your
              therapy journey.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Ongoing Sessions</h3>
            <p>
              Regular sessions help build momentum. We&apos;ll work through
              challenges, develop new skills, and track your progress toward
              your goals.
            </p>
          </div>
        </div>
      </section>

      {/* RECENTLY VIEWED */}
      <section className="recently-viewed-section">
        <RecentlyViewed />
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="content">
          <p className="subheading color-purple">Common Questions</p>
          <h2 className="heading">
            Frequently Asked <span className="color-purple">Questions</span>
          </h2>

          <FaqAccordion />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-image">
            <img src="/images/comfort_hands.webp" alt="Therapy Session" />
          </div>
          <div className="cta-content bg-blue">
            <p className="subheading italic">Ready to get started?</p>
            <h2 className="heading">Begin your mental wellness journey today</h2>
            <p>
              Whether you&apos;re seeking support for immediate challenges or
              long-term growth, we&apos;re here to help. Take the first step
              toward positive change by scheduling your initial consultation.
            </p>
            <a href="/contact" className="btn btn-primary bg-black">
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
