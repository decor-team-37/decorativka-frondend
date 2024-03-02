import React from 'react';
import { ModalInfo } from '../../types/ModalInfo';
import './Modal.scss';

type Props = {
  modalInfo: ModalInfo;
  closeModal: () => void;
};

export const Modal: React.FC<Props> = ({ modalInfo, closeModal }) => {
  const { status, title, description } = modalInfo;

  return (
    <div className="modal" style={{ display: status ? 'block' : 'none' }}>
      <div className="modal__content">
        <span
          className="modal__close"
          onClick={closeModal}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === 'Space') {
              closeModal();
            }
          }}
        >
          &times;
        </span>

        <h3 className="title title--h3">{title}</h3>

        {description?.split('\n').map(line => (
          <li key={line} className="modal__description">
            {line.trim()}
          </li>
        ))}
      </div>
    </div>
  );
};

/*  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 && npm run lint-css", */
