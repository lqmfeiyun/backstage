//通过切换图片达成下拉菜单的图标变化
$(function(){
	$(".menu div img").attr("src","img/select_xl01.png");
	$(".menu div").click(function(){
		$(this).parent().find('dd').removeClass("a");
		if($(this).parent().find('dd').css("display")=='none'){
			$('dl img').attr("src","img/select_xl01.png");
			$(this).parent().find('img').attr("src","img/select_xl.png");
		}else{
			$(this).parent().find('img').attr("src","img/select_xl01.png");
		}
		$(".a").slideUp();//隐藏被选元素
		$(this).parent().find('dd').slideToggle();//滑动隐藏
		$(this).parent().find('dd').addClass("a");
	});
});
//
/*$(function(){
	$(".menu dd a").click(function () {
    	$(".contects").load("raffle_use.html");
    });
});
$(function(){
	$(".menu dd a").ready(function(){
		 $.get($(this).attr("href"), function (r) {
        $(".contects").html(r);
    }, "html");
    return false;
});
});*/
/*$(function(){
	$(".menu dd a").click(function () {
    	document.getElementById(".contects").innerHTML="raffle_use.html";
    	
    });
});*/
//编辑
$(function(){
      $('.dropdown-toggle').dropdown()
});
$(function(){
    $("#soc1").click(function(){
    	$(".sws1").hide();
  		$(".yks1").show();
  	});
  	$("#ssw1").click(function(){
  		$(".yks1").hide();
  		$(".sws1").show();
  	});
  	 $("#soc2").click(function(){
  		$(".sws2").hide();
  		$(".yks2").show();
  	});
  	$("#ssw2").click(function(){
  		$(".yks2").hide();
  		$(".sws2").show();
  	});
});
//添加
$(function(){
	//下拉列表
    $("#yks11").click(function(){
    	$(".asw1").hide();
  		$(".ayk1").show();
  	});
  	$("#sws11").click(function(){
  		$(".ayk1").hide();
  		$(".asw1").show();
  	});
  	$("#yks12").click(function(){
    	$(".asw2").hide();
  		$(".ayk2").show();
  	});
  	$("#sws12").click(function(){
  		$(".ayk2").hide();
  		$(".asw2").show();
  	});
});
//上传文件
$(function(){
 	/*$("#file-0").fileinput({
	    'allowedFileExtensions' : ['jpg', 'png','gif'],
	});
	$("#file-1").fileinput({
	    uploadUrl: '#', // you must set a valid URL here else you will get an error
	    allowedFileExtensions : ['jpg', 'png','gif'],
	    overwriteInitial: false,
	    maxFileSize: 1000,
	    maxFilesNum: 10,
	    //allowedFileTypes: ['image', 'video', 'flash'],
	    slugCallback: function(filename) {
	        return filename.replace('(', '_').replace(']', '_');
	    }
	});*/
	$(".file-3").fileinput({
		showUpload: false,
		showCaption: false,
		browseClass: "btn btn-primary btn-lg",
		fileType: "any",
	});
	/*$("#file-4").fileinput({
		uploadExtraData: {kvId: '10'}
	});
	$(".btn-warning").on('click', function() {
	    if ($('#file-4').attr('disabled')) {
	        $('#file-4').fileinput('enable');
	    } else {
	        $('#file-4').fileinput('disable');
	    }
	});    
	$(".btn-info").on('click', function() {
	    $('#file-4').fileinput('refresh', {previewClass:'bg-info'});
	});
	$(document).ready(function() {
	    $("#test-upload").fileinput({
	        'showPreview' : false,
	        'allowedFileExtensions' : ['jpg', 'png','gif'],
	        'elErrorContainer': '#errorBlock'
	    });
	});*/
});
