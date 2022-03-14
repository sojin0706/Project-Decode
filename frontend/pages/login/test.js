import { Form, Input, Radio } from "semantic-ui-react";

export default function index() {
  return (
    <>
      <Form>
        <Form.Group inline>
          <Form.Field>
            <label>닉네임</label>
            <Input placeholder="ID" />
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <label>나이</label>
            <Input placeholder="20" />
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            label="One"
            value="1"
            // checked={value === '1'}
            // onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Two"
            value="2"
            // checked={value === '2'}
            // onChange={this.handleChange}
          />
        </Form.Group>
      </Form>
    </>
  );
}
