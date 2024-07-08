import { useForm } from "react-hook-form";
import "./App.css";
import { SignUpForm } from "./types/SignUpForm";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpFormSchema = z.object({
  name: z.string().min(2).max(20),
  lastName: z.string().optional(),
  age: z.number().min(18),
});

function App() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(SignUpFormSchema),
  });

  const handleSignUpForm = () => {
    alert("ok");
  };

  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleSignUpForm)}>
          <input
            {...register("name")}
            className="border border-white p-3 m-3 text-black"
          />
          <input
            {...register("lastName")}
            className="border border-white p-3 m-3 text-black"
          />
          <input
            {...register("age", { valueAsNumber: true })}
            className="border border-white p-3 m-3 text-black"
          />

          <input type="submit" value="Cadastrar" className="text-white" />
        </form>
      </div>
    </>
  );
}

export default App;
