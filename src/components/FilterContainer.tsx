import {
  Button,
  Card,
  Divider,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { reset, selectSearch, updateSearch } from "../redux/filterSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import TagList from "./TagList";

function FilterContainer() {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearch);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearch(e.target.value));
  };

  const handleOnReset = () => dispatch(reset());

  return (
    <VStack
      justifyContent="space-between"
      as={Card}
      margin="2em"
      padding="2em"
      height="85vh"
      width="90%"
    >
      <VStack>
        <Heading size="lg">Search</Heading>
        <Input onChange={handleOnChange} value={searchValue} />
        <Divider paddingTop={3} paddingBottom={3} />
        <TagList />
      </VStack>
      <VStack width="100%" gap={3}>
        <Divider />
        <Button onClick={handleOnReset} colorScheme="twitter">
          RESET FILTERS
        </Button>
      </VStack>
    </VStack>
  );
}

export default FilterContainer;
