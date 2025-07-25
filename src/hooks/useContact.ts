import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { contactService } from "@/lib/contactService";
import { ContactMessageRequest, ContactMessageResponse } from "@/types/contact";

interface UseContactMessageOptions
  extends Omit<
    UseMutationOptions<ContactMessageResponse, Error, ContactMessageRequest>,
    "mutationFn"
  > {}

export const useContactMessage = (options?: UseContactMessageOptions) => {
  return useMutation<ContactMessageResponse, Error, ContactMessageRequest>({
    mutationFn: (messageData: ContactMessageRequest) =>
      contactService.submitContactMessage(messageData),
    ...options,
  });
};
