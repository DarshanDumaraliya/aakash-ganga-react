import parse from "html-react-parser";

const Title = ({ title, className }) => {
  return <h2 className={className}>{parse(`${title}`)}</h2>;
};

export default Title;
