// pages/items.tsx (또는 Items 컴포넌트 파일)
import styles from "@/styles/items.module.css";
import { ArticleSell } from "@/components/ArticleSell";
import Header from "@/components/Head";
import Footer from "@/components/Footer";

export default function Items() {
  return (
    <>
      <Header />
      <div className={styles.contentContainer}>
        <ArticleSell />
      </div>
      <Footer />
    </>
  );
}
