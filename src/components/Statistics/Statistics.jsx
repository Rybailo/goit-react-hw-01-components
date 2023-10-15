import './Statistics.css';
import { randomizeColor } from '../Statistics/ColorRandomaizer';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {stats.map(obj => {
        return (
          <ul className="statList" key={obj.id}>
            <li
              className="item"
              style={{
                backgroundColor: randomizeColor(),
              }}
            >
              <span className="label">{obj.label}</span>
              <span className="percentage">{obj.percentage}%</span>
            </li>
          </ul>
        );
      })}
    </section>
  );
};
