import { useController, UseControllerProps } from "react-hook-form";
import { SignUpForm } from "../types/SignupForm";

const Input = (props: UseControllerProps<SignUpForm>) => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input
        {...field}
        placeholder={props.name}
        className={`border ${
          fieldState.invalid ? "border-red" : "border-white"
        } p-3 text-black`}
      />
      {fieldState.error?.type === "required" && <p>campo obrigatorio</p>}
    </div>
  );
};

export default Input;
