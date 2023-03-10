import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  // const [counter, setCounter] = useState(10);

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h4>{category}</h4>
      {/* {isLoading ? <h2>...Cargando</h2> : null} */}
      {isLoading && <h2>...Cargando</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
      {/* <h4>{counter}</h4> 
      <button onClick={() => setCounter(counter + 1)}>+1</button> */}
    </>
  );
};
