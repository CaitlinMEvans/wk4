// src/components/SpecialtyGrid.tsx
import { useMemo, useState } from "react";
import { addToRecentlyViewed } from "../utils/storage";
import specialtiesJson from "../data/specialties.json";

interface Specialty {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string; // e.g. "orange", "blue", etc. used in CSS .bg-{color}
  relatedServices: string[];
  techniques: string[];
}

interface SpecialtiesJson {
  specialties: Specialty[];
}

type ServiceFilter = "all" | string;

const SpecialtyGrid = () => {
  const allSpecialties: Specialty[] =
    (specialtiesJson as SpecialtiesJson).specialties || [];
  const [filter, setFilter] = useState<ServiceFilter>("all");
  const [selected, setSelected] = useState<Specialty | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return allSpecialties;
    return allSpecialties.filter((s) =>
      s.relatedServices.includes(filter as string)
    );
  }, [allSpecialties, filter]);

  const handleOpen = (specialty: Specialty) => {
    addToRecentlyViewed("specialty", specialty.id);
    setSelected(specialty);
  };

  const handleClose = () => setSelected(null);

  const allRelatedServices = Array.from(
    new Set(allSpecialties.flatMap((s) => s.relatedServices))
  );

  return (
    <>
      {/* Filter dropdown (replace with buttons if you prefer) */}
      <div className="specialty-filters">
        <label>
          Filter by service:
          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value === "all" ? "all" : e.target.value)
            }
          >
            <option value="all">All</option>
            {allRelatedServices.map((svc) => (
              <option key={svc} value={svc}>
                {svc}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Specialties grid */}
      <div className="specialty-container">
        {filtered.map((specialty) => (
          <div
            key={specialty.id}
            className="specialty-card"
            data-specialty-id={specialty.id}
            onClick={() => handleOpen(specialty)}
          >
            <img src={specialty.image} alt={specialty.name} loading="lazy" />
            <div className={`specialty-label bg-${specialty.color}`}>
              {specialty.name}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay specialty-details-modal">
          <div className="modal-backdrop" onClick={handleClose} />
          <div className="modal-dialog">
            <div className="specialty-modal-content">
              <div
                className={`specialty-modal-header bg-${selected.color}`}
              >
                <h2>{selected.name}</h2>
              </div>

              <div className="specialty-modal-body">
                <div className="specialty-modal-image">
                  <img src={selected.image} alt={selected.name} />
                </div>

                <div className="specialty-modal-details">
                  <p className="specialty-description">
                    {selected.description}
                  </p>

                  <div className="specialty-info-section">
                    <h3>Related Services</h3>
                    <ul className="specialty-related-services">
                      {selected.relatedServices.map((svc) => (
                        <li key={svc}>{svc}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="specialty-info-section">
                    <h3>Techniques Used</h3>
                    <ul className="specialty-techniques">
                      {selected.techniques.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="specialty-modal-actions">
                <a
                  href={`/contact?specialty=${selected.id}`}
                  className={`btn btn-primary bg-${selected.color}`}
                >
                  Book Appointment
                </a>
                <button
                  type="button"
                  className="btn btn-secondary close-modal"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpecialtyGrid;
