import { useTogglePassword } from "@/hooks/useTogglePassword";
import { useState, useCallback } from "react";
import {
  validateEmail,
  validatePassword,
  checkFormValidity,
} from "@/utils/formValidation";
import styles from "@/styles/login.module.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showPassword, toggle: togglePassword } = useTogglePassword();
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleValidation = useCallback(
    (field: "email" | "password") => {
      let result;
      switch (field) {
        case "email":
          result = validateEmail(email);
          break;
        case "password":
          result = validatePassword(password);
          break;
      }
      setFormErrors((prev) => ({ ...prev, [field]: result.errorMessage }));
      return result.isValid;
    },
    [email, password]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailValid = handleValidation("email");
    const isPasswordValid = handleValidation("password");

    if (checkFormValidity({ isEmailValid, isPasswordValid })) {
      // 로그인 처리 로직
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      {/* 이메일 입력 필드 */}
      <div className={styles.form_box}>
        <p className={styles.explain}>이메일</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleValidation("email")}
          type="email"
          placeholder="이메일을 입력해주세요"
        />
        {formErrors.email && (
          <p className={styles.error_text}>{formErrors.email}</p>
        )}
      </div>

      {/* 비밀번호 입력 필드 */}
      <div className={styles.form_box}>
        <p className={styles.explain}>비밀번호</p>
        <div className={styles.input_div}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => handleValidation("password")}
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요"
          />
          <button
            type="button"
            onClick={togglePassword}
            className={`${styles.pwd_img} ${
              showPassword ? styles.on : styles.off
            }`}
            aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
          />
        </div>
        {formErrors.password && (
          <p className={styles.error_text}>{formErrors.password}</p>
        )}
      </div>

      <button type="submit" className={styles.login_button}>
        로그인
      </button>
    </form>
  );
};
