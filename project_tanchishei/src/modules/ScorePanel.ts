//记分牌的类
class ScorePanel {
    score = 0;
    level = 1;
    maxLevel: number;
    upScore: number;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }
    //加分
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        this.addLevel();
    }
    //加等级
    addLevel() {
        if (this.score % this.upScore == 0) {
            if (this.level < this.maxLevel) {
                this.levelEle.innerHTML = ++this.level + '';
            }
        }
    }
}


export default ScorePanel;