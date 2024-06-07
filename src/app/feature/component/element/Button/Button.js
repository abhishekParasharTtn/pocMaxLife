'use client'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

const Button = ({button, component}) => {

    const {type, label, name } = button || component;

    const router = useRouter();
    const formData = useSelector((state) => state.forms.personalDetails);
  console.log('formData',formData)

    const clickHandler = (e) => {
        e.preventDefault();
        if (name === 'save') {

        }
        else {
            router.push((pageRoute.next).replace('/', ''));
        }
        console.log(name);
    }
   
    return (
            <div className="inline-block m-6 ">
                <button
                //onClick={clickHandler}
                    className={`${name === 'save' ? 'shadow-type2 w-48 bg-light h-12 inline-block ml-36' : 'text-white w-48 bg-light h-12  bg-primary inline ml-35'}`}>
                    {label}
                </button>
            </div>

    );
};

export default Button;