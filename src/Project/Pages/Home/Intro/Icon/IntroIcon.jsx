export default ({image, id}) => {
    return (  
        <>
            <li className={`intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--${id+1}`}>
                <span 
                className="intro__animated-bg__frame__items__item__icon" 
                style={{WebkitMaskImage: `url( ${image} )`}}></span>
            </li>
        </>
        );
};