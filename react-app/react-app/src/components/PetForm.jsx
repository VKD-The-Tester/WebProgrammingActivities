import { pets } from "../db/pets";
import styles from "./PetForm.css";

// -> component
// --> change (pet name from "" to "j")
// -> rerender component

const PetForm = () => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    age: 0,
    color: "",
    birthday: new Date(),
    food: "",
  });

  console.log(pet);

  const updatePet = (event) => {
    setPet(...pet. [event.target.name]: event.target.value)
  };

  const addPet = () => {
    pets.push(pet);
    setPet();
  };

  return (
    <>
      <div className="form-container">
        <div className="input-container">
          <label htmlFor="name"> Pet Name:</label>
          <input
            type="text"
            name="name"
            value={pet.name}
            onChange={(event) => {
              updatePet;
            }}
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="type"> Pet Type:</label>
          <input type="text" name="type" value={pet.type} onChange={updatePet}></input>
        </div>

        <div className="input-container">
          <label htmlFor="Age"> Age:</label>
          <input type="text" name="Age" onChange={updatePet}></input>
        </div>

        <div className="input-container">
          <label htmlFor="Color"> Color:</label>
          <select name="Color" value={pet.color} onChange={updatePet}>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="white">White</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="Birthday"> Birthday:</label>
          <input type="text" name="Birthday" value={pet.birthday} onChange={updatePet}></input>
        </div>

        <div className="input-container">
          <label htmlFor="FavoriteFood"> Favorite Food:</label>
          <input
            type="text"
            name="FavoriteFood"
            value={pet.favoriteFood}
            onChange={updatePet}
          ></input>
        </div>

        <button onClick={addPet}>Add Pet</button>
      </div>
    </>
  );
};

export default PetForm;
