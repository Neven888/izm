import React, { useState } from "react";

const KuhanjeSingle = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
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

    const values = [[formData.name, formData.surname, formData.email]];

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/pik/google_sheets/rWviNUjlgXvTtlKP?tabId=Sheet1",
        requestOptions
      );
      const result = await response.text();
      console.log(result);
      setStatus("Prijava uspješna! Vidimo se na školici kuhanja piva!");
      setFormData({ name: "", surname: "", email: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Pokušaj ponovno. Došlo je do greške.");
    }
  };

  return (
    <div className="container my-4 justify-content-center">
      <h2>Prijava u školicu kuhanja piva:</h2>
      <form onSubmit={handleSubmit}>
        <div className="col-md-3 mb-3">
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
        <div className="col-md-3 mb-3">
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
        <div className="col-md-3 mb-3">
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
        <button type="submit" className="btn rounded-pill">
          Pošalji prijavu
        </button>
        {status && <p className="mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default KuhanjeSingle;