import useGenres from "../hooks/useGenres";

const Genres = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default Genres;
