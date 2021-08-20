const topPlayersTitle = document.getElementById('top-players-title');
topPlayersTitle.style.color = "red";
const topBlogsTitle = document.getElementById('top-blogs-title');
topBlogsTitle.style.color = "crimson";

const players = document.getElementById('players');
players.style.backgroundColor = "rgba(211, 66, 247, 0.3)"


document.getElementById('btn').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerHTML = "<h3> lorem ipsum fuck fuck</h3>";
    ul.appendChild(li)
});
document.getElementById('btn2').addEventListener('click', function () {
    const getValueText = document.getElementById('getvalue');
    const getValue = getValueText.value;
    // getValueText.value = parseInt(getValue) + 1;
    let inputField = parseInt(getValue);
    if (inputField < 5) {
        getValueText.value = parseInt(getValue) + 1;
    } else if (inputField = 5) {
        document.getElementById('btn2').setAttribute('disabled', true)
    }

});