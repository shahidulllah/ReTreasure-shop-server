import app from "./app";

const PORT = process.env.PORT || 5000;

//Server checking..
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
