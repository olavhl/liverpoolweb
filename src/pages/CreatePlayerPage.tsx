import CreatePlayerForm from "../components/players/CreatePlayerForm";

const CreatePlayerPage = () => {
  return (
    <div className="create-player-container">
      <h1>Create players</h1>
      <div className="form-container">
        <CreatePlayerForm />
      </div>
    </div>
  );
};

export default CreatePlayerPage;
