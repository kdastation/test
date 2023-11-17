import { queryClient } from "@shared/lib/react-query";
import { ReactNode } from "react";
import { QueryClientProvider as TanStackQueryClientProvider } from "react-query";

type Props = {
  children?: ReactNode;
};

export const QueryClientProvider = ({ children }: Props) => {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
};
