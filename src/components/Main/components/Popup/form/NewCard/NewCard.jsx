export default function NewCard() {
  return (
    <form className="popup__form popup__add-form" name="add-form" id="add-form" noValidate>
      <fieldset className="popup__form-fieldset">
        <input
          className="popup__form-field-input popup__add-form-field-title"
          id="title-add-card"
          name="name"
          placeholder="Título"
          type="text"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__form-field-error title-add-card-error"></span>

        <input
          className="popup__form-field-input popup__add-form-field-image"
          id="link-add-card"
          name="link"
          placeholder="Enlace a la imagen"
          type="url"
          required
        />
        <span className="popup__form-field-error link-add-card-error"></span>

        <button className="popup__form-button popup__add-form-create-button" type="submit">
          Crear
        </button>
      </fieldset>
    </form>
  );
}
