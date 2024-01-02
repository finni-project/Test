export type CheckBtns = {
    id: number;
    text: string;
    active: boolean;
}[]

export type Category = {
    id: number;
    emogi: string;
    name: string;
    active: boolean;
}[]

export type DailyList = {
    date: string;
    list: {
        id: number;
        emoji: string;
        name: string;
        type: string;
        amount: number;
    }[];
}

export type DailyItemList = Pick<DailyList, 'list'>

export type ProfileImagesData = {
    id: number,
    img_url: string,
    lock: boolean,
    pick: boolean
}[]