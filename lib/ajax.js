(function () {

    var heima = {
        get: function (url, data, callback) {
            // 创建异步对象
            var ajax = new XMLHttpRequest();

            // 设置请求行
            // 把数据跟url合并起来
            url += '?';
            url += data;
            ajax.open('get', url);

            // 设置请求头

            // 注册回调函数
            ajax.onload = function () {
                // 回调函数中的逻辑是不确定的
                // console.log(ajax.responseText);
                callback(ajax.responseText);
            }

            // 设置请求主体
            ajax.send(null);
        },
        post: function (url, data, callback) {
            // 创建异步对象
            var ajax = new XMLHttpRequest();

            // 设置请求行
            ajax.open('post', url);

            // 设置请求头
            ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

            // 注册回调函数
            ajax.onload = function () {
                callback(ajax.responseText);
            }

            // 设置请求主体
            ajax.send(data);
        }
    }

    // 暴露出去
    window.heima = window.HM= heima;
}(window))