type ConstructUrlParams = {
  pageNumber: number;
  search: string;
  pathname: string;
};

export const constructUrl = ({
  pageNumber,
  search,
  pathname,
}: ConstructUrlParams) => {
  const searchParams = new URLSearchParams(search);
  searchParams.set("page", pageNumber.toString());
  return `${pathname}?${searchParams.toString()}`;
};

type ConstructPrevOrNextParams = {
  currentPage: number;
  pageCount: number;
  search: string;
  pathname: string;
};

export const constructPrevOrNextUrl = ({
  currentPage,
  pageCount,
  search,
  pathname,
}: ConstructPrevOrNextParams): { prevUrl: string; nextUrl: string } => {
  let prevPage = currentPage - 1;
  if (prevPage < 1) prevPage = pageCount;

  let nextPage = currentPage + 1;
  if (nextPage > pageCount) nextPage = 1;

  const prevUrl = constructUrl({ pageNumber: prevPage, search, pathname });
  const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname });

  return { prevUrl, nextUrl };
};
