import { Statistic } from "semantic-ui-react"

export default function data() {
  return (
    <>
      <Statistic.Group>
        <Statistic color='yellow'>
          <Statistic.Value>1700</Statistic.Value>
          <Statistic.Label>테마 데이터</Statistic.Label>
        </Statistic>
        <Statistic color='orange'>
          <Statistic.Value>350</Statistic.Value>
          <Statistic.Label>지점 데이터</Statistic.Label>
        </Statistic>
        <Statistic color='olive'>
          <Statistic.Value>10000</Statistic.Value>
          <Statistic.Label>유저 데이터</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </>
  )
}