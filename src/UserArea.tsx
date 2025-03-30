import Icon from "./components/Icon.tsx";
import {SVGSettings} from "./assets/Icons";

const UserArea = () => {
    return (
        <div className="user-area">
            <div className="user-details">
                <Icon src=""/>
                <span style={{fontSize: "12px", fontWeight:"bold"}}>Username</span>
            </div>
            <SVGSettings/>
        </div>
    )
}

export default UserArea;