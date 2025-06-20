// lib/api.ts

type Method = 'get' | 'post' | 'put' | 'delete';

interface RequestOptions {
    method?: Method;
    body?: any;
    headers?: Record<string, string>;
}
function buildQueryString(params: Record<string, any>): string {
    const searchParams = new URLSearchParams();
    for (const key in params) {
        if (params[key] !== undefined && params[key] !== null) {
            searchParams.append(key, String(params[key]));
        }
    }
    return searchParams.toString();
}
export async function apiFetch<T = any>(
    url: string,
    options: RequestOptions = {}
): Promise<T> {
    const { method = 'get', body, headers } = options;
    const fetchOptions: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    };
    let finalUrl = url;
    if (method !== 'get' && body) {
        fetchOptions.body = JSON.stringify(body);
    }
    if (method === 'get' && body && Object.keys(body).length > 0) {
        const query = buildQueryString(body);
        finalUrl += url.includes('?') ? `&${query}` : `?${query}`;
    }
    const res = await fetch(finalUrl, fetchOptions);
    if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Fetch error: ${res.status}`);
    }

    return res.json();
}
