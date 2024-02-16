import LoginForm from "../ui/LoginForm/Login";
import RegistrationForm from "../ui/RegistrationForm/Registration";

function Modal() {

    let isLogin = true;

    return(
        <div className="ModalForm">
            {isLogin ? <LoginForm/> : <RegistrationForm/>}
        </div>
    )
}

export default Modal;   