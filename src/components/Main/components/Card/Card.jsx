export default function Card(props) {
  const { name, link, isLiked } = props.card;

  return (
    <div className="gallery__card">
      <img className="gallery__card-image" src={link} alt={name} />
      <button aria-label="Eliminar tarjeta" className="gallery__card-delete" type="button" />
      <div className="gallery__card-info">
        <h2 className="gallery__card-title">{name}</h2>
        <button
          aria-label="Me gusta"
          className={`gallery__card-like${isLiked ? ' gallery__card-like_active' : ''}`}
          type="button"
        />
      </div>
    </div>
  );
}
