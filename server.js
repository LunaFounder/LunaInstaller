const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4242;
const root = __dirname;
app.use(express.static(path.join(root, 'public')));
app.get('/download/luna', (req, res) => {
  res.download(path.join(root, 'downloads', 'Luna.zip'), 'Luna.zip');
});
app.listen(port, () => console.log(`Luna Founder website running on port ${port}`));
