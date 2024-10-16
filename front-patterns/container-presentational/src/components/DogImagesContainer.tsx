import { useEffect, useState } from "react";
import DogImages from "./DogImages";

export default function DogImagesContainer() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => response.json())
      .then((data) => setDogs(data.message));
  }, []);

  return <DogImages dogs={dogs} />;
}
