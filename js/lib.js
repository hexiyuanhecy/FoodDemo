// JavaScript Document
$(function(){
	/*$('#menu-nav .navbar-collapse a').click(function(e){
		var href=$(this).attr("href");
		var tabId=$(this).attr("data-tab");
		if(href !=="#"){
			
			$(document).scrollTop($(href).offset().top-50);
			if(tabId){
				$("#feature-tab a[href=#"+tabId+"]").tab("show");
			}
		}
	});*/
	
	$("#food").click(function(){
		window.open("food1.html");
	});
	$("#activity").click(function(){
		window.open("activity.html");
	});
	$("#guanli").click(function(){
		window.open("guanli.html");
	});

});

	 $('#zhuce').on('click',function(){
            var username = $('.username').val();
            var mima = $('.mima').val();
            var repeatmima = $('.repeatmima').val();
            if(!username){
                $('.username').focus();
                document.querySelector('.username').placeholder = '请填写用户名';
                return
            }
            if(!mima){
                $('.mima').focus();
                document.querySelector('.mima').placeholder = '请填写密码';
                return
            }
            if(!repeatmima){
                $('.repeatmima').focus();
                document.querySelector('.repeatmima').placeholder = '请填写重复密码';
                return
            }
            if(repeatmima !== mima){
                $('.repeatmima').focus();
                document.querySelector('.repeatmima').value = '';
                document.querySelector('.repeatmima').placeholder = '两次密码不一致';
                return
            }

            $(this).prop('disabled',true);
            alert('注册成功');
        })

