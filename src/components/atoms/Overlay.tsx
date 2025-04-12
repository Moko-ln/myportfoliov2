
type overlayProps = {
    className:string
}

export const Overlay = ({ className}:overlayProps) => {

    return (
        <div className={`${className} absolute h-full from-black/50 to-transparent w-1/2`}></div>
    )
}