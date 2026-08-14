import { useState } from 'react';
import Popup from './components/Popup/Popup.jsx';
import NewCard from './components/Popup/form/NewCard/NewCard.jsx';
import EditProfile from './components/Popup/form/EditProfile/EditProfile.jsx';
import EditAvatar from './components/Popup/form/EditAvatar/EditAvatar.jsx';
import Card from './components/Card/Card.jsx';

const newCardPopup = { title: 'Nuevo Lugar', children: <NewCard /> };
const editProfilePopup = { title: 'Editar perfil', children: <EditProfile /> };
const editAvatarPopup = { title: 'Cambiar foto de perfil', children: <EditAvatar /> };

// datos ficticios: se reemplazarán por la API en el siguiente sprint
const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

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

      <section className="gallery">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
