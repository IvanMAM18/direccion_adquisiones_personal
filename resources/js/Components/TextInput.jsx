import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-white dark:border-white bg-white dark:bg-white dark:text-gray-950 dark:focus:bg-white focus:text-black dark:focus:text-black focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 dark:focus:ring-orange-400 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
