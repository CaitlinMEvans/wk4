// src/components/TestimonialsCarousel.tsx
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: number | string;
  rating: number;
  quote: string;
  text: string;
  author: string;
  serviceType: string;
  date: string;
}

interface TestimonialsResponse {
  testimonials: Testimonial[];
}

const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [serviceFilter, setServiceFilter] = useState<string>("all");
  const [error, setError] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/data/testimonials.json");
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data: TestimonialsResponse = await res.json();
        setTestimonials(data.testimonials || []);
      } catch (err) {
        console.error("Error fetching testimonial data:", err);
        setError("Unable to load testimonials right now.");
      }
    };

    fetchTestimonials();
  }, []);

  const filteredTestimonials =
    serviceFilter === "all"
      ? testimonials
      : testimonials.filter((t) => t.serviceType === serviceFilter);

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector(
      ".testimonial"
    ) as HTMLElement | null;

    const cardWidth = card ? card.offsetWidth : 300;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    const delta = direction === "left" ? -scrollAmount : scrollAmount;

    carouselRef.current.scrollBy({
      left: delta,
      behavior: "smooth",
    });
  };

  // Build service filter options from data
  const serviceTypes = Array.from(
    new Set(testimonials.map((t) => t.serviceType))
  );

  if (error) {
    return <p className="testimonial-error">{error}</p>;
  }

  if (!testimonials.length) {
    return <p>Loading testimonials…</p>;
  }

  return (
    <>
      {/* Filter row (optional) */}
      <div className="testimonial-filters">
        <label>
          Service:
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
          >
            <option value="all">All</option>
            {serviceTypes.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="testimonials-carousel" ref={carouselRef}>
        {filteredTestimonials.map((t) => {
          const ratingStars = Array(5)
            .fill(null)
            .map((_, index) => {
              const starClass =
                index < t.rating ? "star star-filled" : "star star-empty";
              return (
                <span key={index} className={starClass}>
                  ★
                </span>
              );
            });

          return (
            <div className="testimonial" data-id={t.id} key={t.id}>
              <div className="testimonial-content">
                <span className="quote-mark">"</span>
                <div className="testimonial-rating">{ratingStars}</div>
                <p className="testimonial-quote">{t.quote}</p>
                <p className="testimonial-text">{t.text}</p>
                <p className="testimonial-author">{t.author}</p>
                <p className="testimonial-service">{t.serviceType}</p>
                <p className="testimonial-date">{t.date}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls (match your original buttons) */}
      <div className="testimonial-controls">
        <button
          type="button"
          className="control-button left"
          onClick={() => handleScroll("left")}
        >
          &#8592;
        </button>
        <button
          type="button"
          className="control-button right"
          onClick={() => handleScroll("right")}
        >
          &#8594;
        </button>
      </div>
    </>
  );
};

export default TestimonialsCarousel;