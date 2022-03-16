import { Grid, Image } from "semantic-ui-react";
import Graph from "../../src/component/profile/graph"

export default function index() {
  
  return (
    <>
      <Grid>
        <Grid.Row>
          {/* 여백 */}
          <Grid.Column width={2}>여백 2/16</Grid.Column>

          {/* 본문 */}
          <Grid.Column width={12}>
            {/* 프로필사진, 그래프, 최근클리어 */}
            <Grid centered columns={4}>
              {/* 프로필사진 */}
              <Grid.Column width={6}>프로필사진 1줄 6/16</Grid.Column>

              {/* 그래프 */}
              <Grid.Column width={6}>
                그래프 1줄 6/16
                <Graph></Graph>
              </Grid.Column>

              {/* 최근클리어 */}
              <Grid.Column width={4}>최근클리어 1줄4/16</Grid.Column>
            </Grid>
            {/* 프로필정보, 작성글 리스트 */}
            <Grid centered columns={4}>
              {/* 프로필정보 */}
              <Grid.Column width={6}>프로필정보 2줄 6/16</Grid.Column>

              {/* 작성글 리스트 */}
              <Grid.Column width={10}>작성글리스트 2줄 10/16</Grid.Column>
            </Grid>

            {/* 클리어한 테마 리스트들 */}
            <Grid centered columns={4}>
              <Grid.Column>
                <Image src="https://yologuys.com/Escape_img/theme/1753.jpg;"></Image>
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
          </Grid.Column>

          {/* 여백 */}
          <Grid.Column width={2}>여백 2/16</Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
