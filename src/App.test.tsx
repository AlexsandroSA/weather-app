import App from "./App";
import { render, screen } from './utils/test-utils'


describe("App", () => {
  test("renders with correct title", () => {
    render(<App />);
    const linkElement = screen.getByText(/Weather App/i);
    expect(linkElement).toBeInTheDocument();
  });
});
