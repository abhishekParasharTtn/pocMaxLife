'use client'

const defaultRadio = ({ title, label, visibility, name, dataFilter, componentType, defaultValue, data,formName, onChange,selectedOption }) => {
  return (
        <>
            <div className=" col-span-2">{title}</div>
            <div className="grid grid-cols-4 gap-2 col-span-2 mb-6">
                {data.map((option) => (
                    <div key={option.name} className="flex items-center cursor-pointer" onClick={() => onChange(option.name)}>
                        <input
                            type="radio"
                            className="hidden"
                            checked={option.name === selectedOption}
                            onChange={() => onChange(option.name)}
                        />
                        <span className={`border border-primary rounded-full w-4 h-4 mr-2 ${option.name === selectedOption ? 'bg-primary' : ''}`}></span>
                        <label className="cursor-pointer">{option.label || option.term}</label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default defaultRadio;
