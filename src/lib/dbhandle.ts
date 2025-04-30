import type { Collection,Document} from 'mongodb';
interface PaginateOptions {
    page?: number;
    pageSize?: number;
    sort?: Record<string, 1 | -1>;
}

interface PaginateResult {
    data: any[];
    total: number;
    page: number;
    pageSize: number;
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
    const { page = 1, pageSize = 10, sort = { _id: -1 } } = options;

    const skip = (page - 1) * pageSize;

    const [data, total] = await Promise.all([
        collectionName.find(query).sort(sort).skip(skip).limit(pageSize).toArray(),
        collectionName.countDocuments(query),
    ]);

    const totalPages = Math.ceil(total / pageSize);

    return {
        data,
        total,
        page,
        pageSize,
        totalPages,
    };
}
