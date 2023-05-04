import { useParams } from "react-router-dom";

export default function Construction() {
  const { id } = useParams();
  return (
    <div className="App">
      <div>
        <h1>Em construção{id}</h1>
        <p>
          O timer está neste link
          <a href="https://igorsilvaj.github.io/timer/">
            https://igorsilvaj.github.io/timer/
          </a>
        </p>
      </div>
    </div>
  );
};
