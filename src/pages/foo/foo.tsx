import {FunctionComponent} from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'

const Foo: FunctionComponent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Foo</CardTitle>
        <CardDescription>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:</CardDescription>
      </CardHeader>
      <CardContent>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </CardContent>
    </Card>
  )
}

export default Foo
