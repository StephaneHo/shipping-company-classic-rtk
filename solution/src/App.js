import { ShipTypes } from "./components/ShipTypes";

export default function App() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container mx-auto">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reinitialiser les listes
      </button>
      <hr />
      <ShipTypes />
      <hr />
    </div>
  );
}
