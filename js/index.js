;
(function ($) {
    /**鼠标放上去的效果 */
    function addActive() {
        $(this).addClass('active')
        $(this).siblings().removeClass('active');
    }

    function removeActive() {
        $(this).removeClass('active')
    }
    $('.top-nav ul .top-nav-item').on('mouseenter', addActive);
    $('.top-nav ul .top-nav-item').on('mouseleave', removeActive);

    /**焦点图按钮点击 */
    $('.focus-btn-item').on('click', addActive);
    /**表单验证 */
    //全局验证变量
    var bUsername = 0,
        bEmail = 0,
        bPwd = 0,
        bVerify = 0;
    var oForm = $('form')[0],
        aUsername = $(oForm.username),
        aEmail = $(oForm.email),
        aMessage = $(oForm.message),
        aBtn = $(oForm.button);

    function getLen(str) {
        return str.replace(/[\u4e00-\u9fa5]/g, 'aa').length;
    }

    function setError(sMsg) {
        alert(sMsg)
        return false;
    }

    function setOk(sMsg) {
        alert(sMsg)
    }

    function checkForm() {
        var useNameVal = aUsername.val(),
            emailVal = aEmail.val(),
            messageVal = aMessage.val();
        var reg1 = /^\s+$/;
        //用户名仅支持中英文、数字和下划线,且不能为纯数字
        var reg2 = /[^a-z\u4e00-\u9fa5_\d]/i
        var reg3 = /^\d+$/;
        /**邮箱验证 */
        var reg4 = reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        //什么都没有输入
        if (useNameVal == '') {
            setError('请输入你的姓名')
            return false;
        }
        //全空验证
        else if (reg1.test(useNameVal)) {
            setError('姓名不能为空');
            return false;
        }
        //长度验证:用户名不能超过7个汉字或14个字符
        else if (getLen(useNameVal) > 14) {
            setError('姓名不能超过7个汉字或14个字符');
            return false;
        } else if (reg2.test(useNameVal) || reg3.test(useNameVal)) {
            setError('姓名仅支持中英文、数字和下划线,且不能为纯数字');
            return false;
        }
        /**验证邮箱 */
        if (emailVal == '') {
            setError('请输入你的邮箱')
            return false;
        }
        //全空验证
        else if (reg1.test(emailVal)) {
            setError('请输入正确的邮箱');
            return false;
        }
        //长度验证:用户名不能超过7个汉字或14个字符
        else if (!reg4.test(emailVal)) {
            setError('邮箱格式不正确');
            return false;
        }
        /**信息验证 */

        if (messageVal == '') {
            setError('请输入信息')
            return false;
        }
        //全空验证
        else if (reg1.test(messageVal)) {
            setError('信息不能为空');
            return false;
        } else {
            setOk('提交成功')
        }
    }
    aBtn.on('click', checkForm)
    /**表单验证结束 */
    /**楼层控制 */
    var fSideBar = $('.sidebar').offset().top,
        fSolution = $('.solution').offset().top,
        fDetails = $('.details').offset().top,
        fContact = $('.contact').offset().top,
        $winTop = $(window).scrollTop();

    var gun = true

    $('.elevator-item').eq(0).on('click',e => {
        gun = false
        $("body,html").animate({
                scrollTop: fSideBar
            },
            330,
            addActive
        );
    })
    $('.elevator-item').eq(1).on('click',e => {
        $("body,html").animate({
                scrollTop: fSolution
            },
            330,
            addActive
        );
    })
    $('.elevator-item').eq(2).on('click',e => {
        $("body,html").animate({
                scrollTop: fDetails
            },
            330,
            addActive
        );
    })
    $('.elevator-item').eq(3).on('click',e => {
        $("body,html").animate({
                scrollTop: fContact
            },
            330,
            addActive
        );
    })
    function $elevatorAddClass(num){
        $('.elevator-item').removeClass('active')
        $('.elevator-item').eq(num).addClass('active')
    }
    $(window).scroll(() => {
        let top = $(window).scrollTop()
        if(top >= fSideBar){
            $('.elevator').css('opacity',1)
        }else{
            $('.elevator').css('opacity',0)
        }
        if (top >= fSideBar && top < fSolution) {
            console.log('aa')
            $elevatorAddClass(0)
        } else if (top >= fSolution && top < fDetails) {
            $elevatorAddClass(1)
        } else if (top >= fDetails && top < fContact) {
            $elevatorAddClass(2)
        } else if (top >= fContact) {
            $elevatorAddClass(3)
        }
    })

})(jQuery)