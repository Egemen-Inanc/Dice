var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute('src','images/dice'+randomNumber1+'.png');
document.querySelectorAll("img")[1].setAttribute('src','images/dice'+randomNumber2+'.png');
if(randomNumber1>randomNumber2)
{
  document.querySelectorAll("h1")[0].textContent ="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelectorAll("h1")[0].textContent ="Player 2 Wins!";
}
else if(randomNumber2===randomNumber1)
{
  document.querySelectorAll("h1")[0].textContent ="Draw!";
}
