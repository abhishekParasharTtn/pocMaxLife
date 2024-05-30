'use client'
const Button = ({type,label}) => {
   
    return (
        <div className="flex justify-center items-center self-center" type={type}>
            {label === 'save' ? <button className="shadow-type2 w-48 bg-light h-12" >
                    {label}
                </button> :
                <button className="text-white w-48 bg-light h-12  bg-primary" type={type}>
                    {label}
                </button>

            }

        </div>
    );
};

export default Button;