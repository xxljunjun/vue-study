export function canvasLine(data, canvasId, max, min, current, unit) {
    //首先，找到 <canvas> 元素:
    var c = document.getElementById(canvasId);
    //检测浏览器的支持性
    // if (!c.getContext) return;
    //然后，创建 context 对象：
    
    
    //定义变量
    let signLength = 15
    let wordWidth = 70
    let height = 210
    let width = 620
    let heightTotal = height + signLength //225
    let widthTotal = width + wordWidth + signLength //705

    if (data.length > 0) {
        let baseWidth = width / (data.length - 1)
        let baseHeight = (height) / (max - min)
        let begin = data.length;
        current = current || min
        var context = c.getContext("2d")
        console.log("111111111111111",context)
        context.strokeStyle="#b5b5b5"
        context.moveTo(wordWidth, heightTotal - (max - min) * baseHeight)
        context.lineTo(widthTotal, heightTotal - (max - min) * baseHeight)
        context.moveTo(wordWidth, heightTotal)
        context.lineTo(widthTotal, heightTotal)
        context.moveTo(wordWidth, heightTotal - (current - min) * baseHeight)
        context.lineTo(widthTotal, heightTotal - (current - min) * baseHeight)
        context.stroke()
        context.beginPath()
        context.fillStyle="#50a901"
        context.strokeStyle="#50a901"
        context.moveTo(widthTotal - baseWidth * (begin - 1), heightTotal)
        data.forEach(item => {
            begin--
            context.lineTo(widthTotal - begin * baseWidth, heightTotal - (item - min) * baseHeight)
            // console.info(begin)

        })
        context.lineTo(widthTotal, heightTotal)
        context.lineTo(signLength, heightTotal)
        context.fill()
        context.beginPath()
        context.strokeStyle="#000000"
        context.font=24
        context.setTextAlign="right"
        context.setTextBaseline="bottom"
        context.strokeText(max + (unit || ''), wordWidth, heightTotal - (max - min) * baseHeight + 12, wordWidth)
        context.strokeText(min + (unit || ''), wordWidth, heightTotal + 12, wordWidth)
        context.strokeText(current + (unit || ''), wordWidth, heightTotal - (current - min) * baseHeight + 12, wordWidth)

    }
    else {
        context.beginPath()
        context.strokeStyle="#000000"
        context.font=24
        context.setTextAlign="right"
        context.setTextBaseline="bottom"
        context.strokeText(0 + (unit || ''), wordWidth, (height + 2 * signLength) / 2 + 12, wordWidth)
        context.strokeText(0 + (unit || ''), wordWidth, (height + signLength) + 12, wordWidth)
        context.strokeText(0 + (unit || ''), wordWidth, signLength + 12, wordWidth)
        context.moveTo(wordWidth, (height + 2 * signLength) / 2)
        context.lineTo(widthTotal, (height + 2 * signLength) / 2)
    }
    context.moveTo(wordWidth + signLength, 0)
    context.lineTo(wordWidth + signLength, height + 2 * signLength)
    context.stroke()
}