import parse from "html-react-parser";

const PeraTextData = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <p className="pera-text">{parse(`${item.description}`)}</p>
      ))}
    </>
  );
};

export default PeraTextData;
