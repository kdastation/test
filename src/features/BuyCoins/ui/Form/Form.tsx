import { isApiError } from "@shared/api/isApiError";
import { useBuyCoin } from "../../model/api/buyCoin";
import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/Input/Input";
import { useForm } from "react-hook-form";

type Values = {
  amount: number;
};

type Props = {
  initialValues?: Partial<Values>;
  onSuccess?: () => void;
  id: number;
};
export const Form = ({ initialValues, onSuccess, id }: Props) => {
  const {
    register,
    handleSubmit: handleSubmitHookFrom,
    formState: { errors },
    setError,
  } = useForm<Values>({
    values: {
      amount: initialValues?.amount || 0,
    },
  });

  const buiCoin = useBuyCoin();

  const handleSubmit = async (values: Values) => {
    try {
      await buiCoin.mutateAsync({
        amount: values.amount,
        id,
      });

      onSuccess?.();
    } catch (e) {
      if (isApiError(e)) {
        setError("root.serverError", {
          message: "Недостаточно средств",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmitHookFrom(handleSubmit)}>
      <div>
        <div>
          <Input type="number" {...register("amount")} />
        </div>

        <div>
          <Button type="submit">Buy</Button>
        </div>

        <div>
          {errors.root?.serverError && errors.root?.serverError.message}
        </div>
      </div>
    </form>
  );
};
