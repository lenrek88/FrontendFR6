import LoginForm from "../ui/LoginForm/Login";
import RegistrationForm from "../ui/RegistrationForm/Registration";

function Modal() {

    let isLogin = true;

    return(
        <div className="ModalForm">
            <LoginForm isLogin={isLogin}/>
            <RegistrationForm isLogin={isLogin}/>
        </div>
    )
}

export default Modal;   