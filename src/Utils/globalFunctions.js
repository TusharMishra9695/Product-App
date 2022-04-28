import { Button } from "@material-ui/core";

export function handleList(props) {
  let listData = [];
  for (let i = 0; i <= 2; i++) {
    // logic for 50 products because in API only 20 products are coming
    if (i === 2) {
      props.slice(0, 10).map((data) => listData.push(data));
    } else {
      props.map((data) => listData.push(data));
    }
  }
  if (localStorage.getItem("items")) {
    let local_details = JSON.parse(localStorage.getItem("items"));
    for (let items = 0; items < local_details.length; items++) {
      listData.push(local_details[items]);
    }
  }
  return listData;
}

export const btn = (
  <Button
    variant="contained"
    color="primary"
    className="submit-style"
    type="submit"
  >
    Submit
  </Button>
);
