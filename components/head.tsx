import styles from "@/styles/header.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <Head>
      <div id={styles.header}>
        <div id={styles.header_left}>
          <Link href={"/"}>
            <Image
              src={"/assets/header-panda.svg"}
              alt={"headerPandaImg"}
              width={153}
              height={51}
            ></Image>
          </Link>
          <Link href={"/"}>
            <p>자유게시판</p>
          </Link>
          <Link href={"/"}>
            <p>중고마켓</p>
          </Link>
        </div>
        <div id={styles.header_right}>
          <Link href={"/"}>
            <p>로그인</p>
          </Link>
        </div>
      </div>
    </Head>
  );
}
