export interface IEvent {
    eventId: number;
    name: string;
    dateStart: Date;
    dateEnd?: Date;
    description: string;
    location?: {
        name: string;
        address: string;
        latitude: number;
        longitude: number;
    };
    audience?: string;
    prices?: IPrice[];
    additional?: string;
    links?: ILink[];
    images?: IImage[];
    contacts?: IContact[];
}

export interface IPrice {
    description: string;
    amount: number;
}

export interface ILink {
    text: string;
    url: string;
}
export interface IImage {
    src: string;
    type: string;
}

export interface IContact {
    name: string;
        type: string;
        info: string;
}
