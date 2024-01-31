// reducer가 많아지면 action상수가 중복될 수 있으니
// 액션이름 앞에 파일 이름을 넣습니다.
export const ACTIVE = "ACTIVE_DEPOSIT";
export const INACTIVE = "INACTIVE_DEPOSIT";

export const activeDeposit = () => ({ type: ACTIVE });
export const inactiveDeposit = () => ({ type: INACTIVE });

const initalState = {
    depositActive: false
};

export const depositActiver = (state = initalState, action: any) => {
    switch (action.type) {
        case ACTIVE:
            return {
                ...state,
                depositActive : true
            };
        
        case INACTIVE:
            return {
                ...state,
                depositActive : false
            }
        // default를 쓰지 않으면 맨처음 state에 count값이 undefined가 나옵니다 꼭! default문을 넣으세요
        default:
            return state;
    }
};
