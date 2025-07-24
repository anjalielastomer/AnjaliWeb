export interface ContactMessage {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  company: string;
  project_type: string;
  message: string;
  locale?: string;
  localizations?: (string | number)[];
}

export interface StrapiContactMessage {
  id: number;
  documentId: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  company: string;
  project_type: string;
  message: string;
  locale?: string;
  localizations?: (string | number)[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContactMessageRequest {
  data: ContactMessage;
}

export interface ContactMessageResponse {
  data: StrapiContactMessage;
  meta: any;
}
