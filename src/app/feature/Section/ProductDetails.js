"use client"
import FYPP from"./FYPP.json"

const { useState, useEffect } = require("react")
const { default: Dropdown } = require("../component/element/Dropdown/Dropdown");


const productList = [
    {
        productId: "132",
        code: "FIP",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Flexi Wealth Plus Plan Solution"
    },
    {
        productId: "133",
        code: "SWP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Smart Wealth Plan Solution"
    },
    {
        productId: "74",
        code: "MIAP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Monthly Income Advantage Plan Solution"
    },
    {
        productId: "101",
        code: "SAP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Savings Advantage Plan Solution Plus"
    },
    {
        productId: "154",
        code: "SSPP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Smart Secure Plus Plan Solution"
    },
    {
        productId: "168",
        code: "SWIP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Smart Wealth Income Plan Solution"
    },
    {
        productId: "173",
        code: "FWAP",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Flexi Wealth Advantage Plan Solution"
    },
    {
        productId: "100",
        code: "OSP",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Online Savings Plan"
    },
    {
        productId: "78",
        code: "PWP",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Platinum Wealth Plan Plus Solution"
    },
    {
        productId: "116",
        code: "OTP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Online Term Plan Plus"
    },
    {
        productId: "24",
        code: "FYPP",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Forever Young Pension Plan"
    },
    {
        productId: "24",
        code: "FYPP",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Forever Young Pension Plan"
    },
    {
        productId: "132",
        code: "FIP",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Flexi Wealth Plus Plan"
    },
    {
        productId: "133",
        code: "SWP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Smart Wealth Plan"
    },
    {
        productId: "49",
        code: "STP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Super Term Plan"
    },
    {
        productId: "68",
        code: "LAPS",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Life Anand Plus Solutions"
    },
    {
        productId: "74",
        code: "MIAP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Monthly Income Advantage Plan"
    },
    {
        productId: "78",
        code: "PWP",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Platinum Wealth Plan"
    },
    {
        productId: "86",
        code: "CIP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Cancer Insurance Plan"
    },
    {
        productId: "95",
        code: "AWP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Assured Wealth Plan"
    },
    {
        productId: "99",
        code: "POS",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life POS Guaranteed Benefits Plan"
    },
    {
        productId: "81",
        code: "FGEP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Future Genius Education Plan"
    },
    {
        productId: "27",
        code: "LPPS",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Life Perfect Partner Super"
    },
    {
        productId: "29",
        code: "PRTP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Premium Return Term Plan"
    },
    {
        productId: "30",
        code: "WLPS",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Whole Life Super"
    },
    {
        productId: "32",
        code: "LGPR",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Life Gain Premier"
    },
    {
        productId: "34",
        code: "FTSR",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Fast Track Super Plan"
    },
    {
        productId: "94",
        code: "GIP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Guaranteed Income Plan"
    },
    {
        productId: "36",
        code: "SPS",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Shiksha Plus Super"
    },
    {
        productId: "38",
        code: "MXSR",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Maxis Super Plan"
    },
    {
        productId: "39",
        code: "SRS",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Spousal Retirement Solution"
    },
    {
        productId: "41",
        code: "LTIS",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Time Income Solution"
    },
    {
        productId: "101",
        code: "SAP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Savings Advantage Plan"
    },
    {
        productId: "105",
        code: "LLIS",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Life Long Income Solution"
    },
    {
        productId: "107",
        code: "LTISV2",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Time Income Solution"
    },
    {
        productId: "108",
        code: "LTISV2",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Smart Term Plan"
    },
    {
        productId: "128",
        code: "AWP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Assured Wealth Plan"
    },
    {
        productId: "123",
        code: "SSB_Super",
        channelId: "9082",
        productGroup: "SalesStories",
        marketingName: "Secure Capital Builder Super"
    },
    {
        productId: "119",
        code: "SSB_Elite",
        channelId: "9082",
        productGroup: "SalesStories",
        marketingName: "Secure Capital Builder Elite"
    },
    {
        productId : "160",
        code : "SJBP",
        channelId : "9082",
        productGroup : "Traditional",
        marketingName : "Max Life Saral Jeevan Bima"
    },
    {
        productId : "127",
        code : "GLIP",
        channelId : "9082",
        productGroup : "Annuity",
        marketingName : "Max Life Guaranteed Lifetime Income Plan"
    },
    {
        productId: "154",
        code: "SSPP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Smart Secure Plus Plan"
    },
    {
        productId : "164",
        code : "SPP",
        channelId : "9082",
        productGroup : "Annuity",
        marketingName : "Max Life Saral Pension Plan"
    },
    {
        productId : "168",
        code : "SWIP",
        channelId : "9082",
        productGroup : "Traditional",
        marketingName : "Max Life Smart Wealth Income Plan"
    },
    {
        productId : "176",
        code : "SGPP",
        channelId : "9082",
        productGroup : "Annuity",
        marketingName : "Max Life Smart Guaranteed Pension Plan"
    },
    {
        productId: "173",
        code: "FWAP",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Flexi Wealth Advantage Plan"
    },
    {
        productId: "178",
        code: "SCGS",
        channelId: "9082",
        productGroup: "SalesStories",
        marketingName: "Max Life Smart Capital Guarantee Solution"
    },
    {
        productId: "184",
        code: "SFPS",
        channelId: "9082",
        productGroup: "ULIP",
        marketingName: "Max Life Smart Flexi Protect Solution"
    },
    {
        productId: "186",
        code: "SWAG",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Smart Wealth Advantage Guarantee Plan"
    },
    {
        productId: "194",
        code: "SWAG_PAR",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Smart Wealth Advantage Growth Par Plan"
    },
    {
        productId: "200",
        code: "SEWA",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Secure Earnings and Wellness Advantage Plan"
    },
    {
        productId: "205",
        code: "STEP",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Smart Total Elite Protection Term Plan"
    },
    {
        productId: "210",
        code: "SWAGPP",
        channelId: "9082",
        productGroup: "Annuity",
        marketingName: "Max Life Smart Wealth Annuity Guaranteed Pension Plan"
    },
    {
        productId: "230",
        code: "SWAGELITE",
        channelId: "9082",
        productGroup: "Traditional",
        marketingName: "Max Life Smart Wealth Advantage Guarantee Elite Plan"
    }
]

const premiumTypeOptions = [
    {
        id: "singlePay",
        label: "Single Pay"
    },
    {
        id: "regularPay",
        label: "Regular Pay"
    }
]

const style = {
    display: "flex",
    flexDirection: "column"
}

const vestingAge = () => {
    const temp =[];
    for(let i=50;i<=75;i++) {
        temp.push(i);
    }
    return temp;
}
const vestingAgeOptions = vestingAge();
console.log(vestingAgeOptions)

const ProductDetailsSection = () => {
    console.log(FYPP)
    
    const [productData, setProductData] = useState({
        productSelected: {},
        vestingAge: "",
        premiumType: {},
        premiumPaymentTerm: "",
        policyTerm: "",
        annuityOption: "",
        modeOfPayment: ""

    })

    const [selectedValue, setSelectedValue] = useState("");
    const [productSelected, setProductSelected] = useState("");


    return (
        <div className="product-details-section">
            
            <h1>Product Details</h1>
            <br/>
            <div className="product-details">
            
                <Dropdown 
                    options={productList} 
                    label="Product Name" 
                    placeholder="Product Name" 
                    selectedValue={productSelected} 
                    setSelectedValue={setProductSelected} 
                />
                {/* {
                    productSelected.code === "FYPP" ?
                    
                        FYPP.map((fields, index) => {
                            if(fields.status === true) {
                                if(fields.type === "dropdown") {
                                    return (
                                        <Dropdown 
                                            options={fields.values} 
                                            type="vestingAge" 
                                            label="Vesting Age" 
                                            placeholder="Vesting Age" 
                                            selectedValue={selectedValue} 
                                            setSelectedValue={setSelectedValue}
                                        />
                                    )
                                }
                            }
                        })
                        :
                        ""
                    
                } */}
                <Dropdown 
                    options={vestingAgeOptions} 
                    type="vestingAge" 
                    label="Vesting Age" 
                    placeholder="Vesting Age" 
                    selectedValue={selectedValue} 
                    setSelectedValue={setSelectedValue}
                />
                <Dropdown type="premiumType"
                    options={premiumTypeOptions} 
                    label="Premium Type" 
                    placeholder="Premium Type" 
                    selectedValue={selectedValue} 
                    setSelectedValue={setSelectedValue}
                />
                <Dropdown type="vestingAge" 
                    options={vestingAgeOptions} 
                    label="Premium Payment Term" 
                    placeholder="Premium Payment Term" 
                    selectedValue={selectedValue} 
                    setSelectedValue={setSelectedValue}
                />
                <Dropdown type="vestingAge" 
                    options={vestingAgeOptions} 
                    label="Policy Term"  
                    placeholder="Policy Term" 
                    selectedValue={selectedValue} 
                    setSelectedValue={setSelectedValue}
                />
                <Dropdown type="vestingAge" 
                    options={vestingAgeOptions}     
                    label="Annuity Option" 
                    placeholder="Annuity Option" 
                    selectedValue={selectedValue} 
                    setSelectedValue={setSelectedValue}
                />
                <Dropdown type="vestingAge" 
                    options={vestingAgeOptions} 
                    label="Mode of Payment" 
                    placeholder="Mode of Payment" 
                    selectedValue={selectedValue} 
                    setSelectedValue={setSelectedValue}
                />
                {/* <RadioButtonField /> */}
                {/* <Input label="Premium Commitment(Annualy)"/> */}
                



                
            </div>
            <br />
            <div className="btn-group" style={{justifyContent: "space-around"}}>
                <button className="save-btn">Save</button>
                <button className="proceed-btn">Proceed</button>
            </div>
        

            <style jsx>
                    {`
                        .product-details-section {
                            
                        }
                        h1 {
                            font-weight: 400;
                            font-size: 30px
                        }
                        .product-details {
                            display: grid;
                            grid-template-columns: auto auto;
                            column-gap: 50px;
                            row-gap: 50px;
                            padding: 50px;
                            border: 0.1px solid gray;
                            border-radius: 20px;
                            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                        }
                        .btn-group {
                            display: flex;
                            width: 100%;
                            align-items: center;
                            justify-content space-around;

                        }
                        .save-btn {
                            width: 200px;
                            background-color: #e0e0e0;
                            padding: 10px 50px;
                        }
                        .proceed-btn {
                            width: 200px;
                            background-color: #05305c;
                            color: white;
                            padding: 10px 50px;
                        }
                    `}
                </style>
        </div>
    )
}
export default ProductDetailsSection;