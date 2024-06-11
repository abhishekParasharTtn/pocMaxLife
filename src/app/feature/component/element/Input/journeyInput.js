import React from "react";

const JourneyInput = ({inputChangeHandler, userName, fieldName, label, placeholder}) => {
    return (
        <div className=" col-span-1">
            <div className="mb-9 col-span-1 mr-5 ">
                <label htmlFor={fieldName} className="">
                    {label.toUpperCase()}
                </label>
                    <input
                        className="block rounded-t-lg bg-transparent px-2.5 pb-2.5 pt-2.5 w-full text-md text-primary border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                        value={userName[fieldName]}
                        placeholder={placeholder}
                        onChange={(e) => {
                            inputChangeHandler(e, label)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                            }
                        }}
                    />
            </div>
        </div>
    );
};

export default JourneyInput;