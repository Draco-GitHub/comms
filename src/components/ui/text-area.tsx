import React, {useCallback, useEffect, useRef, useState} from "react";

interface TextAreaProps {
    onSubmit: (text: string) => void;
    placeholder?: string;
    maxHeight?: number;
    showCharCount?: boolean;
    maxLength?: number;
    disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = (
    {onSubmit, placeholder = "Enter your text here...", maxHeight = 400, showCharCount = false, maxLength, disabled = false}
) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState("");

    const adjustHeight = useCallback(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            const scrollHeight = textarea.scrollHeight;
            const newHeight = Math.min(scrollHeight, maxHeight);

            textarea.style.height = `${newHeight}px`;
            textarea.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';
        }
    }, [maxHeight]);

    useEffect(() => {
        adjustHeight();
    }, [text, adjustHeight]);

    useEffect(() => {
        adjustHeight();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        if (!maxLength || newValue.length <= maxLength) {
            setText(newValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (text.trim()) {
                onSubmit(text);
                setText("");
            }
            return;
        }

        if (maxLength && text.length >= maxLength) {
            const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab', 'Enter'];
            if (!allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
            }
        }
    };

    return (
        <div className="text-area-container">
            <textarea
                ref={textareaRef}
                value={text}
                rows={1}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                disabled={disabled}
                className="length-textarea scroll-area"
                style={{
                    maxHeight: `${maxHeight}px`,
                }}
            />
            {showCharCount && (
                <div className="char-count">
                    {text.length}{maxLength && `/${maxLength}`}
                </div>
            )}
        </div>
    );
};

export default TextArea;