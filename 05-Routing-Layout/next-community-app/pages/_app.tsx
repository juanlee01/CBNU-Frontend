import MainLayout from "@/components/main-layout";
import MyPageLayout from "@/components/mypage-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  // 로그인, 신규가입 구분
  let layoutMode: string = "general";
  if (currentPath === "/login" || currentPath === "/regist") {
    layoutMode = "auth";
  } else if (currentPath.indexOf("/mypage") > -1) {
    layoutMode = "mypage";
  } else {
    layoutMode = "general";
  }
  // 로그인 신규가입이 아닌 경우
  const renderLayoutOnPath = () => {
    switch (layoutMode) {
      case "auth":
        return <Component {...pageProps} />;
      case "mypage":
        return (
          <MyPageLayout>
            <Component {...pageProps} />
          </MyPageLayout>
        );
      default:
        return (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        );
    }
  };
}
