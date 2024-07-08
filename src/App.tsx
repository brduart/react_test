import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { SignUpForm } from "./types/SignupForm";
import Input from "./components/Input";

function App() {
  //CHAMADA DO HOOK FORM
  const { control, handleSubmit, setValue } = useForm<SignUpForm>();

  //FUNÇÃO SUBMIT
  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  //MONTAGEM DO FORM
  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            control={control}
            name="name"
            rules={{
              required: true,
              minLength: 2,
              maxLength: 20,
            }}
          />

          <Input control={control} name="lastName" />

          <Input
            control={control}
            name="age"
            rules={{
              required: "campo obrigatorio",
              min: 18,
              max: 120,
            }}
          />

          <input type="submit" value="Enviar" className="text-white" />
        </form>

        <button onClick={() => setValue("age", 18)}>Definir idade</button>
      </div>
    </>
  );
}

export default App;
