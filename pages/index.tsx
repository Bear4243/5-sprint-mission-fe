import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "@/components/head";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main">
        {/* <!-- 상단 이미지 --> */}
        <nav id="nav">
          <div id="nav_contents">
            <div id="nav_top">
              <div id="nav_top_text_box">
                <p className="nav_top_text_box_p">일상의 모든 물건을</p>
                <p className="nav_top_text_box_p">거래해 보세요</p>
              </div>
              <Link href={"/item"} id="nav_top_text_btn">
                <div>구경하러 가기</div>
              </Link>
            </div>
            <img id="nav_bottom_img" src="/img/Img_home_top.png" alt="" />
          </div>
        </nav>
        {/* <!-- 중간 머시기 --> */}
        <section id="middle_part">
          {/* <!-- 1번째 섹션 --> */}
          <div className="middle_part_section">
            <div className="middle_part_section_box">
              <Image src={""} alt={""}></Image>
              <img id="section_1_img" src="/img/Img_home_01.png" alt="" />
              <div id="section_1_text">
                <p>Hot item</p>
                <p>
                  인기 상품을
                  <br />
                  확인해 보세요
                </p>
                <p>
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 2번째 섹션 --> */}
          <div className="middle_part_section">
            <div
              id="middle_part_section_box_reverse"
              className="middle_part_section_box"
            >
              <img id="section_2_img" src="/img/Img_home_02.png" alt="" />
              <div id="section_2_text">
                <p>Search</p>
                <p>
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </p>
                <p>
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 3번째 섹션 --> */}
          <div className="middle_part_section">
            <div className="middle_part_section_box">
              <img id="section_3_img" src="/img/Img_home_03.png" alt="" />
              <div id="section_3_text">
                <p>Register</p>
                <p>
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </p>
                <p>
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- 푸터 --> */}
      </div>
    </>
  );
}
