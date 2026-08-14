import { useEffect } from 'react';

export default function Popup(props) {
  // los hijos son el contenido de la ventana emergente
  const { title, children, onClose } = props;

  useEffect(() => {
    function handleEscape(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // solo cierra si el clic cae en el fondo, no dentro del contenedor
  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div className="popup__container">
        <button aria-label="Cerrar ventana emergente" className="popup__close-button" type="button" onClick={onClose} />
        <h2 className="popup__form-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
