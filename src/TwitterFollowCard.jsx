import { useState } from "react";
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ userName, name, initialIsFollowing }) {

    const [isFollowing, setFollowing] = useState(initialIsFollowing);
    const [isHovered, setHovered] = useState(false);

    const text = isFollowing ? (isHovered ? 'Dejar de seguir' : 'Siguiendo') : 'Seguir';

    const handleClick = () => {
        setFollowing(!isFollowing);
    }

    const buttonStyles = isFollowing
        ? 'hover:bg-red-500 hover:bg-opacity-40 hover:text-red-500 text-white bg-transparent w-36 '
        : 'hover:bg-gray-300 w-20';




    return (
        <article className="flex text-white items-center text-sm justify-between">
            <header className="flex items-center gap-1">
                <img src={`https://unavatar.io/${userName}`} alt="Imagen" className="size-12 rounded-[1000px] object-cover" />
                <div className="flex flex-col" >
                    <strong>{name}</strong>
                    <span className="opacity-60">{`@${userName}`}</span>
                </div>
            </header>
            <aside>
                <button className={`ml-4 rounded-[999px] py-[6px] px-4 font-bold cursor-pointer transition-colors duration-300 ease-out text-black  w bg-white border-solid border-[1px] ${buttonStyles}`} onClick={handleClick} onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>{text} </button>
            </aside>
        </article>
    )
}