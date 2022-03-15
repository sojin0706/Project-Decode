import type { NextPage } from 'next'
import { Grid, GridColumn, Image } from "semantic-ui-react"

const Home: NextPage = () => {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <Grid centered columns={4}>
              <Grid.Column>
                <Image src = "https://yologuys.com/Escape_img/theme/1753.jpg;"></Image> 
              </Grid.Column>
              <Grid.Column>
                <Image src = "https://yologuys.com/Escape_img/theme/1753.jpg;"></Image> 
              </Grid.Column>
              <Grid.Column>
                <Image src = "https://yologuys.com/Escape_img/theme/1753.jpg;"></Image> 
              </Grid.Column>
              <Grid.Column>
                <Image src = "https://yologuys.com/Escape_img/theme/1753.jpg;"></Image> 
              </Grid.Column>
            </Grid>
            <Grid centered columns={5}>
              <Grid.Column>
                <h1>테마 데이터 수</h1>
                <h1>1000</h1>
              </Grid.Column>
              <Grid.Column>
                <h1>지점 데이터 수</h1>
                <h1>1000</h1>
              </Grid.Column>
              <Grid.Column>
                <h1>유저 데이터 수</h1>
                <h1>1000</h1>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Home
