function rectangle(width, height, color) {
    color = color.split('');
    const first = color[0].toUpperCase();
    const left = color.slice(1).join('');
    color =  first + left;
    const rect = {
        width,
        height,
        color,
        calcArea() { return this.width * this.height; }
    }
    return rect;
}
rectangle(4, 5, 'red');