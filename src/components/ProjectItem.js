export default function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      ></div>
      <h1>{name}</h1>
    </div>
  );
}
