/**
 * rem 自动计算
 */
const autoRem = (min: number, max: number, isResize?: boolean) => {
  const htmlstyle = window.document.getElementsByTagName('html')[0].style;
  const resize = () => {
    const w = window.innerWidth;
    htmlstyle.fontSize = (((w > max && max) || (w < min && min) || w) / max) * 100 + 'px';
  };
  resize();
  isResize && window.addEventListener('resize', resize);
};

export default autoRem;
