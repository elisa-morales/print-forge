export function getQueryParams(searchParams: { sort?: string; search?: string; page?: string }) {
  return {
    search: searchParams?.search?.toLowerCase() || "",
    sort: searchParams?.sort?.toLowerCase() || "",
    page: Number(searchParams.page) || 1,
  };
}
