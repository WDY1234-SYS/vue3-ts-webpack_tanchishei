//定义食物类
class Food {
    //定义一个属性表示食物对应的元素
    element: HTMLElement;
    constructor() {
        //获取页面中的food元素并且它不会为空
        this.element = document.getElementById('food')!;
    }
    //获取food的X坐标
    get X() {
        return this.element.offsetLeft;
    }
    //获取food的Y坐标
    get Y() {
        return this.element.offsetTop;
    }
    //修改食物的位置
    change() {
        //生成随机位置
        //最小是0，最大是290
        //必须是10的倍数
        let left = Math.round(Math.random() * 29) * 10;
        let right = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = right + 'px';
    }
}


export default Food;