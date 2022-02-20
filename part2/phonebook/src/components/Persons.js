const Person = ({person}) => (
  <tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
  </tr>
)

const Persons = ({persons, filter}) => {
  return (
    <table>
      <tbody>
        {persons
          .filter(person => 
            person.name.toLowerCase().includes(filter.toLowerCase()))
          .map((person) => 
            <Person key={person.id} person={person} />)
        }
      </tbody>
    </table>
  )
}

export default Persons