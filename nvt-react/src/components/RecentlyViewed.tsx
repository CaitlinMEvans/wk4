// src/components/RecentlyViewed.tsx
import { useEffect, useState } from "react";
import type { Service } from "./ServicesGrid";
import type { RecentlyViewedItem } from "../utils/storage";
import { getRecentlyViewed } from "../utils/storage";

interface ServicesResponse {
  services: Service[];
}

interface Specialty {
  id: number;
  name: string;
  image: string;
  shortDescription?: string;
}

interface SpecialtiesResponse {
  specialties: Specialty[];
}

type AnyItem = (Service | Specialty) & { type: "service" | "specialty" };

const RecentlyViewed = () => {
  const [items, setItems] = useState<AnyItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const recent: RecentlyViewedItem[] = getRecentlyViewed(null, 4);

      if (!recent.length) {
        setLoaded(true);
        return;
      }

      const [svcRes, specRes] = await Promise.all([
        fetch("/data/services.json"),
        fetch("/data/specialties.json"),
      ]);

      const svcData: ServicesResponse = svcRes.ok
        ? await svcRes.json()
        : { services: [] };

      const specData: SpecialtiesResponse = specRes.ok
        ? await specRes.json()
        : { specialties: [] };

      const out: AnyItem[] = [];

      for (const entry of recent) {
        if (entry.type === "service") {
          const svc = svcData.services.find((s) => s.id === entry.id);
          if (svc)
            out.push({
              ...svc,
              type: "service",
            });
        } else if (entry.type === "specialty") {
          const spec = specData.specialties.find((s) => s.id === entry.id);
          if (spec)
            out.push({
              ...spec,
              type: "specialty",
            });
        }
      }

      setItems(out);
      setLoaded(true);
    };

    load();
  }, []);

  if (!loaded || items.length === 0) {
    // hide the section completely if nothing
    return null;
  }

  return (
    <div className="recently-viewed-container">
      <h3>Recently Viewed</h3>
      <div className="recently-viewed-grid">
        {items.map((item) => {
          const href =
            item.type === "service"
              ? `/services`
              : `/services`; // both types funnel into services for now

          return (
            <div className="recently-viewed-item" key={`${item.type}-${item.id}`}>
              <a href={href}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="recently-viewed-info">
                  <h4>{item.name}</h4>
                  {"shortDescription" in item && item.shortDescription && (
                    <p>{item.shortDescription}</p>
                  )}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentlyViewed;
