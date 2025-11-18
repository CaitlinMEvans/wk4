// src/components/FaqAccordion.tsx
import { useEffect, useState } from "react";

type FaqCategory = "General" | "Billing" | "Scheduling" | "Therapy" | string;

interface FaqItem {
  id: number | string;
  question: string;
  answer: string;
  category: FaqCategory;
  dateAdded: string;
}

interface FaqDataResponse {
  faqs: FaqItem[];
}

const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  } catch {
    return dateString;
  }
};

const FaqAccordion = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<FaqItem[]>([]);
  const [expandedId, setExpandedId] = useState<string | number | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<"all" | FaqCategory>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch FAQ data once
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("/data/faqs.json");
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data: FaqDataResponse = await res.json();
        setFaqs(data.faqs || []);
        setFilteredFaqs(data.faqs || []);
      } catch (err) {
        console.error("Error fetching FAQ data:", err);
        setError("Unable to load FAQs right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // Apply category + search filtering whenever dependencies change
  useEffect(() => {
    let result = [...faqs];

    if (categoryFilter !== "all") {
      result = result.filter((faq) => faq.category === categoryFilter);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (faq) =>
          faq.question.toLowerCase().includes(term) ||
          faq.answer.toLowerCase().includes(term)
      );
    }

    setFilteredFaqs(result);
    // If current expanded item no longer matches the filter, collapse it
    if (expandedId && !result.some((faq) => faq.id === expandedId)) {
      setExpandedId(null);
    }
  }, [faqs, categoryFilter, searchTerm, expandedId]);

  const handleToggle = (id: string | number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Build category list from data for the filter dropdown
  const categories: FaqCategory[] = Array.from(
    new Set(faqs.map((f) => f.category))
  );

  if (loading) {
    return <p>Loading FAQs…</p>;
  }

  if (error) {
    return <p className="faq-error">{error}</p>;
  }

  return (
    <div className="faq-accordion-wrapper">
      {/* Filter + search controls */}
      <div className="faq-controls">
        <label className="faq-filter">
          Category:
          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(
                e.target.value === "all"
                  ? "all"
                  : (e.target.value as FaqCategory)
              )
            }
          >
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <label className="faq-search">
          Search:
          <input
            type="search"
            placeholder="Search questions…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      {/* Accordion items */}
      <div className="accordion">
        {filteredFaqs.length === 0 && (
          <p>No FAQs match your current filters.</p>
        )}

        {filteredFaqs.map((faq) => {
          const isOpen = expandedId === faq.id;
          return (
            <div
              key={faq.id}
              className={`accordion-item${isOpen ? " open" : ""}`}
              data-category={faq.category}
              data-date={faq.dateAdded}
            >
              <button
                className="accordion-header"
                aria-expanded={isOpen}
                aria-controls={`faq-content-${faq.id}`}
                onClick={() => handleToggle(faq.id)}
              >
                {faq.question}
                <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
              </button>
              <div
                id={`faq-content-${faq.id}`}
                className="accordion-body"
                style={{
                  maxHeight: isOpen ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p>{faq.answer}</p>
                <div className="faq-meta">
                  <span className="faq-category">{faq.category}</span>
                  <span className="faq-date">
                    Updated: {formatDate(faq.dateAdded)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqAccordion;
