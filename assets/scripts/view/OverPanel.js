cc.Class({
    extends: cc.Component,

    properties: {
        resultLabel:cc.Label,
        scoreLabel:cc.Label,
    },

    // use this for initialization
    onLoad: function () {

    },

    init(gameCtl){
        this.gameCtl = gameCtl;
        this.node.active = false;
    },

    show(score,isWin){
        this.node.active = true;
        if(isWin){
            this.resultLabel.string = 'YOU WIN!';
        }else{
            this.resultLabel.string = 'YOU LOSE!';
        }
        this.scoreLabel.string = score+'';
    },

    onBtnRestart(){
        this.gameCtl.startGame();
    }
});
