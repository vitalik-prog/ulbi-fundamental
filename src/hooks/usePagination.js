import {useMemo} from "react";

export const usePagination = (totalCount = 1) => {
  let pages = []
  useMemo(() => {
    for (let i = 1; i <= totalCount; i++) {
      pages.push(i)
    }
  }, [totalCount])
  return pages
}
