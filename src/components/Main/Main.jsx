function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__content">
            <div className="profile__avatar">
              <img className="profile__picture" alt="Foto de perfil del usuario" />
              <button className="profile__avatar-edit-button" type="button"></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__info-name">Sergio Castro</h1>
              <p className="profile__info-description">Estudiante</p>
            </div>
            <button className="profile__info-edit-button" type="button"></button>
          </div>
        </div>
        <div>
          <button className="profile__info-add-button" type="button"></button>
        </div>
      </section>

      <section className="gallery">{/* Las tarjetas se generarán dinámicamente con React */}</section>
    </main>
  );
}

export default Main;
