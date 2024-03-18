type ButtonProps = {
  type: 'button';
  title: string;
  icon?: string;
}

const Button = ({type,  title}: ButtonProps) => {
  return (
    <button type={type}>PL</button>
  )
}

export default Button