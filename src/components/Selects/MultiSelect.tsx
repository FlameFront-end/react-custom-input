import React, { useState } from "react";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options }) => {
  const [currentCountries, setCurrentCountries] = useState<any>([
    "south-korea",
    "japan",
  ]);

  const isMulti = true;

  const getValue = () => {
    if (currentCountries) {
      return isMulti
        ? options.filter((c) => currentCountries.indexOf(c.value) >= 0)
        : options.find((c) => c.value === currentCountries);
    } else {
      return isMulti ? [] : "";
    }
  };

  const onChange = (newValue: any) => {
    setCurrentCountries(
      isMulti ? newValue.map((v: any) => v.value) : newValue.value,
    );
  };

  return (
    <div>
      <Select
        classNamePrefix="custom-select"
        onChange={onChange}
        value={getValue()}
        options={options}
        isMulti={isMulti}
        placeholder="Chose countries"
      />
    </div>
  );
};

export default MultiSelect;
