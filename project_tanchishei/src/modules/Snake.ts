class Snake {
    //蛇头
    head: HTMLElement;
    //蛇身（包括蛇头）
    bodies: HTMLCollection;
    //整个蛇的容器
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')! as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }
    //获取蛇头的x轴坐标
    get X() {
        return this.head.offsetLeft;
    }
    //获取蛇头的y轴坐标
    get Y() {
        return this.head.offsetTop;
    }
    //设置蛇头的坐标
    set X(value: number) {
        //如果新值和旧值相同，则直接返回不再修改
        if (this.X === value) return
        //蛇只在舞台中移动
        if (value < 0 || value > 290) {
            throw new Error('撞墙了')
        }

        //修改x时，是在修改水平坐标。蛇在左右移动，比如在往左走时，不能往右走。
        //判断蛇头和第二节身体的x坐标相同，则水平调头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            //让蛇向反方向走
            //如果新值小于旧值,说明蛇在向左走，此时让蛇继续向右走
            console.log("蛇掉头了");

            if (value < this.X) {
                value = this.X + 10;
            } else {
                value = this.X - 10;
            }
        }
        //移动身体
        this.moveBody();
        this.head.style.left = value + 'px';
        //检查是否自身相撞
        this.checkHeadBody();
    }
    //设置蛇头的坐标
    set Y(value: number) {
        //如果新值和旧值相同，则直接返回不再修改
        if (this.Y === value) return
        //蛇只在舞台中移动
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了，游戏结束！')
        }
        //修改Y时，是在修改垂直坐标。蛇在上下移动，比如在往上走时，不能往下走。
        //判断蛇头和第二节身体的y坐标相同，则垂直调头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            //让蛇向反方向走
            //如果新值小于旧值,说明蛇在向上走，此时让蛇继续向下走
            console.log("蛇掉头了");

            if (value < this.Y) {
                value = this.Y + 10;
            } else {
                value = this.Y - 10;
            }
        }
        //移动身体
        this.moveBody();
        this.head.style.top = value + 'px';
        //检查是否自身相撞
        this.checkHeadBody();
    }
    //增加身体的方法
    addBody() {
        //向element中添加一个div
        this.element.insertAdjacentHTML('beforeend', "<div></div>");
    }
    //移动身体的方法
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    //检查身体是否与蛇头发生重叠
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            if ((this.bodies[i] as HTMLElement).offsetLeft == this.X && (this.bodies[i] as HTMLElement).offsetTop == this.Y) {
                throw new Error('自身相撞了');
            }
        }
    }
}
export default Snake;