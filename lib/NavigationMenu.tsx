/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { config } from "../pages/_app";
import { Link } from "./Link";

export interface NavigationItem {
    label: string;
    href: string;
}
export interface NavigationProperties {
    items: NavigationItem[];
    className?: string;
    icon: string;
    title: string;
}

export function NavigationMenu(props: NavigationProperties) {
    return (
        <nav className="navigation">
            <div className="pt-5 pl-5">
                <img
                    src={props.icon}
                    alt="icon"
                    width="50px"
                    height="50px"
                    className="rounded-full inline-block mr-4"
                />
                <div className="text-3xl font-bold inline-block">
                    {props.title}
                </div>
                <p className="text-light inline-block pl-5">
                    {config.description}
                </p>
                <Link href="/api/oauth" className="float-right pr-5 text-lg text-blurple" hoverUnderline underline={false}>
                    Login with <img src="/Discord.png" alt="" width="20px" height="20px" className="inline-block" />
                </Link>
            </div>
            <ul className="navigation__list">
                {props.items.map((item, index) => (
                    <li className="navigation__item" key={index}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}