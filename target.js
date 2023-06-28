function createTarget() { 
    if(isGameOver) {
        return;
    } 

        let target  = document.querySelector('.target img');
        const onMouseMove = (e) => {
            target.style.left = e.pageX + 'px';
            target.style.top = e.pageY + 'px';
        }
    document.addEventListener('mousemove', onMouseMove);

}

