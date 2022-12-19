function RadioButtonGroup({ name, options, value, onChange }) {
    return (
        <div className="form-control font-sans ml-10 my-3">
            <label id="demo-row-radio-buttons-group-label" className="form-label">{name}</label>
            <div className="flex items-center justify-start gap-5 w-full">
                {options.map(option => (
                    <label key={option} className="inline-flex items-center">
                        <input
                            type="radio"
                            className="form-radio"
                            name={option}
                            value={option}
                            onChange={onChange}
                            checked={value === option}
                        />
                        <span className="ml-2 capitalize">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
export default RadioButtonGroup;
