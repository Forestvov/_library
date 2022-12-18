import React, {useState, useEffect, useRef} from 'react';
import s from './TextToggle.module.scss'

const TextToggle = ({height, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggleDisable, setToggleDisable] = useState(false);
    const [fullHeight, setFullHeight] = useState(0);
    
    const textContent = useRef(null);
    const textHidden = useRef(null);

    useEffect(() => {
        const isToggleDisable = textHidden.current.offsetHeight <= height;
        setFullHeight(textHidden.current.offsetHeight);
        setToggleDisable(!height ? true : isToggleDisable);
    }, []);

    const startToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={s.textHidden}>
            <div className={s.textHidden__content} ref={textContent} style={{ height: toggleDisable ? null : (isOpen ? fullHeight : height)}}>
                <div ref={textHidden}>
                    {children}
                </div>
            </div>
            {!toggleDisable && <div className={s.textHidden__toggleButton}>
                <button onClick={() => startToggle()}>{isOpen ? 'Скрыть' : 'Раскрыть'}</button>
            </div>}
        </div>
    )
}

export default TextToggle;