export default function Filter() {
    return (
        <>
            <div>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <div className="flex justify-between items-center pt-3 pb-3">
                    <h2 className="text-1xl font-bold pl-4">Filters</h2>
                    <h2 className="text-1xl pr-4">Reset Filter</h2>
                </div>
                <div className="flex gap-7">
                    <select className="select select-accent w-full max-w-xs border-gray-400">
                        <option disabled selected>Dark mode or light mode?</option>
                        <option>Auto</option>
                        <option>Dark mode</option>
                        <option>Light mode</option>
                    </select>
                    <select className="select select-accent w-full max-w-xs border-gray-400">
                        <option disabled selected>Dark mode or light mode?</option>
                        <option>Auto</option>
                        <option>Dark mode</option>
                        <option>Light mode</option>
                    </select>   
                </div>
            </div>
        </>
    )
}