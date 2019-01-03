$(function () {
    //初始化fullpage组件
    //01.设置每一个屏幕的背景颜色
    //2.设置屏幕内容的对其方式，默认是垂直居中的
    //2.设置导航 设置指示器 点容器
    //3.监听完全进入 某一屏的事件  afterLoad
    $('.container').fullpage({
    //配置参数
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed","#8ac060"],
        verticalCentered:false,
        navigation:true,
        scrollingSpeed:1000,/*页面滚动速度默认700，单位为毫秒*/
        afterLoad:function (link,index) {
            // index 序号1 开始
            // console.log(index);
            $('.section').eq(index-1).addClass('now');
        },

        // 离开某一个页面时触发
        onLeave:function(index,nextIndex ,direction ){
            console.log(index,nextIndex ,direction)
            let currentSection=$('.section').eq(index-1);
            if (index==2&&nextIndex==3&&direction=='down') {
                //从第二页向下到第三页
                currentSection.addClass('leaved');
            }else if (index==3&&nextIndex==4&&direction=='down'){
                //从第三页向下到第四页
                currentSection.addClass('leaved');
            }else if (index==5&&nextIndex==6&&direction=='down') {
                //从第五页向下到第六页
               // currentSection.removeClass('now').addClass('leaved');
                currentSection.addClass('leaved');
                $('.screen06 .box').addClass('show');
            }else if (index==6&&nextIndex==7&&direction=='down'){
                //从第6页向下到第7页
                $('.screen07 .star img').each(function (i,item) {
                    // $(item)==$(this)
                    $(this).delay(i*0.35*1000).fadeIn(function () {
                        $('.screen07 .text').addClass('show')
                    });
                })
            }
        },

        // 点击更多切换下一页，最好在插件初始完毕后执行
        afterRender:function () {
            /*console.log(this);*/
            /*this没有api方法*/
            /*jquery插件初始的时候封装这个方法*/
            /*01.回想jquery插件的封装 $.fn.fullpage = function(){} */
            /*2.jquery本身没有的方法通过$.fn的方式追加方法  认为是插件方法*/
            /*3.例如：$.fn.src = function(){ return this.attr('src') } this 你选择谁this（jquery对象）执行谁 */
            /*点击更多切换下一页*/
            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown()
            });
            // 当第四屏的购物车动画结束之后执行收货地址动画
            $('.screen04 .cart').on('transitionend',function () {
                console.log('过度结束了');
                /* :last :first :visible :hidden :checked :selected jquery扩展选择器*/
                $('.screen04 .address').show().find('img:last').fadeIn(500);
                $('.screen04 .text').addClass('show');
            })
            //第八屏功能--01.手要跟随鼠标移动
            $('.screen08').on('mousemove',function (e) {
                //console.log(e)
                $(this).find('.hand').css({
                    left:e.clientX -220,
                    top:e.clientY - 330
                });
            }).find('.again').on('click',function () {
                /*2.点击再来一次重置动画跳回第一页*/
                /*动画怎么怎么进行的？*/
                /*2.01 加now  类*/
                /*2.2 加leaved  类*/
                /*2.3 加show 类*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                /*2.4 加css属性  后果：加一个style属性*/
                /*2.5 用jquery方法  show() fadeIn() 后果：加一个style属性*/
                $('.comment[style]').removeAttr('style');
                //跳回第一页
                $.fn.fullpage.moveTo(1)

            });
        }
    });
});