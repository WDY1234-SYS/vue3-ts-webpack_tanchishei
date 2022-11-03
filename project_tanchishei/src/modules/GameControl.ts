import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
//游戏控制器，控制其他的所有类
class GameControl {
    //设置三个属性
    //蛇
    snake: Snake;
    //食物
    food: Food;
    //记分牌
    scorePanel: ScorePanel;
    //按键方向
    direction: string = 'Right';
    timer: any = "";
    // isLive: boolean = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    //游戏的初始化方法
    init() {
        //绑定键盘按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        // this.run();
        this.time();
    }
    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
        // console.log(this.direction);
        // this.isLive && this.run();
        this.run();
    }
    //蛇移动的方法
    run() {
        //获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        //根据按键方向修改X和Y
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                //向上移动top减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                //向下移动top增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                //向左移动top减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                //向右移动top增加
                X += 10;
                break;
        }
        if (this.checkEat(X, Y)) {
            console.log('吃到食物了');
            //重置食物位置
            this.food.change();
            //加分
            this.scorePanel.addScore();
            //蛇加一节
            this.snake.addBody();
        }
        try {
            //改变蛇的坐标
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch(e) {
            alert('GAME OVER！')
            clearInterval(this.timer);
        }
        // console.log(X, Y);
        // this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
    //检出是否迟到食物
    checkEat(X: Number, Y: Number) {
        return X == this.food.X && Y == this.food.Y;
    }
    time() {
        //开启定时调用
        this.timer = setInterval(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

}
export default GameControl;