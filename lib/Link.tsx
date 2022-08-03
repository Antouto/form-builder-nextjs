import { className } from "./utils";

export function Link({ href, children, openNewTab, className: CustomClassName, underline, hoverUnderline }: {
    href: string;
    openNewTab?: boolean;
    children: React.ReactNode;
    className?: string;
    underline?: boolean;
    hoverUnderline?: boolean;
}) {
    if (underline == null) underline = false;
    if (hoverUnderline == null) hoverUnderline = true;
    const target = openNewTab ? '_blank' : undefined;
    return (
        <a href={href} target={target} className={className(`lib_link ${underline ? "underline" : ""} ${hoverUnderline ? "hover:underline" : ""}`, CustomClassName)}>
            {children}
        </a>
    );
}