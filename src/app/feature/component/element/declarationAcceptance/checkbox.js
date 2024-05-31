const DeclarationCheckbox = ({name, label}) => {
    return (
        <div className={'col-span-2'}>
            <div className=''>
                <input type='checkbox' name={name}/>
                <label htmlFor={name} className="ml-3">{label}</label>
            </div>
        </div>
    );
};

export default DeclarationCheckbox;