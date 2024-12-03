import React from "react";
import InputField from "./input";

interface FormInputsProps {
    formValues: {
        site: string;
        filetype: string;
        inurl: string;
        intitle: string;
        exact: string;
        exclude: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputFields = [
    { id: "site", label: "Site", placeholder: "Ex: github.com" },
    { id: "filetype", label: "Filetype", placeholder: "Ex: pdf" },
    { id: "inurl", label: "In URL", placeholder: "Ex: login" },
    { id: "intitle", label: "In Title", placeholder: "Ex: error 404" },
    { id: "exact", label: "Exact Match", placeholder: "Ex: 'machine learning'" },
    { id: "exclude", label: "Exclude", placeholder: "Ex: example" },
];

const FormInputs: React.FC<FormInputsProps> = ({ formValues, handleChange }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {inputFields.map(({ id, label, placeholder }) => (
                <InputField
                    key={id}
                    id={id}
                    label={label}
                    placeholder={placeholder}
                    value={formValues[id as keyof typeof formValues]}
                    handleChange={handleChange}
                />
            ))}
        </div>
    );
};

export default FormInputs;
