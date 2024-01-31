// reducer가 많아지면 action상수가 중복될 수 있으니
// 액션이름 앞에 파일 이름을 넣습니다.
export const CYCLE = "GET_SAVING_CYCLE";
export const AMOUNT = "GET_SAVING_AMOUNT";
export const GOAL = "GET_SAVING_GOAL";
export const TOTAL = "GET_SAVING_TOTAL";

export const getSavingCycle = (info: number) => ({ type: CYCLE, payload: info });
export const getSavingAmount = (info: number) => ({ type: AMOUNT, payload: info });
export const getSavingGoal = (info: {emogi: string, text: string}) => ({ type: GOAL, payload: info });
export const getSavingTotal = (info: number) => ({ type: TOTAL, payload: info });

const initalState = {
    cycle: 0,
    amount: 0,
    goalEmogi: "",
    goalText: "",
    total: 0,
};

export const saver = (state = initalState, action: any) => {
    switch (action.type) {
        case CYCLE:
            return {
                ...state,
                cycle: action.payload
            };
        case AMOUNT:
            return {
                ...state,
                amount: action.payload
            };
        case GOAL:
            return {
                ...state,
                goalEmogi: action.payload.emogi,
                goalText: action.payload.text
            };
        case TOTAL:
            return {
                ...state,
                total: action.payload
            };
        // default를 쓰지 않으면 맨처음 state에 count값이 undefined가 나옵니다 꼭! default문을 넣으세요
        default:
            return state;
    }
};
