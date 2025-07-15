import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Kontakt = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Slanje...");

    emailjs
      .sendForm(
        'service_auc7ytl',
        'template_twqwazd',
        form.current,
        'B0tKhMee-ik7ZIWb7' 
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Poruka uspješno poslana!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Došlo je do greške.");
        }
      );
  };

  return (
    <div className="container py-5">
      <h2 className='pb-5'>Imate pitanja? Kontaktirajte nas!</h2>
      <div className='row justify-content-center mb-3'>
        <div className='col-md-6 mb-5'>
      <form ref={form} onSubmit={sendEmail}>
        <div className="col-md-6 mb-3">
          <label>Ime i prezime:</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="col-md-6 mb-3">
          <label>Email adresa:</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div className="col-md-6 mb-3">
          <label>Poruka:</label>
          <textarea name="message" className="form-control" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn rounded-pill">Pošalji</button>
        {status && <p className="mt-3">{status}</p>}
      </form>
      </div>
      <div className="col-md-6 text-center">
            <img src="/img/kontakt2.png" alt="Kontakt" className="img-fluid kontaktslika" />
        </div>
      </div>
    </div>
  );
};

export default Kontakt;