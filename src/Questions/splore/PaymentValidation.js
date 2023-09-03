import React, { useRef, useState } from "react";
import "./PaymentValidation.css";

const PaymentValidation = () => {
  const [cardNumber, setCardNumber] = useState();
  const [holderName, setHolderName] = useState();
  const [expiryMonth, setExpiryMonth] = useState();
  const [expiryYear, setExpiryYear] = useState();
  const [cvv, setCVV] = useState();
  const [flag, setFlag] = useState({cardNumberValid:"false",expiryMonthValid:"false",expiryYearValid:"false",holderNameValid:"false",cvvValid:"false"});
  const [submitEnabled,setSubmitEnabled]=useState("false");
  const holderRef = useRef();
  const cardNumberRef = useRef();
  const expiryMonthRef = useRef();
  const expiryYearRef = useRef();
  const cvvRef = useRef();
   
  const handleCardNumber = (e) => {
    if (
      isNaN(parseInt(e.target.value)) ||
      e.target.value.length < 16 ||
      e.target.value.length > 16
    ) {
      cardNumberRef.current.style.display = "none";
      setFlag(()=>({...flag,cardNumberValid:"true"}));
    } else if (
      isNaN(parseInt(e.target.value)) ||
      e.target.value.length === 16
    ) {
      cardNumberRef.current.style.display = "";
      setFlag(()=>({...flag,cardNumberValid:"false"}));
    }
  };
  const handleHolderName = (e) => {
    if (e.target.value.length > 0) {
      holderRef.current.style.display = "none";
      setFlag(()=>({...flag,holderNameValid:"true"}));
    } else {
      holderRef.current.style.display = "";
      setFlag(()=>({...flag,holderNameValid:"false"}));
    }
  };
  const handleExpiryMonth = (e) => {
    console.log(parseInt(e.target.value));
    if (
      e.target.value.length === 2 &&
      parseInt(e.target.value) > 0 &&
      parseInt(e.target.value) <= 12
    ) {
      expiryMonthRef.current.style.display = "none";
      setFlag(()=>({...flag,expiryMonthValid:"true"}));
    } else {
      expiryMonthRef.current.style.display = "";
      setFlag(()=>({...flag,expiryMonthValid:"false"}));
    }
  };
  const handleExpiryYear = (e) => {
    const date = new Date();
    const dateArray = date.toString().split(" ");
    if (
      e.target.value.length === 4 &&
      parseInt(e.target.value) <= parseInt(dateArray[3]) + 3 &&
      parseInt(e.target.value) >= parseInt(dateArray[3])
    ) {
      expiryYearRef.current.style.display = "none";
      setFlag(()=>({...flag,expiryYearValid:"true"}));
    } else {
      expiryYearRef.current.style.display = "";
      setFlag(()=>({...flag,expiryYearValid:"false"}));
    }
  };
  const handleCVV = (e) => {
    if (e.target.value.length === 3 && !isNaN(parseInt(e.target.value))) {
      cvvRef.current.style.display = "none";
      setFlag(()=>({...flag,cvvValid:"true"}));

    } else {
      cvvRef.current.style.display = "";
       setFlag(()=>({...flag,cvvValid:"false"}));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(flag)
  };
  return (
    <div className="mt-30 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: "650px" }}>
        <div data-testid="debit-card">
          <h3 style={{ textAlign: "center" }}>Card Details</h3>
          <br />
          <div className="debit-card-body">
            <p className="debit-card-bank">Bank Name</p>
            <p className="debit-card-no">XXXXXXXXXXXXXXXX</p>
            <br />
            <div
              style={{ height: "45px", backgroundColor: "black" }}
              className="debit-card-stripe"
            ></div>
            <p>
              <span className="debit-card-holder-name">HOLDER NAME</span>
              <span className="debit-card-date">MM/YYYY</span>
              <span className="debit-card-cvv">CVV</span>
            </p>
          </div>
        </div>
        <section>
          <div className="pa-50">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="layout-column mb-15">
                <input
                  placeholder="Card Number"
                  data-testid="cardNumberInput"
                  value={cardNumber}
                  onChange={(e) => handleCardNumber(e)}
                />
                <p
                  ref={cardNumberRef}
                  className="invalid-text"
                  data-testid="numberInputError"
                >
                  Invalid Card Number
                </p>
              </div>
              <div className="layout-column mb-15">
                <input
                  placeholder="Name On Card"
                  data-testid="nameInput"
                  value={holderName}
                  onChange={(e) => handleHolderName(e)}
                />
                <p
                  ref={holderRef}
                  className="invalid-text"
                  data-testid="nameInputError"
                >
                  Invalid Card Name
                </p>
              </div>
              <div className="flex justify-content-around align-items-center">
                <div className="layout-column mb-30">
                  <input
                    placeholder="Expiry Month"
                    data-testid="monthInput"
                    value={expiryMonth}
                    onChange={(e) => handleExpiryMonth(e)}
                  />
                  <p
                    ref={expiryMonthRef}
                    className="invalid-text"
                    data-testid="monthInputError"
                  >
                    Invalid Month
                  </p>
                </div>
                <div className="layout-column mb-30">
                  <input
                    placeholder="Expiry Year"
                    data-testid="yearInput"
                    value={expiryYear}
                    onChange={(e) => handleExpiryYear(e)}
                  />
                  <p
                    ref={expiryYearRef}
                    className="invalid-text"
                    data-testid="yearInputError"
                  >
                    Invalid Year
                  </p>
                </div>
                <div className="layout-column mb-30">
                  <input
                    placeholder="CVV"
                    data-testid="cvvInput"
                    value={cvv}
                    onChange={(e) => handleCVV(e)}
                  />
                  <p
                    ref={cvvRef}
                    className="invalid-text"
                    data-testid="cvvInputError"
                  >
                    Invalid CVV
                  </p>
                </div>
              </div>
              <div className="layout-column mb-30">
                <button
                  type="submit"
                  className="mx-0"
                  data-testid="submitButton"
                  disabled={submitEnabled}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentValidation;
