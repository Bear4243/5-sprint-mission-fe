// components/SignupForm.tsx
import { useState } from "react";
import {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
  checkFormValidity,
} from "@/utils/formValidation";
import styles from "./SignupForm.module.css";
import { useTogglePassword } from "@/hooks/useTogglePassword";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const { showPassword, toggle: togglePassword } = useTogglePassword();

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleValidation = (field: keyof typeof formData) => {
    let result;
    switch (field) {
      case "email":
        result = validateEmail(formData.email);
        break;
      case "password":
        result = validatePassword(formData.password);
        break;
      case "confirmPassword":
        result = validatePasswordMatch(
          formData.password,
          formData.confirmPassword
        );
        break;
    }
    setFormErrors((prev) => ({ ...prev, [field]: result.errorMessage }));
    return result.isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validations = {
      email: handleValidation("email"),
      password: handleValidation("password"),
      confirmPassword: handleValidation("confirmPassword"),
    };

    if (checkFormValidity(validations)) {
      // 회원가입 처리 로직
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      {/* 각 입력 필드 구현 */}
      <div className={styles.form_box}>
        <p className={styles.explain}>비밀번호 확인</p>
        <div className={styles.input_div}>
          <input
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            onBlur={() => handleValidation("confirmPassword")}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요"
          />
          <button
            type="button"
            onClick={toggleConfirmPassword}
            className={`${styles.pwd_img} ${
              showConfirmPassword ? styles.on : styles.off
            }`}
            aria-label={
              showConfirmPassword ? "비밀번호 숨기기" : "비밀번호 표시"
            }
          />
        </div>
        {formErrors.confirmPassword && (
          <p className={styles.error_text}>{formErrors.confirmPassword}</p>
        )}
      </div>

      <button type="submit" className={styles.signup_button}>
        회원가입
      </button>
    </form>
  );
};
