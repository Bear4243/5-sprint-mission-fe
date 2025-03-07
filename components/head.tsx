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
            <div id={styles.header_img}>
              <Image
                src={"/assets/header-panda.svg"}
                alt={"headerPandaImg"}
                width={153}
                height={51}
              ></Image>
            </div>
          </Link>
          <Link href={"/bulletin-board"}>
            <p className={styles.header_text}>자유게시판</p>
          </Link>
          <Link href={"/"}>
            <p className={styles.header_text}>중고마켓</p>
          </Link>
        </div>
        <div id={styles.header_right}>
          <Link href={"/login"}>
            <p>로그인</p>
          </Link>
        </div>
      </div>
    </Head>
  );
}
