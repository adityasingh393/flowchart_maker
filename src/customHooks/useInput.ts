import { useState } from "react";

const useInput = (initialValue: string) => {
  const [labelValue, setLabelValue] = useState(initialValue);
  const handleChange = (e:any) => {
    const newLabel = e.target.value;
    setLabelValue(newLabel);
    return newLabel;
  };
  return {
    labelValue,
    setLabelValue,
    handleChange,
  };
};

export default useInput;
