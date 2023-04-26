import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowToRight } from 'react-icons/bi';
import { eachCountry } from '../redux/nations/nationsslice';
import Nation from '../components/Nation';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(eachCountry());
  }, [dispatch]);

  const nations = useSelector((store) => store.nationReducer);

  const [finder, setFinder] = useState('');

  const handleSearch = (e) => {
    setFinder(e.target.value);
  };

  const displayNations = nations.filter((nation) => {
    const lowercaseName = nation.name.toLowerCase();
    const lowercaseFinder = finder.toLowerCase();
    return lowercaseName.includes(lowercaseFinder);
  });

  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="search country by name"
          onChange={handleSearch}
        />
        <h2 className="populationh2">Country by population size</h2>
      </div>
      <div className="nation-holder">
        {displayNations.map((nation) => (
          <Link
            key={nation.id}
            className="details-tab"
            to={{
              pathname: `/nation/${nation.name}`,
              state: { stateParam: true },
            }}
          >
            <BiArrowToRight className="toDetails" />
            <Nation
              key={nation.id}
              id={nation.id}
              name={nation.name}
              population={nation.population}
              flag={nation.flag}
              area={nation.area}
              alphacode={nation.alphacode}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
