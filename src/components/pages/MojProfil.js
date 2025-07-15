import React, { useState, useEffect } from "react";

const MojProfil = () => {
  const [user, setUser] = useState(null);
  const [pollOptions, setPollOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

 
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const storedPoll = localStorage.getItem("pikLigaPoll");
    if (storedPoll) setPollOptions(JSON.parse(storedPoll));
  }, []);

  
  useEffect(() => {
    localStorage.setItem("pikLigaPoll", JSON.stringify(pollOptions));
  }, [pollOptions]);

  const handleAddOption = () => {
    if (newOption.trim() === "") return;
    setPollOptions([...pollOptions, { option: newOption.trim(), votes: 0 }]);
    setNewOption("");
  };

  const handleVote = () => {
    if (selectedOption === null) return;
    const updated = pollOptions.map((opt, idx) =>
      idx === selectedOption ? { ...opt, votes: opt.votes + 1 } : opt
    );
    setPollOptions(updated);
    setSelectedOption(null);
  };

  return (
    <div className="container mt-4">
      <h2>Hej {user ? user.name : ""}</h2>
        <p>Broj članstva za login na <a href="https://www.mr-malt.com/members">Mr.Malt</a>: {user ? user.membershipNumber : ""}023</p>

      <div className="poll mt-5 p-4 border rounded" style={{ maxWidth: 600 }}>
        <h4>Idući stil za PIK ligu...</h4>

        {pollOptions.length === 0 && <p>Nema trenutno opcija u anketi. Dodaj prvu!</p>}

        <ul className="list-group mb-3">
          {pollOptions.map((opt, idx) => (
            <li
              key={idx}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                selectedOption === idx ? "active" : ""
              }`}
              onClick={() => setSelectedOption(idx)}
              style={{ cursor: "pointer" }}
            >
              {opt.option}
              <span className="badge bg-primary rounded-pill">{opt.votes}</span>
            </li>
          ))}
        </ul>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Dodaj novu opciju"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddOption()}
          />
          <button className="btn btn-outline-secondary" onClick={handleAddOption}>
            Dodaj
          </button>
        </div>

        <button
          className="btn btn-success"
          onClick={handleVote}
          disabled={selectedOption === null}
        >
          Glasaj
        </button>
      </div>
    </div>
  );
};

export default MojProfil;