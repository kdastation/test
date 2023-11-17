import { QueryClientProvider } from "./QueryClientProvider";
import { RouterProvider } from "./RouterProvider";

export const Root = () => {
  return (
    <QueryClientProvider>
      <RouterProvider />
    </QueryClientProvider>
  );
};
