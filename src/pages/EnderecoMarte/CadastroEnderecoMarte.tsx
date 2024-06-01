import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  Fieldset,
  Form,
  Input,
  Label,
  Titulo,
} from "../../components";

interface FormInputMarte {
  lote: string;
}

const CadastroEnderecoMarte = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputMarte>({
    mode: "all",
    defaultValues: {
      lote: "",
    },
  });

  const aoSubmeter = (dados: FormInputMarte) => {
    console.log(dados);
  };

  return (
    <>
      <Titulo>Cadastro de Endereço em Marte</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="campo-lote">Lote</Label>
          <Input
            id="campo-lote"
            placeholder="XXXX"
            type="text"
            {...register("lote", {
              required: "O campo é obrigatório",
              pattern: {
                value: /^\d{4}$/,
                message: "Lote deve ser um número de quatro dígitos",
              },
            })}
            $error={!!errors.lote}
          />
          {errors.lote && <ErrorMessage>{errors.lote.message}</ErrorMessage>}
        </Fieldset>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};

export default CadastroEnderecoMarte;
