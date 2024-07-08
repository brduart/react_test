import "./App.css";
import { SignUpForm } from "./types/SignUpForm";

import { z } from "zod";

function App() {
  const SignUpForm = z.object({
    name: z.string().min(2).max(20),
    lastName: z.string().min(2).optional(),
    age: z.number().min(18),
  });

  //INFERINDO TIPO
  type SignUpObject = z.infer<typeof SignUpForm>;

  const obj: SignUpObject = {
    name: "teste",
    lastName: "teste",
    age: 20,
  };

  //TESTE DE VALIDAÇÃO
  SignUpForm.parse({
    name: "teste",
    age: 20,
  });

  return (
    <>
      <div className="container mx-auto"></div>
    </>
  );
}

export default App;
