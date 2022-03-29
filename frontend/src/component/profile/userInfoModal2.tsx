import React, { useState, useEffect } from "react";
import { Button, Image, Modal, Form, Input } from "semantic-ui-react";
import userAxios from "../../lib/userAxios";
import axios from "axios";
import { useRouter } from "next/router";
import FormData from "form-data";

export default function UserInfoModal() {
  // 유저 정보 불러오기
  const [userInfo, setUserInfo]: any = useState([]);

  const getUserInfo = async () => {
    userAxios
      .get(`/auth/users`)
      .then((data) => {
        setUserInfo(data.data.body.user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 닉네임
  const [nick, setNick] = useState(userInfo.name);

  const handleChangeNick = (e: any) => {
    setNick(e.target.value);
  };

  // 성별
  const [gender, setGender] = useState(userInfo.gender);

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
    getUserInfo();
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

  const score = [
    { key: 1, text: "1점", value: 1 },
    { key: 2, text: "2점", value: 2 },
    { key: 3, text: "3점", value: 3 },
    { key: 4, text: "4점", value: 4 },
    { key: 5, text: "5점", value: 5 },
  ];

  const [scoreThrill, setThrill] = useState(1);
  const [scoreRomance, setRomance] = useState(1);
  const [scoreReasoning, setReasoning] = useState(1);
  const [scoreSffantasy, setSffantasy] = useState(1);
  const [scoreAdventure, setAdventure] = useState(1);
  const [scoreComedy, setComedy] = useState(1);
  const [scoreCrime, setCrime] = useState(1);
  const [scoreHorror, setHorror] = useState(1);
  const [scoreAdult, setAdult] = useState(1);
  const [scoreDrama, setDrama] = useState(1);

  const handleChangeThrill = (e: any) => {
    setThrill(e.target.value);
  };
  const handleChangeRomance = (e: any) => {
    setRomance(e.target.value);
  };
  const handleChangeReasoning = (e: any) => {
    setReasoning(e.target.value);
  };
  const handleChangeSffantasy = (e: any) => {
    setSffantasy(e.target.value);
  };
  const handleChangeAdventure = (e: any) => {
    setAdventure(e.target.value);
  };
  const handleChangeComedy = (e: any) => {
    setComedy(e.target.value);
  };
  const handleChangeCrime = (e: any) => {
    setCrime(e.target.value);
  };
  const handleChangeHorror = (e: any) => {
    setHorror(e.target.value);
  };
  const handleChangeAdult = (e: any) => {
    setAdult(e.target.value);
  };
  const handleChangeDrama = (e: any) => {
    setDrama(e.target.value);
  };

  const handleChangeSmall = (e: any) => {
    setselectedSmallPlace(e.target.value);
  };

  // 사진파일
  const [file, setFile]: any = useState(0);

  const handleFile = (e: any) => {
    setFile(e.target.files[0]);
  };

  const edit = (e: any) => {
    e.preventDefault();
    const profileRequest: any = {
      age: Number(age),

      gender: gender,
      id: userInfo.id,
      large_region: selectedBigPlace,
      nick_name: nick,
      small_region: selectedSmallPlace,
    };

    const preferenceRequest: any = {
      id: userInfo.id,
      adult: scoreAdult,
      adventure: scoreAdventure,
      comedy: scoreComedy,
      crime: scoreCrime,
      drama: scoreDrama,
      horror: scoreHorror,
      reasoning: scoreReasoning,
      romance: scoreRomance,
      sf_fantasy: scoreSffantasy,
      thril: scoreThrill,
    };

    const formData: any = new FormData();
    console.log(file);
    console.log(preferenceRequest);
    console.log(profileRequest);
    formData.append("file", file);
    // formData.append("preferenceRequest", preferenceRequest);
    // formData.append("profileRequest", profileRequest);
  
    formData.append(
      "preferenceRequest ",
      new Blob([JSON.stringify(preferenceRequest)], {
        type: "application/json",
      })
    );
    formData.append(
      "profileRequest  ",
      new Blob([JSON.stringify(profileRequest)], { type: "application/json" })
    );

    axios.put(`http://j6c203.p.ssafy.io:8081/user/recommend`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(() => {})
    .catch((err) => {console.log(err)})
  };

  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>정보 수정</Button>}
    >
      <Modal.Header>회원 정보 수정</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="medium" src="/images/test_chr.png" alt="" wrapped />
        <Modal.Description>
          <Form>
            <input type="file" name="file" onChange={(e) => handleFile(e)} />
            <br></br>
            <br></br>
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
            <div>
              <h2>장르 선호도를 선택해주세요</h2>

              <p>스릴러 {scoreThrill}</p>
              <select onChange={(e) => handleChangeThrill(e)}>
                {score.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>
                      {s.text}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <p>로맨스 {scoreRomance}</p>
              <select onChange={(e) => handleChangeRomance(e)}>
                {score.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>
                      {s.text}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <p>추리 {scoreReasoning}</p>
              <select onChange={(e) => handleChangeReasoning(e)}>
                {score.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>
                      {s.text}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <p>SF/판타지 {scoreSffantasy}</p>
              <select onChange={(e) => handleChangeSffantasy(e)}>
                {score.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>
                      {s.text}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <p>모험/액션 {scoreAdventure}</p>
              <select onChange={(e) => handleChangeAdventure(e)}>
                {score.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>
                      {s.text}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <p>코미디 {scoreComedy}</p>
              <select onChange={(e) => handleChangeComedy(e)}>
                {score.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>
                      {s.text}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <p>범죄 {scoreCrime}</p>
              <select onChange={(e) => handleChangeCrime(e)}>
                {score.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>
                      {s.text}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <p>공포 {scoreHorror}</p>
              <select onChange={(e) => handleChangeHorror(e)}>
                {score.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>
                      {s.text}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <p>19금 {scoreAdult}</p>
              <select onChange={(e) => handleChangeAdult(e)}>
                {score.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>
                      {s.text}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <p>감성/드라마 {scoreDrama}</p>
              <select onChange={(e) => handleChangeDrama(e)}>
                {score.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>
                      {s.text}
                    </option>
                  );
                })}
              </select>
            </div>

            <br></br>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={edit} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
