import React from "react";

const JourneyInput = ({inputChangeHandler, userName, fieldName, label}) => {
    return (
        <div className=" col-span-1">
            <div className="relative mb-9 col-span-1 mr-5 ">
                <label htmlFor={fieldName} className="">
                    {label.toUpperCase()}
                </label>
                    <input
                        className="block rounded-t-lg bg-transparent px-2.5 pb-2.5 pt-3 w-full text-md text-primary  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                        value={userName[fieldName]}
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
            <style jsx>{`
                input:focus + span, input:not(:placeholder-shown) + span {
                    transform: translateY(-20px) scale(0.80);
                }
            `}</style>

        </div>
    );
};

export default JourneyInput;