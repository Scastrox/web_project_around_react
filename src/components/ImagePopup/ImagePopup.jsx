export default function ImagePopup(props) {
  const { name, link } = props.card;

  return (
    <>
      <div className="popup__image-container">
        <img className="popup__image-photo" src={link} alt={name} />
      </div>
      <div className="popup__image-text-container">
        <p className="popup__image-text">{name}</p>
      </div>
    </>
  );
}
