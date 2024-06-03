const selectClassString = "block py-2.5 px-0 w-full focus:border-orange text-sm focus:text-black-400 bg-transparent border-0 border-b-2 border-gray-50 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer";

const AnnuityTypeDropdown = ({productData, setProductData, options, placeholder}) => {

    const handleChange = (e) => {
        console.log(e.target.value);
        setProductData({...productData, annuityType: e.target.value});
    }

    return (
        <select className={selectClassString}
            value={productData.annuityType}
            onChange={handleChange}
            placeholder={placeholder}
        >
            <option style={{color: "gray"}}>{placeholder}</option>
            {
                options?.map((option, index) => (
                    <option style={{color: "black"}} key={index} value={option.value}>
                        {option.key}
                    </option>
                ))
            }
        </select>
        
    )
}
export default AnnuityTypeDropdown;