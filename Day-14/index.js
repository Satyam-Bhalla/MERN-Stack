const http = require("http");
const axios = require("axios").default;

const hostname = "127.0.0.1";
const port = 3000;

async function getData() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
// let response = await getData();

const server =  http.createServer( async (req, res) => {
  //   console.log(req);
//   let response = { name: "Satyam" };
  let response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/pikachu"
  );

  console.log(response);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response));
});

server.listen(port, hostname, () => {
  console.log("Hahahaha");
  console.log(`Server running at http://${hostname}:${port}/`);
});
