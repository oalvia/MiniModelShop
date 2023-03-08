export interface WishlistItem {
    id: string;
    description: string;
    type: Type;
    scale: Scale;
}

  export type Scale = '1:200' | '1:144'  | '1:100' | '1:72' | '1:48'| '1:32';

  export type Type = 'Base Kit' |'Detailing Set' |'Aftermarket Decals' |'Multimedia Kit';
