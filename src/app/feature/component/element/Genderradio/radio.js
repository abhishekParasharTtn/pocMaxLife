'use client'
const RadioButtonField = ({component, form, section, pages }) => {


    const onChange = (value) => {

    }
    return (
        <>
            {/*<div className="mb-3 col-span-2">{title}</div>*/}
                 <div className=" flex border border-gray-300 rounded-md overflow-hidden mb-8">

                {component?.data?.map((option, index) => (
                    <label
                        key={option.key}
                        className={`gender-option flex-1 text-center py-2 cursor-pointer ${
                            index !== option.length - 1 ? 'border-r' : ''
                        } ${
                            option.checked ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                        }`}
                    >
                        <input
                            className="peer hidden"
                            type="radio"
                            value={option.value}
                            checked={option.checked}
                            onChange={() => onChange(option.value)}
                        />
                        {option.value}
                    </label>
                ))}
                <style jsx>{`
                    .gender-option {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: background-color 0.3s, color 0.3s;
                    }

                    .gender-option:not(:last-child) {
                        border-right: 1px solid #D1D5DB; /* Tailwind border-gray-300 */
                    }

                    .gender-option:hover {
                        background-color: #d1d5db; /* Tailwind gray-300 */
                    }
                `}</style>
            </div>
        </>
    );
};

export default RadioButtonField;