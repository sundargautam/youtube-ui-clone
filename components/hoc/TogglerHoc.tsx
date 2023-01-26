import React, { useState } from "react";

export interface withToggleHOCProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggleHandler: () => void;
}
interface withToggleProps {
  PassedComponent: React.ElementType;
}

const withToggle = ({ PassedComponent }: withToggleProps) => {
  const WithToggle = (props: any) => {
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
      setToggle(!toggle);
    };
    return (
      <PassedComponent
        {...props}
        setToggle={setToggle}
        toggleHandler={toggleHandler}
        toggle={toggle}
      />
    );
  };

  return WithToggle;
};

export default withToggle;
