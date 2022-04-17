import Employee from "./pages/Employee";

import data from "./data";

const randomIndex = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

function App() {
  return <Employee employeeDetail={data[randomIndex]} />;
}

export default App;
