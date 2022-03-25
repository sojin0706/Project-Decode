import { Grid, Image } from "semantic-ui-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ClearList(props:any) {
  const clearLst:any = []
  const [myClearLst, setMyClearLst] = useState([])
  useEffect(() => {
    console.log(props.userInfo)
    axios.get(`http://j6c203.p.ssafy.io:8082/review/myreview/${props.userInfo.id}`)
    .then((data) => {
      console.log(data.data.review.content)
      data.data.review.content.map((d:any, i:number) => {
        clearLst.push(d.themeId)
      })
    })
    .then((data) => {
      setMyClearLst(clearLst)
    })
    .then((data) => {
      console.log(clearLst)
      console.log(myClearLst)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  return(
    <>
      <Grid columns={4}>
        <Grid.Column>
          <Image src="https://next-edition.s3.amazonaws.com/theme/title_image_url/MEMORY%20-%20Episode%201/theme__%E1%84%86%E1%85%A6%E1%84%86%E1%85%A9%E1%84%85%E1%85%B5-%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5-%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC_%E1%84%8C%E1%85%A5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%85%E1%85%A3%E1%86%BC__MEMORY%20-%20Episode%201.jpg"></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src="https://next-edition.s3.amazonaws.com/theme/title_image_url/%EC%99%84%EC%A0%84%ED%95%9C%EC%82%AC%EB%9E%91(%EB%A6%AC%EB%89%B4%EC%96%BC)/theme__%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%92%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A1%E1%84%85%E1%85%A1%E1%86%BC-%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%EC%99%84%EC%A0%84%ED%95%9C%EC%82%AC%EB%9E%91(%EB%A6%AC%EB%89%B4%EC%96%BC).jpg"></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src="https://next-edition.s3.amazonaws.com/theme/title_image_url/%ED%9D%90%EB%A6%B0%EB%82%A0/theme__%E1%84%92%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%82%E1%85%A1%E1%86%AF_%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC_%ED%9D%90%EB%A6%B0%EB%82%A0.jpg"></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src="https://yologuys.com/Escape_img/theme/1753.jpg;"></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src="https://yologuys.com/Escape_img/theme/1753.jpg;"></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src="https://yologuys.com/Escape_img/theme/1753.jpg;"></Image>
        </Grid.Column>

      </Grid>
    </>
  )
}