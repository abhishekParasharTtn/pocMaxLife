const selectClassString = "block py-2.5 px-0 w-full focus:border-orange text-sm focus:text-black-400 bg-transparent border-0 border-b-2 border-gray-50 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer";

const PremiumPaymentTermDropdown = ({productData, setProductData, name, title, label, options, disabled = false}) => {
 
    const {premiumType} = productData;

    const handleChange = (e) => {

        setProductData({...productData, premiumPaymentTerm: e.target.value});
    }

    return (
        <select className={selectClassString}
            value={productData.premiumPaymentTerm}
            onChange={handleChange}
            placeholder={label}
        >
            <option style={{color: "gray"}}>{label}</option>
            {
                options?.map((option, index) => (
                    <option style={{color: "black"}} key={index} value={option}>
                        {option}
                    </option>
                ))
            }
        </select>
        
    )
}
export default PremiumPaymentTermDropdown;