const  Step = ({ currentStep, index, children, icon }) => (
    <li className="flex items-center p-2">
        <div
            className={`rounded-full p-2 ${currentStep === index ? "bg-[#127ff3]" : "bg-[#A0A0A0]"
                }`}
        >
            {icon}
        </div>
        {children}
    </li>
);

export default Step;