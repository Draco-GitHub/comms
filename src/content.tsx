import { useGlobal } from "./globals";


const Content = () => {
    const { content } = useGlobal();

    return (
        <div className="content">
            {content}
        </div>
    )
}

export default Content;