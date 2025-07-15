import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Img from "../parts/Img.js";
import Loading from "../parts/Loading.js";

const PivarskiBlog = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/posts/?_embed&author=6');
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
        <div className="container mt-5">
                <div className="row">
                    {data.map(item => (
                        <div className="col-md-3 edukacija-card mx-5 my-4" key={item.id}>
                            <div>
                                <Link to={'/pivarski-blog/' + item.slug}>
                                    {/*<img src={item?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full?.source_url} className="img-fluid mb-3 uniform-img" />*/}
                                    <Img
                                        src={item?._embedded?.["wp:featuredmedia"]?.[0]?.media_details}
                                        size='medium_large'
                                        alt={'Istaknuta slika za članak: ' + item.title.rendered}
                                    />
                                    <h3 className="blog-title my-3">{item.title.rendered}</h3>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default PivarskiBlog;