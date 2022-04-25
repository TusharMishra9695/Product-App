export function handleList(props) {
  let a = [];
  for (let i = 0; i <= 2; i++) {
    // logic for 50 products because in API only 20 products are coming
    if (i === 2) {
      props.slice(0, 10).map((data) => a.push(data));
    } else {
      props.map((data) => a.push(data));
    }
  }
  return a;
}
export const style = {
  borderRadius: "20px",
  boxShadow: "1px 1px 2px 2px grey",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
export const styleDetail = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  flexDirection: "column",
  alignItems: "center",
};
