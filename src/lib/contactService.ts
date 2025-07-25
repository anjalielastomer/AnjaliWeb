import { apiClient } from "@/lib/api";
import { ContactMessageRequest, ContactMessageResponse } from "@/types/contact";

export const contactService = {
  async submitContactMessage(
    messageData: ContactMessageRequest
  ): Promise<ContactMessageResponse> {
    return apiClient.post<ContactMessageResponse>(
      "/contact-us-messages",
      messageData
    );
  },
};
