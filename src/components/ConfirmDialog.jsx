import ModalPortal from "./ModalPortal";
import "../styles/ConfirmDialog.css";

export default function ConfirmDialog({
    open,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onClose,
    onConfirm,
}) {
    if (!open) return null;

    return (
        <ModalPortal>
            <div className="modal-overlay confirm-overlay" onClick={onClose}>
                <div
                    className="confirm-dialog"
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="confirm-dialog__icon" aria-hidden="true">
                        !
                    </div>

                    <div className="confirm-dialog__content">
                        <h3>{title}</h3>
                        <p>{message}</p>
                    </div>

                    <div className="confirm-dialog__actions">
                        <button type="button" className="confirm-dialog__cancel" onClick={onClose}>
                            {cancelText}
                        </button>
                        <button type="button" className="confirm-dialog__confirm" onClick={onConfirm}>
                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </ModalPortal>
    );
}
