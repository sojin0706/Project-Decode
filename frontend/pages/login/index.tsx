import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Input, Radio, Menu, Grid, Button } from "semantic-ui-react";

// components
import IsLogin from "../../src/lib/customLogin";

export default function Index() {
  const isLogin = IsLogin;
  const [userInfo, setUserInfo]: any = useState([]);

  useEffect(() => {
    if (isLogin()) {
      var Token: any = null;
      if (typeof window !== "undefined") Token = localStorage.getItem("token");

      axios
        .get("http://j6c203.p.ssafy.io:8081/auth/users", {
          headers: { Authorization: `Bearer ${Token}` },
        })
        .then(({ data }) => {
          console.log("데이터");
          console.log(data.body.user);
          setUserInfo(data.body.user);
        })
        .catch((e: any) => {
          console.log("에러");
          console.log(e);
        });
    }
  }, []);

  const bigPlace = [
    { key: 1, text: "서울", value: "서울" },
    { key: 2, text: "경기/인천", value: "경기/인천" },
    { key: 3, text: "충청", value: "충청" },
    { key: 4, text: "강원", value: "강원" },
    { key: 5, text: "경상", value: "경상" },
    { key: 6, text: "전라", value: "전라" },
    { key: 7, text: "제주", value: "제주" },
  ];


  const [selectedBigPlace, setSelectedBigPlace] = useState("서울");

  const [smallPlace, setSmallPlace] = useState([]);
  const [selectedSmallPlace, setselectedSmallPlace] = useState('');

  useEffect(()=> {
    axios
    .get(`http://j6c203.p.ssafy.io:8082/information/region?largeRegion=서울`)
    .then(({ data }) => {
      setSmallPlace(data.smallRegions)
      return data.smallRegions
    })
    .then((data)=>{
      setselectedSmallPlace(data[0])
    })
  },[])

  const genre = [
    { key: "thrill", text: "스릴러", value: 0 },
    { key: "romance", text: "로맨스", value: 0 },
    { key: "reasoning", text: "스릴러", value: 0 },
    { key: "sffantasy", text: "SF/판타지", value: 0 },
    { key: "adventure", text: "모험/액션", value: 0 },
    { key: "comedy", text: "코미디", value: 0 },
    { key: "crime", text: "범죄", value: 0 },
    { key: "horror", text: "공포", value: 0 },
    { key: "adult", text: "19금", value: 0 },
    { key: "drama", text: "감성/드라마", value: 0 },
  ];

  const handleChangeBig = (e: any) => {
    axios
      .get(`http://j6c203.p.ssafy.io:8082/information/region?largeRegion=${e.target.value}`)
      .then(({ data }) => {
        setSmallPlace(data.smallRegions)
      })
  };

  const handleChangeSmall = (e:any) => {
    setselectedSmallPlace(e.target.value)
  }
  return (
    <>
      <h1>{selectedBigPlace}</h1>
      <h1>{selectedSmallPlace}</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column width={4}>
            <Form>
              <Form.Group inline>
                <Form.Field>
                  <label>닉네임</label>
                  <Input placeholder={userInfo.name} />
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
                <p>대분류 지역을 선택하세요</p>
                <select onChange={(e) => handleChangeBig(e)}>
                  { bigPlace.map((p, i) => {
                    return (
                      <option value={p.value} key={p.key}>{p.text}</option>
                    )
                  })}
                </select>
              </div>

              <div>
                <p>소분류 지역을 선택하세요</p>
                <select onChange={(e) => handleChangeSmall(e)}>
                {/* <select onChange={(e) => handleChangeBig(e)}> */}
                  { smallPlace.map((p, i) => {
                    return (
                      <option value={p} key={i}>{p}</option>
                    )
                  })}
                </select>
              </div>

              <br></br>

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
