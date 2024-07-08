import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

//TIPAGEM INPUTS
type Inputs = {
  name: string;
  lastName: string;
};

function App() {
  //CHAMADA DO HOOK FORM
  const { handleSubmit, register } = useForm<Inputs>();

  //FUNÇÃO SUBMIT
  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  //MONTAGEM DO FORM
  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            {...register("name")}
            placeholder="Digite seu nome"
            className="border border-white p-3 text-black"
          />

          <input
            {...register("lastName")}
            placeholder="Digite seu sobrenome"
            className="block mt-4 border border-white p-3 text-black"
          />

          <input type="submit" value="Enviar" className="text-white" />
        </form>
      </div>
    </>
  );
}

export default App;
