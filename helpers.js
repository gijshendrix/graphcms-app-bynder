
function deserialize(value) {
  try {
    return (value && JSON.parse(value)) || [];
  } catch (error) {
    console.log(error)
    console.log("Invalid JSON: " + value);
    return null;
  }
}        

function serialize(value) {
  try {
    return value.length ? JSON.stringify(value) : "";
  } catch (error) {
    console.log(error);
    return "";
  }
}