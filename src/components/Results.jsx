import { formatter } from "../util/investment.js";
function Results({ resultsArr }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th className="center">Year</th>
          <th className="center"> Investment Value</th>
          <th className="center">{"Interest(Year)"}</th>

          <td className="center">Total Interest</td>
          <td className="center">Interest Captital</td>
        </tr>
      </thead>

      <tbody>
        {resultsArr.map((el, i) => (
          <tr key={i} className="center">
            <td>{el.year}</td>
            <td>{formatter.format(el.valueEndOfYear)}</td>
            <td>{formatter.format(el.interest)}</td>
            <td>{formatter.format(el.totalInterest)}</td>
            <td>{formatter.format(el.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
