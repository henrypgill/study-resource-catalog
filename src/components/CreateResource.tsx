import { AddIcon } from "@chakra-ui/icons";
import {
  Flex as Box,
  Button,
  Divider,
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
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { ResourceCandidate, Tag } from "../core/requests/resources";
import { User } from "../core/requests/users";
import { isValidForm } from "../core/validate";
import { useRecommendationOpts } from "../hooks/recommendationAPI";
import { useResources, useTags } from "../hooks/resourcesAPI";
import {
  addFormTag,
  removeFormTag,
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
import TagCard from "./TagCard";

function CreateResource() {
  const dispatch = useAppDispatch();
  const { isOpen, onClose, getButtonProps } = useDisclosure();
  const { mutation } = useResources();

  const buttonProps = getButtonProps();
  const resourceForm = useAppSelector(selectForm);
  const user = useAppSelector(selectCurrentUser) as User;

  const onSubmit = () => {
    const resource: ResourceCandidate = {
      ...resourceForm,
      owner_id: user.id,
      stage_id: 1,
    };
    if (!isValidForm(resource)) {
      alert("Invalid Form!");
    } else {
      mutation.mutate(resource);
      onClose();
      dispatch(resetForm());
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
      />

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
          <Divider padding="1em" />
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

  const onAddTag = (tag: string) => {
    dispatch(addFormTag(tag));
  };

  return (
    <Box wrap="wrap" justifyContent="center" gap="2em">
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
            value={form.recommendation_content}
          />
        </FormControl>
      </HStack>
      <HStack
        width="100%"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <FormControl>
          <FormLabel>Add Tags</FormLabel>
          <AddTag onClick={onAddTag} />
        </FormControl>
        <FormControl>
          <FormLabel>Selected Tags</FormLabel>
          <Box alignSelf="flex-start" wrap="wrap" gap={2}>
            {form.tag_names.map((tag, index) => (
              <TagCard
                as={Button}
                key={index}
                onClick={() => dispatch(removeFormTag(tag))}
              >
                {tag}
              </TagCard>
            ))}
          </Box>
        </FormControl>
      </HStack>
    </Box>
  );
}

interface AddTagProps {
  onClick: (tag: string) => void;
}

function AddTag({ onClick }: AddTagProps) {
  const [input, setInput] = useState("");
  const { data } = useTags();
  const { tag_names: formTags } = useAppSelector(selectForm);

  const tags = useMemo(
    () =>
      (data as Tag[])
        .map((tag) => tag.name.toLowerCase())
        .filter((tag) => tag.includes(input.toLowerCase()))
        .filter((tag) => !formTags.includes(tag)),
    [input, data, formTags]
  );

  return (
    <VStack>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value.toLowerCase())}
      />
      <Box
        height="3em"
        overflowY="scroll"
        alignSelf="flex-start"
        wrap="wrap"
        gap={2}
      >
        {input && !tags.includes(input) && (
          <TagCard as={Button} onClick={() => onClick(input)} bg="twitter.900">
            Create '{input}'
          </TagCard>
        )}
        {tags.map((tag, index) => (
          <TagCard as={Button} key={index} onClick={() => onClick(tag)}>
            {tag}
          </TagCard>
        ))}
      </Box>
    </VStack>
  );
}

export default CreateResource;
