import { Button } from '@adobe/react-spectrum';
import { useCatContext } from '../contexts/CatContext';
import { ICat } from '../types';

type Props = {
  isDisabled: boolean;
  selected: any;
};

export default function DeleteCat({ isDisabled, selected }: Props) {
  const [cats, setCats] = useCatContext();

  const deleteCat = () => {
    const selectedId = selected.anchorKey;
    const filteredCats = cats.filter((cat: ICat) => cat.id !== selectedId);
    setCats(filteredCats);
  };

  return (
    <Button onPress={deleteCat} variant="negative" UNSAFE_className="!px-4" isDisabled={isDisabled}>
      Delete
    </Button>
  );
}
