import React from 'react';
import moment from 'moment';
import Loader from '../../components/Loader';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Search() {
  const router = useRouter();
  const { search } = router.query;
  const [category, setCategory] = React.useState([]);
  const [is_loading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (search) {
      searchData(search);
    }
  }, [search]);

  const searchData = (search) => {
    setIsLoading(true);
    fetch(global.api_link + 'search/' + search, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json.status) {
        } else {
          setCategory(json.data);
        }
        setIsLoading(false);
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  return (
    <>
      {is_loading ? (
        <Loader />
      ) : (
        <>
          <div className="axil-breadcrumb-area breadcrumb-style-1 bg-color-grey">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner">
                    <h4 className="page-title">
                      Search Results for : {search}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="axil-post-list-area axil-section-gap bg-color-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-xl-8">
                  {category.length === 0 ? (
                    <div className="content-block post-list-view mt--30 d-flex align-items-center justify-content-center flex-column">
                      <img src="/images/no_search.webp" alt="No Search" />
                      <h4 className="title">
                        No Search Results Found For {search}
                      </h4>
                    </div>
                  ) : (
                    category.map((item, index) => (
                      <div className="content-block post-list-view mt--30">
                        <div className="post-thumbnail">
                          <Link href={'/blog/' + item.path}>
                            <img
                              src={
                                global.img_link + 'images/' + item.upload_image
                              }
                              alt="Post Images"
                            />
                          </Link>
                        </div>
                        <div className="post-content">
                          <div className="post-cat">
                            <div className="post-cat-list">
                              <Link
                                className="hover-flip-item-wrapper"
                                href={'/blog/' + item.path}
                              >
                                <span className="hover-flip-item">
                                  <span data-text={item.image_text}>
                                    {item.page_name}
                                  </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <h4 className="title">
                            <Link href={'/blog/' + item.path}>
                              {item.page_title}
                            </Link>
                          </h4>
                          <div className="post-meta-wrapper">
                            <div className="post-meta">
                              <div className="content">
                                <h6 className="post-author-name">
                                  <Link
                                    className="hover-flip-item-wrapper"
                                    href={'/author/' + item.author.path}
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text={item.author.author_name}>
                                        {item.author.author_name}
                                      </span>
                                    </span>
                                  </Link>
                                </h6>
                                <ul className="post-meta-list">
                                  <li>
                                    {moment(item.updated_at).format('llll')}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Search;
