btn.addEventListener('click',function() {
    let request = new XMLHttpRequest()
    request.open('get','/xxx')
    request.send()
    request.onreadystatechange = function() {
        console.log(request.readyState)
        if(request.readyState === 4 && request.status === 200){
            console.log(request.readyState)
            console.log('请求成功')
            let string = request.responseText;
            let obj = JSON.parse(string)
            let name = obj.name;
            console.log(name)
        }else if(request.readyState >= 400 ) {
            console.log('请求失败')
        }
    }
})