import React, { useState } from "react";
import "./PaymentValidation.css";

const PaymentValidation = () => {
  const [formValues, setFormValues] = useState({
    cardNumber: "",
    holderName: "",
    expiryMonth: "",
    expiryYear:"",
    cvv:""
  });

  const [touchFields, setTouchFields] = useState({
    cardNumber: false,
    holderName: false,
    expiryMonth: false,
    expiryYear: false,
    cvv: false,
  });

  const handleTouched=(e)=>{

    setTouchFields({...touchFields,[e.target.name]:true});
    console.log(touchFields)
  }

  const handleFormValues = (e) => {
    console.log(e)
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };
  return (
    <div>
      <input
        placeholder="Card Number"
        data-testid="cardNumberInput"
        value={formValues.cardNumber}
        name="cardNumber"
        onChange={(e) => handleFormValues(e)}
        pattern="^[A-Za-z]{3,16}$"
        onBlur={(e) => handleTouched(e)}
        touched={touchFields.cardNumber.toString()}
      />
      {touchFields.cardNumber.toString()}
      <span>invalid card number</span>

      <div>
        <input
          placeholder="Name On Card"
          data-testid="nameInput"
          value={formValues.holderName}
          name="holderName"
          onChange={(e) => handleFormValues(e)}
          onBlur={(e) => handleTouched(e)}
          touched={touchFields.holderName.toString()}
        />{" "}
        {touchFields.holderName.toString()}
        <span>invalid card name</span>
      </div>
      <div>
        <div>
          <input
            placeholder="Expiry Month"
            data-testid="monthInput"
            value={formValues.expiryMonth}
            name="expiryMonth"
            onChange={(e) => handleFormValues(e)}
            pattern="/(0[1-9]|1[0,1,2])/"
            onBlur={(e) => handleTouched(e)}
            touched={touchFields.expiryMonth.toString()}
          />
          <p>Invalid Month</p>
        </div>
        <div>
          <input
            placeholder="Expiry Year"
            data-testid="yearInput"
            value={formValues.expiryYear}
            name="expiryYear"
            onChange={(e) => handleFormValues(e)}
            pattern="/(2023|2024|2025)/"
            onBlur={(e) => handleTouched(e)}
            touched={touchFields.expiryYear.toString()}
          />
          <p>Invalid Year</p>
        </div>
        <div>
          <input
            placeholder="CVV"
            data-testid="cvvInput"
            value={formValues.cvv}
            name="cvv"
            onChange={(e) => handleFormValues(e)}
            pattern="/\d{3}/"
            onBlur={(e) => handleTouched(e)}
            touched={touchFields.cvv.toString()}
          />
          <p>Invalid CVV</p>
        </div>
      </div>
      <div>
        <button type="submit" data-testid="submitButton">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PaymentValidation;
