/* eslint-disable no-console */
import axios from "axios";

// Actions

export function getAll(ratings) {
  const rateFilter = String(ratings).toString();
  return axios
    .get(
      process.env.REACT_APP_DASHBOARD_URL +
        "ratings=" +
        rateFilter +
        "&name=fdmota&company=test&year=2021"
    )
    .then((res) => res.data)
    .catch((err) => err);
}
