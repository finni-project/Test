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

export type MonthlyList = {
    date: string;
    list: {
        id: number;
        emoji: string;
        name: string;
        type: string;
        amount: number;
    }[];
}[]