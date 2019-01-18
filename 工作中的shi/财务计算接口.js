$(function () {
    checkCustomize =function () {
                /**foo (resAdds,bzAdds,tsAdds,rsAdds)
                 * foo(计算结果，标准，天数，人数)
                 * 
                 * 需求：天数 小于 0.5 标准*人数*天数*0.6
                 *      天数大于0.5小于2的 标准*人数*天数
                 *      天数 大于 2  ：2天的 按标准计算 其余的*0.6
                 * 
                 * 注意：1.每次给结果字段赋值 都要return一个值出去，原因未知.
                 *      2. es6不可用 
                 */
             var foo1 = foo('#field6242','#field6240','#field6239','#field6241')
             var foo2 = foo('#field6246','#field6244','#field6243','#field6245')
             var foo3 = foo('#field6250','#field6248','#field6247','#field6249')
             return foo1, foo2, foo3


            function foo (resAdds,bzAdds,tsAdds,rsAdds) {
                var 
                bz1 = parseFloat($(bzAdds).val()),
                ts1 = parseFloat($(tsAdds).val()),
                rs1 = parseFloat($(rsAdds).val())
                jd1 = parseFloat(bz1*rs1)

                if (ts1<0.6) {
                    return $(resAdds).val(bz1 * 0.6 * rs1)
                } else if(ts1<2) {
                    return $(resAdds).val(jd1 * ts1)   
                }else {
                    return $(resAdds).val(2*jd1+(ts1-2)*jd1*0.6)
                }
            } 
    }
    
})



