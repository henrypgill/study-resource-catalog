import moment from "moment";
import { Resource } from "./requests/resources";

type searchFilter<T> = (item: T) => boolean;

export function searchTitle(subStr: string): searchFilter<Resource> {
  return (content) => {
    const searchStr = subStr.toLowerCase();
    const name = content.title.toLowerCase();

    return name.includes(searchStr);
  };
}

export function searchDescription(subStr: string): searchFilter<Resource> {
  return (content) => {
    const searchStr = subStr.toLowerCase();
    const description = content.description.toLowerCase();

    return description.includes(searchStr);
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

export function toTitleCase(str: string) {
  return str.replace(/\b\S/g, (char) => char.toUpperCase());
}

export function sortByCreatedAt(a: Resource, b: Resource) {
  return moment(b.created_at).diff(a.created_at);
}

export function timeFromNow(time: Date): string {
  return moment(time).utc().fromNow();
}
