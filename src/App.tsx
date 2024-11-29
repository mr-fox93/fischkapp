import { AppLayout } from "./components/AppLayout";

import "./App.module.scss";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <AppLayout>
      <AppHeader cardsAmount={0} />
    </AppLayout>
  );
}

export default App;
