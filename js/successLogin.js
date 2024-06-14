// 登录js文件，作用为监听跳转
document.addEventListener('DOMContentLoaded', function() {
    // 获取登录表单
    const loginForm = document.getElementById('loginForm');

    // 添加表单提交事件监听器
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止默认提交行为

        // 假设验证通过
        const isValid = true;

        if (isValid) {
            alert ('登录成功！')
            window.location.href = 'index.html';
        }
    });
});
