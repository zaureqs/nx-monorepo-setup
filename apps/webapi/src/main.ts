import app from './app.v1';

const port = Number(process.env.PORT);
const host = process.env.HOST;


app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
