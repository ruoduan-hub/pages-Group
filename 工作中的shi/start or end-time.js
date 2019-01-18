$(function () {
	
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