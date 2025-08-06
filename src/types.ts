export class Channel {
    constructor(
        public display_name: string,
        public avatar_url: string,
        public platform: platform,
        public voice: boolean,
    ) {}
}

export class Contact extends Channel {
    constructor(
        public display_name: string,
        public avatar_url: string,
        public platform: platform,
        public status: status,

        ) {
        super(display_name, avatar_url, platform, true);
    }
}

export class Group extends Channel {
    constructor(
        public display_name: string,
        public avatar_url: string,
        public platform: platform,
        public members: Contact[]
    ) {
        super(display_name,avatar_url,platform, true);
    }
}

export class Server {
    constructor(
        public display_name: string,
        public avatar_url: string,
        public channels: Channel[]
    ) {}
}

export type platform = 'discord' | 'whatsapp' | 'messenger' | 'telegram' | 'signal';
export type status = 'online' | 'offline' | 'away' | 'busy';
