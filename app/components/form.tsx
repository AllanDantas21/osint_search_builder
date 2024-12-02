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

const FormInputs: React.FC<FormInputsProps> = ({ formValues, handleChange }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <InputField
                id="site"
                label="Site"
                placeholder="Ex: github.com"
                value={formValues.site}
                handleChange={handleChange}
            />
            <InputField
                id="filetype"
                label="Filetype"
                placeholder="Ex: pdf"
                value={formValues.filetype}
                handleChange={handleChange}
            />
            <InputField
                id="inurl"
                label="In URL"
                placeholder="Ex: login"
                value={formValues.inurl}
                handleChange={handleChange}
            />
            <InputField
                id="intitle"
                label="In Title"
                placeholder="Ex: error 404"
                value={formValues.intitle}
                handleChange={handleChange}
            />
            <InputField
                id="exact"
                label="Exact Match"
                placeholder="Ex: 'machine learning'"
                value={formValues.exact}
                handleChange={handleChange}
            />
            <InputField
                id="exclude"
                label="Exclude"
                placeholder="Ex: example"
                value={formValues.exclude}
                handleChange={handleChange}
            />
        </div>
    );
};

export default FormInputs;
