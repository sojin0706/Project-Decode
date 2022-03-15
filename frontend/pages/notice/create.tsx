import {
    Form,
    Button,
    Grid,
    Input,
    TextArea,
  } from "semantic-ui-react";
import React, {Component} from 'react'
import styles from "../../styles/notice/create.module.css";

export default function noticecreate() {

return (
    <>
    <div className={styles.noticecreate}>    
    <Grid>
    <Grid.Column width={4}></Grid.Column>
    <Grid.Column width={8}>
    <div>    
        <Grid>
            <Grid.Column>
            <div className={styles.board_title}>
                <strong>Q&A작성</strong>
            </div> 
            </Grid.Column>
        </Grid>
    </div>
    <Form className={styles.createform}>
        <Form.Group widths='equal' inline>
            <Form.Field>
                <label>제목</label>
                <Input placeholder='제목' fluid/>
            </Form.Field>
            <Form.Checkbox label='비밀글' />
            
        </Form.Group>
        <Form.Group widths='equal' inline>
            <Form.Field>
                <label>내용</label>
                <TextArea placeholder='내용을 입력해주세요' style={{ minHeight: 250 }}/>
            </Form.Field>
        </Form.Group>   
               
        <div className={styles.buttonalign}>
        <Grid centered columns={4}>
            <Grid.Column>
                <Button color='blue'>글작성 </Button>
            </Grid.Column>
        
        </Grid>
        </div>
        
    </Form>


    </Grid.Column>
    <Grid.Column width={2}></Grid.Column>
    </Grid>

    </div>
    </>
    );
    }