import { useEffect, useState } from "react";
import { CanceledError } from "../services/apiClient";
import userService, { User } from "../services/userService";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userService.getAll<User>();
    // console.log({ request });

    request
      .then((res) => {
        setUsers(res.data);
        // console.log("User Data:", res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // Clean up
    return () => cancel();
  }, []);

  return { users, error, isLoading };
};

export default useUsers;
