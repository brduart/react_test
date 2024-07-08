import { Form, useForm } from "react-hook-form";
import "./App.css";
import { SignUpForm } from "./types/SignUpForm";

function App() {
  const { register, control } = useForm();

  const handleSucess = () => {
    alert("ok");
  };

  const handleError = () => {
    alert("error");
  };
  //MONTAGEM DO FORM
  return (
    <>
      <div className="container mx-auto">
        <Form
          control={control}
          action={"https://jsonplaceholder.typicode.com/posts"}
          method="post"
          encType="application/json"
          onSuccess={handleSucess}
          onError={handleError}
        >
          <input
            {...register("title", { required: true })}
            className="mr-3 border border-white p-3 text-black"
          />
          <input
            {...register("body", { required: true })}
            className="mr-3 border border-white p-3 text-black"
          />
          <input
            {...register("userId", { required: true })}
            className="border border-white p-3 text-black"
          />
          <button>Enviar</button>
        </Form>
      </div>
    </>
  );
}

export default App;
