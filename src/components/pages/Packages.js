import React, { useState, useEffect } from "react";
import Error from "../parts/Error";
import Loading from "../parts/Loading";
const Packages = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/146');
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

    if (error) return <Error msg={error}/>;
    if (!data) return <Loading />;


    return(
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
    );
};

export default Packages;