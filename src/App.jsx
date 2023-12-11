import Accordion from "./componets/Accordion"



function App() {

  const items = [
    {
      id: 'l2kj5',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project You can use React on any project You can use React on any project You can use React on any project'

    },
    {
      id: 'lksduh12',
      label: 'Can I use JS on a project?',
      content: 'You can use JS on any project You can use JS on any project You can use React on any project You can use React on any project'

    },
    {
      id: 'likasdwe12',
      label: 'Can I use CSS on a project?',
      content: 'You can use CSS on any project You can use CSS on any project You can use React on any project You can use React on any project'

    },
  ]


  return (
    <Accordion items={items} />
  )
}

export default App
