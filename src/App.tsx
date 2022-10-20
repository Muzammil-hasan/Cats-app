import { Cell, Column, Row, TableBody, TableHeader, TableView } from '@adobe/react-spectrum';
import Layout from './components/layout';

let columns = [
  { name: 'Name', uid: 'name' },
  { name: 'Type', uid: 'type' },
  { name: 'Date Modified', uid: 'date' },
];

let rows = [
  { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
  { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
  { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
  { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },
];

export default function App() {
  return (
    <Layout>
      <section className="flex items-center justify-center mx-16 mt-10 h-96">
        <div className="w-full h-full bg-white rounded-lg shadow-lg">
          <TableView aria-label="Example table with dynamic content" maxWidth="size-6000">
            <TableHeader columns={columns}>
              {(column) => (
                <Column key={column.uid} align={column.uid === 'date' ? 'end' : 'start'}>
                  {column.name}
                </Column>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item: any) => <Row>{(columnKey: any) => <Cell>{item[columnKey]}</Cell>}</Row>}
            </TableBody>
          </TableView>
        </div>
      </section>
    </Layout>
  );
}
