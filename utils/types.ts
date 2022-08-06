export interface DiscordUser {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    locale: string;
    mfa_enabled: boolean;
    premium_type: number;
    avatarURL: string;
    guilds: DiscordGuild[];
}

export interface DiscordGuild {
    id: string;
    name: string;
    icon: string;
    iconURL: string;
    owner: boolean;
    permissions: number;
    features: DiscordGuildFeatures[];
    botIn: boolean;
}

export type DiscordGuildFeatures = "ANIMATED_BANNER"
    | "ANIMATED_ICON"
    | "BANNER"
    | "COMMERCE"
    | "COMMUNITY"
    | "DISCOVERABLE"
    | "FEATURABLE"
    | "INVITE_SPLASH"
    | "MEMBER_VERIFICATION_GATE_ENABLED"
    | "MONETIZATION_ENABLED"
    | "MORE_STICKERS"
    | "NEWS"
    | "PARTNERED"
    | "PREVIEW_ENABLED"
    | "PRIVATE_THREADS"
    | "ROLE_ICONS"
    | "SEVEN_DAY_THREAD_ARCHIVE"
    | "THREE_DAY_THREAD_ARCHIVE"
    | "TICKETED_EVENTS_ENABLED"
    | "VANITY_URL"
    | "VERIFIED"
    | "VIP_REGIONS"
    | "WELCOME_SCREEN_ENABLED"

export interface DefaultProperties {
    user: DiscordUser | null;
}