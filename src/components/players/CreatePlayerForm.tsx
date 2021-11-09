import { ChangeEvent, FC, useContext, useState } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { IPlayer } from "../../interfaces/IPlayers";
import { PlayerContextType } from "../../types/PlayerContextType";

const CreatePlayerForm: FC = () => {
  const { addPlayer } = useContext(PlayerContext) as PlayerContextType;
  const [newPlayer, setNewPlayer] = useState<IPlayer>({
    firstname: "",
    lastname: "",
    age: 0,
    country: "",
    position: "",
    image: "",
  });
  const [newImage, setNewImage] = useState<File>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name } = event.target;

    switch (name) {
      case "firstname":
        setNewPlayer({ ...newPlayer, firstname: event.target.value });
        break;
      case "lastname":
        setNewPlayer({ ...newPlayer, lastname: event.target.value });
        break;
      case "age":
        setNewPlayer({ ...newPlayer, age: parseInt(event.target.value) });
        break;
      case "country":
        setNewPlayer({ ...newPlayer, country: event.target.value });
        break;
      case "position":
        setNewPlayer({ ...newPlayer, position: event.target.value });
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          setNewPlayer({ ...newPlayer, image: files[0].name });
          setNewImage(files[0]);
        }

        break;
    }
  };

  const postNewPlayer = () => {
    addPlayer(newPlayer, newImage as File);
  };

  return (
    <div>
      <div>
        <label>First name:</label>
        <input onChange={handleChange} name="firstname" type="text" />
      </div>
      <div>
        <label>Last name:</label>
        <input onChange={handleChange} name="lastname" type="text" />
      </div>

      <div>
        <label>Age:</label>
        <input onChange={handleChange} name="age" type="number" />
      </div>

      <div>
        <label>Country:</label>
        <input onChange={handleChange} name="country" type="text" />
      </div>

      <div>
        <label>Position:</label>
        <input onChange={handleChange} name="position" type="text" />
      </div>

      <div>
        <label>Image: </label>
        <input onChange={handleChange} name="image" type="file" />
      </div>

      <input type="button" value="Save new player" onClick={postNewPlayer} />
    </div>
  );
};

export default CreatePlayerForm;