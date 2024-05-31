'use client'
const Button = ({type,label,name}) => {
   
    return (
            <div className="inline-block m-6 ">
                <button
                    className={`${name === 'save' ? 'shadow-type2 w-48 bg-light h-12 inline-block ml-36' : 'text-white w-48 bg-light h-12  bg-primary inline ml-35'}`}>
                    {label}
                </button>
            </div>

    );
};

export default Button;