"use client"
import React, { useState } from "react";
import Header from "./components/header";
import FormInputs from "./components/form";

const Page = () => {
    const [formValues, setFormValues] = useState({
        site: "",
        filetype: "",
        inurl: "",
        intitle: "",
        exact: "",
        exclude: "",
    });

    const [query, setQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues(prevValues => ({ ...prevValues, [id]: value }));
    };

    const buildQuery = () => {
        const queryParts = [
            formValues.site && `site:${formValues.site}`,
            formValues.filetype && `filetype:${formValues.filetype}`,
            formValues.inurl && `inurl:${formValues.inurl}`,
            formValues.intitle && `intitle:${formValues.intitle}`,
            formValues.exact && `"${formValues.exact}"`,
            formValues.exclude && `-${formValues.exclude}`,
        ].filter(Boolean);

        setQuery(queryParts.join(" ").trim());
        setErrorMessage("");
    };

    const executeSearch = () => {
        if (query) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
        } else {
            setErrorMessage("Please build a query first.");
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen p-24 bg-base-100 text-white flex justify-center items-center">
                <div className="w-1/2">
                    <form className="space-y-4">
                        <FormInputs formValues={formValues} handleChange={handleChange} />
                        <button
                            type="button"
                            onClick={buildQuery}
                            className="btn btn-wide w-full py-1 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Generate Query
                        </button>
                    </form>

                    <textarea
                        readOnly
                        value={query}
                        className="w-full mt-4 p-2 border rounded-md bg-gray-700 text-white textarea textarea-primary"
                        placeholder="Your query will appear here..."
                    ></textarea>

                    {errorMessage && (
                        <div className="mt-2 text-red-500">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        onClick={executeSearch}
                        className="btn btn-wide mt-4 w-full py-1 px-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
                    >
                        Search on Google
                    </button>
                </div>
            </div>
        </>
    );
};

export default Page;
