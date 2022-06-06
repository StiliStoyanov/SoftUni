function rectangle(width, height, color ) {
    
    let rect = {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea(){
            return this.width * this.height
        }
    }
    return rect
}

