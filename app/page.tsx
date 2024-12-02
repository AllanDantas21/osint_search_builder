"use client"
import React, { useState } from "react";
import Header from "./components/header";

function Page() {
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
        setFormValues({ ...formValues, [id]: value });
    };

    const buildQuery = () => {
        let newQuery = "";

        if (formValues.site) newQuery += `site:${formValues.site} `;
        if (formValues.filetype) newQuery += `filetype:${formValues.filetype} `;
        if (formValues.inurl) newQuery += `inurl:${formValues.inurl} `;
        if (formValues.intitle) newQuery += `intitle:${formValues.intitle} `;
        if (formValues.exact) newQuery += `"${formValues.exact}" `;
        if (formValues.exclude) newQuery += `-${formValues.exclude} `;

        setQuery(newQuery.trim());
        setErrorMessage(""); // Clear any previous error message
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
                        <div>
                            <label htmlFor="site" className="block text-sm font-medium text-gray-300">
                                Site
                            </label>
                            <input
                                type="text"
                                id="site"
                                placeholder="Ex: github.com"
                                value={formValues.site}
                                onChange={handleChange}
                                className="w-full p-1 border rounded-md shadow-sm bg-gray-700 text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="filetype" className="block text-sm font-medium text-gray-300">
                                Filetype
                            </label>
                            <input
                                type="text"
                                id="filetype"
                                placeholder="Ex: pdf"
                                value={formValues.filetype}
                                onChange={handleChange}
                                className="w-full p-1 border rounded-md shadow-sm bg-gray-700 text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="inurl" className="block text-sm font-medium text-gray-300">
                                In URL
                            </label>
                            <input
                                type="text"
                                id="inurl"
                                placeholder="Ex: login"
                                value={formValues.inurl}
                                onChange={handleChange}
                                className="w-full p-1 border rounded-md shadow-sm bg-gray-700 text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="intitle" className="block text-sm font-medium text-gray-300">
                                In Title
                            </label>
                            <input
                                type="text"
                                id="intitle"
                                placeholder="Ex: error 404"
                                value={formValues.intitle}
                                onChange={handleChange}
                                className="w-full p-1 border rounded-md shadow-sm bg-gray-700 text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="exact" className="block text-sm font-medium text-gray-300">
                                Exact Match
                            </label>
                            <input
                                type="text"
                                id="exact"
                                placeholder="Ex: 'machine learning'"
                                value={formValues.exact}
                                onChange={handleChange}
                                className="w-full p-1 border rounded-md shadow-sm bg-gray-700 text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="exclude" className="block text-sm font-medium text-gray-300">
                                Exclude
                            </label>
                            <input
                                type="text"
                                id="exclude"
                                placeholder="Ex: example"
                                value={formValues.exclude}
                                onChange={handleChange}
                                className="w-full p-1 border rounded-md shadow-sm bg-gray-700 text-white"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={buildQuery}
                            className="w-full py-1 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Generate Query
                        </button>
                    </form>

                    <textarea
                        readOnly
                        value={query}
                        className="w-full mt-4 p-2 border rounded-md bg-gray-700 text-white"
                        placeholder="Your query will appear here..."
                    ></textarea>

                    {errorMessage && (
                        <div className="mt-2 text-red-500">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        onClick={executeSearch}
                        className="mt-4 w-full py-1 px-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                        Search on Google
                    </button>
                </div>
            </div>
        </>
    );
}

export default Page;
