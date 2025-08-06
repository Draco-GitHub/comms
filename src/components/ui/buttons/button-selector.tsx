import React, {CSSProperties, ReactNode, useState} from "react";
import Icon from "../Icon.tsx";


interface IconOption {
    id: string;
    icon: ReactNode;
    name: string;
}

interface IconSelectorProps {
    options: IconOption[];
    onSelectionChange?: (selectedId: string, selectedOption: IconOption) => void;
    className?: string;
    style?: CSSProperties;
}

const ButtonSelector: React.FC<IconSelectorProps> = ({options, onSelectionChange, className = "", style}) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleIconClick = (option: IconOption) => {
        const newSelectedId = selectedId === option.id ? null : option.id;
        setSelectedId(newSelectedId);

        if (onSelectionChange && newSelectedId) {
            onSelectionChange(newSelectedId, option);
        }
    };

    const containerStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#2c2c2c',
        borderRadius: '8px',
        padding: '4px',
        width: "fit-content",
        ...style
    };

    return (
        <div className={className} style={containerStyle}>
            {options.map((option) => {
                const isSelected = selectedId === option.id;

                const buttonStyle: CSSProperties = {
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    borderRadius: '6px',
                    padding: isSelected ? '8px 12px' : '8px',
                    backgroundColor: isSelected ? '#3b82f6' : 'transparent',
                    color: isSelected ? 'white' : '#374151',
                    boxShadow: isSelected ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                };

                const hoverStyle: CSSProperties = {
                    backgroundColor: isSelected ? '#3b82f6' : '#e5e7eb'
                };

                return (
                    <div key={option.id}>
                        <div
                            style={buttonStyle}
                            onClick={() => handleIconClick(option)}
                            onMouseEnter={(e) => {
                                if (!isSelected) {
                                    e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor!;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isSelected) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            <Icon
                                svg={option.icon}
                                style={{ width: '20px', height: '20px' }}
                            />
                            {isSelected && (
                                <span style={{
                                    marginLeft: '8px',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    whiteSpace: 'nowrap'
                                }}>
                  {option.name}
                </span>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ButtonSelector;