
    document.body.onload = () => {
        let body = document.querySelector( 'body' );
        let button = document.createElement( 'button' );
        let allBodyElements = document.querySelectorAll( 'body *' );
        body.insertBefore( button, allBodyElements[ 0 ] );
        button = document.querySelector( 'button' );
        button.setAttribute ( 'id', 'SWITCH' );
        SWITCH.style.position = 'fixed';
        SWITCH.style.top = '0';
        SWITCH.style.right = '0';
        SWITCH.style.zIndex = '9999';
        SWITCH.style.width = '15px';
        SWITCH.style.height = '15px';
        SWITCH.style.opacity = '.5';
        SWITCH.style.backgroundColor = 'red';
        SWITCH.onclick = ( () => {
            let elements = document.querySelectorAll( '*' );
            elements.forEach( ( element ) => {
                element.style.outline = ( element.style.outline == '' ) ? '1px dashed red' : '';
                element.style.outlineOffset = ( element.style.outlineOffset == '' ) ? '-1px' : '';
            } );
        } );
    };
