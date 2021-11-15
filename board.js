window.onload = function () 
{
    n = 10;
    board = document.getElementById('board'); 
    draw_board(n, board);
}

function draw_board(n, board)
{
    for (var i = 0; i < n; i++)
    {
        var tr = board.appendChild(document.createElement('tr'))

        for (var j = 0; j < n; j++)
        {
            var td = tr.appendChild(document.createElement('td'))
            td.className = i % 2 == j % 2 ? 'lpink' : 'lblue';
        }
    }
}

function get_params() 
{
    var min = document.getElementById('inputMin').value;
    var max = document.getElementById('inputMax').value;

    return [min, max];
}

function isInt(value)
{
    return !isNaN(value) &&
           parseInt(Number(value)) == value &&
           !isNaN(parseInt(value, 10)); 
}

function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main()
{
    var min;
    var max;

    [min, max] = get_params();

    if (isInt(min) == false || isInt(max) == false)
    {
        alert('Invalid input');
        return false;
    }
    
    for (let row of board.rows)
    {
        for (let cell of row.cells)
        {
            cell.innerHTML = getRandomInt(min, max);
        }
    }
}