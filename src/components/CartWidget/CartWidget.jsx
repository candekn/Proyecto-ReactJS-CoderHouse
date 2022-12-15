export const CartWidget = () => {
    const cantidad = 1;
    return (
        <div className="icono-carrito">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512">
                <g>
                    <g>
                        <g>
                            <g>
                                <polygon points="311.2,365.5 63,365.5 11,126.7 250.7,126.7 250.7,146.5 36.5,146.5 79.9,345.7 296.3,345.7 416.2,11 501,11       501,31.9 431,31.9     " />
                            </g>
                            <g>
                                <g>
                                    <path d="m262.4,501c-29.7,0-54.1-24-54.1-54.2 0-30.2 24.4-54.2 54.1-54.2s54.1,24 54.1,54.2c0,30.2-24.4,54.2-54.1,54.2zm0-87.6c-19.1,0-33.9,15.6-33.9,33.4 0,18.8 14.8,33.4 33.9,33.4s33.9-15.6 33.9-33.4c5.68434e-14-18.8-15.9-33.4-33.9-33.4z" />
                                </g>
                                <g>
                                    <path d="m108.6,501c-29.7,0-54.1-24-54.1-54.2 0-30.2 24.4-54.2 54.1-54.2s54.1,24 54.1,54.2c0,30.2-24.4,54.2-54.1,54.2zm0-87.6c-19.1,0-33.9,15.6-33.9,33.4 0,18.8 14.8,33.4 33.9,33.4s33.9-15.6 33.9-33.4c-1-18.8-15.9-33.4-33.9-33.4z" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

            <span className="text-light fs-5">{cantidad}</span>
        </div>
    )
}
