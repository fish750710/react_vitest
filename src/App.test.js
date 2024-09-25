import { it, describe, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // 导入 jest-dom 的匹配器
import App from "./App";

describe("Test App", () => {
  it("App render", () => {
    const { getByText, getByRole } = render(<App />);
    // 获取 h1 元素
    const headingElement = getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent("Vite + React");

    // 获取 p 元素
    // const paragraphElement = getByText(
    //   /Edit src\/App.jsx and save to test HMR/i
    // );
    // expect(paragraphElement).toBeInTheDocument(); // 断言 p 存在
  });
});
