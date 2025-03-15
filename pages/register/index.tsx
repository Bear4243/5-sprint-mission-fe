import { useState } from "react";
import { useRouter } from "next/router";
import { ItemsList } from "@/core/itemsApiService";
import { useInputValidation } from "@/hooks/useInputValidation";
import {
  validateName,
  validateDescription,
  validatePrice,
  validateTags,
} from "@/hooks/useInputValidation";
import styles from "@/styles/register.module.css";

interface ProductData {
  name: string;
  description: string;
  price: string;
  tags: string;
}

export function Register() {
  const router = useRouter();
  const [apiData, setApiData] = useState<any[]>([]);
  const [postSuccess, setPostSuccess] = useState(false);

  // 커스텀 훅 사용
  const nameInput = useInputValidation<string>("", validateName);
  const descriptionInput = useInputValidation<string>("", validateDescription);
  const priceInput = useInputValidation<string>("", validatePrice);
  const tagsInput = useInputValidation<string>("", validateTags);

  const handleSubmit = async () => {
    if (
      nameInput.error ||
      descriptionInput.error ||
      priceInput.error ||
      tagsInput.error
    ) {
      alert("입력값을 확인해주세요.");
      return;
    }

    try {
      await resultPost();
      router.push("/detail");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 예시용 productData (현재 사용되지 않음)
  const productData: ProductData = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    tags: tagsInput.value,
  };

  const resultPost = async () => {
    try {
      const response = await ItemsList.ProductList();
      setPostSuccess(true);
      setApiData(response.data);
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.registration}>
        <div>상품 등록하기</div>
        <button className={styles.btn} onClick={handleSubmit}>
          등록
        </button>
      </div>

      <div className={styles.name}>
        <div className={styles.title}>상품명</div>
        <div className={`${styles["name-input-box"]} ${styles.box}`}>
          <input
            className={`${styles["name-input"]} ${styles.input}`}
            type="text"
            value={nameInput.value}
            onChange={nameInput.handleChange}
            placeholder="상품명을 입력해주세요"
          />
          {nameInput.error && (
            <p className={styles["error-message"]}>{nameInput.error}</p>
          )}
        </div>
      </div>

      {/* 다른 입력 필드들도 동일한 방식으로 추가 */}
    </div>
  );
}
