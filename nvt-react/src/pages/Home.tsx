const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section>
        <div className="content">
          <p className="subheading color-red">Are you looking for</p>
          <h2 className="heading">
            Professional guidance <br />
            for <span className="color-red">mental health.</span>
          </h2>
          <p className="description">
            Discover a safe space where your mental health matters. Whether
            you&apos;re navigating challenging emotions, seeking clarity, or
            striving to achieve personal growth, our experienced therapists are
            here to guide you every step of the way. Together, we’ll build
            resilience, foster self-awareness, and create a personalized plan to
            help you thrive. With a compassionate and supportive approach,
            we’re committed to empowering you to take charge of your mental
            well-being and embrace a more fulfilling life.
          </p>
          <div className="buttons">
            <a href="/contact" className="btn btn-primary bg-red">
              Book an Appointment
            </a>
            <a href="#" className="btn btn-secondary">
              Browse Specialties
            </a>
          </div>
        </div>
      </section>

      {/* OVERLAPPING IMAGE */}
      <div className="overlapping-image">
        <img
          src="/images/comfort_hands.webp"
          alt="Overlapping Section Image"
        />
      </div>

      {/* ABOUT AMANDAMAE */}
      <section className="bg-black">
        <div className="content bw">
          <p className="subheading color-orange">Nice to meet you -</p>
          <h2 className="heading">
            I&apos;m Amandamae, <br />
            a trauma therapist <br />
            for over <span className="color-orange">X</span> years.
          </h2>
          <p className="description">
            I am dedicated to helping individuals navigate the complexities of
            trauma and healing. My approach is rooted in empathy,
            understanding, and evidence-based techniques, ensuring that every
            session is tailored to your unique experiences and goals. Together,
            we’ll create a safe, supportive environment where you can explore
            your emotions, rebuild trust in yourself, and develop the tools
            needed to move forward with confidence. Healing is a journey, and
            I’m here to walk alongside you every step of the way.
          </p>
          <div className="buttons">
            <a href="/contact" className="btn btn-primary bg-orange">
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* AFFORDABLE & PRIVATE */}
      <section className="content sec-img-right">
        <div className="content-2">
          <p className="subheading color-purple">Help should be Accessible</p>
          <h2 className="heading">
            <span className="color-purple">Affordable</span> &amp; Private
            therapy.
          </h2>
          <p className="description">
            Mental health support should be accessible to everyone, no matter
            their circumstances. That’s why we offer therapy options that are
            both affordable and private, ensuring you can receive the help you
            need without added stress. Whether you’re seeking individual
            counseling, family sessions, or virtual appointments, we strive to
            make high-quality care available in a way that fits your budget and
            respects your confidentiality. Your well-being is our priority, and
            we’re here to support you on your journey to healing.
          </p>
          <div className="buttons">
            <a href="/services" className="btn btn-secondary">
              Browse Services
            </a>
          </div>
        </div>
        <div className="image-right">
          <img
            src="/images/chairs_twoPeople.webp"
            alt="Therapy illustration"
          />
        </div>
      </section>

      {/* TREATMENT STYLES GRID */}
      <section>
        <div className="content">
          <p className="subheading color-red">
            Every Situation is different...
          </p>
          <h2 className="heading">
            A treatment style <br />
            <span className="color-red">tailored</span> to your needs.
          </h2>
          <p className="description">
            No two individuals or families are the same, which is why we
            customize our approach to meet your unique needs and
            circumstances. Our treatment plans are designed to be flexible,
            drawing from a variety of evidence-based methods to ensure the
            best fit for you. Whether you’re navigating personal challenges,
            relationship struggles, or family dynamics, we’ll work together to
            create a path that feels right for your journey. Your goals,
            preferences, and comfort are always at the center of our care.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <img src="/images/individual.jpg" alt="Individual Therapy" />
            <h3>Individual</h3>
            <p>
              Gain clarity and confidence through one-on-one sessions tailored
              to your unique needs. Whether you’re managing anxiety, depression,
              or personal growth, individual therapy provides a supportive
              environment to help you thrive.
            </p>
          </div>
          <div className="service-card">
            <img src="/images/couple.webp" alt="Couple Therapy" />
            <h3>Couple</h3>
            <p>
              Strengthen your bond and improve communication with your partner.
              Couple therapy focuses on resolving conflicts, building trust, and
              fostering a deeper connection in your relationship.
            </p>
          </div>
          <div className="service-card">
            <img src="/images/multiple.webp" alt="Family Therapy" />
            <h3>Family</h3>
            <p>
              Navigate family dynamics and improve understanding among loved
              ones. Family therapy offers tools to address conflicts, build
              stronger relationships, and create a harmonious home environment.
            </p>
          </div>
          <div className="service-card">
            <img src="/images/adolecent.webp" alt="Adolescent Therapy" />
            <h3>Adolescent</h3>
            <p>
              Adolescent therapy helps young individuals navigate growth and
              self-discovery. It offers a safe space to address emotional
              challenges, build resilience, and develop essential coping skills
              tailored to their unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* APPOINTMENT BANNER */}
      <section className="appointment-banner">
        <div className="info-bar">
          Learn more about different approaches and insurances taken for
          appointments
        </div>
        <div className="appointment-content">
          <div className="content content-box">
            <p className="subheading">Commute or not Commute...</p>
            <h2 className="heading">
              Schedule an in-person <br />
              or virtual appointment today
            </h2>
            <p className="description">
              Your time and comfort matter. Whether you prefer the convenience
              of a virtual session or the connection of an in-person
              appointment, we’re here to accommodate your needs. Choose the
              option that fits your lifestyle and take the first step toward
              prioritizing your mental health today.
            </p>
            <div className="buttons">
              <a href="/contact" className="btn btn-primary bg-black">
                Book an Appointment
              </a>
              <a href="/services" className="btn btn-tertiary bg-white">
                Browse Specialties
              </a>
            </div>
          </div>
          <div className="image-container">
            <img src="/images/office.webp" alt="Appointment illustration" />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="FAQ-link" className="faq-section">
        <div className="content">
          <p className="subheading color-purple">Everyone has questions -</p>
          <h2 className="heading">
            Here are a few <span className="color-purple">FAQs</span> to help
            you feel at ease.
          </h2>
          <div className="accordion">
            {/* React FAQ accordion can go here later */}
          </div>
          <div className="buttons">
            <a href="#" className="btn btn-secondary bg-purple color-black">
              Still have Questions?
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <p className="subheading color-green">Testimonials...</p>
          <h2 className="heading color-white">
            Hear what past clients say about their{" "}
            <span className="highlight">experience.</span>
          </h2>
        </div>
        <div className="testimonials-carousel">
          {/* Dynamic testimonials will go here in React later */}
        </div>
        <div className="testimonial-controls">
          <button className="control-button left">&#8592;</button>
          <button className="control-button right">&#8594;</button>
        </div>
      </section>
      <p className="testimonial-note">
        Testimonials of services offered are provided by real clients. For
        client protection, names have been changed for anonymity.
      </p>

      {/* RECENTLY VIEWED */}
      <section className="recently-viewed-section">
        <div className="recently-viewed-container">
          {/* React implementation of &quot;recently viewed&quot; can go here later */}
        </div>
      </section>
    </div>
  );
};

export default Home;
