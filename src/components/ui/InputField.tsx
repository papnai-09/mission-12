import type { InputHTMLAttributes } from "react";

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
  error?: string;
};

export function InputField({
  label,
  helperText,
  error,
  id,
  className = "",
  ...props
}: InputFieldProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const descriptionId = `${inputId}-description`;

  return (
    <label className={["ds-field", className].filter(Boolean).join(" ")} htmlFor={inputId}>
      <span className="ds-field__label">{label}</span>
      <input
        id={inputId}
        className="ds-field__input"
        aria-invalid={Boolean(error)}
        aria-describedby={helperText || error ? descriptionId : undefined}
        {...props}
      />
      {(helperText || error) && (
        <span
          id={descriptionId}
          className={error ? "ds-field__message ds-field__message--error" : "ds-field__message"}
        >
          {error ?? helperText}
        </span>
      )}
    </label>
  );
}
