import useRequest from 'lib/hooks/useRequest';
import { GetTagsResponse } from 'lib/api/tags';

const TagList = () => {
  const { data } = useRequest<GetTagsResponse>({
    url: '/tags',
  });

  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          {data
            ? data.tags.map((tag) => (
                <a key={tag} href="" className="tag-pill tag-default">
                  {tag}
                </a>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
};

export default TagList;
