'use client'

const defaultRadio = ({ title, label, visibility, name, dataFilter, componentType, defaultValue, data,formName, onChange,selectedOption }) => {
  return (
        <>
            <div className=" col-span-2">{title}</div>
            <div className="grid grid-cols-4 gap-2 col-span-2 mb-6">
                {data.map((option) => (
                    <div key={option.name} className="flex items-center">
                        <input
                            type="radio"
                            className="hidden"
                            checked={option.name === selectedOption}
                            onChange={() => onChange(option.name)}
                            id={`option-${name}-${option.name}`}
                        />
                        <span
                            className={`border cursor-pointer border-primary rounded-full w-4 h-4 mr-2 ${option.name === selectedOption ? 'bg-primary' : ''}`}
                            onClick={() => onChange(option.name)}
                        ></span>
                        <label htmlFor={`option-${name}-${option.name}`} className="cursor-pointer">
                            {option.label || option.term}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default defaultRadio;
