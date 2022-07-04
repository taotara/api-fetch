import Button from "./Button"

const Form = ({ reqTytpe, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
    <Button 
        buttonText="users"
        reqType={reqTytpe}
        setReqType={setReqType}
    />
    <Button 
        buttonText="posts"
        reqType={reqTytpe}
        setReqType={setReqType}
    />
    <Button 
        buttonText="comments"
        reqType={reqTytpe}
        setReqType={setReqType}
    />
    </form>
  )
}

export default Form