import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { ResourceCandidate } from "../core/requests/resources";
import { User } from "../core/requests/users";
import { useRecommendationOpts } from "../hooks/recommendationAPI";
import { useResources } from "../hooks/resourcesAPI";
import {
  resetForm,
  selectForm,
  updateDescription,
  updateRecommendation,
  updateRecommendationId,
  updateTitle,
  updateUrl,
} from "../redux/resourceFormSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";
import { isValidForm } from "../core/validate";

function CreateResource() {
  const disptach = useAppDispatch();
  const { isOpen, onClose, getButtonProps } = useDisclosure();
  const { mutation } = useResources();

  const buttonProps = getButtonProps();
  const resourceForm = useAppSelector(selectForm);
  const user = useAppSelector(selectCurrentUser) as User;

  const onSubmit = () => {
    const resource: ResourceCandidate = {
      owner_id: user.id,
      ...resourceForm,
      stage_id: 1,
    };
    if (!isValidForm(resource)) {
      alert("Invalid Form!");
    } else {
      mutation.mutate(resource);
      onClose();
      disptach(resetForm());
    }
  };

  return (
    <>
      <IconButton
        icon={<AddIcon />}
        position="fixed"
        bottom="1em"
        right="1em"
        size="lg"
        colorScheme="teal"
        fontSize="2em"
        {...buttonProps}
      ></IconButton>

      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader alignSelf="center">
            <Heading>Submit A New Resource</Heading>
          </ModalHeader>
          <Divider />
          <ModalBody>
            <CreateResourceForm />
          </ModalBody>
          <ModalFooter alignSelf="center">
            <Button fontSize="1.5em" colorScheme="cyan" onClick={onSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function CreateResourceForm() {
  const dispatch = useAppDispatch();
  const form = useAppSelector(selectForm);

  const { data } = useRecommendationOpts();

  return (
    <Flex wrap="wrap" justifyContent="center" gap="2em">
      <HStack width="100%" justifyContent="space-between">
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            onChange={(e) => dispatch(updateTitle(e.target.value))}
            value={form.title}
            type="text"
          />
        </FormControl>
        <FormControl>
          <FormLabel>URL</FormLabel>
          <Input
            onChange={(e) => dispatch(updateUrl(e.target.value))}
            value={form.url}
            type="url"
          />
        </FormControl>
      </HStack>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          onChange={(e) => dispatch(updateDescription(e.target.value))}
          value={form.description}
        />
      </FormControl>
      <HStack
        width="100%"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <FormControl>
          <FormLabel>Recommendation</FormLabel>
          <Select
            defaultValue="default"
            onChange={(e) =>
              dispatch(updateRecommendationId(Number(e.target.value)))
            }
          >
            <option value="default" disabled>
              -- Select Recommendation Reason --
            </option>
            {data?.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.description}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Recommendation Notes</FormLabel>
          <Textarea
            onChange={(e) => dispatch(updateRecommendation(e.target.value))}
            value={form.recommendation.description}
          />
        </FormControl>
      </HStack>
    </Flex>
  );
}

export default CreateResource;
