export default function EditProfile() {
  return (
    <form className="popup__form" name="profile-form" id="profile-form" noValidate>
      <fieldset className="popup__form-fieldset">
        <input
          className="popup__form-field-input popup__form-field-name"
          id="name-input"
          name="name"
          placeholder="Nombre"
          type="text"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__form-field-error name-input-error"></span>

        <input
          className="popup__form-field-input popup__form-field-description"
          id="description-input"
          name="description"
          placeholder="Acerca de mí"
          type="text"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__form-field-error description-input-error"></span>

        <button className="popup__form-button popup__form-save-button" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
