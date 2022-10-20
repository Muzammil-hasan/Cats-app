import { Button, ButtonGroup, Content, Item, Picker, TextField } from '@adobe/react-spectrum';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { useZorm } from 'react-zorm';
import AddCatSchema from '../../schema/AddCatSchema';
import { ICat } from '../../types';

export default function AddCatForm({
  close,
  setter,
  list,
}: {
  close: () => void;
  setter: Dispatch<SetStateAction<ICat[] | undefined>>;
  list: ICat[];
}) {
  const zo = useZorm('addCat', AddCatSchema, {
    onValidSubmit(e) {
      e.preventDefault();
      setter([...list, { id: list.length + 1, ...e.data }]);
      close();
    },
  });

  return (
    <Fragment>
      <Content>
        <form ref={zo.ref} className="w-full">
          <TextField
            isRequired
            name={zo.fields.name()}
            necessityIndicator="icon"
            UNSAFE_style={{ width: '100%' }}
            label="What is your cat's name?"
            errorMessage={zo.errors.name()?.message}
            validationState={zo.errors.name()?.message ? 'invalid' : 'valid'}
          />
          <TextField
            isRequired
            type="number"
            name={zo.fields.age()}
            necessityIndicator="icon"
            UNSAFE_style={{ width: '100%' }}
            label="How old is your cat?"
            errorMessage={zo.errors.age()?.message}
            validationState={zo.errors.age()?.message ? 'invalid' : 'valid'}
          />
          <TextField
            isRequired
            name={zo.fields.color()}
            necessityIndicator="icon"
            UNSAFE_style={{ width: '100%' }}
            label="Color of your cat?"
            errorMessage={zo.errors.color()?.message}
            validationState={zo.errors.color()?.message ? 'invalid' : 'valid'}
          />
          <Picker
            isRequired
            name={zo.fields.nature()}
            necessityIndicator="icon"
            UNSAFE_style={{ width: '100%' }}
            label="How is your cat's nature?"
            errorMessage={zo.errors.nature()?.message}
            validationState={zo.errors.nature()?.message ? 'invalid' : 'valid'}
          >
            <Item key="calm">Calm</Item>
            <Item key="aggressive">Aggressive</Item>
            <Item key="depends">Depends on her/his mood</Item>
          </Picker>
          <ButtonGroup UNSAFE_className="justify-end flex" marginTop={'size-250'}>
            <Button variant="secondary" onPress={close}>
              Cancel
            </Button>
            <Button variant="cta" type="submit" UNSAFE_className="text-blue-700">
              Register
            </Button>
          </ButtonGroup>
        </form>
      </Content>
    </Fragment>
  );
}
