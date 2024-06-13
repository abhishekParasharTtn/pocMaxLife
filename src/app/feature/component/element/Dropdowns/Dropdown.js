"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setField } from "@/redux/formSlices";

const Dropdown = ({
  productData,
  setProductData,
  name,
  title,
  label,
  options,
  disabled = false,
  formName,
}) => {
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    code: "",
    productId: "",
  });

  console.log(selectedProduct);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const selectedProductId = e.target.value;
    const product = options.find((p) => p.productId === selectedProductId);
    setSelectedProduct(product || { name: "", code: "", productId: "" });

    const newValue = e.target.value;
    setSelectedValue(newValue);
    const premiumType = options.filter((premiumType) => {
      if (premiumType.id === e.target.value) {
        return premiumType;
      }
    });
    dispatch(
      setField({ fieldName: name, value: newValue, formName: formName })
    );
  };



  return (
    <div className="select-wrapper w-full">
      <div
        className={`relative mb-5 ${disabled ? "select-disabled text-disable" : ""
          }`}
      >
        <select
          value={selectedValue}
          onChange={handleChange}
          disabled={disabled}
          className={`block py-3 bg-transparent w-full border-b-2 outline-none focus:border-primary ${disabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
        >
          <option value="" disabled hidden></option>
          {
            options.length === 0 ? <option disabled>No data</option>
              : options?.map((option, index) => (
                <option key={index} value={option.value || option.code}>
                  {option.label}
                </option>
              ))}
        </select>
        <label
          className={`absolute left-0 transition-all duration-200 ease-in-out transform origin-left ${selectedValue ? "-top-2 text-md text-primary" : "bottom-0 text-lg"
            } ${disabled ? "opacity-60" : ""}`}
        >
          {label ? label : "Premium Type"}
        </label>
      </div>
      <style jsx>{`
        select:focus ~ label,
        select:not([value=""]):valid ~ label {
          transform: translateY(-10px);
        }

        .select-disabled select {
          cursor: not-allowed;
        }

        .select-disabled label {
          opacity: 0.6;
          cursor: not-allowed;
        }

        label {
          transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out,
            color 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Dropdown;
