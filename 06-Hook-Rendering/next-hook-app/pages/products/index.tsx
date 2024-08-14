import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { CategoryType } from "@/interface/product";
import { ProductType } from "@/interface/product";
import Link from "next/link";

const originalCategoriesData: CategoryType[] = [
    {
        category_id: 1,
        category: "Phone",
        sort: 1,
    },
    {
        category_id: 2,
        category: "Labtop",
        sort: 2,
    },
    {
        category_id: 3,
        category: "PC",
        sort: 3,
    },
];
const originalProductsData: ProductType[] = [
    {
        product_id: 1,
        category_id: 1,
        product_name: "아이폰13",
        manufacturer: "애플",
        price: 1000000,
        stock: 100,
        image: "/images/iphone13.jpg",
    },
    {
        product_id: 2,
        category_id: 1,
        product_name: "갤럭시S21",
        manufacturer: "삼성",
        price: 900000,
        stock: 200,
        image: "/images/galaxys21.jpg",
    },
    {
        product_id: 3,
        category_id: 2,
        product_name: "맥북프로",
        manufacturer: "애플",
        price: 2000000,
        stock: 50,
        image: "/images/macbookpro.jpg",
    },
    {
        product_id: 4,
        category_id: 3,
        product_name: "아이맥",
        manufacturer: "애플",
        price: 1500000,
        stock: 70,
        image: "/images/imac.jpg",
    },
];

const Product = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>({
        category_id: 0,
        category: "전체",
        sort: 0,
    });
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        console.log("최초 조회 화면에 실행  ");
        setCategories(originalCategoriesData);
        setProducts(originalProductsData);

        return console.log("종료");
    }, []);
    useEffect(() => {
        console.log("카테고리 변경시 실행");
        const searchResult = originalProductsData.filter(
            (p) => p.category_id === selectedCategory.category_id
        );
        if (selectedCategory.category_id > 0) {
            setProducts(searchResult);
        } else {
            setProducts(originalProductsData);
        }
    }, [selectedCategory]);

    const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = categories.find(
            (c) => c.category_id === Number(e.target.value)
        ) as CategoryType;

        setSelectedCategory(category);
    };

    return (
        <div>
            <h1>블로그 조회하기</h1>

            <div className="m-4 flex">
                <div className="sm:col-span-3">
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Category
                    </label>
                    <div className="mt-2">
                        <select
                            id="category"
                            name="category"
                            autoComplete="category-name"
                            onChange={changeCategory}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option value={0}>All</option>
                            <option value={1}>Phone</option>
                            <option value={2}>Labtop</option>
                            <option value={3}>PC</option>
                        </select>
                    </div>
                </div>
                <Link href="/"> 메인으로 돌아가기</Link>
            </div>
            <div className="m-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>제품번호</th>
                            <th>제품명</th>
                            <th>제조사</th>
                            <th>가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.product_name}</td>
                                <td>{item.manufacturer}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Product;
