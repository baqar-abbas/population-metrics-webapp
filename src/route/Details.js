import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BiArrowToRight } from 'react-icons/bi';

function Details() {
  const params = useParams();
  const nations = useSelector((store) => store.nationReducer);
  const eachNation = nations.find(
    (nation) => nation.name === params.nationName,
  );

  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <div className="details-container">
        <div className="heading">
          <img
            src={eachNation.flag}
            alt={`${eachNation.name} - flag`}
            className="flag-image"
          />
          <h2>
            Country :
            {' '}
            <span>{eachNation.name}</span>
          </h2>
        </div>
        <div className="more-details">
          <p>
            <span>Population :</span>
            <div className="details-span">
              <span>{eachNation.population}</span>
            </div>
            <BiArrowToRight className="toDetails" />
          </p>
          <p>
            <span>Capital City :</span>
            <div className="details-span">
              <span>{eachNation.capital}</span>
            </div>
            <BiArrowToRight className="toDetails" />
          </p>
          <p>
            <span> Nation Size :</span>
            <div className="details-span">
              <span>{eachNation.area}</span>
            </div>
            <BiArrowToRight className="toDetails" />
          </p>
          <p>
            <span> AlphaCode :</span>
            <div className="details-span">
              <span>{eachNation.id}</span>
            </div>
            <BiArrowToRight className="toDetails" />
          </p>
          <p>
            <span> Region :</span>
            <div className="details-span">
              <span className="details-span2">{eachNation.region}</span>
            </div>
            <BiArrowToRight className="toDetails" />
          </p>
          <p>
            <span> Calling Code :</span>
            <div className="details-span">
              <span>{eachNation.callingcode}</span>
            </div>
            <BiArrowToRight className="toDetails" />
          </p>
          <p>
            <span> Time Zone :</span>
            <div className="details-span">
              <span>{eachNation.timezone}</span>
            </div>
            <BiArrowToRight className="toDetails" />
          </p>
        </div>
      </div>
    </>
  );
}

export default Details;
