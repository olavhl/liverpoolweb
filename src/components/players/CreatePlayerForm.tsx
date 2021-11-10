import { ChangeEvent, FC, SyntheticEvent, useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { PlayerContext } from "../../context/PlayerContext";
import { IPlayer } from "../../interfaces/IPlayers";
import { PlayerContextType } from "../../types/PlayerContextType";

const CreatePlayerForm: FC = () => {
  const { addPlayer } = useContext(PlayerContext) as PlayerContextType;
  const [validated, setValidated] = useState(false);
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

  const postNewPlayer = (event: SyntheticEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log(form.checkValidity());
      event.preventDefault();
      event.stopPropagation();
    } else {
      addPlayer(newPlayer, newImage as File);
    }

    setValidated(true);
  };

  return (
    <Form
      className="form-create-player"
      noValidate
      validated={validated}
      onSubmit={postNewPlayer}
    >
      <Form.Group className="form-group">
        <Form.Label>First name:</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          name="firstname"
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please enter Firstname
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Last name:</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          name="lastname"
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please enter Lastname
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Age:</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          name="age"
          type="number"
        />
        <Form.Control.Feedback type="invalid">
          Please enter Age
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Country:</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          name="country"
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please enter Country
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Position:</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          name="position"
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please enter Postition
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Image: </Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          name="image"
          type="file"
        />
        <Form.Control.Feedback type="invalid">
          Please choose Image
        </Form.Control.Feedback>
      </Form.Group>

      <div className="form-btn-container">
        <input className="form-btn" type="submit" value="Save Player" />
      </div>
    </Form>
  );
};

export default CreatePlayerForm;
