import { FC, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../store/AppContext';
import { Link, useSearchParams } from 'react-router-dom';
import './pagination.css';

export const Pagination: FC = () => {
  const { pages, setPage, page } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const [activePage, setActivePage] = useState<string>(
    searchParams.get('page') || page,
  );
  const handleClick = (currentPage: string) => {
    setPage(currentPage);
    setActivePage(currentPage);
  };

  useEffect(() => {
    setActivePage(page);
  }, [page]);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {pages.length > 1
          ? pages.map((page) => (
              <li key={page} className="pagination__item">
                <Link
                  to={`?page=${page}`}
                  onClick={() => handleClick(page)}
                  className={`pagination__link ${activePage === page ? 'active' : ''}`}
                >
                  {page}
                </Link>
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
};
