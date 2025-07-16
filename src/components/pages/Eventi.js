import React, { useState, useEffect } from "react";
import Error from "../parts/Error";
import Loading from "../parts/Loading";

const Eventi = () => {
  const [eventi, setEventi] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventi = async () => {
      try {
        const [embedRes, acfRes] = await Promise.all([
          fetch("https://wp1.edukacija.online/backend/wp-json/wp/v2/event/?_embed"),
          fetch("https://wp1.edukacija.online/backend/wp-json/wp/v2/event/")
        ]);

        if (!embedRes.ok || !acfRes.ok) {
          throw new Error(`Greška pri dohvaćanju podataka (${embedRes.status} / ${acfRes.status})`);
        }

        const embedData = await embedRes.json();
        const acfData = await acfRes.json();

        // Spoji po ID-ju
        const combined = embedData.map(event => {
          const matchingAcf = acfData.find(e => e.id === event.id);
          return {
            ...event,
            acf: matchingAcf?.acf || {}
          };
        });

        setEventi(combined);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEventi();
  }, []);

  if (error) return <Error msg={error} />;
  if (!eventi) return <Loading />;

  const getTermNameByTaxonomy = (terms, taxonomyName) => {
    if (!terms || !Array.isArray(terms)) return null;
    for (const termGroup of terms) {
      for (const term of termGroup) {
        if (term.taxonomy === taxonomyName) {
          return term.name;
        }
      }
    }
    return null;
  };

  return (
    <div className="eventi container my-5">
      <div className="row justify-content-center">
        {eventi.map((event) => (
          <div className="col-md-6 col-lg-6" key={event.id}>
            <div className="event-card text-center mx-5 my-4">
              <div className="d-flex justify-content-between align-items-center">
                <a href="/edukacije/skolica-kuhanja-piva">
                  <h5>{event.title.rendered}</h5>
                </a>
              </div>
              <a href="/edukacije/skolica-kuhanja-piva" className="event-img">
                <img
                  src={
                    event._embedded?.["wp:featuredmedia"]?.[0].media_details?.sizes?.medium?.source_url ||
                    "https://via.placeholder.com/300x200?text=Bez+slike"
                  }
                  alt={event.title.rendered}
                />
              </a>
              <div className="mb-2">
                <div dangerouslySetInnerHTML={{ __html: event.content.rendered }} />
              </div>

              {event.acf?.linkici && (
                <div className="prijava-button text-center">
                  <a
                    href={event.acf.linkici}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn rounded-pill"
                  >
                    Saznaj više...
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventi;