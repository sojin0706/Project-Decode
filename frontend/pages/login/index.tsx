import { Form, Input, Radio, Dropdown, Menu, Grid, Button } from "semantic-ui-react";

export default function index() {
  const place = [
    { key: 1, text: "서울", value: 1 },
    { key: 2, text: "대전", value: 2 },
    { key: 3, text: "대구", value: 3 },
  ];

  const genre = [
    { key: 1, text: "공포", value: 1 },
    { key: 2, text: "코미디", value: 2 },
    { key: 3, text: "스릴러", value: 3 },
  ];

  return (
    <>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column width={4}>
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
                <label>성별</label>
                <Form.Field
                  control={Radio}
                  label="남"
                  value="1"
                  // checked={value === '1'}
                  // onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label="여"
                  value="2"
                  // checked={value === '2'}
                  // onChange={this.handleChange}
                />
              </Form.Group>
              <div>
                <Menu compact>
                  <Dropdown text="지역" options={place} simple item />
                </Menu>
              </div>
              <br></br>
              <div>
                <Menu compact>
                  <Dropdown text="테마" options={genre} simple item />
                </Menu>
              </div>
              <br></br>
              <Button primary>작성</Button>
            </Form>
          </Grid.Column>
          <Grid.Column width={6}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
