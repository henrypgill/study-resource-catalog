import { Button, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useResourceComments } from "../hooks/resourcesAPI";
import { useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";

function CreateComment() {
  const { id: resourceId } = useParams<{ id: string }>();
  const user = useAppSelector(selectCurrentUser);
  const [content, setContent] = useState("");

  const { mutation } = useResourceComments(resourceId);

  const handleSend = () => {
    if (content === "") return;
    if (!user) return;

    mutation.mutate({
      resource_id: parseInt(resourceId),
      user_id: user.id,
      content,
    });

    setContent("");
  };

  return (
    <VStack paddingTop="1em" width="100%" gap="1em">
      <Textarea
        isDisabled={!user}
        resize="none"
        value={content}
        onChange={(e) => setContent(e.target.value.slice(0, 255))}
      />
      <Button width="100%" isDisabled={!user} onClick={handleSend}>
        Send
      </Button>
    </VStack>
  );
}

export default CreateComment;
