import { Flex, Heading } from '@adobe/react-spectrum';
import { useLocalStorage } from 'react-use';
import AddCat from './components/AddCat';
import CatsList from './components/CatsList';
import Layout from './components/layout';
import { ICat } from './types';

export default function App() {
  const [cats, setCats] = useLocalStorage<ICat[]>('cats', [] as ICat[]);

  return (
    <Layout>
      <section className="flex items-center justify-center mx-28 mt-10">
        <Flex
          direction={'column'}
          justifyContent="space-between"
          UNSAFE_className="px-10 py-6 w-full h-full rounded-lg shadow-lg"
        >
          <Flex justifyContent={'space-between'}>
            <Heading level={6} UNSAFE_className="font-bold text-2xl">
              List of Cats
            </Heading>
            <AddCat setter={setCats} list={cats || []} />
          </Flex>
          <CatsList list={cats || []} />
        </Flex>
      </section>
    </Layout>
  );
}
