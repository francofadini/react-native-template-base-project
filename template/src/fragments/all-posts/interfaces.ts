export interface AllPostsController {
  /* State */

  /* Events */
  onListFetch: (
    currentPage: number,
    startFetch: (items: any[], pageLimit: number) => any,
    abortFetch: () => void,
  ) => void;
}

export interface AllPostsFragmentProps {
  useController?: () => AllPostsController;
}
