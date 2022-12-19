function Checkbox({ name, value, onChange }) {
    return (
        <label className="inline-flex items-center space-x-4 cursor-pointer my-1 font-sans">
            <span className="relative">
                <input
                    onChange={onChange}
                    checked={value}
                    type="checkbox"
                    className="hidden peer"
                />
                <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
            </span>
            <span className="select-none font-normal leading-7 text-semi">{name}</span>
        </label>
    );
}

export default Checkbox;