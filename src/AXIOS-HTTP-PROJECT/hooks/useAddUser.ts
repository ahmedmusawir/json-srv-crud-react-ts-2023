import { useState } from "react";
import userService, { User } from "../services/userService";

const useAddUser = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const addUser = async (user: User) => {
    setIsLoading(true);
    try {
      await userService.post(user);
      setIsLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      }
    }
  };

  return { addUser, error, isLoading };
};

export default useAddUser;
