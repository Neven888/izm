import React, { useState } from "react";

const UclaniSe = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    mobile: "",
    oib: "",
    iam: "",
    city: "",
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
    setStatus("Šaljem prijavu...");

    const values = [[formData.name, formData.surname, formData.email, formData.mobile, formData.oib, formData.iam, formData.city]];

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/pik/google_sheets/iPIWLLlkdeJIjIAp?tabId=Sheet1",
        requestOptions
      );
      const result = await response.text();
      console.log(result);
      setStatus("Prijava poslana! Slijedite upute za uplatu članarine i pridružite se našoj pivarskoj zajednici! Za bržu potvrdu članstva pošaljite potvrdu o uplati na udrugapik@gmail.com");
      setFormData({ name: "", surname: "", email: "", mobile: "", oib: "", iam: "", city: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Pokušaj ponovno. Došlo je do greške.");
    }
  };

  return (
    <div className="container my-4 justify-content-center">
      <h2>Prijavnica za članstvo u udruzi:</h2>
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
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Broj mobitela:</label>
          <input
            type="text"
            name="mobile"
            className="form-control"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>OIB:</label>
          <input
            type="text"
            name="oib"
            className="form-control"
            value={formData.oib}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Ja sam:</label>
           <select
        name="iam"
        className="form-control"
        value={formData.iam}
        onChange={handleChange}
        required
      >
        <option value="">-- Odaberite --</option>
        <option value="Kućni pivar">Kućni pivar</option>
        <option value="Profesionalni pivar">Profesionalni pivar</option>
        <option value="Pivoljubac">Pivoljubac</option>
        <option value="Budući kućni pivar">Budući kućni pivar</option>
      </select>
        </div>
        <div className="col-md-6 mb-3">
          <label>Grad:</label>
          <input
            type="text"
            name="city"
            className="form-control"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn rounded-pill">
          Pošalji prijavu
        </button>
        {status && <p className="mt-2">{status}</p>}
      </form>
      </div>
      <div className="col-md-6 text-center">
        <p className="mt-3">
            <strong>Udruga pivara Istre i Kvarnera</strong> osnovana je s ciljem okupljanja ljubitelja pivarstva i razmjene znanja i vještina u proizvodnji piva. </p>
            <p>Naša misija je promovirati pivarstvo kao hobi, poticati zajednička druženja te unaprjeđivati vještine i iskustva putem povratnih informacija kroz kušanja.</p>
            <p>Organiziranjem edukativnih predavanja, seminara, tečajeva, radionica i manifestacija, Udruga aktivno doprinosi razvoju pivarske kulture i jača društvene veze sa srodnim organizacijama. 
                S entuzijazmom gradimo zajednicu posvećenu znanju, kreativnosti i zajedničkim iskustvima u svijetu pivarstva.
            </p>
            <p>Ispuni svoje podatke i pridruži nam se!</p>
          <h3>Upute za uplatu članarine:</h3>
          <p>Molimo vas da izvršite uplatu članarine na račun udruge:</p>
          <ul className="list-unstyled">
            <li>Primatelj: PIK</li>
            <li>IBAN: HR2523400091111303171</li>
            <li>BIC: PBZGHR2X</li>
            <li>Bankovni račun: Privredna banka Zagreb d.d.</li>
            <li>Iznos: 20,00 EUR</li>
            <li>Model: HR64</li>
            <li>Poziv na broj: [OIB]</li>
            <li>Opis plaćanja: Članarina za [Ime i Prezime]</li>
          </ul>
          <p>Nakon uplate, molimo vas da nam pošaljete potvrdu o uplati na email: udrugapik@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default UclaniSe;