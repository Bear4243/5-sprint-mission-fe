import axios, { AxiosInstance, AxiosResponse } from "axios";

const apiUrl: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export interface User {
  id: string;
  nickName: string;
  profileImg: string;
}

export interface Comment {
  id: string;
  contents: string;
}

export interface BulletinBoard {
  id: string;
  title: string;
  contents: string;
  img: string;
  createdAt: string;
  like: number;
  comment?: Comment[];
  user: User;
}

/**
 * 게시글 목록을 가져옵니다.
 * @param sort - 정렬 기준 ("like" 또는 기본(createdAt desc))
 */
export const getBulletinBoards = async (
  sort: "like" | "createdAt" = "createdAt"
): Promise<BulletinBoard[]> => {
  const query = sort === "like" ? `?sort=like` : "";
  try {
    const response: AxiosResponse<BulletinBoard[]> = await apiUrl.get(
      `/api/bulletin-board${query}`
    );
    return response.data;
  } catch (error) {
    throw new Error("게시글 목록을 가져오는데 실패했습니다.");
  }
};

/**
 * 게시글을 등록합니다.
 * @param userId - 게시글 작성자의 ID
 * @param boardData - 게시글 데이터 (예: title, contents 등)
 */
export const uploadBulletinBoard = async (
  userId: string,
  boardData: { title: string; contents: string; [key: string]: any }
): Promise<BulletinBoard> => {
  try {
    const response: AxiosResponse<BulletinBoard> = await apiUrl.post(
      `/api/bulletin-board?id=${userId}`,
      boardData
    );
    return response.data;
  } catch (error) {
    throw new Error("게시글 등록에 실패했습니다.");
  }
};

/**
 * 게시글을 수정합니다.
 * @param boardId - 수정할 게시글의 ID
 * @param boardData - 수정할 데이터 (예: title, contents)
 */
export const updateBulletinBoard = async (
  boardId: string,
  boardData: { title: string; contents: string }
): Promise<BulletinBoard> => {
  try {
    const response: AxiosResponse<BulletinBoard> = await apiUrl.put(
      `/api/bulletin-board/${boardId}`,
      boardData
    );
    return response.data;
  } catch (error) {
    throw new Error("게시글 수정에 실패했습니다.");
  }
};

/**
 * 게시글을 삭제합니다.
 * @param boardId - 삭제할 게시글의 ID
 */
export const deleteBulletinBoard = async (boardId: string): Promise<void> => {
  try {
    await apiUrl.delete(`/api/bulletin-board/${boardId}`);
  } catch (error) {
    throw new Error("게시글 삭제에 실패했습니다.");
  }
};
