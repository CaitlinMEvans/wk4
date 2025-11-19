// src/components/ServicesGrid.tsx
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { addToRecentlyViewed } from "../utils/storage";

export type Availability = "In-person" | "Virtual";

export interface Service {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: string;
  availability: Availability[];
  benefits: string[];
  image: string;
}

interface ServicesResponse {
  services: Service[];
}

interface ServicesGridProps {
  /** "all" | "In-person" | "Virtual" */
  filter?: "all" | Availability;
  /** optional limit (for home page to just show first 4) */
  limit?: number;
}

const ServicesGrid = ({ filter = "all", limit }: ServicesGridProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/data/services.json");
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data: ServicesResponse = await res.json();
        setServices(data.services || []);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Unable to load services right now.");
      }
    };

    fetchServices();
  }, []);

  let filtered = services;

  if (filter !== "all") {
    filtered = services.filter((svc) => svc.availability.includes(filter));
  }

  if (limit && filtered.length > limit) {
    filtered = filtered.slice(0, limit);
  }

  const handleOpenService = (service: Service) => {
    setSelectedService(service);
    addToRecentlyViewed("service", service.id);
  };

  const handleCloseModal = () => setSelectedService(null);

  if (error) {
    return <p className="services-error">{error}</p>;
  }

  if (!services.length) {
    return <p>Loading services…</p>;
  }

  return (
    <>
      <div className="services-grid">
        {filtered.map((svc) => (
          <div
            key={svc.id}
            className="service-card"
            data-service-id={svc.id}
            onClick={() => handleOpenService(svc)}
          >
            <img src={svc.image} alt={svc.name} loading="lazy" />
            <h3>{svc.name}</h3>
            <p>{svc.shortDescription}</p>

            <div className="service-details">
              <span className="service-duration">{svc.duration}</span>
              <span className="service-price">{svc.price}</span>
            </div>

            <button
              type="button"
              className="btn btn-secondary view-service"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenService(svc);
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedService}
        onClose={handleCloseModal}
        ariaLabel={selectedService?.name}
      >
        {selectedService && (
          <div className="service-modal-content">
              <div className="service-modal-image">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  loading="lazy"
                />
              </div>

              <div className="service-modal-details">
                <h2>{selectedService.name}</h2>
                <p>{selectedService.fullDescription}</p>

                <div className="service-info-grid">
                  <div className="service-info-item">
                    <span className="service-info-label">Duration:</span>
                    <span className="service-info-value">
                      {selectedService.duration}
                    </span>
                  </div>
                  <div className="service-info-item">
                    <span className="service-info-label">Price:</span>
                    <span className="service-info-value">
                      {selectedService.price}
                    </span>
                  </div>
                  <div className="service-info-item">
                    <span className="service-info-label">Availability:</span>
                    <span className="service-info-value">
                      {selectedService.availability.join(", ")}
                    </span>
                  </div>
                </div>

                <h3>Benefits</h3>
                <ul className="service-benefits">
                  {selectedService.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="service-modal-actions">
                  <a
                    href={`/contact?service=${selectedService.id}`}
                    className="btn btn-primary bg-green"
                  >
                    Book Now
                  </a>
                </div>
              </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ServicesGrid;
