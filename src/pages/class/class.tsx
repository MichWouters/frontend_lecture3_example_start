import {Link} from 'react-router-dom'
import {getAllStudents} from '@/api/studentApi.ts'
import {FunctionComponent, ReactElement} from 'react'
import Student from '@/models/student.ts'
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card.tsx'
import {Separator} from '@/components/ui/separator.tsx'

const Class: FunctionComponent = () => {
  const students = getAllStudents()

  const studentItem = (s: Student, separator: boolean = true): ReactElement => (
    <div key={s.id} className="hover:bg-accent rounded">
      <div className="p-2">
        <Link to={`/TODO: Aanpassen`}>{s.name}</Link>
      </div>

      {separator && <Separator />}
    </div>
  )

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Class</CardTitle>
        </CardHeader>
        <CardContent>{students.map((s, i) => studentItem(s, i !== students.length - 1))}</CardContent>
        <CardFooter>
          <Link to={'/'}>Back</Link>
        </CardFooter>
      </Card>
    </>
  )
}

export default Class
