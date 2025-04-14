export class User {
    constructor(
        public id: string,
        public username: string,
        public display_name: string,
        public global_name: string,
        public avatar: string,
        public bot: boolean
    ) {}
}

export class Channel {
    constructor(
        public id: string,
        public display_name: string,
        public type: number
    ) {}
}

export class FriendChannel extends Channel {
    constructor(
        id: string,
        display_name: string,
        type: number,
        public friend: User
    ) {
        super(id, display_name, type);
    }
}

export class GroupChannel extends Channel {
    constructor(
        id: string,
        display_name: string,
        type: number,
        public users: User[]
    ) {
        super(id, display_name, type);
    }
}

export class Category {
    constructor(
        public id: string,
        public name: string,
        public channels: ServerChannel[],
    ) {}
}

export class ServerChannel extends Channel {
    constructor(
        id: string,
        display_name: string,
        type: number,
    ) {
        super(id, display_name, type);
    }
}

export class Server {
    constructor(
        public id: string,
        public name: string,
        public channel_list: (ServerChannel | Category)[]
    ) {}
}

