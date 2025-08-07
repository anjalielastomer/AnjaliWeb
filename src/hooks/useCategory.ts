import { useQuery } from "@tanstack/react-query";

export interface ProductCategory {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  products:ProductSpec[];
  updatedAt: string;
  publishedAt: string;
}

export interface ProductSpec {
  id: number;
  image:string;
  title: string;
  description: string;
  specification: string;
  documentId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
}


interface ProductCategoriesResponse {
  data: ProductCategory[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const fetchCategories = async (): Promise<ProductCategory[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product-categories?populate[products][populate]=*`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  // console.log(data);
  
  return data.data;
};

export const useCategory = () => {
  const { data, isLoading, error } = useQuery<ProductCategory[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime:5 * 60 * 1000,
  });

  return {
    categories: data ?? [],
    loading: isLoading,
    error,
  };
};
