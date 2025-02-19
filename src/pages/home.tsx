import Logo from "../assets/logo.png";

export const HomePage = () => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-zinc-800">
            <Logo className="w-1/2 h-1/2" />
            <h1>Home</h1>
        </div>
    )
}