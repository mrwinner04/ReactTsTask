import { useAuth } from "../../hooks/useAuth";

export const useLogin = () => {
  const { user, login, isLoading } = useAuth();

  const handleLogin = async () => {
    const success = await login("demo@example.com", "password123");

    if (!success) {
      alert("Authentication failed. Please try again.");
    }
  };

  const shouldRedirect = Boolean(user);

  return {
    user,
    isLoading,
    shouldRedirect,
    handleLogin,
  };
};
