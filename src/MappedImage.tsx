import { useNavigate } from "react-router-dom";

export interface Props {
  src?: string;
}

export default function MappedImage({ src = "images/squidword.jpg" }: Props) {
  const navigate = useNavigate();

  return (
    <div className="dbor">
      <img className="fit-width transparent" src={src} />
      <div className="overlay">
        <img
          className="fit-width transparent debug"
          src={src}
          useMap="#swmap"
        />
      </div>
      <map name="swmap">
        <area
          shape="rect"
          coords="34,44,270,350"
          alt="Computer"
          onClick={() => {
            navigate("/computer");
          }}
        />
        <area
          shape="rect"
          coords="290,172,333,250"
          alt="Phone"
          onClick={() => {
            navigate("/phone");
          }}
        />
        <area
          shape="circle"
          coords="337,300,44"
          alt="Cup of coffee"
          onClick={() => {
            navigate("/coffee");
          }}
        />
      </map>
    </div>
  );
}
