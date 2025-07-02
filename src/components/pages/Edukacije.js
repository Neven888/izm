import React, { useState, useEffect } from "react";
import Error from "../parts/Error";
import Loading from "../parts/Loading";
const Edukacije = () => {

    const [edukacije, setEdukacije] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {
    const fetchEdukacije = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/edukacija/?_embed');
            if (!response.ok) {
            throw new Error(`Došlo je do greške: ${response.status}`);
            }
            const json = await response.json();
            setEdukacije(json);
        } catch (err) {
            setError(err.message);
        }
        };

        fetchEdukacije();
    }, []);

    if (error) return <Error msg={error}/>;
    if (!edukacije) return <Loading />;

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
        <div className="edukacije container my-5">
            <div className="row justify-content-center">
                {edukacije.map((edukacija) => (
                    <div className="col-md-6 col-lg-3">
				<div className="edukacija-card">
					<div className="d-flex justify-content-between align-items-center">
						<a href="#"><h5>{edukacija.title.rendered}</h5></a>
					</div>
					<a href="#" className="edukacija-img">
                        <img src={edukacija._embedded?.["wp:featuredmedia"]?.[0].media_details?.sizes?.medium?.source_url} />   
                        </a>
					 <div className="mb-2">
            <strong>Lokacija:</strong>
            <div className="lokacija">{getTermNameByTaxonomy(edukacija._embedded?.["wp:term"], "lokacija")}</div>
          </div>

          <div className="mb-2">
            <strong>Vrijeme i datum:</strong>
            <div className="vrijeme-i-datum">{getTermNameByTaxonomy(edukacija._embedded?.["wp:term"], "vrijeme-i-datum")}</div>
          </div>

          <div className="mb-2">
            <strong>Cijena:</strong>
            <div className="cijena">{getTermNameByTaxonomy(edukacija._embedded?.["wp:term"], "cijena")}€</div>
          </div>
          <div className="prijava-button text-center">
			<a href="#" className="btn rounded-pill">Prijavi se</a>
		</div>
		</div>
	</div>
				
			

               ) )}
            </div>
        </div>  
    );
};

export default Edukacije;