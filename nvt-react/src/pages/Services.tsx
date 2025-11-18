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

          <div className="service-filters">
            {/* Later you can wire these buttons to React state */}
            <button className="service-filter-button active" data-filter="all">
              All Services
            </button>
            <button className="service-filter-button" data-filter="In-person">
              In-person Only
            </button>
            <button className="service-filter-button" data-filter="Virtual">
              Virtual Only
            </button>
          </div>
        </div>

        <div className="services-grid">
          {/* Static cards for now; can be replaced with mapped data */}
          <div className="service-card">
            <h3>Individual Therapy</h3>
            <p>
              One-on-one sessions focused on your specific goals, challenges,
              and growth. Ideal for processing emotions, managing anxiety or
              depression, or working through life transitions.
            </p>
          </div>
          <div className="service-card">
            <h3>Couple Therapy</h3>
            <p>
              Support for partners navigating communication issues, conflict,
              and changing dynamics. Build stronger connection and shared
              understanding.
            </p>
          </div>
          <div className="service-card">
            <h3>Family Therapy</h3>
            <p>
              A space for families to address conflict, miscommunication, and
              patterns that keep everyone stuck. Work together toward a more
              supportive home environment.
            </p>
          </div>
          <div className="service-card">
            <h3>Adolescent Therapy</h3>
            <p>
              Focused support for teens navigating identity, relationships,
              school stress, and emotional regulation in a developmentally
              appropriate way.
            </p>
          </div>
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
        <div className="recently-viewed-container">
          {/* React version of recently viewed can go here later */}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="content">
          <p className="subheading color-purple">Common Questions</p>
          <h2 className="heading">
            Frequently Asked <span className="color-purple">Questions</span>
          </h2>
          <div className="accordion">
            {/* FAQ accordion component in React later */}
          </div>
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
