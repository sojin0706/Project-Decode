import React, { useState, useEffect } from 'react'
import { Button, Image, Modal, Form, Input } from 'semantic-ui-react'
import userAxios from '../../lib/userAxios'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function UserInfoModal() {
  // 유저 정보 불러오기
  const [userInfo, setUserInfo]: any = useState([]);
  
  const getUserInfo = async() => {
    userAxios.get(`/auth/users`)
    .then((data) => {
      setUserInfo(data.data.body.user)
    })
    .catch((e) => {
      console.log(e)
    })
  }

  // 닉네임
  const [nick, setNick] = useState(userInfo.name);

  const handleChangeNick = (e: any) => {
    setNick(e.target.value);
  };

  // 연령대 선택
  const ages = [
    { key: 1, text: "10대 이하", value: 10 },
    { key: 2, text: "20대", value: 20 },
    { key: 3, text: "30대", value: 30 },
    { key: 4, text: "40대 이상", value: 40 },
  ];

  const [age, setAge] = useState(10);

  const handleChangeAges = (e: any) => {
    setAge(e.target.value);
  };

  // 지역 선택
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
  const [selectedSmallPlace, setselectedSmallPlace] = useState("");

  useEffect(() => {
    getUserInfo()
    axios
      .get(`http://j6c203.p.ssafy.io:8082/information/region?largeRegion=서울`)
      .then(({ data }) => {
        setSmallPlace(data.smallRegions);
        return data.smallRegions;
      })
      .then((data) => {
        setselectedSmallPlace(data[0]);
      });
  }, []);
  const handleChangeBig = (e: any) => {
    axios
      .get(
        `http://j6c203.p.ssafy.io:8082/information/region?largeRegion=${e.target.value}`
      )
      .then(({ data }) => {
        setSelectedBigPlace(e.target.value);
        setSmallPlace(data.smallRegions);
      });
  };

  const handleChangeSmall = (e: any) => {
    setselectedSmallPlace(e.target.value);
  };

  // 정보수정
  console.log(userInfo)
  const router = useRouter();
  const edit = (e: any) => {
    e.preventDefault();
    const body = {
      age: Number(age),
      id: userInfo.id,
      large_region: selectedBigPlace,
      nick_name: nick,
      small_region: selectedSmallPlace,
    }
    axios
      .put(
        `http://j6c203.p.ssafy.io:8081/user/recommend`, body
      )
      .then(({data}) => {
        getUserInfo()
      })
      .then(() => {
        setOpen(false)
      })
      .catch((err)=>{
        console.log(err)
      })
  };


  const [open, setOpen] = useState(false)
    return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>정보 수정</Button>}
    >
      <Modal.Header>회원 정보 수정</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='/images/wireframe/image-square.png' wrapped />
        <Modal.Description>
            <Form>
              <Form.Group inline>
                <Form.Field>
                  <label>닉네임</label>
                  <Input
                    placeholder="닉네임을 입력해주세요"
                    onChange={(e) => {
                      handleChangeNick(e);
                    }}
                  />
                  <p>닉확인용: {nick}</p>
                </Form.Field>
              </Form.Group>
              <br></br>

              <div>
                <p>연령대 {age}</p>
                <select
                  onChange={(e) => {
                    handleChangeAges(e);
                  }}
                >
                  {ages.map((a, i) => {
                    return (
                      <option value={a.value} key={i}>
                        {a.text}
                      </option>
                    );
                  })}
                </select>
              </div>
              <br></br>
              <div>
                <p>대분류 지역을 선택하세요</p>
                <select onChange={(e) => handleChangeBig(e)}>
                  {bigPlace.map((p, i) => {
                    return (
                      <option value={p.value} key={p.key}>
                        {p.text}
                      </option>
                    );
                  })}
                </select>
              </div>
              <br></br>

              <div>
                <p>소분류 지역을 선택하세요</p>
                <select onChange={(e) => handleChangeSmall(e)}>
                  {smallPlace.map((p, i) => {
                    return (
                      <option value={p} key={i}>
                        {p}
                      </option>
                    );
                  })}
                </select>
              </div>
              <br></br>
              

              <br></br>
              <Button primary onClick={edit}>작성</Button>
            </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={edit}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
    )
}
