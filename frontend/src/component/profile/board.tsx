import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: '리뷰',
    render: () => <Tab.Pane attached={false}>내가 작성한 리뷰</Tab.Pane>,
  },
  {
    menuItem: '유저 게시판',
    render: () => <Tab.Pane attached={false}>내가 작성한 유저 게시판 글</Tab.Pane>,
  },
  {
    menuItem: '댓글',
    render: () => <Tab.Pane attached={false}>내가 작성한 댓글</Tab.Pane>,
  },
  {
    menuItem: 'Q&A',
    render: () => <Tab.Pane attached={false}>내가 작성한 Q&A 글</Tab.Pane>,
  },
]

const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabExampleSecondaryPointing