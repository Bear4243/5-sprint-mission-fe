import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessages?: string[];
  showPasswordToggle?: boolean;
  onToggleVisibility?: () => void;
}

const InputField = forwardRef(
  (
    {
      label,
      errorMessages,
      showPasswordToggle,
      onToggleVisibility,
      ...props
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div className="input-group">
      {label && <label htmlFor={props.id}>{label}</label>}
      <div className="input-wrapper">
        <input
          ref={ref}
          {...props}
          className={`form-input ${props.className || ""}`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onToggleVisibility}
            className="password-toggle"
          >
            {props.type === "password" ? "👁️" : "🙈"}
          </button>
        )}
      </div>
      {errorMessages?.map((message, index) => (
        <span key={index} className="error-text">
          {message}
        </span>
      ))}
    </div>
  )
);

InputField.displayName = "InputField";
export default InputField;
