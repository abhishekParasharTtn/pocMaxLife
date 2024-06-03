const selectClassString = "block py-2.5 px-0 w-full focus:border-orange text-sm focus:text-black-400 bg-transparent border-0 border-b-2 border-gray-50 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer";
// const selectClassString = "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-primary bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
const ProductNameDropdown = ({productData, setProductData, name, title, label, options, disabled = false}) => {
    
    const handleChange = (e) => {
        console.log(e.target.value);
        const product = options.filter((product) => {
            if(product.productId === e.target.value){
                return product;
            }
        });
        setProductData({...productData, productSelected: product[0]});
    }

    return (
        <>
            {/* {label && <label className="dropdown-label">{label}</label>} */}
            {/* {JSON.stringify(productData.productSelected)} */}
            <select className={selectClassString}
                value={productData.productSelected.productId}
                onChange={handleChange}
                disabled={disabled}
                placeholder={label}
            >
                <option style={{color: "gray"}} default>{label}</option>
                {
                    options?.map((option, index) => (
                        <option style={{color: "black"}} key={index} value={option.productId}>
                            {option.marketingName}
                        </option>
                    ))
                }
            </select>
        </>
    )
}
export default ProductNameDropdown;