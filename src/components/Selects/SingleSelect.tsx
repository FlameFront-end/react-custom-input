import React, { useState } from "react";
import Select from "react-select";
import "./Selects.css";

interface Option {
  value: string;
  label: string;
}

interface SingleSelectProps {
  options: Option[];
}

const SingleSelect: React.FC<SingleSelectProps> = ({ options }) => {
  const [currentCountry, setCurrentCountry] = useState<string>("south-korea");
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const getValue = (): Option | undefined => {
    return currentCountry
      ? options.find((c) => c.value === currentCountry)
      : undefined;
  };

  const onChange = (newValue: Option | null) => {
    setCurrentCountry(newValue?.value || "");
  };

  const onMenuOpen = () => {
    setIsSelectOpen(true);
  };

  const onMenuClose = () => {
    setIsSelectOpen(false);
  };

  return (
    <Select
      classNamePrefix="custom-select"
      onChange={onChange}
      onMenuOpen={onMenuOpen}
      onMenuClose={onMenuClose}
      value={getValue()}
      options={options}
      menuIsOpen={isSelectOpen}
    />
  );
};

export default SingleSelect;
