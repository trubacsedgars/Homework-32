import { useNavigate, useParams } from 'react-router-dom';
import { useGetJokesInfoQuery } from '../services/jokesData';

const JokeInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();
  const data = useGetJokesInfoQuery(id || '');

  return (
    <div className="joke-wrapper">
      <span className="joke">
        ID
      </span>
      <span className="joke__content">
        {data?.data?.id}
      </span>
      <span className="joke">
        Category
      </span>
      <span className="joke__content">
        {data?.data?.category}
      </span>
      <span className="joke">
        Joke
      </span>
      <span className="joke__content">
        {data?.data?.joke}
      </span>
      <button className="jokes__button" onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default JokeInfo;
