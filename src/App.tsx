import { useForm } from "react-hook-form";
import "./App.css";
import { SignUpForm } from "./types/SignUpForm";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Precisa ter pelo menos 2 letras" })
    .max(20, { message: "máximo de 20 letras" }),
  lastName: z.string().optional(),
  age: z
    .number({ invalid_type_error: "idade precisa ser um numero" })
    .min(18, { message: "minimo de 18 anos" }),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpFormSchema),
  });

  const handleSignUpForm = () => {
    alert("ok");
  };

  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleSignUpForm)}>
          <div>
            <input
              {...register("name")}
              className="border border-white p-3 m-3 text-black"
            />
            {errors.name && <p>{errors.name.message as string}</p>}
          </div>
          <div>
            <input
              {...register("lastName")}
              className="border border-white p-3 m-3 text-black"
            />
            {errors.lastName && <p>{errors.lastName.message as string}</p>}
          </div>
          <div>
            <input
              {...register("age", { valueAsNumber: true })}
              className="border border-white p-3 m-3 text-black"
            />
            {errors.age && <p>{errors.age.message as string}</p>}
          </div>

          <input type="submit" value="Cadastrar" className="text-white" />
        </form>
      </div>
    </>
  );
}

export default App;
