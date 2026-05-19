import Modal from "../common/Modal"
import Button from "../common/Button"

function Lightbox({ items, selectedIndex, onClose, onPrev, onNext }) {
  const currentItem = selectedIndex === null ? null : items[selectedIndex]

  if (!currentItem) {
    return null
  }

  return (
    <Modal
      isOpen={selectedIndex !== null}
      onClose={onClose}
      title={currentItem.title}
      footer={
        <div className="lightbox__footer">
          <p>{currentItem.caption}</p>
          <div className="lightbox__actions">
            <Button variant="ghost" onClick={onPrev}>
              Previous
            </Button>
            <Button variant="outline" onClick={onNext}>
              Next
            </Button>
          </div>
        </div>
      }
    >
      <img src={currentItem.image} alt={currentItem.title} className="lightbox__image" />
    </Modal>
  )
}

export default Lightbox
