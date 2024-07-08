import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

//TIPAGEM INPUTS
type Inputs = {
  name: string;
  lastName: string;
  age: number;
};

function App() {
  //CHAMADA DO HOOK FORM
  const {
    handleSubmit,
    register,
    formState: { errors }, //CAPTURA DE ERROS
  } = useForm<Inputs>();

  //FUNÇÃO SUBMIT
  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  //MONTAGEM DO FORM
  //(TRATANDO ERROS ESPECIFICOS)
  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 20,
            })}
            placeholder="Digite seu nome"
            className="border border-white p-3 text-black"
          />
          {errors.name && <p>Erro</p>}
          {errors.name?.type === "required" && <p>item obrigatorio</p>}
          {errors.name?.type === "minLenght" && <p>precisa ser 2 caracteres</p>}

          <input
            {...register("lastName", { pattern: /^[a-z]/i })}
            placeholder="Digite seu sobrenome"
            className="block mt-4 border border-white p-3 text-black"
          />

          <input
            type="number"
            {...register("age", {
              required: "CAMPO IDADE OBRIGATORIO",
              min: 18,
              max: 120,
            })}
            placeholder="Digite sua idade"
            className="block mt-4 border border-white p-3 text-black"
          />
          {errors.age && <p>{errors.age.message}</p>}

          <input type="submit" value="Enviar" className="text-white" />
        </form>
      </div>
    </>
  );
}

export default App;
