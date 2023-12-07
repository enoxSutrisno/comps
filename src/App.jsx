import Button from "./Button"
import { CgArrowTopLeftR, CgArrowsExpandLeftAlt } from "react-icons/cg";


function App() {
  const handleClick = () => {
    console.log('click')
  }
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <CgArrowTopLeftR />
          Clcik</Button>
      </div>

      <div>
        <Button secondary outline onMouseLeave={handleClick}>
          <CgArrowsExpandLeftAlt />
          buy now</Button>
      </div>
      <div>
        <Button success outline>see deal</Button>
      </div>
      <div>
        <Button warning outline>hide ads</Button>
      </div>
      <div>
        <Button danger outline>somethng</Button>
      </div>
    </div>
  )
}

export default App
