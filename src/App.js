import "./styles.css";
import iconStar from "./assets/icon-star.svg";
import illustration from "./assets/illustration-thank-you.svg";
import React from "react";

export default function App() {
  const [selected, setSelected] = React.useState(0);
  const [secondPage, setSecondPage] = React.useState(false);

  function selectButton(e) {
    setSelected(e.target.value);
  }
  function handleSubmit() {
    selected ? setSecondPage(true) : createAlert();
  }
  function createAlert() {}

  return !secondPage ? (
    <div className="container">
      <div>
        <img
          className="star"
          style={{ marginBottom: "20px" }}
          src={iconStar}
          alt="star icon"
        />
      </div>
      <h1 style={{ marginBottom: "10px" }}>How did we do?</h1>
      <p style={{ marginBottom: "15px" }}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratings">
        {[1, 2, 3, 4, 5].map((num) => (
          <button className="btn" value={num} onClick={selectButton}>
            {num}
          </button>
        ))}
      </div>
      <div>
        <button class="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  ) : (
    <div className="container" style={{ alignItems: "center" }}>
      <div style={{ minHeight: "116px", marginTop: "15px" }}>
        <img src={illustration} alt="thank you illustration" />
      </div>
      <div class="final-rating">You selected {selected} out of 5</div>
      <h1 style={{ marginBottom: "10px" }}>Thank you!</h1>
      <p style={{ marginBottom: "15px", textAlign: "center" }}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
