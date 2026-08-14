export default function RemoveCard(props) {
  const { onConfirm } = props;

  return (
    <button className="popup__form-button popup__confirm-button" type="button" onClick={onConfirm}>
      Sí
    </button>
  );
}
