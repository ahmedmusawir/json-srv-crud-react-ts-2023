import { useEffect, useState } from "react";
import { CanceledError } from "../services/apiClient";
import userService, { User } from "../services/userService";

const useDeleteUser = (id: string = "") => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = async (id: string = "") => {
    setIsLoading(true);
    try {
      await userService.delete(id);
      setIsLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      }
    }
  };

  return { deleteUser, error, isLoading };
};

export default useDeleteUser;
