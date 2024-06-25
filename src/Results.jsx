import Pet from "./Pet";
import loading from './Loading_icon_no_fade.webp'

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <img src={loading} alt="l..." />
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
