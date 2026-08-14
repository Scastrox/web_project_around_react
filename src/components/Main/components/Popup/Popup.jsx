export default function Popup(props) {
  // los hijos son el contenido de la ventana emergente
  const { title, children } = props;

  return (
    <div className="popup">
      <div className="popup__container">
        <button aria-label="Cerrar ventana emergente" className="popup__close-button" type="button" />
        <h2 className="popup__form-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
