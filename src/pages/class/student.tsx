import {getStudentById} from '@/api/studentApi.ts'
import {FunctionComponent} from 'react'
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card.tsx'

const Student: FunctionComponent = () => {
  const student = getStudentById(-1)

  if (!student) {
    return <div>Student could not be found</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{student?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Id: {student?.id}</p>
        <p>Grade: {student?.grade}</p>
      </CardContent>
      <CardFooter className="cursor-pointer">Back</CardFooter>
    </Card>
  )
}

export default Student
