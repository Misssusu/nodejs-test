btn.addEventListener('click',function() {
    let script = document.createElement('script')
    script.src = '/pay';
    document.body.appendChild(script)
    script.onload = function(e) {
        e.currentTarget.remove() //删除添加的script标签
    }
    script.onerror = function() {
        alert('付款失败')
    }
})