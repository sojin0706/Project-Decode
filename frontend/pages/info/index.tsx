import { Grid } from 'semantic-ui-react'
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
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} />
                    <Grid.Column width={12}> 
                        <Infoboard />  
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid.Row>
            </Grid>
        </>
    );
}