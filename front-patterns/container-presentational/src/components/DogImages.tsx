export default function DogImages({ dogs }: { dogs: string[] }) {
  return (
    <div className="dog-images">
      {dogs.map((dog, index) => (
        <img key={index} src={dog} alt="dog" />
      ))}
    </div>
  );
}
