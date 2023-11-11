import SingleSelect from "./components/Selects/SingleSelect";
import Calendar from "./components/Calendar/Calendar";
import InputRange from "./components/InputRange/InputRange";
import MultiSelect from "./components/Selects/MultiSelect";

function App() {
  const options = [
    {
      value: "south-korea",
      label: "South korea",
    },
    {
      value: "germany",
      label: "Germany",
    },
    {
      value: "canada",
      label: "Canada",
    },
    {
      value: "japan",
      label: "Japan",
    },
  ];

  return (
    <div className="app">
      <Calendar />
      <SingleSelect options={options} />
      <MultiSelect options={options} />
      <InputRange />
    </div>
  );
}

export default App;
