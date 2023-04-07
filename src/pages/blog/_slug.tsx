import React from 'react';
import { useLocation } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import PageLayout from '../layout';

const components = {
  // Add any custom components you want to use in your MDX files
};

const BlogPost = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').at(-1);
  const PostContent = React.lazy(() => import(`../../blog_posts/${slug}.md`));

  return (
    <PageLayout>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MDXProvider components={components}>
        <article className="prose-lg">
          <PostContent />
          </article>
        </MDXProvider>
      </React.Suspense>
    </PageLayout>
  );
};

export default BlogPost;
