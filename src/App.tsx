import { Flex, Heading } from '@adobe/react-spectrum';
import AddCat from './components/AddCat';
import CatsList from './components/CatsList';
import Layout from './components/layout';
import { CatContextProvider } from './contexts/CatContext';

export default function App() {
  return (
    <Layout>
      <section className="flex items-center justify-center mx-28 mt-10">
        <Flex
          direction={'column'}
          justifyContent="space-between"
          UNSAFE_className="px-10 py-6 w-full h-full rounded-lg shadow-lg"
        >
          <CatContextProvider>
            <Flex justifyContent={'space-between'}>
              <Heading level={6} UNSAFE_className="font-bold text-2xl">
                List of Cats
              </Heading>
              <AddCat />
            </Flex>
            <CatsList />
          </CatContextProvider>
        </Flex>
      </section>
    </Layout>
  );
}
