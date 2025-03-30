import React from "react";

const Icon: React.FC<{ src: string }> = ({ src }) => {
    return (
        <div className="icon">
            <img src={src} alt="avatar image" />
        </div>
    );
}

export default Icon;
