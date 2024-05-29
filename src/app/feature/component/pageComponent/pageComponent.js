'use client'
import Radio from "@/app/feature/component/element/Radio/radio";
import PhoneNumber from "@/app/feature/component/element/phoneNumber/phoneNumber";
import TextField from "@/app/feature/component/element/textField/textField";
import {Nationality} from "@/app/api/dummyData";
import {useState} from "react";

const PageComponent = (props) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const {utmConfig = {}, themeConfig = {}} = props;

    return (
        <div className="pageComponent">
        <h1>fill all the customer details</h1>
            <Radio
                options={Nationality}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
            />

            <TextField/>
            <div className={'flex gap-10 justify-center align-center'}>
                <button className={'bg-light min-w-60 py-2'}>Save</button>
                <button className={'bg-title bg-secondary2 text-white min-w-60'}>Proceed</button>
            </div>
        </div>
    );
};

export default PageComponent;