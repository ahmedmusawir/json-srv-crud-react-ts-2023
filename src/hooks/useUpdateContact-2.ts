import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CONTACTS, UpdateContactParams } from "../entities";
import contactService from "../services/contactService";

const useUpdateContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: UpdateContactParams) =>
      contactService.patch(id!, updates),
    // onSuccess: () => {
    // },
    onSettled: () => {
      // Force a refetch of the contacts after mutation is settled
      queryClient.invalidateQueries(CACHE_KEY_CONTACTS);
      queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    },
  });
};

export default useUpdateContact;
