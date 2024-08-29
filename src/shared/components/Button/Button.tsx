import React, { forwardRef, ReactNode } from "react";
import "./Button.css";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
  buttonType: "clear" | "primary";
  addClassName?: string;
}

type Ref = HTMLButtonElement;

const CLASSNAMES = {
  clear: "btn-clear",
  primary: "btn-primary"
}

/**
 * Button component.
 *
 * @component
 * @param {ButtonProps} props - Forwarded & Component props.
 * @param {React.Ref} ref - Forwarded component ref.
 * @returns The rendered Button component.
 */

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  return (
    <button ref={ref}
      className={`btn ${CLASSNAMES[props.buttonType]} ${props?.addClassName || ""}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
});

export default Button;