import React, { useEffect, useState } from "react";
import { BulletinBoard, getBulletinBoards } from "@/pages/api/bulletinBoardApi";
import styles from "@/styles/bulletinBoardList.module.css";

const BulletinBoardList = () => {
  const [boards, setBoards] = useState<BulletinBoard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBulletinBoards()
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
    <div>
      {boards.map((board) => (
        <div key={board.id}>
          <div>{board.title}</div>
          <div id={styles.user}>
            <div>{board.user.profileImg}</div>
            <div>{board.user.nickName}</div>
            <div>{board.createdAt}</div>
          </div>
          <div>Likes: {board.like}</div>
        </div>
      ))}
    </div>
  );
};

export default BulletinBoardList;
