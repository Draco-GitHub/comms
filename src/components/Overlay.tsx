import { useGlobal } from "../globals.tsx";

const Overlay: React.FC = () => {
    const { overlay, setOverlay } = useGlobal();
    
    return (
        <>
            {overlay != null && (
                <div className="overlay" onClick={() => setOverlay(null)} >
                    <div className="overlay-container" onClick={(e) => e.stopPropagation()}>
                        {overlay}
                    </div>
                </div>
            )}
        </>
    );
}

export default Overlay;