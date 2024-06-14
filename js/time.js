// 获取时间js文件

// 获取本地时间并实时更新显示
function updateLocalTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN', { hour12: false });
    document.getElementById('local-time').textContent = `当前时间：${timeString}`;
}

// 每秒更新一次时间
setInterval(updateLocalTime, 1000);

// 页面加载时先更新时间
updateLocalTime();
