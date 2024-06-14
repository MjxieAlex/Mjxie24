// 注册js文件，作用为限制错误以及监听跳转
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); //阻止默认提交行为

        let isValid = true; //记录表单是否有效

        // 获取表单元素
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const email = document.getElementById('email');
        const fullname = document.getElementById('fullname');
        const phone = document.getElementById('phone');
        const gender = document.getElementById('gender');
        const birthdate = document.getElementById('birthdate');
        const captcha = document.getElementById('captcha');

        // 获取错误提示元素
        const usernameError = document.getElementById('usernameError');
        const passwordError = document.getElementById('passwordError');
        const emailError = document.getElementById('emailError');
        const fullnameError = document.getElementById('fullnameError');
        const phoneError = document.getElementById('phoneError');
        const genderError = document.getElementById('genderError');
        const birthdateError = document.getElementById('birthdateError');
        const captchaError = document.getElementById('captchaError');

        // 清空错误提示
        usernameError.style.display = 'none';
        passwordError.style.display = 'none';
        emailError.style.display = 'none';
        fullnameError.style.display = 'none';
        phoneError.style.display = 'none';
        genderError.style.display = 'none';
        birthdateError.style.display = 'none';
        captchaError.style.display = 'none';

        // 验证用户名：至少需要3个字符
        if (username.value.length < 3) {
            usernameError.textContent = '用户名至少需要3个字符';
            usernameError.style.display = 'block';
            isValid = false;
        }

        // 验证密码：至少需要6个字符
        if (password.value.length < 6) {
            passwordError.textContent = '密码至少需要6个字符';
            passwordError.style.display = 'block';
            isValid = false;
        }

        // 验证Email：必须符合特定格式
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = '请输入有效的Email地址';
            emailError.style.display = 'block';
            isValid = false;
        }

        // 验证姓名：至少需要2个字符
        if (fullname.value.length < 2) {
            fullnameError.textContent = '姓名至少需要2个字符';
            fullnameError.style.display = 'block';
            isValid = false;
        }

        // 验证手机号：必须10到11位
        const phonePattern = /^[0-9]{10,11}$/;
        if (!phonePattern.test(phone.value)) {
            phoneError.textContent = '请输入有效的手机号';
            phoneError.style.display = 'block';
            isValid = false;
        }

        // 验证性别：必须选择
        if (gender.value === '') {
            genderError.textContent = '请选择性别';
            genderError.style.display = 'block';
            isValid = false;
        }

        // 验证出生日期：必须选择
        if (birthdate.value === '') {
            birthdateError.textContent = '请选择出生日期';
            birthdateError.style.display = 'block';
            isValid = false;
        }

        // 验证验证码：必须为6位数
        if (captcha.value.length !== 6) {
            captchaError.textContent = '验证码应为6位数';
            captchaError.style.display = 'block';
            isValid = false;
        }

        //验证通过情况：弹出提示
        if (isValid) {
            alert('注册成功!');
            window.location.href = 'index.html';
        }
        
    });
});
