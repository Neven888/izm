import React, { useState } from "react";

const PIKliga = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    uloga: "",
    grad: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Zapisujem prijavu...");

    const values = [[formData.name, formData.surname, formData.uloga, formData.grad]];

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/pik/google_sheets/gNioFWGEIXOVmnZL?tabId=Sheet1",
        requestOptions
      );
      const result = await response.text();
      console.log(result);
      setStatus("Prijava zabilježena! Sada se možeš baciti na posao! Živijo!");
      setFormData({ name: "", surname: "", uloga: "", grad: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Pokušaj ponovno. Si žbalja...");
    }
  };

  return (
    <div className="container my-4 justify-content-center">
      <h2>Prijava za sudjelovanje u PIK ligi:</h2>
      <div className='row justify-content-center mb-3'>
        <div className='col-md-6'>
      <form onSubmit={handleSubmit}>
        <div className="col-md-6 mb-3">
          <label>Ime:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Prezime:</label>
          <input
            type="text"
            name="surname"
            className="form-control"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Uloga:</label>
           <select
        name="uloga"
        className="form-control"
        value={formData.uloga}
        onChange={handleChange}
        required
      >
        <option value="">-- Odaberite --</option>
        <option value="Šaljem pivo">Šaljem pivo</option>
        <option value="Sudim pivo">Sudim pivo</option>
        <option value="Šaljem i sudim pivo">Šaljem i sudim pivo</option>
      </select>
        </div>
        <div className="col-md-6 mb-3">
          <label>Bliže mi je...:</label>
          <select
        name="grad"
        className="form-control"
        value={formData.grad}
        onChange={handleChange}
        required
      >
        <option value="">-- Odaberite --</option>
        <option value="Pula">Pula</option>
        <option value="Rijeka">Rijeka</option>
      </select>
        </div>
        <button type="submit" className="btn rounded-pill">
          Ala šu!
        </button>
        {status && <p className="mt-2">{status}</p>}
      </form>
      </div>
      <div className="col-md-6 text-center">
        <p className="mt-3">
            <strong>PIK liga</strong> je interno natjecanje članova udruge koja služi pivarima da unaprijede svoje vještine i razmjenjuju iskustva, a sucima da vježbaju svoja nepca i vještinu ispunjavanja scoresheetova prema BJCP standardu. </p>
            <p>Liga će se održavati kroz cijelu godinu, a uključivat će novo kolo svaka 3 mjeseca gdje ćemo odabrati stil koji se među članovima dogovorimo.</p>
            <p>Prvi stil koji smo odabrali je <a href="https://www.bjcp.org/style/2015/25/25B/saison/">SAISON</a>!</p>
            <p>Ispuni svoje podatke i budi dio lige!</p>
          
        </div>
      </div>
    </div>
  );
};

export default PIKliga;