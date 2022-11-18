
import './Modal.sass'
function Modal (props) {
    return (
        <div className="background">
            <div className="modal">
                <h3>BMR (basal metabolic rate) - <span>это количество калорий (энергии), необходимых для правильного функционирования организма: дыхания, работы ЖКТ, циркуляции крови, терморегуляции, работы нервной системы и др.</span></h3>
                <img className='human' src="human.png" alt="human" />
                <img onClick={()=>props.onCrossModal()} className='cross' src="cross.svg" alt="cross" />
            </div>
        </div>
    )
}
export default Modal;