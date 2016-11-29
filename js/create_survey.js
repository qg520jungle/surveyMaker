/*用于生成html 标签专用js*/
(function ($) {
	 $.fn.survey = function (method) {
	      // Method calling and initialization logic
	      if (methods[method]) {
	          return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	      } else {
	          return methods.init.apply(this, arguments);
	      }
	  };
	  $.fn.good = addSubject;
	 
	//$.fn.createSurvey = function(options) {
		//return this.each(function(index, el) {
			var defaultOpt = {
				title: "请输入题目",
				rowNum: 1,
				type: "radio",
				data: [],
			}
	var edit = function () {

	};
		//})
	//}
	var that//当前引用对象
	var methods = {
		init: function(){
			that = this
			load_header()
			headerBindingEvent()
		},
		add: function(){
			alert("aaaaa");
		}
	}
	var list="";
	var headerarr=[
			{
				type:"radio",
				data:"单选"
			},
			{
				type:"checkbox",
				data:"多选"
			},
			{
				type:"filled",
				data:"填空"
			},
			{
				type:"img",
				data:"添加图片"
			},
			{
				type:"info",
				data:"个人信息"
			},
		]
	function load_header(el){
		var html='';
		html = nav_all(headerarr);
		that.append(html)
	}
	function nav_all(arr){
		var str=''
		str = '<ul class="m-edit-bar f-cb survey-handle-sur-bar">'
		if(arr){
			for(var i=0;i<arr.length;i++){
				str+='<li class="u-edit-item">';
				str+='<a class="survey-handle" sv-type="'+arr[i].type+'">';
				str+=arr[i].data;
				str+='</a>';
				str+='</li>';
			}
		}else{
			str +=''
		}
		str += '</ul>';
		return str
	}
	function headerBindingEvent(){
		$('.survey-handle').on('click',function(){
			var type = $(this).attr('sv-type');
			var obj={
				"type":type
			}
			addSubject(obj)
		})
	}
	function addSubject(obj){
		alert(obj.type)
	}
})(jQuery);
$(function(){
	$('.j-editor').survey();
	$('.j-editor').survey('add');
	$('.j-editor').good({type:"ddd"});
	//$('.j-handle-2').survey('add','a');
})