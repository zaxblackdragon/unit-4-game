$(document).ready(function () {
    //  steps:
    //      wins and losses are reset to 0
        var  wins = 0;
        var losse = 0;
        //      computor choses a random number
        var compRandomNum = Math.floor(Math.random() * 100);

        var crystalNums = 
            {
                red: Math.floor(Math.random() * 100),
                blue: Math.floor(Math.random() * 100),
                purple: Math.floor(Math.random() * 100),
                green:  Math.floor(Math.random() * 100)
            };
        
        // var red = Math.floor(Math.random() * 100);
        // var blue = Math.floor(Math.random() * 100);
        // var purple = Math.floor(Math.random() * 100);
        // var green = Math.floor(Math.random() * 100);
        console.log(crystalNums.red,crystalNums.blue, crystalNums.purple,crystalNums.green);
    
    //      computor assigns a nuber to the user and all the crystals
    //      user clicks on a crystal and the value of said crystal is displayed
    //      user click another crystal and that value is added to the first val, and added to the displayed score
    //      if the total score is less that the random value, the user chooese another crystal and that is added to the displayed score and so on until the total score either === the computor's random number or is greater than that num
    //      if the user total score === to the random num => add to the wins and reset the game.
    //      if the user total score is > the the random num => add to the losses and reset the game.
    // there should be a button at the bottum to reset the game w/out refresshing the page.


});