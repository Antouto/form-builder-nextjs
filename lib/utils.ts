export function className(defaultClass: string, className: string | undefined): string {
    return `${defaultClass} ${className}`;
}