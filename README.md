# auto-rem

自动计算 rem，直接使用 rem 无缝替换 px，即可达到等比例兼容屏幕尺寸

## 使用方法

设定范围值，在范围值内根据屏幕宽度计算出当前 rem<br>
autoRem(min: number, max: number, isResize?: boolean | undefined)<br>
min 最小宽度，当屏幕宽度小于最小宽度时 html.style.fontSize = min/max<br>
max 最大宽度，当屏幕宽度大于最大宽度时 html.style.fontSize = max/max = 1px<br>
当屏幕宽度 大于最小宽度，小于最大宽度时，html.style.fontSize = 屏幕宽度/min<br>
isResize 是否绑定 resize 事件<br>

例:

```
import autoRem from '@dyb881/auto-rem';

const ar = autoRem(320, 750, true);
ar(); // 移除 resize 事件监听
```

style.css

```
/*
  实际场景中，当有一个移动端UI拿到手的时候
  假如设计图宽度为 750，则把 750 设为最大宽度
  并且样式尺寸和设计图1比100，替换单位px为rem，并除于100
  相对设计图上 宽度为 30px 的元素样式如下
*/
.box {
  width: .3rem;
  /* 当屏幕宽度小于320时
  html.style.fontSize = 320/750*100 = 42.6667px
  width = 0.3 * 42.6667 = 12.80001px
  */
  /* 当屏幕宽度大于750时
  html.style.fontSize = 750/750*100 = 100px
  width = 0.3 * 100 = 30px
  */
  /* 当屏幕宽度 大于最小宽度，小于最大宽度时，如 375
  html.style.fontSize = 375/750*100 = 50px
  width = 0.3 * 50 = 15px
  */
}
```
