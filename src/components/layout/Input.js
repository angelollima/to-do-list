function Input(props) {
  return (
    <input type={props.type} onChange={props.onChange} placeholder={props.placeholder} value={props.value} />
  )
}

export default Input
