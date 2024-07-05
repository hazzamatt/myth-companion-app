import React from "react";

interface IOwnProps extends React.PropsWithChildren {
    buttonFunction: (...args: unknown[]) => void;
}

const DefaultButton: React.FC<IOwnProps> = props => {
    return (
        <button onClick={props.buttonFunction}>{props.children}</button>
    )
};

export default DefaultButton;