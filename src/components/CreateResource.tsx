import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
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
  selectForm,
  updateDescription,
  updateRecommendation,
  updateRecommendationId,
  updateTitle,
  updateUrl,
} from "../redux/resourceFormSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";

function CreateResource() {
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
    mutation.mutate(resource);
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

      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Submit A New Resource</ModalHeader>
          <ModalBody>
            <CreateResourceForm />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="cyan" onClick={onSubmit}>
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
    <>
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
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          onChange={(e) => dispatch(updateDescription(e.target.value))}
          value={form.description}
        />
      </FormControl>
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
    </>
  );
}

export default CreateResource;
