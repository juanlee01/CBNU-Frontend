import { useReducer } from "react";
import { ActionType, CountActionType } from "@/interface/common";
import { countReducer } from "@/utils/reducers";

// 리듀서 함수 정의
// 리듀서(관리하는 상태값, 로직처리타입)
// function sampleReducer(state: number, action: string) {
//     switch (action) {
//         case "plus":
//             return state + 1;
//         case "minus":
//             return state - 1;
//         case "reset":
//             return 0;
//         default:
//             return state;
//     }
// }

const ReducerCount = () => {
    // useReducer 훅을 이용한 상태관리
    // useReducer(리듀서함수-재사용/통합 로직처리 함수, 초기데이터값)
    // useReducer()함ㅅ는 관리하는 상태값과 해당 리듀서 함수를 호출하는 dispatch 함수를 반환한다.
    // dispatch 함수는 이벤트 발생시 해당 이벤트를 처리해주는 함수
    // dispatch 함수명은 임의로 지정할 수 있음.
    // UI이벤트 발생 -> dispatch 함수 호출 -> 리듀서 함수 호출 -> 상태값 변경
    const [count, dispatchCount] = useReducer(countReducer, 100);
    return (
        <div>
            <div className="text-center mt-4">
                <h1 className="text-lg">{count}</h1>
            </div>
            <div className="mt-6 text-center">
                <button
                    onClick={() =>
                        dispatchCount({ type: CountActionType.PLUS })
                    }
                    className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    증가
                </button>
                <button
                    onClick={() =>
                        dispatchCount({ type: CountActionType.MINUS })
                    }
                    className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    감소
                </button>
                <button
                    onClick={() =>
                        dispatchCount({ type: CountActionType.RESET })
                    }
                    className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    초기화
                </button>
            </div>
        </div>
    );
};

export default ReducerCount;
