import './customButton.style.css';

const CustomButton = ({children, accentColored, primaryColored, paraStyled, normalColored}) => {
    return(
        <button className={
            `
                ${accentColored? 'accent' : ''} 
                ${primaryColored? 'primary': ''} 
                ${paraStyled? 'para_style' : ''}
                ${normalColored? 'normal' : ''}
            `
        }>{children}</button>
    )
}

export default CustomButton;