import React from "react";

interface InputFieldProps {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder, value, handleChange }) => {
    return (
        <div>
            <label htmlFor={id} className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className="input input-bordered input-primary w-full"
            />
        </div>
    );
};

export default InputField;
