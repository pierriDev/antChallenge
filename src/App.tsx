import { queryClient } from "./api/queryClient"
import { QueryClientProvider } from "react-query";
import Ant from "./screens/AntScreen/Ant";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Ant />
    </QueryClientProvider>
  );
}

export default App;
