import React, { useState, useEffect } from "react";
import Error from "../parts/Error";
import Loading from "../parts/Loading";

const Eventi = () => {

    const [eventi, setEventi] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {
    const fetchEventi = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/event/?_embed');
            if (!response.ok) {
            throw new Error(`Došlo je do greške: ${response.status}`);
            }
            const json = await response.json();
            setEventi(json);
        } catch (err) {
            setError(err.message);
        }
        };

        fetchEventi();
    }, []);

    if (error) return <Error msg={error}/>;
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


    return(
        <div className="eventi container my-5">
            <div className="row justify-content-center">
                {eventi.map((event) => (
                    <div className="col-md-6 col-lg-6">
				<div className="event-card text-center mx-5 my-4">
					<div className="d-flex justify-content-between align-items-center">
						<a href="/edukacije/skolica-kuhanja-piva"><h5>{event.title.rendered}</h5></a>
					</div>
					<a href="/edukacije/skolica-kuhanja-piva" className="event-img">
                        <img src={event._embedded?.["wp:featuredmedia"]?.[0].media_details?.sizes?.medium?.source_url} />   
                        </a>
					 <div className="mb-2">
             <div dangerouslySetInnerHTML={{ __html: event.content.rendered }} />
          </div>
          <div className="prijava-button text-center">
			<a href={event.acf.poveznica} target="_blank" className="btn rounded-pill">Saznaj više...</a>
		</div>
		</div>
	</div>
				
			

               ) )}
            </div>
        </div>  
    );
};

export default Eventi;