import { 
    AllowedMentionTypes,
    ApplicationCommandOptionType,
    ApplicationCommandType,
    ButtonStyles,
    ChannelType,
    ComponentTypes,
    EmbedTypes,
    InteractionCallbackType,
    InteractionType,
    Locales,
    MessageActivityTypes,
    MessageTypes,
    StickerType,
    TextInputStyle,
} from "./types.ts"

export interface Application{
    id: bigint;
    name: string;
    icon: string;
    description: string;
    rpc_origins?: string[];
    bot_public: boolean;
    bot_require_code_grant: boolean;
    terms_of_service_url?: string;
    privacy_policy_url?: string;
    owner?: User;
    verify_key: string;
    team: Team;
    guild_id?: bigint;
    primary_sku_id?: bigint;
    slug?: string;
    cover_image?: string;
    flags?: number;
    tags?: string[];
    install_params?: InstallParams;
    custom_install_url?: string;
}

export interface ApplicationCommand{
    id: bigint;
    type?: ApplicationCommandType;
    application_id: bigint;
    guild_id?: bigint;
    name: string;
    name_localizations?: Locales;
    description: string;
    description_localizations?: Locales;
    options?: ApplicationCommandInteractionDataOption[];
    default_member_permissions?: string;
    dm_permission?: boolean;
    default_permission?: boolean;
    version: bigint
}

export interface ApplicationCommandOption{
    type: ApplicationCommandOptionType;
    name: string;
    name_localizations?: Locales;
    description: string;
    description_localizations?: Locales
    required?: boolean;
    choices?: ApplicationCommandOptionChoice[];
    options?: ApplicationCommandOption[];
    channelTypes?: ChannelType[];
    minvalue?: number;
    maxvalue?: number;
    autocomlete?: boolean;
}

export interface ApplicationCommandData{
    name: string;
    type: ApplicationCommandType;
    description: string;
    option: ApplicationCommandOptionData[];
}

export interface ApplicationCommandOptionData{
    type: ApplicationCommandOptionType;
    name: string;
    description: string;
    autocomlete?: boolean;
    required?: boolean;
    choices?: ApplicationCommandOptionChoice[];
    channelTypes?: ChannelType[];
    minvalue?: number;
    maxvalue?: number;
}

export interface ApplicationCommandOptionChoice{
    name: string;
    name_localizations?: Locales;
    value: ApplicationCommandOptionType;
}


export interface ApplicationCommandInteractionDataOption{
    name: string;
    type: number;
    value?: string|number;
    options?: ApplicationCommandInteractionDataOption;
    focused?: boolean;
}

export interface Interaction{
    id: bigint;
    application_id: bigint;
    type: InteractionType;
    guild_id: bigint;
    channel_id?: bigint;
    member?: Member;
    user?: User;
    token: string;
    version: string;
    locale?: string;
    guild_locale?: string
}

export interface ApplicationCommandInteraction extends Interaction{
    member: Member;
    data: ApplicationCommand;
}

export interface MessageComponentInteraction extends Interaction{
    message: Message;
}

export interface InteractionData{
    id: bigint;
    name: string;
    type: number;
    resolved?: ResolvedData;
    options?: ApplicationCommandInteractionDataOption;
    guild_id?: bigint;
    custom_id?: bigint;
    component_type?: bigint;
    values?: SelectOptions;
    target_id?: bigint;
    components?: MessageComponent;
}

export interface ResolvedData{
    user?: User;
    member?: Member;
    roles?: Role;
    channel?: Channel;
    message?: Message;
    attachments?: Attachments
}

export interface MessageInteraction{
    id: bigint;
    type: InteractionType;
    name: string;
    user: User;
    member?: Member;
}

export interface InteractionResponse{
    type: InteractionCallbackType;
    data?: MessageInteractionCallback;
}

export interface MessageInteractionCallback {
    tts?: boolean;
    content?: string;
    embeds?: Embeds[];
    allowed_mentions?: AllowedMentions;
    flags?: number;
    components?: MessageComponent;
    attachments?: Attachments;
}

export interface Autocomplete{
    choices: ApplicationCommandOptionChoice;
}

export interface Modal{
    custom_id: string;
    title: string;
    components: MessageComponent[];
}

export interface MessageComponent{
    type: ComponentTypes;
}

export interface ActionRows extends MessageComponent{
    type: ComponentTypes;
    component: MessageComponent;
}

export interface Buttons extends MessageComponent{
    style: ButtonStyles;
    label?: string;
    emoji?: Emoji;
    custom_id?: string;
    url?: string;
    disabled?: boolean;
}

export interface SelectMenu extends MessageComponent{
    custom_id: string;
    options?: SelectOptions;
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;
}

export interface SelectOptions{
    label: string;
    value: string;
    description?: string;
    emoji?: Emoji;
    default?: boolean;
}

export interface TextInput extends MessageComponent{
    custom_id?: string;
    style: TextInputStyle;
    label: string;
    min_length: number;
    max_length?: number;
    required?: boolean;
    value?: string;
    placeholder?: string;
}

export interface Channel{
    id: bigint;
    type: ChannelType;
    guild_id: bigint;
    position?: number;
    permission_overwrites?: Overwrite;
    name?: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id?: string;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: User[];
    icon?: string;
    owner_id?: bigint;
    application_id?: bigint;
    parent_id?: bigint;
    last_pin_timestamp?: Date;
    rtc_region?: string;
    video_quality_mode?: number;
    message_count?: number;
    member_count?: number;
    thread_metadata?: ThreadMetadata;
    member?: ThreadMember;
    default_auto_archive_duration?: number;
    permissions?: string;
    flags?: number;
}

export interface ChannelMention{
    id: bigint;
    guild_id: bigint;
    type: ChannelType;
    name: string;
}

export interface Overwrite{
    id: bigint;
    type: number;
    allow: string;
    deny: string;
}

export interface ThreadMetadata{
    archived: boolean;
    auto_archive_duration: number;
    archive_timestamp: Date;
    locked: boolean;
    invitable?: boolean;
    create_timestamp?: Date;
}

export interface ThreadMember{
    id?: bigint;
    user_id?: bigint;
    join_timestamp: Date;
    flags: number
}

export interface Message{
    id: bigint;
    channel_id: bigint;
    guild_id?: bigint;
    author: User;
    member: Member;
    content: string;
    timestamp: Date;
    edited_timestamp: Date;
    tts: boolean;
    mention_everyone: boolean;
    mentions: (User|Member)[];
    mention_roles: Role[];
    mention_channels: ChannelMention[];
    attachments: Attachments[];
    embeds: Embeds[];
    reactions?: Reactions[];
    nonce?: string|number;
    pinned: boolean;
    webhook_id?: bigint;
    type: MessageTypes;
    activity?: MessageActivityTypes;
    application?: Application;
    application_id?: bigint;
    message_reference?: MessageReference;
    flags?: number;
    interaction?: MessageInteraction;
    thread?: Channel;
    components?: MessageComponent[];
    sticker_items?: StickerItem[];
    stickers?: Sticker[];
}

export interface MessageReference{
    message_id?: bigint;
    channel_id?: bigint;
    guild_id?: bigint;
    fail_if_not_exists?: boolean;
}

export interface StickerItem{
    id: bigint;
    name: string;
    format_type: number;
}

export interface Sticker{
    id: bigint;
    pack_id?: bigint;
    name: string;
    description: string;
    tags: string;
    asset?: string;
    type: StickerType;
    format_type: number;
    available?: boolean;
    guild_id?: bigint;
    user?: User;
    sort_value?: number;
}

export interface Reactions{
    count: number;
    me: boolean;
    emoji: Emoji;
}

export interface AllowedMentions{
    parse: AllowedMentionTypes[];
    roles: bigint[];
    users: bigint[];
    replied_user: boolean;
}

export interface Attachments{
    id: bigint;
    filename: string;
    description?: string;
    content_type?: string;
    size: number;
    url: number;
    proxy_url: number;
    height?: number;
    width?: number;
    ephemeral?: boolean
}

export interface Embeds{
    title?: string;
    type?: EmbedTypes;
    description?: string;
    url?: string;
    timestamp?: Date;
    color?: number;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedThumbnail;
    video?: EmbedVideo;
    provider?: EmbedProvider;
    author?: EmbedAuthor;
    fields?: EmbedFields;
}

export interface EmbedAuthor{
    name: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string
}

export interface EmbedFields{
    name: string;
    value: string;
    inline?: boolean;
}

export interface EmbedFooter{
    text: string;
    icon_url?: string;
    proxy_icon_url?: string
}

export interface EmbedImage{
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

export interface EmbedProvider{
    name?: string;
    url?: string;
}

export interface EmbedThumbnail{
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

export interface EmbedVideo{
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

export interface Member{
    user?: User;
    nick?: string;
    avatar?: string;
    roles: bigint[];
    joined_at: Date;
    premium_since?: Date;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: Date
}

export interface Emoji{
    id: bigint;
    name: string;
    roles?: Role[];
    user?: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}


export interface User{
    id: bigint;
    username: string;
    discriminator: string;
    avatar: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    banner?: string;
    accent_color?: number;
    locale?: Locales;
    verified?: boolean;
    email?: string;
    flags?: number;
    premium_type?: number;
    public_flags?: number;
}

export interface Role{
    id: bigint;
    name: string;
    color: number;
    hoist: boolean;
    icon?: string;
    unicode_emoji?: string;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: RoleTags;
}

export interface RoleTags{
    bot_id?: bigint;
    integration_id?: bigint;
    premium_subscriber?: null
}

export interface Team{
    icon: string;
    id: bigint;
    members: TeamMember[];
    name: string;
    owner_user_id: bigint;
}

export interface TeamMember{
    membership_state: number;
    permissions: string[];
    team_id: bigint;
    user: User;
}

export interface InstallParams{
    scopes: string[];
    permissions: string
}

export interface GlobalApplicationCommand{
    name: string;
    name_localizations?: Locales;
    description: string;
    description_localizations?: Locales;
    options?: ApplicationCommandOption[];
    default_member_permissions?: string;
    dm_permission?: boolean;
    default_permission?: boolean;
    type?: ApplicationCommandType;
}


