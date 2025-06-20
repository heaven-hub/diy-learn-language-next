import type { Collection,Document} from 'mongodb';
interface PaginateOptions {
    page?: number;
    limit?: number;
    sort?: Record<string, 1 | -1>;
}

interface PaginateResult {
    data: any[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

/**
 * 通用 MongoDB 分頁查詢
 * @param collectionName - 集合名
 * @param query - 查詢條件
 * @param options - 分頁選項
 */
export async function paginate(
    collectionName: Collection,
    query: Document = {},
    options: PaginateOptions = {}
): Promise<PaginateResult> {
    const { page = 1, limit = 10, sort = { _id: -1 } } = options;
    let pageSize = Number(page)
    let pageLimit = Number(limit)
    const skip = (pageSize - 1) * pageLimit;

    const [data, total] = await Promise.all([
        collectionName.find(query).sort(sort).skip(skip).limit(pageLimit).toArray(),
        collectionName.countDocuments(query),
    ]);

    const totalPages = Math.ceil(total / pageLimit);

    return {
        data,
        total,
        page:pageSize,
        limit:pageLimit,
        totalPages,
    };
}
