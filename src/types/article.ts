
export interface ApiArticle {
  id: number;
  documentId: string;
  title: string;
  short_description: string;
  author: string;
  publish_time: string;
  read_time_text: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover_image: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      [key: string]: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ApiResponse {
  data: ApiArticle[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface TransformedArticle {
  id: string;
  title: string;
  date: string;
  time: string;
  author: string;
  image: string;
  short_description: string;
}



// types/article.ts
export interface ApiSingleArticleResponse {
  data: {
    id: number;
    documentId: string;
    title: string;
    short_description: string;
    author: string;
    publish_time: string;
    read_time_text: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover_image: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        [key: string]: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  meta: Record<string, any>;
}

export interface ParsedContent {
  type: 'heading' | 'paragraph' | 'image';
  content: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const parseHTMLContent = (htmlContent: string): ParsedContent[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const elements = doc.body.children;
  const parsedContent: ParsedContent[] = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (element.tagName === "P") {
      const fullText = element.textContent?.trim() || "";

      
      const headingPatterns = [
        /^(\d+\.\s*[^.]+(?:\([^)]+\))?)/, 
        /^(Conclusion[^.]*)/i,
        /^(Tracks to Tomorrow[^.]*)/i, 
      ];

      let headingMatch = null;

     
      for (const pattern of headingPatterns) {
        const match = fullText.match(pattern);
        if (match) {
          headingMatch = match[1].trim();
          break;
        }
      }

      if (headingMatch) {
    
        parsedContent.push({
          type: "heading",
          content: headingMatch,
        });

       
        const remainingText = fullText.replace(headingMatch, "").trim();
        if (remainingText) {
          parsedContent.push({
            type: "paragraph",
            content: remainingText,
          });
        }
      } else {
        
        if (fullText) {
          parsedContent.push({
            type: "paragraph",
            content: fullText,
          });
        }
      }
    } else if (/^H[1-6]$/.test(element.tagName)) {
      // Headings authored in the CMS (e.g. <h2>, <h3>) — previously dropped.
      const text = element.textContent?.trim();
      if (text) parsedContent.push({ type: "heading", content: text });
    } else if (element.tagName === "UL" || element.tagName === "OL") {
      // List items render as bulleted paragraphs — previously dropped.
      element.querySelectorAll("li").forEach((li) => {
        const text = li.textContent?.trim();
        if (text) parsedContent.push({ type: "paragraph", content: `• ${text}` });
      });
    } else if (element.tagName === "FIGURE") {
      const img = element.querySelector("img");
      if (img) {
        parsedContent.push({
          type: "image",
          content: "",
          imageUrl: img.src,
          imageAlt: img.alt || "Article image",
        });
      }
    }
  }

  return parsedContent;
};