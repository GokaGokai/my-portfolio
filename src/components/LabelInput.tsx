// react
import { FC, ChangeEvent } from "react";

interface LabelInputProps {
  labelText: string;
  placeholderText: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  required?: boolean;
}

const LabelInput: FC<LabelInputProps> = ({
  labelText,
  placeholderText,
  name,
  value,
  onChange,
  textarea,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-2.5 flex-1 w-full">
      <label
        htmlFor={name}
        className="text-textPrimary text-base sm:text-lg font-bold"
      >
        {labelText}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          rows={9}
          placeholder={placeholderText}
          onChange={onChange}
          required={required}
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg
          placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
        ></textarea>
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          placeholder={placeholderText}
          onChange={onChange}
          required={required}
          autoComplete="off"
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg
          placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
        />
      )}
    </div>
  );
};

export default LabelInput;
