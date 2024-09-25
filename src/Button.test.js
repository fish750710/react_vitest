// Button.test.js
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button"; // 確保這裡的路徑是正確的
import { describe, it, expect, vi } from "vitest";

// 描述一個測試
describe("Button component", () => {
  // it 和 test 一樣功能
  it("should trigger click event", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button label="Click me" onClick={handleClick} />
    );
    fireEvent.click(getByText(/click me/i)); // 模拟点击事件
    // 預期結果
    expect(handleClick).toHaveBeenCalledTimes(1); // 确保点击事件被调用
  });
});
