import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../parts/Loading";

const ONama = () => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const {slug} = useParams();
    
        useEffect(() => {
            const fetchPage = async () => {
                try {
                    const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/128');
                    if (!response.ok) {
                        throw new Error(`Došlo je do greške: ${response.status}`);
                    }
                    const json = await response.json();
                    setData(json);
                } catch (err) {
                    setError(err.message);
                }
            };
    
            fetchPage();
        }, []);
    
        if (error) return <p>Greška: {error}</p>;
        if (!data) return <Loading />;
    
    
        return(
            <div className="container py-5 clanak-single">
                <div className="row">
                    <div className="col-md-8 m-auto mb-4 clanak-zaglavlje">
                        <p>{data?._embedded?.["wp:term"]?.[0]?.[0].name}</p>
                        <h1>{data.title.rendered}</h1>
                    </div>
                    <div className="col-md-8 m-auto">
                        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
                    </div>
                </div>
            </div>
        );
};

export default ONama;