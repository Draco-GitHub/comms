import Icon from "./Icon.tsx";
import {SVGSettings} from "../assets/Icons";

import "../styles/userarea.css"

const UserArea = () => {
    return (
        <div className="user-area">
            <div className="user-area-container">
                <div className="user-details">
                    <Icon src=""/>
                    <span style={{fontSize: "12px", fontWeight:"bold"}}>Username</span>
                </div>
                <SVGSettings/>
            </div>
        </div>
    )
}

export default UserArea;