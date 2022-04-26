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
export const buttonStyle = {
  cursor: "pointer",
  marginLeft: "60px",
  background: "black",
  color: "white",
  width: "150px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
};
export const productStyle = {
  paddingTop: "40px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
};
export const mainStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
export const submitStyle = {
  width: "100%",
  maxWidth: "350px",
  height: "40px",
  marginTop: "30px",
  marginLeft: "20px",
};
export const commonLeftstyle = { paddingLeft: "20px", marginTop: "20px" };
export const widthstyle = {
  width: "100%",
  maxWidth: "350px",
};
