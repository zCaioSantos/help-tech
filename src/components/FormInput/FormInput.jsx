import { useState } from "react";
import "./FormInput.scss";

const FormInput = ({ input, handOnChange, value }) => {

    const [focus, setFocus] = useState(false)

    const toggleFocus = () => {
        setFocus(true)
    }

    return (
        <div className="formInput">
            <label htmlFor={input.name}>{input.text}</label>
            <input
                id={input.name}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={value}
                onChange={handOnChange}
                required={input.required}
                pattern={input.pattern}
                onBlur={toggleFocus}
                focus={focus.toString()}
            />
            <span>{input.error}</span>
        </div>
    );
};

export default FormInput;