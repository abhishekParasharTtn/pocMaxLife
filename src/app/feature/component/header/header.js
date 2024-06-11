import Image from "next/image";
import {API_URL} from "@/utils/urls";

const Header = ({sectionObject}) => {
    const isAxisBank = sectionObject.altText === 'Axis Bank'
    return (
        <div className="flex justify-around items-center shadow-type1 min-h-20">
            <div>
                <Image
                    className={`${isAxisBank && 'bg-primary'} cursor-pointer`}
                    src={sectionObject?.image?.url ? `${API_URL}${sectionObject.image.url}` : null}
                    alt={sectionObject?.image?.name} width={isAxisBank? 150 : 70} height={isAxisBank? 150 : 70}/>
            </div>
            <div>
                <Image className='cursor-pointer' src="/mpro.png" alt="m-pro" width={170} height={170}/>
            </div>
        </div>
    );
};

export default Header;