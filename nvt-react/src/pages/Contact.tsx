// src/pages/Contact.tsx
import { useEffect, useState } from "react";
import {
  saveFormProgress,
  getFormProgress,
  clearFormProgress,
} from "../utils/storage";

type ServiceType = "Individual" | "Couple" | "Family" | "Adolescent";
type ModeType = "In-Person" | "Virtual";

interface BookingFormState {
  name: string;
  email: string;
  phone: string;
  schedule: string;
  message: string;
  serviceType: ServiceType;
  mode: ModeType;
}

const initialState: BookingFormState = {
  name: "",
  email: "",
  phone: "",
  schedule: "",
  message: "",
  serviceType: "Individual",
  mode: "Virtual",
};

const FORM_ID = "appointmentForm";

const Contact = () => {
  const [form, setForm] = useState<BookingFormState>(initialState);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Restore saved form data (once)
  useEffect(() => {
    const saved = getFormProgress<BookingFormState>(FORM_ID);
    if (saved && saved.data) {
      // You can ask for confirmation here if you want; for now we just restore.
      setForm(saved.data);
    }
  }, []);

  // Auto-save whenever form changes
  useEffect(() => {
    saveFormProgress(FORM_ID, form);
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: string[] = [];
    if (!form.name.trim()) newErrors.push("Name is required.");
    if (!form.email.trim()) newErrors.push("Email is required.");
    if (!form.phone.trim()) newErrors.push("Phone number is required.");
    if (!form.schedule.trim())
      newErrors.push("Please share your schedule preferences.");

    setErrors(newErrors);

    if (newErrors.length === 0) {
      setSubmitted(true);
      clearFormProgress(FORM_ID);
    }
  };

  return (
    <div className="contact-page">
      {/* APPOINTMENT SECTION */}
      <section className="appointment-section">
        <div className="appointment-container">
          {/* LEFT SIDE INFO */}
          <div className="appointment-info">
            <p className="subheading color-green">Ready for a new Venture?</p>
            <h2 className="heading bg-black">Book an appointment</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="material-icons">call</span>
                <div>
                  <p>Give us a call</p>
                  <p className="bold">
                    <a href="tel:+18011234567">(801) 123 - 4567</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="material-icons">email</span>
                <div>
                  <p>Send us a message</p>
                  <p className="bold">
                    <a href="mailto:contact@therapist.com">
                      contact@therapist.com
                    </a>
                  </p>
                </div>
              </div>
              <p>
                <img src="/images/qr.png" alt="QR Code (FAKE)" />
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM + SUMMARY */}
          <div className="appointment-form">
            <form id={FORM_ID} onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John and Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="YourEmail@domain.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(801)123-4567"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="schedule">Schedule*</label>
                <input
                  type="text"
                  id="schedule"
                  name="schedule"
                  placeholder="Ex. Mondays @ 7:00 am, Thursdays @5pm, or Fridays @5pm"
                  value={form.schedule}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceType">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={form.serviceType}
                  onChange={handleChange}
                >
                  <option value="Individual">Individual</option>
                  <option value="Couple">Couple</option>
                  <option value="Family">Family</option>
                  <option value="Adolescent">Adolescent</option>
                </select>
              </div>

              <fieldset className="form-group">
                <legend>Appointment Mode</legend>
                <label>
                  <input
                    type="radio"
                    name="mode"
                    value="In-Person"
                    checked={form.mode === "In-Person"}
                    onChange={handleChange}
                  />
                  In-Person
                </label>
                <label>
                  <input
                    type="radio"
                    name="mode"
                    value="Virtual"
                    checked={form.mode === "Virtual"}
                    onChange={handleChange}
                  />
                  Virtual
                </label>
              </fieldset>

              <div className="form-group">
                <label htmlFor="message">Leave us a message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please type your message here..."
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary bg-green">
                Book an Appointment
              </button>
              <p>* indicates a required field</p>
            </form>

            <div className="booking-summary-panel">
              {errors.length > 0 && (
                <div className="form-errors" aria-live="polite">
                  <h2>Please fix the following:</h2>
                  <ul>
                    {errors.map((err) => (
                      <li key={err}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}

              {submitted && errors.length === 0 && (
                <div className="form-success" aria-live="polite">
                  <h2>Request received</h2>
                  <p>
                    Thanks, {form.name}. You&apos;re requesting{" "}
                    {form.serviceType.toLowerCase()} therapy via{" "}
                    {form.mode.toLowerCase()}.
                  </p>
                  <p>
                    Schedule preferences:{" "}
                    <strong>{form.schedule}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="content">
          <p className="subheading color-orange">Everyone has questions -</p>
          <h2 className="heading">
            Here are a few <span className="color-orange">FAQs</span> to help
            you feel at ease.
          </h2>
          {/* If you want FAQ accordion here too, just drop <FaqAccordion /> */}
        </div>
      </section>

      {/* VISIT OFFICE SECTION */}
      <section>
        <div className="content">
          <p className="subheading color-orange">
            I am where you need me to be -
          </p>
          <h2 className="heading">
            Visit in person or Online <br />
            <span className="color-orange">tailored</span> to your needs.
          </h2>
        </div>
      </section>

      <section className="visit-office-section">
        <div className="visit-office-container">
          <div className="visit-info">
            <h2 className="heading">
              Come and <span className="highlight">visit</span> my office
            </h2>
            <p className="description">
              We invite you to a warm and welcoming space designed for your
              comfort and privacy. Our office provides a serene atmosphere where
              you can focus on your healing journey.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="material-icons">call</span>
                <p>
                  <a href="tel:+18011234567">(801) 123 - 4567</a>
                </p>
              </div>
              <div className="contact-item">
                <span className="material-icons">email</span>
                <p>
                  <a href="mailto:contact@therapist.com">
                    contact@therapist.com
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <span className="material-icons">place</span>
                <p>
                  <a
                    href="https://www.google.com/maps/search/?q=149W+70th+St,+9000+Los+Angeles,+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    149W 70th St, 9000 Los Angeles, CA
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="visit-image">
            <img src="/images/diagnosis.webp" alt="Modern therapy office" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
