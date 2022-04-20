import React from "react";
import "./FormInput.scss";

const FormInput = ({ inputs }) => {
    return (
        inputs.map((input) => (
            <div className="formInput">
                <label htmlFor={input.name}>{input.label}</label>
                <input
                    id={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                />
            </div>
        ))
    );
};

export default FormInput;
