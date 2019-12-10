import axios from "axios";

export const GET_DATA = "GET_DATA";
export const POST_DATA = "POST_DATA";

export function getData(url, data) {
  return dispatch => {
    axios
      .post("http://localhost:3005/login", data)
      .then(function(response) {
        dispatch({
          type: "GET_DATA",
          payload: {
            data: response.data
          }
        });
      })
      .catch(function(error) {
        console.log("||||error|||| ", error);
      });
  };
}

export function postData(data) {
  return dispatch => {
    axios
      .post("http://localhost:3005/user", data)
      .then(function(response) {
        console.log("SUCCESS!!!", response);
        dispatch({
          type: "POST_DATA",
          payload: { url: data.url, data: data.data }
        });
      })
      .catch(error => console.log("ERROR!!!", error));
  };
}
