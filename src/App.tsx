import { Controller, SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { SignUpForm } from "./types/SignUpForm";
import { Input } from "@mui/material";

function App() {
  //CHAMADA DO HOOK FORM
  const { control, handleSubmit } = useForm<SignUpForm>();

  //FUNÇÃO SUBMIT
  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  //MONTAGEM DO FORM
  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                error={fieldState.invalid}
                style={{ background: "#fff" }}
              />
            )}
            rules={{ required: true, minLength: 2, maxLength: 20 }}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => <Input {...field} />}
          />

          <Controller
            control={control}
            name="age"
            render={({ field }) => <Input {...field} />}
            rules={{ required: true, min: 18 }}
          />

          <input type="submit" value="Enviar" className="text-white" />
        </form>
      </div>
    </>
  );
}

export default App;
