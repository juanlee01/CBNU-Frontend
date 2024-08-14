import Child1 from "@/component/child1";
import Child2 from "@/component/child2";
import Child31 from "@/component/child3-1";
import Child32 from "@/component/child3-2";
import Child4 from "@/component/child4";
import Child5 from "@/component/child5";

//전역 메시지 데이터 출력하기
// useContext 훅은 전역 컨텍스트 영역의 데이터를 추출하기 위한 훅이다.
import { useContext } from "react";

// app.tsx 파일에서 생성한 전역 컨텍스트 참조하기
// _app.tsx 내에서 제공하는 AppContext를 참조하여 전역 상태 데이터를 사용한다.
import { AppContext } from "@/pages/_app";

const Complex = () => {
    const { msg, setMsg } = useContext(AppContext);

    return (
        <div>
            <h1 className="bg-blue-500 h-[200px]">Complex Component</h1>
            <Child1>
                <Child2>
                    <Child31>
                        <Child4 />
                    </Child31>
                    <Child32>
                        <Child5 />
                    </Child32>
                </Child2>
            </Child1>
        </div>
    );
};

export default Complex;
