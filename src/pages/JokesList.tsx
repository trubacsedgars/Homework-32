import { useNavigate, useParams, Link } from 'react-router-dom';
import { useGetJokesByCategoryQuery } from '../services/jokesData';

const JokesList = () => {
  const navigate = useNavigate();
  const { category } = useParams<'category'>();
  const data = useGetJokesByCategoryQuery(category || '');

  if (data.data?.error) {
    return <h1 className="error">No jokes here</h1>;
  }

  return (
    <div className="jokes">
      {data?.data?.jokes.map((item) => (
        <Link to={`/jokes/${item.category}/${item.id}`}>
          <ul>
            <li className="jokes__content">
              {item.joke}
            </li>
          </ul>
        </Link>
      ))}
      <button className="jokes__button" onClick={() => navigate('/')}>Go back</button>
    </div>
  );
};

export default JokesList;
