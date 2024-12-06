export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm dark:text-orange-200 ` + className}>
            {value ? value : children}
        </label>
    );
}
