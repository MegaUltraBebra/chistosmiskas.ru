let {PATH} = import('./app.cjs');

/* GET home page. */
export default function(app) {
  app.get('/', function (req, res) {
    res.sendFile(PATH +  "htmls/index.html");
  });
}
