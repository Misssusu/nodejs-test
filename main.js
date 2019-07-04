btn.addEventListener('click',function() {
    let image = document.createElement('img')
    image.src = '/pay'
    image.onload = function() {
        amount.innerText = amount.innerText-1;
        alert('付款成功')
    }
    image.onerror = function() {
        alert('付款失败')
    }
})