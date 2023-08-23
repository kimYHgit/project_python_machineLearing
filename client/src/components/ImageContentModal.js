import React from "react";
import { Button, Image, Modal } from "semantic-ui-react";

function ModalExampleContentImage() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>사진 업로드</Button>}
    >
      <Modal.Header>Upload image</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/wireframe/image-square.png" //props로 사진 전달
          wrapped
        />
        <Modal.Description>
          <p>사진을 업로드 하시겠습니까?????</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleContentImage;
