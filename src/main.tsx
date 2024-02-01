import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./router";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <Router />
    </QueryClientProvider>,
);
