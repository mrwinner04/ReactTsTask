import { useAuth } from "../../../hooks/useAuth";

export const useLayout = () => {
  const { isLoading } = useAuth();

  return {
    isLoading,
  };
};
