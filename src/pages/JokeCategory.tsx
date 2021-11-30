import { Link } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../services/jokesData';

const JokeCategory = () => {
  const data = useGetAllCategoriesQuery(undefined);

  return (
    <div className="category">
      {data?.data?.categories.map((item) => (
        <Link key={item} to={`/jokes/${item}`}>
          <div className="category__nav">{item}</div>
        </Link>
      ))}
    </div>
  );
};

export default JokeCategory;
