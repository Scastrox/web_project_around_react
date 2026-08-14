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
      {/* el popup de imagen no lleva título y usa su propio contenedor */}
      <div className={title ? 'popup__container' : 'popup__image'}>
        <button aria-label="Cerrar ventana emergente" className="popup__close-button" type="button" onClick={onClose} />
        {title && <h2 className="popup__form-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
