function triangle(r_x, r_y, r, angle) {
    let width = 30
    let base = {
        x: r_x - r * Math.cos(angle),
        y: r_y - r * Math.sin(angle),
    }
    let node = []
    let first = {
        x: base.x - width * Math.sin(angle),
        y: base.y + width * Math.cos(angle)
    }
    let second = {
        x: base.x + width * Math.sin(angle),
        y: base.y - width * Math.cos(angle)
    }
    let third = {
        x: r_x - (r + 1.2 * width) * Math.cos(angle),
        y: r_y - (r + 1.2 * width) * Math.sin(angle),
    }
    node.push(first, second, third)
    return node
}
export function canvasSoh(sohResult, soh_id) {

    //首先，找到 <canvas> 元素:
    var c = document.getElementById(soh_id);
    //检测浏览器的支持性
    // if (!c.getContext) return;
    //然后，创建 context 对象：
    var context = c.getContext("2d")
    console.log(22222222222,context)
    
    let r = 360
    let width = 50
    let soh_color = "#ff0000"
    let circle_x = 370
    let circle_y = r + width / 2
    let circle_r = r
    let circle_w = width
    let soh = parseFloat(sohResult) || 0
    
    
    context.lineWidth=circle_w
    context.strokeStyle="#b5b5b5"
    context.arc(circle_x, circle_y, circle_r, 7* Math.PI / 6, 11 * Math.PI / 6, false)
    context.stroke()
    if (soh > 72) {
        context.beginPath()
        context.lineWidth=circle_w
        context.strokeStyle="#50a901"
        context.arc(circle_x, circle_y, circle_r, (7 * Math.PI / 6) + (0.72 * 2 / 3 * Math.PI) - 0.005, 11 * Math.PI / 6, false)
        context.stroke()
        soh_color = "#50a901"
    }
    else if (soh < 48 && soh > 0) {
        context.beginPath()
        context.lineWidth=circle_w
        context.strokeStyle="#ff0000"
        context.arc(circle_x, circle_y, circle_r, 7 * Math.PI / 6, (7 * Math.PI / 6) + (0.48 * 2 / 3 * Math.PI) - 0.005, false)
        context.stroke()
        soh_color = "#ff0000"
    }
    else if (soh >= 48 && soh <= 72) {
        context.beginPath()
        context.lineWidth=circle_w
        context.strokeStyle="#ffa500"
        context.arc(circle_x, circle_y, circle_r, (7 * Math.PI / 6) + (48 / 100 * 2 / 3 * Math.PI) - 0.005, (7 * Math.PI / 6) + (72 / 100 * 2 / 3 * Math.PI) + 0.005, false)
        context.stroke()
        soh_color = "#ffa500"
    }
    for (let js = 1; js < 10; js++) {
        context.beginPath()
        context.lineWidth=20
        context.strokeStyle="#ffffff"
        let begin = (7 * Math.PI / 6) + (js * 10 / 100 * 2 / 3 * Math.PI)
        context.arc(circle_x, circle_y, circle_r - 6, begin - 0.005, begin + 0.005, false)
        context.stroke()
    }
    context.beginPath()
    context.lineWidth=circle_w
    context.strokeStyle="#ffffff"
    let begin = (7 * Math.PI / 6) + (48 / 100 * 2 / 3 * Math.PI)
    context.arc(circle_x, circle_y, circle_r, begin - 0.005, begin + 0.005, false)
    context.stroke()

    context.beginPath()
    context.lineWidth=circle_w
    context.strokeStyle="#ffffff"
    begin = (7 * Math.PI / 6) + (72 / 100 * 2 / 3 * Math.PI)
    context.arc(circle_x, circle_y, circle_r, begin - 0.005, begin + 0.005, false)
    context.stroke()

    if (soh > 0) {
        context.beginPath()
        begin = (Math.PI / 6) + (soh / 100 * 2 / 3 * Math.PI)
        context.fillStyle=soh_color
        context.lineWidth=1
        let node = triangle(circle_x, circle_y, circle_r - 70, begin)
        context.moveTo(node[0].x, node[0].y)
        context.lineTo(node[1].x, node[1].y)
        context.lineTo(node[2].x, node[2].y)
        context.lineTo(node[0].x, node[0].y)

        context.fill()
    }
    // context.draw()
}