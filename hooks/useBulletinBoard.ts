// hooks/useBulletinBoard.ts
import {
  useQuery,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { BulletinBoardList } from "@/core/apiService";
import type { BulletinBoard, BulletinBoardsResponse } from "@/core/apiService";

// 무한 스크롤 게시글 조회
export const useInfiniteBulletinBoards = (
  sort: "like" | "createdAt" = "createdAt",
  limit: number = 10
) => {
  return useInfiniteQuery<BulletinBoardsResponse>({
    queryKey: ["bulletinBoard", "list", sort, limit],
    queryFn: ({ pageParam }) =>
      BulletinBoardList.getAll({ sort, cursor: pageParam, limit }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
  });
};

// 인기 게시글 조회
export const useTopLikedBulletinBoards = () => {
  return useQuery({
    queryKey: ["bulletinBoard", "topLike"],
    queryFn: () => BulletinBoardList.topLike(),
  });
};

// 게시글 작성
export const useCreateBulletinBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      userId: string;
      boardData: { title: string; contents: string; like: number };
    }) => BulletinBoardList.upload(data.userId, data.boardData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bulletinBoard"] });
    },
  });
};

// 게시글 수정
export const useUpdateBulletinBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      boardId: string;
      boardData: { title?: string; contents?: string; like?: number };
    }) => BulletinBoardList.update(data.boardId, data.boardData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bulletinBoard"] });
    },
  });
};

// 게시글 삭제
export const useDeleteBulletinBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (boardId: string) => BulletinBoardList.del(boardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bulletinBoard"] });
    },
  });
};
