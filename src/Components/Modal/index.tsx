import ReactDOM from 'react-dom';
import { Props } from '../../interfaces-and-types';

function Modal({children}:Props) {
 const modal = document.getElementById('modal');

    if (!modal) {
        // handle the error appropriately, for example:
        throw new Error("Could not find element with id 'modal'");
    }

    return ReactDOM.createPortal(
        <div className="obs-modal">
            {children}
        </div>,
        modal
    );
}

export {Modal};