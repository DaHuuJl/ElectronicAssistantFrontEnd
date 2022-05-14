import {GridLoadingListener} from "./GridLoadingListener";
import {Page} from "./Page";

export class GridModel<T> {
  public static DEFAULT_PAGE_SIZE: number = 10;
  public static MAX_PAGE_SIZE: number = 10000;

  public entries: T[] = [];
  public totalCount = 0;
  public totalCountRevised = 0;
  public totalPageCount = 1;
  public currentPage = 0;
  public filter: any = {};
  public isLoading = false;
  public isTotalLoading = false;
  public uuid: string = "";
  private latestRevisedTotalFilter: any;
  public isEntriesLoaded: boolean = false;
  private loadListeners: GridLoadingListener[] = [];

  public addLoadingListener(listener: GridLoadingListener) {
    this.loadListeners.push(listener);
  }

  public loadPage(pageNumber: number) {
    return this.loadPageForFilter(pageNumber, this.filter);
  }

  public loadPageForFilter(pageNumber: number, filter: any)/*: Page<T>*/ {
    
  }

  public resetGridModel(): void {
    this.isEntriesLoaded = false;
    this.entries.splice(0);
    this.totalCount = 0;
    this.totalCountRevised = 0;
    this.totalPageCount = 1;
    this.currentPage = 0;
  }
}
