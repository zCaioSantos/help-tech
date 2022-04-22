import "./FormInput.scss";

const FormInput = ({ type, text, name, placeholder, handOnChange, value }) => {
    return (
        <div className="formInput">
            <label htmlFor={name}>{text}</label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handOnChange}
            />
        </div>
    );
};

export default FormInput;