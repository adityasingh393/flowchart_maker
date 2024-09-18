import React  from "react";
import { InputFieldProps } from "../../types";

const InputField:React.FC<InputFieldProps>=({
    value,
    onChange,
    placeholder="",
    style={}
})=>{
    return (
        <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
            border: "none",
            textAlign: "center",
            width: "90%",
            color: "green",
            fontSize: "160%",
            backgroundColor: "transparent",
            outline: "none",
            ...style,
        }}
        />
    );
};
export default InputField;