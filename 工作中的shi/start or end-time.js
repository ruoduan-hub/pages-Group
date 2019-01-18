$(function () {
	//不 return 就卡死 写提交接口的 人脑子有shi把，callback 都用不了
	checkCustomize = function () {
		ifTime ('#field6106','#field6107') 
		function ifTime (t1adds,t2adds) {
			var t1 = $(t1adds).val()
			var t2 = $(t2adds).val()
			
			if (t1 > t2) {
				alert('开始时间不能大于结束时间')
			} else {
				return true
			}
		}
	}
	
})