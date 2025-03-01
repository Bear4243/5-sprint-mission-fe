import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BulletinBoardList, BulletinBoard } from "@/pages/api/bulletinBoardApi";
import styles from "@/styles/bulletinBoardBest.module.css";

export const BulletinBoardBest = () => {
  const [boards, setBoards] = useState<BulletinBoard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("useEffect 시작");
    BulletinBoardList.topLike()
      .then((data) => {
        setBoards(data);
      })
      .catch((err: any) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {boards.map((board, idx) => (
        <div id={styles.content_box} key={idx}>
          <div>
            <Image
              src={"/assets/img_badge.svg"}
              alt={"베스트이미지"}
              width={102}
              height={30}
            ></Image>
          </div>
          <div>
            <div>{board.title}</div>
            <Image
              src={board.img || "/assets/default_img.svg"}
              alt={
                board.img === "default_img" ? "Default Image" : "상품 이미지"
              }
              width={72}
              height={72}
            />
          </div>

          <div id={styles.user}>
            <div>
              <div>{board.user.nickName}</div>
              <div>
                <Image
                  src={"/assets/ic_heart.svg"}
                  alt={"headerPandaImg"}
                  width={16}
                  height={16}
                ></Image>
                <div>{board.like}</div>
              </div>
            </div>
            <div>{board.updatedAt}</div>
          </div>
        </div>
      ))}
    </>
  );
};
