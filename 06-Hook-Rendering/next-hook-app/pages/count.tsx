// useState 기본 사용법 알아보기

import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState<number>(0);

    const plusCount = () => {
        setCount(count + 1);
    };
    const minusCount = () => {
        setCount(count - 1);
    };
    const resetCount = () => {
        setCount(0);
    };

    return (
        <div>
            <div className="text-center">
                <h1>{count}</h1>
            </div>
            <div className="mt-6 text-center">
                <button
                    onClick={plusCount}
                    className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    증가
                </button>
                <button
                    onClick={minusCount}
                    className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    감소
                </button>
                <button
                    onClick={resetCount}
                    className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    초기화
                </button>
            </div>
        </div>
    );
};

export default Count;
