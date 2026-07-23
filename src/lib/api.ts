import { buildUrl, PAYLOAD_API, toStrapiResponse } from "@/lib/payload";

const API_BASE_URL = PAYLOAD_API;


export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}


export const apiClient = {
  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)

     
      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`
        let errorCode: string | undefined

        try {
          const errorData = await response.json()
          errorMessage = errorData.error?.message || errorMessage
          errorCode = errorData.error?.name
        } catch {
         
        }

        throw new ApiError(errorMessage, response.status, errorCode)
      }

     
      const contentType = response.headers.get('content-type')
      if (contentType?.includes('application/json')) {
        return await response.json()
      }

      return response.text() as unknown as T
    } catch (error) {
      if (error instanceof ApiError) {
        throw error
      }

  
      throw new ApiError(
        'Network error or server unavailable',
        0,
        'NETWORK_ERROR'
      )
    }
  },


  // Reads go through the Strapi->Payload translator, so callers keep using
  // Strapi query syntax and receive the Strapi `{ data, meta }` envelope.
  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const url = buildUrl(endpoint, params)

    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      throw new ApiError(
        `HTTP ${response.status}: ${response.statusText}`,
        response.status,
      )
    }

    return toStrapiResponse(await response.json()) as T
  },


  post<T>(endpoint: string, data?: unknown): Promise<T> {
    // Strapi wrapped write payloads in `{ data: ... }`; Payload takes the
    // fields at the top level.
    const body =
      data && typeof data === 'object' && 'data' in (data as object)
        ? (data as { data: unknown }).data
        : data

    return this.request<T>(endpoint, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    })
  },


  put<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  },


  patch<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    })
  },


  delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    })
  },
}