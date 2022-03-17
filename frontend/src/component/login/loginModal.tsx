import { Button, Header, Image, Modal } from "semantic-ui-react";

export default function LoginModal() {
  return (
    <>
      <Modal size="tiny" trigger={<Button>로그인</Button>}>
        <Modal.Header>
          <div>Social Login</div>
        </Modal.Header>
        <br />
        <Modal.Content image className="btn">
          <Modal.Description />
          <Modal.Description>
            <Image
              src="/images/login_naver.png"
              width="300px"
              href=""
              alt="네이버로그인"
              className="btn"
            />
            <br />
            <Image
              src="/images/login_kakao.png"
              width="300px"
              href=""
              alt="카카오로그인"
              className="btn"
            />
            <br />
            <Image
              src="/images/login_google.png"
              width="300px"
              href=""
              alt="구글로그인"
              className="btn"
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
      <style jsx>
        {`
          .btn {
            align-content: center;
          }
        `}
      </style>
    </>
  );
}
