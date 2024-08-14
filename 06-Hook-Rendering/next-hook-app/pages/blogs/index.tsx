// 컴포넌트 내에서의 데이터 상태관리를 위한 useState 훅 참조하기
// 현재 컴포넌트의 생애주기 (lifecycle)를 관리흫 위한 useEffect 훅 참조하기
import { useState, useEffect, use } from "react";

// useEffect 훅을 이용할 때는 반드시
// 프로젝트의 next.config.mjs 파일내 reactStingctMode를 false로 설정해야 함
// 개발시에만 사용되고 프로덕션 빌드시에는 사용되지 않음

import Link from "next/link";

// 단일 블로그 데이터 타입 정의
interface BlogItem {
    id: number;
    title: string;
    view_cnt: number;
    createdAt: string;
}

// 게시글 원본 데이터 목록
const originalBlogs: BlogItem[] = [
    {
        id: 1,
        title: "블로그 타이틀1",
        view_cnt: 0,
        createdAt: "2021-09-01",
    },
    {
        id: 2,
        title: "블로그 타이틀2",
        view_cnt: 0,
        createdAt: "2021-09-02",
    },
    {
        id: 3,
        title: "블로그 타이틀3",
        view_cnt: 0,
        createdAt: "2021-09-03",
    },
    {
        id: 4,
        title: "블로그 타이틀4",
        view_cnt: 0,
        createdAt: "2021-09-04",
    },
];

const BlogList = () => {
    // 검색어 키워드 상태 데이터 값 정의 및 값 초기화
    const [searchWord, setSearchWord] = useState<string>("");
    // 검색 결과 블로그 목록 상태 데이터 값 정의 초기화
    const [blogs, setBlogs] = useState<BlogItem[]>([]);

    // 현재 컴포넌트 최초로 화면에 렌더링 되는 시점(mount)에 실행되는 useEffect 훅 정의
    // useEffect('최조 마운팅 될 때 실행할 콜백함수', 생애주기시점정의 [] 빈배열의 경우 최초 마운팅되는 시점을 말함)
    useEffect(() => {
        console.log(" 최초 블로깅 조회 화면에 실행됩니다.");

        // 최초 핻ㅇ 컴포ㅓㄴ트가 마운팅 될 떄 백엔드 REST API를 호출하여 블로그 목록을 조회한다
        // 조회해온 블로그 목록 데이터를 setBlogs 함수를 이용하여 상태 데이터로 저장한다.
        setBlogs(originalBlogs);

        // 해당 컴포넌트가 사라지는 시점에 (unmount)실행되는 콜백함수 정의
        return () => {
            console.log("블로그 목록 페이지가 사라지기 직전에 실행됩니다.");
        };
    }, []);

    // 화면내 변화가 발생할 때마다 실행되는 useEffect 훅 정의
    useEffect(() => {
        console.log("화면내 변화가 발생할 때마다 실행됩니다.");
    });

    // 특정 상태 데이터의 변경을 감지하여 프로그래밍을 구현할 때 사용되는 useEffect 훅 정의
    // userEffect('실행할 콜백함수', [감지할 상태데이터])
    // 감지할 상태데이터값이 변경될 때마다 콜백함수가 실행된다.
    useEffect(() => {
        console.log("searchWord 상태 데이터가 변경될 때 실행됩니다.");
        blogSearch();
    }, [searchWord]);

    // 검색어 기반 블로그 검색처리 함수 정의
    // 검색버튼 클릭시 호출
    const blogSearch = () => {
        let searchResult: BlogItem[] = [];

        if (searchWord.length > 0) {
            searchResult = originalBlogs.filter((item) =>
                item.title.includes(searchWord)
            );
            setBlogs(searchResult);
        } else {
            setBlogs(originalBlogs);
        }
    };

    return (
        <div>
            <h1>블로그 조회하기</h1>

            <div className="m-4 flex">
                <input
                    type="text"
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                    placeholder="검색어를 입력해주세요."
                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
                <button
                    type="button"
                    onClick={blogSearch}
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    검색
                </button>
                <Link href="/"> 메인으로 돌아가기</Link>
            </div>
            <div className="m-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>조회수</th>
                            <th>등록일지</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.view_cnt}</td>
                                <td>{item.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlogList;
