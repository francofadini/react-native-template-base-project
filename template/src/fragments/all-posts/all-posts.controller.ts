import { AllPostsController } from 'fragments/all-posts/interfaces';
import { useAPIPostsService } from 'services/posts/posts.service';
import { LICPostProps } from 'components/LICPost';
import { PostDto } from 'services/posts/dtos/post.dto';

export const useAllPostsController = (
  // eslint-disable-next-line react-hooks/rules-of-hooks
  postsService = useAPIPostsService(),
): AllPostsController => {
  /* State */
  // Ex. const [count, setCount] = useState(0);

  /* Listeners */
  // Ex. useEffect(() => { onSessionUpdate(); }, [session]);

  /* View Events */
  const onListFetch = (
    currentPage: number,
    startFetch: (items: any[], pageLimit: number) => any,
    abortFetch: () => void,
  ) => {
    postsService
      .getAllPosts()
      .then((posts) => {
        let postViewModels = posts.map((post) => mapPostToViewModel(post));
        startFetch(postViewModels, 999999);
      })
      .catch(() => {
        abortFetch();
      });
  };

  /* Private Methods */
  const mapPostToViewModel = (post: PostDto): LICPostProps => {
    return {
      key: '1',
      title: post.title,
      body: post.body,
      imageURL: post.imageURL,
      onPress: () => {},
    };
  };

  // Return state and events
  return { onListFetch };
};
