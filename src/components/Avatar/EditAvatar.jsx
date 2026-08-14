export default function EditAvatar() {
  return (
    <form className="popup__form" name="avatar-form" id="avatar-form" noValidate>
      <fieldset className="popup__form-fieldset">
        <input
          className="popup__form-field-input"
          id="avatar-input"
          name="avatar"
          placeholder="Enlace a la nueva foto de perfil"
          type="url"
          required
        />
        <span className="popup__form-field-error avatar-input-error"></span>

        <button className="popup__form-button popup__form-save-button" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
