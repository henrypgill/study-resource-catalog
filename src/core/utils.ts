import { Resource } from "./requests/resources";

type searchFilter<T> = (item: T) => boolean;

export function searchTitle(subStr: string): searchFilter<Resource> {
  return (content) => {
    const searchStr = subStr.toLowerCase();
    const name = content.title.toLowerCase();

    return name.includes(searchStr);
  };
}

export function searchTags(subStrs: string[]): searchFilter<Resource> {
  return (content) => {
    if (subStrs.length === 0) return true;

    const searchStrs = subStrs.map((str) => str.toLowerCase());
    const tags = content.tags.map((tag) => tag.name.toLowerCase());

    return searchStrs.some((str) => tags.includes(str));
  };
}

export function combineFilters<T>(...filters: searchFilter<T>[]) {
  return (filterTarget: T): boolean =>
    filters
      .map((filter) => filter(filterTarget))
      .some((result) => result === true);
}
