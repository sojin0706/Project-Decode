import {
    Form,
    Button,
    Grid,
    Input,
    TextArea,
  } from "semantic-ui-react";
import React, {Component} from 'react'
import styles from "../../styles/noticecreate.module.css";

export default function noticecreate() {

return (
    <>
    <div className={styles.noticecreate}>
    <header><h1>Q&A작성</h1></header>
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
        <Grid centered columns={6}>
            <Grid.Column>
                <Button color='blue'>글작성 </Button>
            </Grid.Column>
        
        </Grid>
        </div>
        
    </Form>
    </div>
    </>
    );
    }