import {Homepage, Notfound} from "../components/common";
import {CountersPage, Login, PostsPage} from "../components";
import PostPage from "../components/post/PostPage";

export const privateRoutes = [
  { path: '/counters', component: CountersPage, exact: false },
  { path: '/posts', component: PostsPage, exact: true },
  { path: `/posts/:id`, component: PostPage, exact: true },
  { path: `*`, component: Notfound, exact: false },
]

export const publicRoutes = [
  { path: '/login', component: Login, exact: true },
  { path: '/counters', component: CountersPage, exact: false },
]
