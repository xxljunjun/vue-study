function rpx(px) {

    return uni.upx2px((px / 2732) * 750)
}
function triangle(r_x,r_y,r,angle){
    let width=30
   let base={
       x:r_x-r*Math.cos(angle),
       y:r_y-r*Math.sin(angle),
   }
   let node=[]
    let first={
       x:base.x-rpx(width)*Math.sin(angle),
       y:base.y+rpx(width)*Math.cos(angle)
    }
    let second={
        x:base.x+rpx(width)*Math.sin(angle),
        y:base.y-rpx(width)*Math.cos(angle)
    }
    let third={
        x:r_x-(r+rpx(1.2*width))*Math.cos(angle),
        y:r_y-(r+rpx(1.2*width))*Math.sin(angle),
    }
    node.push(first,second,third)
    return node
}
export  function   canvasSoh(sohResult,soh_id){
    let r=360
    let width=50
    let soh_color="#ff0000"
    let circle_x=rpx(370)
    let circle_y=rpx(r+width/2)
    let circle_r=rpx(r)
    let circle_w=rpx(width)
    let soh=parseFloat(sohResult)||0
    let context = uni.createCanvasContext(soh_id)
    context.setLineWidth(circle_w)
    context.setStrokeStyle("#b5b5b5")
    context.arc(circle_x, circle_y, circle_r, 7* Math.PI/6,11*Math.PI/6,  false)
    context.stroke()
    if(soh>72){
        context.beginPath()
        context.setLineWidth(circle_w)
        context.setStrokeStyle("#50a901")
        context.arc(circle_x, circle_y, circle_r, (7* Math.PI/6)+(0.72*2/3*Math.PI)-0.005,11*Math.PI/6,  false)
        context.stroke()
        soh_color="#50a901"
    }
    else if(soh<48&&soh>0){
        context.beginPath()
        context.setLineWidth(circle_w)
        context.setStrokeStyle("#ff0000")
        context.arc(circle_x, circle_y, circle_r, 7*Math.PI/6,(7* Math.PI/6)+(0.48*2/3*Math.PI)-0.005,  false)
        context.stroke()
        soh_color="#ff0000"
    }
    else if(soh>=48&&soh<=72) {
        context.beginPath()
        context.setLineWidth(circle_w)
        context.setStrokeStyle("#ffa500")
        context.arc(circle_x, circle_y, circle_r, (7* Math.PI/6)+(48/100*2/3*Math.PI)-0.005,(7* Math.PI/6)+(72/100*2/3*Math.PI)+0.005,  false)
        context.stroke()
        soh_color="#ffa500"
    }
    for(let js=1;js<10;js++){
        context.beginPath()
        context.setLineWidth(rpx(20))
        context.setStrokeStyle("#ffffff")
        let begin=(7* Math.PI/6)+(js*10/100*2/3*Math.PI)
        context.arc(circle_x, circle_y, circle_r-6, begin-0.005,begin+0.005,  false)
        context.stroke()
    }
    context.beginPath()
    context.setLineWidth(circle_w)
    context.setStrokeStyle("#ffffff")
    let begin=(7* Math.PI/6)+(48/100*2/3*Math.PI)
    context.arc(circle_x, circle_y, circle_r, begin-0.005,begin+0.005,  false)
    context.stroke()

    context.beginPath()
    context.setLineWidth(circle_w)
    context.setStrokeStyle("#ffffff")
    begin=(7* Math.PI/6)+(72/100*2/3*Math.PI)
    context.arc(circle_x, circle_y, circle_r, begin-0.005,begin+0.005,  false)
    context.stroke()

    if(soh>0) {
        context.beginPath()
        begin = (Math.PI / 6) + (soh / 100 * 2 / 3 * Math.PI)
        context.setFillStyle(soh_color)
        context.setLineWidth(1)
        let node = triangle(circle_x, circle_y, circle_r - rpx(70), begin)
        context.moveTo(node[0].x, node[0].y)
        context.lineTo(node[1].x, node[1].y)
        context.lineTo(node[2].x, node[2].y)
        context.lineTo(node[0].x, node[0].y)

        context.fill()
    }
    context.draw()
}
export  function canvasLine(data,canvasId,max,min,current,unit) {

        let signLength = rpx(15)
        let wordWidth = rpx(70)
        let context = uni.createCanvasContext(canvasId)
        let height = rpx(210)
        let heightTotal = height + signLength
        let width = rpx(620)
        let widthTotal = width + wordWidth + signLength
    if(data.length>0) {
        let baseWidth = width / (data.length - 1)
        let baseHeight = (height) / (max - min)
        let begin = data.length;
        current=current||min
        context.setStrokeStyle("#b5b5b5")
        context.moveTo(wordWidth, heightTotal - (max - min) * baseHeight)
        context.lineTo(widthTotal, heightTotal - (max - min) * baseHeight)
        context.moveTo(wordWidth, heightTotal)
        context.lineTo(widthTotal, heightTotal)
        context.moveTo(wordWidth, heightTotal - (current - min) * baseHeight)
        context.lineTo(widthTotal, heightTotal - (current - min) * baseHeight)
        context.stroke()

        context.beginPath()
        context.setFillStyle("#50a901")
        context.setStrokeStyle("#50a901")
        context.moveTo(widthTotal - baseWidth * (begin - 1), heightTotal)
        data.forEach(item => {
            begin--
            context.lineTo(widthTotal - begin * baseWidth, heightTotal - (item - min) * baseHeight)
            console.info(begin)

        })
        context.lineTo(widthTotal, heightTotal)
        context.lineTo(signLength, heightTotal)
        context.fill()

        context.beginPath()
        context.setStrokeStyle("#000000")
        context.setFontSize(rpx(24))
        context.setTextAlign("right")
        context.setTextBaseline("bottom")
        context.strokeText(max + (unit || ''), wordWidth, heightTotal - (max - min) * baseHeight + rpx(12), wordWidth)
        context.strokeText(min + (unit || ''), wordWidth, heightTotal + rpx(12), wordWidth)
        context.strokeText(current + (unit || ''), wordWidth, heightTotal - (current - min) * baseHeight + rpx(12), wordWidth)

    }
    else {
        context.beginPath()
        context.setStrokeStyle("#000000")
        context.setFontSize(rpx(24))
        context.setTextAlign("right")
        context.setTextBaseline("bottom")
        context.strokeText(0 + (unit || ''), wordWidth, (height + 2 * signLength)/2 + rpx(12),wordWidth)
        context.strokeText(0 + (unit || ''), wordWidth, (height +  signLength) + rpx(12),wordWidth)
        context.strokeText(0 + (unit || ''), wordWidth,   signLength + rpx(12),wordWidth)
        context.moveTo(wordWidth,(height + 2 * signLength)/2)
        context.lineTo(widthTotal,(height + 2 * signLength)/2)
    }

    context.moveTo(wordWidth + signLength, 0)
    context.lineTo(wordWidth + signLength, height + 2 * signLength)
    context.stroke()
    context.draw()


}
