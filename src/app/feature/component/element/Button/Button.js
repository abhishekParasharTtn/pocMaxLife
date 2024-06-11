'use client'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

const Button = ({button, component,pageRoute,formName}) => {
    const {type, label, name } = button || component;

    const router = useRouter();
    const formData = useSelector((state) => state.forms.personalDetails);
   
    const clickHandler = (e) => {
        
        
        if (name === 'save' ) {

        }

        else {
            const route =  pageRoute?.next
            if (route) router.push((route).replace('/', ''));  
        }
        
        
    }
   
    return (
            <div className="inline-block m-6 ">
                <button
                onClick={clickHandler}
                    className={`${name === 'save' ? 'shadow-type2 w-48 bg-light h-12 inline-block ml-36' : 'text-white w-48 bg-light h-12  bg-primary inline ml-35'}`}>
                    {label}
                </button>
            </div>

    );
};

export default Button;