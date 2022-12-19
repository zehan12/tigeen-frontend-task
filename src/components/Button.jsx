const Button = ({ children, onClick, disabled }) => (
    <button
        onClick={onClick}
        className={`group relative inline-flex items-center overflow-hidden uppercase bg-[#1D74D1] px-4 py-2 text-white focus:outline-none focus:ring active:bg-[##1D74D1] mx-6 my-5 ${disabled ? "disabled cursor-not-allowed" : ""
            }`}
    >
        {children}
    </button>
);

export default Button;