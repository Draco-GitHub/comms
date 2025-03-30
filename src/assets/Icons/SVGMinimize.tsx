import {SVGProps} from "./SVGProps.tsx";

const SVGMinimize = ({id, className, onClick}:SVGProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/>
        </svg>
    </div>
)
export default SVGMinimize;