const express = require('express');
const app = express();
const port = 3000;
const RewardsList = ["Taxi", "Dozer", "Clown Van", "Trashmaster", "Barracks Semi", "Mixer", "Space Docker", "Tractor"];

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { RewardsList: RewardsList});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
