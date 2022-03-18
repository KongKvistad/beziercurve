// a setup file takes coordinates and randers the "thing"
// to the screen ONCE.

function setupBezier(anchorWidth, anchorHeight){

    //imagine you chunk the coordinate space into 12 "chunks".

    // EpIc hAckEr brAinZ
    
    //   __1__2__3__4__5__6__7__8__9__10_11_12 |
    // 1|  #  #  #  #  #  #  #  #  #  #  #  #  |
    // 2|  #  #  #  #  #  #  #  #  #  #  #  #  |
    // 4|  #  #  #  #  #  #  #  #  #  #  #  #  |
    // ...

    let xGrid = anchorWidth / 12
    let yGrid = anchorHeight / 12
    
    const p1 = {
      x: xGrid * 2,
      y: yGrid * 8
    }
    
    //controll point. 
    const p2 = {
        x: xGrid * 4,
        y: yGrid * 4
      }
    
    //controll point. 
    const p3 = {
        x: xGrid * 8,
        y: yGrid * 4
    }
    
  
    const p4 = {
        x: xGrid * 10,
        y: yGrid * 8
    }
    
    noFill()
    stroke(250);
    
    bezier(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y)

    // finally append this value to global object to make
    // read properties accecible by draw function 
    return {p1,p2,p3,p4}
}