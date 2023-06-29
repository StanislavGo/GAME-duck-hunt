function createTarget() { 
    if(isGameOver) {
        return;
    } 

        let target  = document.querySelector('.target img');
        const onMouseMove = (e) => {
            target.style.left = e.pageX + 'px';
            target.style.top = e.pageY + 'px';
        }
        const onClick = () => {
            target.click(); // Simulate a click on the target element
          };
        
          const targetElement = document.querySelector('.target');
          targetElement.addEventListener('click', onClick);
        
          document.addEventListener('mousemove', onMouseMove);
          target.style.pointerEvents = 'none';
        }