"use client";

import React, { useState } from "react";

const Sibling2 = (props) => {
    const [sibling2Data, setSibling2Data] = useState({
        firstName: "",
        lastName: "",
        rollNo: null,
    });

    const [validationError, setValidationError] = useState({
        firstName: "",
        lastName: "",
        rollNo: null,
    });

    const [focusedField, setFocusedField] = useState(null);

    // handling validation
    const handleFormValidation = () => {
        let isValid = true;
        const error = {
            firstName: "",
            lastName: "",
            rollNo: "",
        };
        if (!sibling2Data.firstName.trim()) {
            isValid = false;
            error.firstName = "First Name is Required";
        }
        if (!sibling2Data.lastName.trim()) {
            isValid = false;
            error.lastName = "Last Name is Required";
        }
        if (!sibling2Data.rollNo != NaN && !sibling2Data.rollNo > 0) {
            isValid = false;
            error.rollNo = "Roll No is Required";
        }

        setValidationError(error);
        return isValid;
    };

    const handleChangeInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setSibling2Data((prev) => ({ ...prev, [name]: value }));
    };

    console.log(sibling2Data, "sibling2DataPresent");
    console.log(validationError, "validation");

    const handleClick = () => {
        if (handleFormValidation() && !focusedField) {
            setValidationError({});
            props.parentFunction(sibling2Data);
            setSibling2Data({
                firstName: "",
                lastName: "",
                rollNo: "",
            });
        }
    };

    // hide error message on Focus
    const handleFocus = (fieldName) => {
        setFocusedField(fieldName);
        setValidationError((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    };

    console.log(validationError, "vaaaa");
    console.log(focusedField, "focused");
    const handleBlur = () => {
        setFocusedField(null);
    };

    return (
        <div className="container-input">
            <h1 className="heading">Sibling-2</h1>
            <div className="inputs-fields">
                <div className="hello">
                    <input
                        type="text"
                        name="firstName"
                        value={sibling2Data.firstName}
                        onChange={handleChangeInput}
                        className={`input-fields ${focusedField === "firstName" ? "focused" : ""
                            }`}
                        onFocus={() => handleFocus("firstName")}
                        onBlur={handleBlur}
                    />

                    {focusedField !== "firstName" && validationError.firstName && (
                        <p className="error-message">{validationError.firstName}</p>
                    )}
                </div>
                <div className="hello">
                    <input
                        type="text"
                        name="lastName"
                        value={sibling2Data.lastName}
                        onChange={handleChangeInput}
                        className={`input-fields ${focusedField === "lastName" ? "focused" : ""
                            }`}
                        onFocus={() => handleFocus("lastName")}
                        onBlur={handleBlur}
                    />

                    {focusedField !== "lastName" && validationError.lastName && (
                        <p className="error-message">{validationError.lastName}</p>
                    )}
                </div>

                <div className="hello">
                    <input
                        type="number"
                        name="rollNo"
                        value={sibling2Data?.rollNo}
                        onChange={handleChangeInput}
                        className={`input-fields ${focusedField === "rollNo" ? "focused" : ""
                            }`}
                        onFocus={() => handleFocus("rollNo")}
                        onBlur={handleBlur}
                    />

                    {focusedField !== "rollNo" && validationError.rollNo && (
                        <p className="error-message">{validationError.rollNo}</p>
                    )}
                </div>
            </div>
            <button onClick={handleClick} className="click-button">
                Click !{" "}
            </button>
        </div>
    );
};

export default Sibling2;
