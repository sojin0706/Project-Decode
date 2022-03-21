import { Grid, Pagination } from 'semantic-ui-react'
import Infoboard from '../../src/component/board/infoboard';
import Genre from '../../src/component/filter/genre';
import Region from '../../src/component/filter/region';
import Stick from '../../src/component/filter/stick';

export default function Info() {
    return (
        <>
            <Grid stackable centered>
                <Grid.Row>
                    <Grid.Column width={2} />
                    <Grid.Column width={12}>
                        <Region />
                        <Genre />     
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} />
                    <Grid.Column width={12}>
                        <Stick />  
                        <Infoboard />  
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid.Row>
                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={2}
                    totalPages={10}
                />
            </Grid>
        </>
    );
}