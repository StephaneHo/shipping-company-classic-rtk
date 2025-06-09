import { RentalCategories } from "./components/RentalCategories";

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
      <RentalCategories />
      <hr />
    </div>
  );
}
