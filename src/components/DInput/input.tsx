import React from 'react';

type DInputProps = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    onEnterUp?: () => void;
    placeholder?: string;
    type?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    error?: string;
};

const DInput: React.FC<DInputProps> = ({
    label,
    value,
    onChange,
    onEnterUp,
    placeholder = '',
    type = 'text',
    prefix,
    suffix,
    error
}) => {
    return (
        <div className="mb-4">
            {label && <label className="block mb-1 font-medium">{label}</label>}
            <div className={`flex items-center border rounded px-2 py-1 ${error ? 'border-red-500' : 'border-gray-300'}`}>
                {prefix && <div className="mr-2 text-gray-500">{prefix}</div>}
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    onKeyUp={(e)=>{
                        if (e.key === 'Enter') {
                            // 回車鍵按下時觸發
                            onEnterUp && onEnterUp()
                        }
                    }}
                    className="flex-1 outline-none bg-transparent"
                />
                {suffix && <div className="ml-2 text-gray-500">{suffix}</div>}
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default DInput;
