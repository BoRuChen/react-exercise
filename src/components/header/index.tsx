import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-gray-100 w-full h-10 flex items-center shadow-md px-5">
            {/* 左 */}
            <div className="flex justify-start">1</div>
            {/* 中間 */}
            <div className="flex justify-center flex-grow"></div>
            {/* 右 */}
            <div className="sm:space-x-2 justify-end group relative inline-block">
                <button className="text-gray-700 font-semibold py-3 px-4 rounded inline-flex items-center">
                    Game
                </button>
                <ul className="absolute hidden text-gray-700 group-hover:block bg-gray-100 w-full rounded-md shadow-md p-1">
                    <NavLink to="/guess" className="flex flex-col items-center hover:bg-gray-500 rounded-md">
                        1A2B
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}