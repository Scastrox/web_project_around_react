import { useState } from 'react';
import Popup from './components/Popup/Popup.jsx';
import NewCard from './components/Popup/form/NewCard/NewCard.jsx';
import EditProfile from './components/Popup/form/EditProfile/EditProfile.jsx';
import EditAvatar from './components/Popup/form/EditAvatar/EditAvatar.jsx';

const newCardPopup = { title: 'Nuevo Lugar', children: <NewCard /> };
const editProfilePopup = { title: 'Editar perfil', children: <EditProfile /> };
const editAvatarPopup = { title: 'Cambiar foto de perfil', children: <EditAvatar /> };

export default function Main() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popupToOpen) {
    setPopup(popupToOpen);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__content">
            <div className="profile__avatar">
              <img className="profile__picture" alt="Foto de perfil del usuario" />
              <button
                aria-label="Cambiar foto de perfil"
                className="profile__avatar-edit-button"
                type="button"
                onClick={() => handleOpenPopup(editAvatarPopup)}
              />
            </div>
            <div className="profile__info">
              <h1 className="profile__info-name">Sergio Castro</h1>
              <p className="profile__info-description">Estudiante</p>
            </div>
            <button
              aria-label="Editar perfil"
              className="profile__info-edit-button"
              type="button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>
        </div>
        <div>
          <button
            aria-label="Agregar tarjeta"
            className="profile__info-add-button"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </div>
      </section>

      <section className="gallery">{/* Las tarjetas se generarán dinámicamente con React */}</section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
