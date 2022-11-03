// 引入样式
import './style/index.less';
// import Food from './modules/Food';
// import Snake from './modules/Snake';
// import ScorePanel from './modules/ScorePanel';
import GameControl from './modules/GameControl';
// //测试代码   
// const food = new Food();
// console.log(food.X,food.Y);
// food.change();
// console.log(food.X,food.Y);
// //测试代码
// const scorePanel = new ScorePanel(10, 10);
// for (let i = 0; i < 100; i++) {
//     scorePanel.addScore();
// }
new GameControl();