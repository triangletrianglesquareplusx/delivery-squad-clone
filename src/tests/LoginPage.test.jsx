import LoginPage from "../Pages/LoginPage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
//whatever text the page you are trying to capture has, it can be captured with the getByText, it can be broken up by tags or whatever
test("renders LoginPage with specific greeting containing the phrase 'welcome back'", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </BrowserRouter>
  );
  const pGreetingElement = screen.getByText(/Welcome back/i);
  expect(pGreetingElement).toBeInTheDocument();
});

test("renders LoginPage which has the specific greeting element p", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </BrowserRouter>
  );
  const pGreetingElement = screen.getByTitle("greeter");
  expect(pGreetingElement).toBeInTheDocument();
});

test("renders LoginPage with empty email field", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </BrowserRouter>
  );
  const emailInputField = screen.getByTestId("email-input");
  expect(emailInputField.value).toBe("");
});

test("renders LoginPage with empty password field", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </BrowserRouter>
  );
  const passwordInputField = screen.getByTestId("pass-input");
  expect(passwordInputField.value).toBe("");
});

test("renders LoginPage with a button which is called Login", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getByRole("button", { value: /login/i })).toBeEnabled();
});
