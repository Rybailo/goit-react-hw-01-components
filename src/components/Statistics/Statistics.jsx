import css from '../Statistics/Statistics.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      <ul className="statList">
        {stats.map(stats => (
          <div key={stats.id}>
            <li className="statisticsItem">
              <span className="label">{stats.label}</span>
              <span className="percentage">{stats.percentage}%</span>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
